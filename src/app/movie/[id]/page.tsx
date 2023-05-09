import React from "react";
import Image from "next/image";

const API_KEY = process.env.REACT_API_KEY;

async function getMovie(movieId: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return await res.json();
}

export default async function MoviePage({ params }: any) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="flex max-w-6xl mx-auto sm:flex-col md:flex-col sm:justify-center md:justify-center lg:flex-row">
      <div className="flex flex-1 sm:justify-center md:justify-center ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Poster"
          width={500}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginTop: "3rem",
          }}
        />
      </div>
      <div className="flex-col flex-1 ml-5 sm:mt-5 md:mt-5">
        <h2 className="flex justify-center mt-5 text-xl font-bold lg:justify-start xl:justify-start lg:mt-10 xl:mt-10">
          {movie.original_title || movie.name || movie.title}
        </h2>
        <div className="flex lg:flex xl:flex sm:justify-center md:justify-center">
          <p className="mt-5 sm:text-center md:text-center lg:text-left xl:text-left sm:max-w-2xl lg:w-full xl:w-full">
            {movie.overview}
          </p>
        </div>
        <p className="mt-5">Overall Rating: {movie.vote_count}</p>
      </div>
    </div>
  );
}
