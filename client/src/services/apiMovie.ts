import { ApiResponseMovieDetail } from "../interfaces/MoiveDetail";
import { ApiResponseMovie } from "../interfaces/Movie";
import { api2Instance } from "../utils/axiosConfig";
import { handleApiError } from "../utils/handleApiError";
import { AxiosResponse } from "axios";

const MOVIE_DETAIL_API: string = "phim";
const MOVIE_API: string = "v1/api/danh-sach/";

// lấy chi tiết 1 bộ phim
export const getMovieDetails = async (
  slug: string
): Promise<ApiResponseMovieDetail | null> => {
  try {
    const response: AxiosResponse<ApiResponseMovieDetail> =
      await api2Instance.get(`${MOVIE_DETAIL_API}/${slug}`);

    return response as unknown as ApiResponseMovieDetail;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error; // Hoặc trả về null trong catch
  }
};

// lấy tất cả các bộ phim trong danh mục
export const getMovies = async (
  category: string
): Promise<ApiResponseMovie> => {
  try {
    const response = await api2Instance.get(`${MOVIE_API}/${category}`);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
