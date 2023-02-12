import { useEffect, useState } from "react";
import Mavel from "../components/Mavel";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [marvel, setMarvel] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setMarvel(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          My Challange
        </h2>
        {loading === true ? (
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            loading...
          </h1>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {marvel.map((item) => (
              <Mavel
                key={item.id}
                id={item.id}
                imgSrc={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                mavelName={item.name}
                modified={item.modified}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
