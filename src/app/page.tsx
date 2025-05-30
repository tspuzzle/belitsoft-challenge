import FilmSearch from "@/components/features/film-search";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Suspense>
        <FilmSearch />
      </Suspense>
    </div>
  );
}
