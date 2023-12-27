import Results from "@/app/components/Results";
import axios from "axios";

export default async function page({ params }) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );
 
  const results = res.data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center p-6">No Result found</h1>
      )}
      {results &&  <Results results={results} />}
    </div>
  );
}
