import FilmCardSmall from "@/components/card/FilmCardSmall";
import GenresSelector from "./GenresSelector";
import { Film } from "@/types/film";
import FilmCardFull from "@/components/card/FilmCardFull";
import NotFoundDataCard from "@/components/card/NotFoundDataCard";

const FilmContent = ({
  films,
  checkedFilm,
  setCheckedFilm,
  checkedGenres,
  setCheckedGenres,
  agregatedGenres,
}: {
  films: Film[];
  checkedFilm: Film | null;
  setCheckedFilm: (film: Film) => void;
  checkedGenres: string | null;
  setCheckedGenres: (genres: string | null) => void;
  agregatedGenres: string[];
}) => {
  if (films.length === 0) {
    return (
      <NotFoundDataCard
        className="mt-4"
        message="No films found. Please try change the search criteria."
      />
    );
  }
  return (
    <div>
      {agregatedGenres.length > 0 && (
        <GenresSelector
          checkedGenres={checkedGenres}
          setCheckedGenres={setCheckedGenres}
          agregatedGenres={agregatedGenres}
        />
      )}

      {checkedFilm && <FilmCardFull film={checkedFilm} className="mt-4" />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {films.map((film) => (
          <FilmCardSmall
            key={film.id}
            film={film}
            onClick={() => setCheckedFilm(film)}
            selected={checkedFilm?.id === film.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FilmContent;
