import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../redux/index";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreator, dispatch);
};
