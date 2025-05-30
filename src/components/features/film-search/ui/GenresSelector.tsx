import { Badge } from "@/components/ui/badge";

const GenresSelector = ({
  checkedGenres,
  setCheckedGenres,
  agregatedGenres,
}: {
  checkedGenres: string | null;
  setCheckedGenres: (genre: string | null) => void;
  agregatedGenres: string[];
}) => {
  return (
    <div className="flex gap-2 mt-4 flex-wrap">
      <Badge
        variant={checkedGenres === null ? "default" : "secondary"}
        onClick={() => setCheckedGenres(null)}
      >
        All
      </Badge>
      {agregatedGenres.map((genre) => (
        <Badge
          key={genre}
          variant={checkedGenres === genre ? "default" : "secondary"}
          onClick={() => setCheckedGenres(genre)}
        >
          {genre}
        </Badge>
      ))}
    </div>
  );
};

export default GenresSelector;
