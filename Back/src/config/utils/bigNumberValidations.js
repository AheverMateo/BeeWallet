// BigNumber validations
import BigNumber from "bignumber.js";

export const validateBigNumber = (value) => {
  return new BigNumber(value).isFinite();
};

export const validateBigNumberNegative = (value) => {
  return new BigNumber(value).isNegative();
};

export const validateBigNumberZero = (value) => {
  return new BigNumber(value).isZero();
};
