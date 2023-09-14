export default async function getMovies(url: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const result = res.json();
  const updatedResult: Promise<any> = new Promise((resolve, _reject) => {
    setTimeout(() => {
      return resolve(result);
    }, 3000);
  });
  // console.log(result);

  return updatedResult;
}
