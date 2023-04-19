import responses from "../responses";

const payment = {
  "/payments": {
    get: {
      tags: ["Payment"],
      summary: "Get all payments",
      description: "Get all payments",
      operationId: "getPayments",
      produces: ["application/json"],
      responses,
      security: [
          {
            JWT: []
          }
      ],
    },
  },
  "/payments/create-checkout-session": {
    post: {
        tags: ["Payment"],
        summary: "Initiate payment session",
        parameters: [
            {
              in: "body",
              name: "body",
              schema: {
                $ref: "#/definitions/PaymentPayload",
              },
            },
          ],
        description: "Initiate payment session",
        operationId: "createPaymentSession",
        produces: ["application/json"],
        responses,
        security: [
            {
              JWT: []
            }
        ],
      },
  },
  "/payments/confirm-payment/{paymentId}": {
    put: {
      tags: ["Payment"],
      summary: "Confirm payment",
      description: "Confirm payment",
      operationId: "confirmPayment",
      produces: ["application/json"],
      responses,
      parameters: [
        {
          in: "path",
          name: "paymentId",
          required: true,
          type: "string",
        },
      ],
    },
  },
  "/payments/requests/{id}": {
    get: {
      tags: ["Payment"],
      summary: "Get payments by requestId",
      description: "Get payments by requestId",
      operationId: "getPaymentsByRequestId",
      produces: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          type: "string",
        },
      ],
      responses,
      security: [
          {
            JWT: []
          }
      ],
    },
  },
  "/payments/requests/{id}/status/{status}": {
    get: {
      tags: ["Payment"],
      summary: "Get payments by requestId and status",
      description: "Get payments by requestId and status",
      operationId: "getPaymentsByRequestIdAndStatus",
      produces: ["application/json"],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          type: "string",
        },
        {
            in: "path",
            name: "status",
            required: true,
            type: "string",
          },
      ],
      responses,
      security: [
          {
            JWT: []
          }
      ],
    },
  },
};

export default payment;
