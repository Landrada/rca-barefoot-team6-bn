"use strict";
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import dotenv from "dotenv";
import User from "./user";
import Request from "./request";
dotenv.config();

class Payment extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The
   *  `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Payment.belongsTo(Request, { foreignKey: "requestId" });
  }
}

const paymentObj = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  requestId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "requestId",
    references: {
      model: Request,
      key: "id",
    },
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
    },
  stripePaymentId: {
    type: DataTypes.STRING,
    allowNull: true,
    },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("PENDING", "SUCCESS", "FAILED"),
    defaultValue: "PENDING",
  },
};

Payment.init(paymentObj, {
  sequelize,
  modelName: "Payments",
});
//

sequelize.sync();
// export the model
export default Payment;
