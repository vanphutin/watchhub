import React from "react";
import MovieCard from "../movie-card/MovieCard";
import "./_movieFrame.scss";
import Heading from "../../common/heading/Heading";
import { useTranslation } from "react-i18next";
import SeeMore from "../../common/seeMore/SeeMore";
import { Link, useSearchParams } from "react-router-dom";
import { Item } from "../../../interfaces/Movie";

interface MovieFrameProps {
  movie: { items: Item[]; titlePage: string; type_list: string };
  hasMore?: boolean;
  loading?: boolean;
  title: string;
  href?: string;
  loadMore?: () => void;
}

const MovieFrame: React.FC<MovieFrameProps> = ({ movie, href, title }) => {
  const { t } = useTranslation();
  // Kiểm tra dữ liệu đầu vào
  const { items = [], type_list } = movie || {};
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  return (
    <section id={href}>
      <Heading className={movie?.type_list} context={t(title)} contextSub="" />
      <ul className={`movie movies-${type_list} row `}>
        {items.map((item) => (
          <li
            key={item._id} // Sử dụng `item._id` nếu có, tránh sử dụng `uuidv4`
            className="movie-item col-6 col-md-3 col-lg-2 "
            data-name={item.name}
          >
            <MovieCard
              lang={item.lang}
              episode_current={item.episode_current}
              name={item.name}
              origin_name={item.origin_name}
              poster_url={item.poster_url}
              quality={item.quality}
              slug={item.slug}
            />
          </li>
        ))}
      </ul>

      {type_list &&
        tab !== "phim-le" &&
        tab !== "hoat-hinh" &&
        tab !== "phim-bo" &&
        tab !== "tv-shows" && (
          <div className="see-more-container">
            <Link
              to={`last-update/?tab=${type_list}`}
              state={{ movie, type_list, title }}
            >
              <SeeMore />
            </Link>
          </div>
        )}
    </section>
  );
};

export default MovieFrame;
