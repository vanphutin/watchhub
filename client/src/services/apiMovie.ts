import { ApiResponseMovieDetail } from "../interfaces/MoiveDetail";
import { ApiResponseMovie, Item } from "../interfaces/Movie";
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

//Lấy danh sách phim từ API và lọc theo thể loại
export const getMoviesByCategory = async (
  category: string
): Promise<Item[] | null> => {
  try {
    const urls = [
      `${MOVIE_API}/phim-le`,
      `${MOVIE_API}/phim-bo`,
      `${MOVIE_API}/hoat-hinh`,
      `${MOVIE_API}/tv-shows`,
    ];

    let allMovies: Item[] = []; // Mảng lưu tất cả các phim

    for (const url of urls) {
      const response: AxiosResponse = await api2Instance.get(url); // Lấy dữ liệu từ API
      const movies: Item[] = response.data.items; // Giả sử `items` là mảng chứa các phim

      // Lọc phim theo thể loại
      const filteredMovies = movies.filter((movie: Item) =>
        movie.category.some((cat) => cat.slug === category)
      );

      // Thêm phim đã lọc vào mảng `allMovies`
      allMovies = allMovies.concat(filteredMovies);
    }

    return allMovies.length > 0 ? allMovies : null;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movie data");
  }
};
