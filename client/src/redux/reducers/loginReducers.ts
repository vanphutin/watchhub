import { ActionType } from "../actions/action-types";
import { Action } from "../actions";
import { User } from "../../interfaces/User";

interface LoginState {
  loading: boolean;
  error: string | null;
  data: User | null;
}

const initialState: LoginState = {
  loading: false,
  error: null,
  data: null,
};

const loginReducers = (
  state: LoginState = initialState,
  action: Action
): LoginState => {
  switch (action.type) {
    case ActionType.USER_LOGIN:
      return { ...state, loading: true, error: null };
    case ActionType.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ActionType.USER_LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loginReducers;
