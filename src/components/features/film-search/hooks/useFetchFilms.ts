import searchFilmsByName from "@/api/searchFilmsByName";
import { useDebounceValue } from "@/hooks/useDebounceValue";
import { Film } from "@/types/film";
import { set } from "internal-slot";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

const useFetchFilms = () => {
  const searchParams = useSearchParams();
  const [searchText, _setSearchText] = useState(
    searchParams.get("query")?.toString() || ""
  );

  const pathname = usePathname();
  const { replace } = useRouter();

  const setSearchText = (text: string) => {
    _setSearchText(text);
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set("query", text);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const debouncedSearchText = useDebounceValue(searchText, 500);

  const [{ films, agregatedGenres }, setFilmState] = useState<{
    films: Film[];
    agregatedGenres: string[];
  }>({
    films: [],
    agregatedGenres: [],
  });

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (debouncedSearchText.trim() === "") {
      setFilmState({ films: [], agregatedGenres: [] });
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;

    startTransition(async () => {
      const { films, agregatedGenres } = await searchFilmsByName(
        debouncedSearchText,
        signal
      );
      if (signal.aborted) return;
      setFilmState({ films, agregatedGenres });
    });

    return () => {
      controller.abort();
    };
  }, [debouncedSearchText]);

  return {
    films,
    agregatedGenres,
    setSearchText,
    searchText,
    isPending,
  };
};

export default useFetchFilms;
