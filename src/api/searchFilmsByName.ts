"use server";
import { Film } from "@/types/film";

const searchFilmsByName = async (
  textSearch: string
): Promise<{ films: Film[]; agregatedGenres: string[] }> => {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${textSearch}`,
    { next: { revalidate: 3600 } }
  );
  const data = await response.json();

  return data.reduce(
    (
      acc: { films: Film[]; agregatedGenres: string[] },
      film: { show: Film }
    ) => {
      console.log(acc, film);
      return {
        films: [...acc.films, film.show],
        agregatedGenres: Array.from(
          new Set([...(acc.agregatedGenres || []), ...film.show.genres])
        ),
      };
    },
    { films: [], agregatedGenres: [] }
  );
};

export default searchFilmsByName;
