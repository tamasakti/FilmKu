import Results from "src/components/Results";

const API_KEY = process.env.REACT_API_KEY;

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "FetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "FetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {
      next: {
        revalidate: 10000,
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Fetch Data Failed");
  }

  const result = data.results;

  return (
    <main>
      <Results results={result} />
    </main>
  );
}
