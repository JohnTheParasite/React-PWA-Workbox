import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://api.themoviedb.org/3/discover/tv`, {
        params: {
          sort_by: "popularity.desc",
          api_key: "3ba766d20fdf35ddfb42da19e738ab90",
        },
      })
      .then((response) => {
        setLoading(false);
        setMovies(
          response?.data?.results.filter((movie) => movie?.backdrop_path)
        );
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap -mb-4">
      {!loading && movies?.length ? (
        movies.map((movie, index) => (
          <Movie key={movie?.id ?? index} movie={movie} />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Movies;
