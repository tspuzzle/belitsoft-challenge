import { cn } from "@/lib/utils";
import { Film } from "@/types/film";
import Image from "next/image";

const FilmCardFull = ({
  film,
  className,
}: {
  film: Film;
  className?: string;
}) => {
  return (
    <div className={cn("border border-gray-200 rounded-md p-4 ", className)}>
      <div className="flex gap-4">
        <Image
          src={film.image?.medium || "/no-img-portrait-text.png"}
          alt={film.name}
          width={210 * 0.5}
          height={295 * 0.5}
        />
        <div>
          <h2 className="text-lg font-bold">{film.name}</h2>
          <p className="text-sm text-gray-500">{film.genres.join(", ")}</p>
        </div>
      </div>
      <div className="mt-2">
        <p dangerouslySetInnerHTML={{ __html: film.summary }} />
      </div>
    </div>
  );
};

export default FilmCardFull;
