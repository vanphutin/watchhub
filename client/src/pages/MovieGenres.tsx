import React, { useContext } from "react";
import { MovieGenresContext } from "../context/movieGenres/MovieGenresContext";
import MovieFrame from "../components/movie/movie-frame/MovieFrame";
import { Skeleton, Box } from "@mui/material";

const MovieGenres = () => {
  const context = useContext(MovieGenresContext);

  if (!context) {
    throw new Error("YourComponent must be used within a MovieGenresProvider");
  }
  const { movieGenres, title, loading } = context;
  if (loading) {
    return (
      <div>
        <Box display="flex" flexWrap="wrap" gap={4} className="loading">
          {[...Array(14)].map((_, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              gap={1}
              marginTop={"20px"}
              width="150px"
            >
              <Skeleton
                sx={{ backgroundColor: "#616161" }}
                variant="rectangular"
                width="120px"
                height="180px"
              />
              <Box width="100%">
                <Skeleton
                  sx={{ backgroundColor: "#616161" }}
                  variant="text"
                  width="100%"
                  height={30}
                />
                <Skeleton
                  sx={{ backgroundColor: "#616161" }}
                  variant="text"
                  width="80%"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    );
  }

  return (
    <>
      <div className="cartoon">
        {" "}
        {movieGenres && (
          <div className="cartoon">
            <MovieFrame
              movie={{ items: movieGenres, titlePage: "", type_list: "" }}
              title={title}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MovieGenres;
