"use client";

import LoadingCard from "@/components/card/LoadingCard";
import { Input } from "@/components/ui/input";
import { Film } from "@/types/film";
import { useEffect, useMemo, useState } from "react";
import useFetchFilms from "./hooks/useFetchFilms";
import FilmsList from "./ui/FilmsList";

const FilmSearch = () => {
  const { films, searchText, setSearchText, isPending, agregatedGenres } =
    useFetchFilms();

  const [checkedGenres, setCheckedGenres] = useState<string | null>(null);
  const [checkedFilm, setCheckedFilm] = useState<Film | null>(null);

  const filteredFilms = useMemo(() => {
    return checkedGenres
      ? films.filter((film) => film.genres.includes(checkedGenres))
      : films;
  }, [films, checkedGenres]);

  useEffect(() => {
    // reset filters when new fetch is started
    setCheckedFilm(null);
    setCheckedGenres(null);
  }, [isPending]);

  return (
    <div>
      <Input
        value={searchText}
        placeholder="Search by Film Name"
        onChange={(e) => setSearchText(e.target.value)}
      />

      {isPending && <LoadingCard className="mt-4" />}

      {!isPending && (
        <FilmsList
          films={filteredFilms}
          checkedFilm={checkedFilm}
          setCheckedFilm={setCheckedFilm}
          checkedGenres={checkedGenres}
          setCheckedGenres={setCheckedGenres}
          agregatedGenres={agregatedGenres}
        />
      )}
    </div>
  );
};

export default FilmSearch;
