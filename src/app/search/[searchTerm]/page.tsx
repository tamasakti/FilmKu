import React from "react";
import Results from "src/components/Results";

const API_KEY = process.env.REACT_API_KEY;

export default async function Search({ params }: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("There is Something wrong with fetching data");
  }

  const data = await res.json();
  const results = data.results;
  return (
    <>
      {results && results.length === 0 && <h1>Data Film Kosong</h1>}
      {results && <Results results={results} />}
    </>
  );
}
