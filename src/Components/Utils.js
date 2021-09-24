const ApiKey = "";
const baseApiURL = `http://www.omdbapi.com/?apikey=${ApiKey}&`;

getMoviesBySearchTerm = async (serchMoves) => {
  const url = `${baseApiURL}s=${serchMoves}`;
  const response = await fetch(url);
  const resJson = await response.json();
  const search = await resJson.Search;
};
getMoviesBySearchTerm().catch((error) => {
  console.log(error);
});

getMovieDetailsById = async (MovesID) => {
  const url = `${baseApiURL}s=${MovesID}`;
  const response = await fetch(url);
  const resJson = await response.json();
};
getMovieDetailsById().catch((error) => {
  console.log(error);
});
