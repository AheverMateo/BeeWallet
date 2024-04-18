import { resSuccess } from "../../config/utils/resSuccess.js";
import UsersService from "../services/usersService.js";

export const getUsers = async (req, res) => {
   const service = await UsersService.getUsers();
   return resSuccess(res, service);
};
export const getUser = async (req, res) => {
   const { id } = req.params;
   const service = await UsersService.getUser(id);
   return resSuccess(res, service);
};
export const deleteUser = async (req, res) => {
   const { id } = req.params;
   const service = await UsersService.deleteUser(id);
   return resSuccess(res, service);
};

export const updateUser = async (req, res) => {
   const { id } = req.params;
   const updatedProperties = req.body;
   const service = await UsersService.updateUser(id, updatedProperties);
   return resSuccess(res, service);
};

export const blockUser = async (req, res) => {
   const { id } = req.params;
   const service = await UsersService.blockUser(id);
   return resSuccess(res, service);
};

export const unblockUser = async (req, res) => {
   const { id } = req.params;
   const service = await UsersService.unblockUser(id);
   return resSuccess(res, service);
};
