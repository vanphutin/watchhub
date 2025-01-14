import { useEffect, useState } from "react";

const useCategoryMovie = (type: string) => {
  const [movieType, setMovieType] = useState<
    "hoat-hinh" | "phim-le" | "tv-shows" | "phim-bo" | null
  >(null);

  useEffect(() => {
    const UpdateMovieType = (type: string) => {
      if (type === "") {
        setMovieType(null);
        return;
      }

      switch (type.toLowerCase()) {
        case "hoathinh":
          setMovieType("hoat-hinh");
          break;
        case "series":
          setMovieType("phim-bo");
          break;
        case "single":
          setMovieType("phim-le");
          break;
        case "tvshows":
          setMovieType("tv-shows");
          break;
        default:
          setMovieType(null);
          break;
      }
    };

    UpdateMovieType(type);
  }, [type]);

  return movieType;
};

export default useCategoryMovie;
