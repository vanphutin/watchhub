import { combineReducers } from "redux";
import loginReducers from "./loginReducers";

const reducer = combineReducers({
  login: loginReducers,
});
export default reducer;
export type RootState = ReturnType<typeof reducer>;
