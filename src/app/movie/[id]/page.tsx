import getMovie from '@/libs/custom-fetch';

export default async function MovieDetial({
  params,
}: {
  params: { id: string };
}) {
  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const movie = await getMovie(url);

  return <h1>{movie.id}</h1>;
}
