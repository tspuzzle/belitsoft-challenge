import { cn } from "@/lib/utils";
import { Film } from "@/types/film";
import Image from "next/image";

const FilmCardSmall = ({
  film,
  onClick,
  className,
  selected,
}: {
  film: Film;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
}) => {
  return (
    <div
      className={cn(
        "border border-gray-200 rounded-md p-2 flex gap-4",
        selected && "border-blue-500",
        className
      )}
      onClick={onClick}
    >
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
  );
};

export default FilmCardSmall;
