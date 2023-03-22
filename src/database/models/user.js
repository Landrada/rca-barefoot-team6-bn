'use strict'
import { Model, DataTypes } from 'sequelize';
import { hash, compare } from 'bcryptjs';
import { sequelize } from '../config/db';
import { config } from 'dotenv';
import { registerSchema } from 'swaggiffy';

config();
class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate (models) {
    // define association here
  }
};
const userObject = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  emailVerificationToken: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: ''
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  isLoggedIn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }
}

User.init(
  userObject
  , {
    sequelize,
    modelName: 'Users'
  });
registerSchema('Users', userObject, { orm: 'sequelize' }); // for sequelize model

User.beforeCreate(async (user, options) => {
  const hashedPassword = await hash(user.password, 10)
  user.password = hashedPassword;
})

User.prototype.isValidPassword = async function (password) {
  const user = this;
  const compareResult = await compare(password, user.password);
  return compareResult;
};

sequelize.sync();

// export the model
export default User;
