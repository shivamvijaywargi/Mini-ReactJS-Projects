import { useQuery } from "react-query";

const Joke = () => {
  const getJokes = async () => {
    const resp = await fetch("https://api.chucknorris.io/jokes/random");
    return resp.json();
  };

  const { data, isError, isLoading, refetch, error } = useQuery(
    "randomJokes",
    getJokes
  );

  if (isError || error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h1>{data.value}</h1>
        <button onClick={refetch}>New Joke</button>
      </div>
    </div>
  );
};

export default Joke;
