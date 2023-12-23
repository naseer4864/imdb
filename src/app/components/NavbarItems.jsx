
"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItems({ title, params }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link href={`/?genre=${params}`}>
        <p className={`py-5 hover:text-amber-600 font-semibold ${genre && genre === params && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`}>
          {title}
        </p>
      </Link>
    </div>
  );
}
