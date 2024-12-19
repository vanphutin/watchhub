export const handleErrorServer = (res, error) => {
  return res.status(500).json({
    status: "error",
    message: error.message || "Internal server error",
    name: error.name || "Error",
  });
};
