import MailingService from "../Mailing/service.js";

class UsersService {
   static generateVerificationCode() {
      return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
   }

   static storeVerificationCodeInSession(req, code) {
      req.session.verificationCode = code;
      req.session.codeExpiry = Date.now() + 600000; // Code valid for 10 minutes
   }

   static checkVerificationCodeInSession(req, providedCode) {
      if (
         req.session.verificationCode === providedCode &&
         req.session.codeExpiry > Date.now()
      ) {
         return true; // Code is correct and not expired
      }
      return false; // Code is incorrect or expired
   }

   static async initiateVerificationProcess(req, email) {
      const code = UsersService.generateVerificationCode();
      UsersService.storeVerificationCodeInSession(req, code);
      await MailingService.sendEmailCodeVerification(email, code);
   }
}

export default UsersService;
