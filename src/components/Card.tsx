import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const Card = ({ result }: any) => {
  return (
    <>
      <div className="transition-shadow duration-200 rounded-lg cursor-pointer group sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:M-2">
        <Link href={`/movie/${result.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            alt="poster"
            width={500}
            height={300}
            className="transition-opacity duration-200 rounded-t-lg group-hover:opacity-80"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
          />
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.original_title || result.name || result.title}
          </h2>
          <p className="flex flex-row items-center">
            {result.release_date || result.first_air_date}{" "}
            <BsFillHandThumbsUpFill className="h-5 ml-3 mr-1" />
            {result.vote_count}
          </p>
        </Link>
      </div>
    </>
  );
};

export default Card;
