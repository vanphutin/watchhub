import React, { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../services/apiMovie";
import { Item } from "../interfaces/Movie";
import MovieFrame from "../components/movie/movie-frame/MovieFrame";
import { useTranslation } from "react-i18next";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { t } = useTranslation();
  const debouncedSearchTerm = useDebounce(keyword, 300);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Item[] | []>([]);

  useEffect(() => {
    const handleApi = async () => {
      setIsLoading(true);
      if (debouncedSearchTerm) {
        const res = await getSearchMovie(debouncedSearchTerm);
        setResults(res.items);
      }
      setIsLoading(false);
    };
    handleApi();
  }, [debouncedSearchTerm]);
  if (results.length === 0 && !isLoading) {
    return (
      <h3 className="not-found">
        {t("movie.movieSearch.notFound")} "{keyword}"
      </h3>
    );
  }

  return (
    <>
      <div className="movie-items">
        <div className="single-movie">
          <MovieFrame
            movie={{ items: results, titlePage: "", type_list: "" }}
            title={`${
              isLoading
                ? `${t("movie.movieSearch.loading")} "${keyword}"`
                : `${t("movie.movieSearch.result")} "${keyword}"`
            }`}
            loading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default SearchResult;
