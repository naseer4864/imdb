import axios from "axios";
import Image from "next/image";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const movieData = await res.data
  const posterUrl = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row  content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={posterUrl}
          alt={movieData.title}
          width={500}
          height={300}
          className="rounded-lg"
          style={{maxWidthidth: "100%", height: "100%", objectFit:"contain" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image not found"
        />
      <div className="p-2">
      <h2 className="text-lg mb-3 font-bold">{movieData.title}</h2>
      <p className="text-lg mb-3"><span className="font-semibold mr-1">Overview:</span>{movieData.overview}</p>
      <p className="mb-3"><span className="font-semibold mr-1">Date Released:</span>{movieData.release_date}</p>
      <p className="mb-3"><span className="font-semibold mr-1">Rating:</span>{movieData.vote_count}</p>
      </div>
      </div>
    </div>
  );
}
