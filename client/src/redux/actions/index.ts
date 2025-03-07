import { User } from "../../interfaces/User";
import { ActionType } from "./action-types";

interface UserLoginAction {
  type: ActionType.USER_LOGIN;
}
interface UserLoginSuccessAction {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: User;
}

interface UserLoginErrorAction {
  type: ActionType.USER_LOGIN_ERROR;
  payload: string;
}

interface UserLogOutAction {
  type: ActionType.USER_LOGOUT;
}

export type Action =
  | UserLoginAction
  | UserLoginSuccessAction
  | UserLoginErrorAction
  | UserLogOutAction;
