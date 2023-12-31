export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  release_date: string;
  runtime: number;
  overview: string;
};
