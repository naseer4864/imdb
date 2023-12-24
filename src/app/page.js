import axios from "axios";

import Results from "./components/Results";

const Key = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await axios.get(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${Key}&language=en-US&page=1`,
    { next: { revalidate: 10 } }
  );
  
  if (!res.data) {
    throw new Error("No data received");
  }
  const results = res.data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
