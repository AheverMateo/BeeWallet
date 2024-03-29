export const resSuccess = (res, status, message, payload = {}) => {
   return res.status(status).json({ success: true, message: message, payload: payload });
};

export const resFail = (res, status, message, payload = {}) => {
   return res.status(status).json({ success: false, message: message, payload: payload });
};
