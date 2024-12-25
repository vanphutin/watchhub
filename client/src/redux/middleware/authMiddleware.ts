import { Middleware } from "redux";

const authMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  const token = state.login?.data?.accessToken;
  if (token && isTokenExpired(token)) {
    console.log("token", isTokenExpired(token));
    console.warn("Token expired, dispatching logout action...");
    store.dispatch({ type: "USER_LOGOUT" });
  }

  return result;
};

const isTokenExpired = (token: string): boolean => {
  try {
    // Tách phần Payload từ token (phần thứ 2)
    const payload = token.split(".")[1];

    // Giải mã Base64 URL
    const decodedPayload = JSON.parse(
      atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
    );

    // Kiểm tra thời gian hết hạn (exp)
    const currentTime = Math.floor(Date.now() / 1000); // Thời gian hiện tại tính bằng giây
    return decodedPayload.exp < currentTime;
  } catch (error) {
    console.error("Invalid token", error);
    return true; // Nếu giải mã thất bại, coi như token đã hết hạn
  }
};

export default authMiddleware;
