const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import Request from "../database/models/request";
import Payment from "../database/models/payment";

export async function createPayment(req, res) {
  try {
    const { product } = req.body;

    const payment = new Payment({
      amount: product.price,
      currency: "usd",
      requestId: product.requestId,
      stripePaymentId: "",
    });
    await payment.save();

    const session = await Stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.roomName,
            },
            unit_amount: product.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.WEB_URL}/success?payment_status=success?paymentId=${payment.id}`,
      cancel_url: `${process.env.WEB_URL}/cancel`,
      
    });

    payment.stripePaymentId = session.id;
    await payment.save();

    res.json({
      sessionId: session.id,
      paymentId: payment.id,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
}


export async function confirmPayment(req, res) {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    payment.status = 'SUCCESS';
    await payment.save();

    res.json({ message: 'Payment confirmed', payment });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error,
    });
  }
}

export async function getPayments(req, res) {
  try {
    const payments = await Payment.findAll();
    res.json({
      payments,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
}

export async function getPaymentsForRequest(req, res) {
  try {
    const requestId = req.params.id;

    const payments = await Payment.findAll({
      where: {
        requestId
      },
    });

    res.json({
      payments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
}


export async function getPaymentsForRequestAndStatus(req, res) {
  try {
    const requestId = req.params.id;
    const status = req.params.status;

    const payments = await Payment.findAll({
      where: {
        requestId,
        status
      },
    });

    res.json({
      payments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
}
