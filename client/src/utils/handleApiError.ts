import { AxiosError } from "axios";
import { toast } from "react-toastify"; // Import toast từ react-toastify

export const handleApiError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          // Hiển thị thông báo lỗi với toast
          toast.error(
            error.response.data?.message ||
              "Invalid request. Please check your input."
          );
          return "Invalid request. Please check your input.";
        case 401:
          toast.error("Unauthorized. Please log in again.");
          return "Unauthorized. Please log in again.";
        case 403:
          toast.error(
            "Forbidden. You do not have permission to perform this action."
          );
          return "Forbidden. You do not have permission to perform this action.";
        case 404:
          toast.error("Resource not found. Please try again.");
          return "Resource not found. Please try again.";
        case 500:
          toast.error("Internal server error. Please try again later.");
          return "Internal server error. Please try again later.";
        default:
          return (
            error.response.data?.message || "An unexpected error occurred."
          );
      }
    } else if (error.request) {
      toast.error("Network error. Please check your connection.");
      return "Network error. Please check your connection.";
    } else {
      toast.error(error.message || "An unknown error occurred.");
      return error.message || "An unknown error occurred.";
    }
  }

  // Xử lý các lỗi không phải từ Axios

  return "An unknown error occurred.";
};
