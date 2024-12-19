import { loginUser } from "../../services/apiAuth";
import { ActionType } from "../actions/action-types";
import { Action } from "../actions/index";
import { Dispatch } from "react";

export const userLogin = (username: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.USER_LOGIN,
    });
    try {
      const res = await loginUser({ username, password });
      dispatch({
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.USER_LOGIN_ERROR,
        payload: error.message,
      });
    }
  };
};
