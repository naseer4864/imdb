import Link from "next/link";
import Image from "next/image";
import { FaRegThumbsUp } from "react-icons/fa6";

const Card = ({ result }) => {
  const posterPath = `https://image.tmdb.org/t/p/original/${
    result.backdrop_path || result.posterPath
  }`;

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-300 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={posterPath}
          alt={result.title}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-shadow duration-200"
          style={{ maxWidth: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
            <p className="line-clamp-2 text-sm">{result.overview}</p>
            <h2 className="truncate font-bold">{result.title || result.name}</h2>
            <p className="flex items-center">{result.release_date}
            <FaRegThumbsUp className="h-5 mr-1 ml-3 text-sm" />
            {result.vote_count}
            </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
