import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const [detailMavel, setDetailMavel] = useState({});
  const { id } = useParams();
  const [series, setSeries] = useState([]);
  const [comics, setComics] = useState([]);
  const [events, setEvents] = useState([]);
  const [stories, setStories] = useState([]);

  const getDetail = useCallback(async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    console.log("########", json.data.results[0]);
    setDetailMavel(json.data.results[0]);
    setSeries(json.data.results[0].series.items);
    setComics(json.data.results[0].comics.items);
    setEvents(json.data.results[0].events.items);
    setStories(json.data.results[0].stories.items);
  }, [id]);
  useEffect(() => {
    getDetail();
  }, [getDetail]);

  console.log("series", series);
  return series.length === 0 ? (
    "Loading..."
  ) : (
    <div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
      <div className="mb-16 text-center">
        <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
          Detail
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {detailMavel.name}'s Detail
        </p>
      </div>
      <div className="flex flex-wrap my-12 dark:text-white">
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/2">
          <div className="flex items-center mb-6">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="w-6 h-6 text-indigo-500"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
            </svg>
            <div className="ml-4 text-xl">
              Comics ({detailMavel.comics.available})
            </div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            {comics.map((_) => (
              <li key={_.resourceURI}>{_.name}</li>
            ))}
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/2 ">
          <div className="flex items-center mb-6">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="w-6 h-6 text-indigo-500"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
            </svg>
            <div className="ml-4 text-xl">
              Events ({detailMavel.events.available})
            </div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            {events.map((_) => (
              <li key={_.resourceURI}>{_.name}</li>
            ))}
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/2 ">
          <div className="flex items-center mb-6">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="w-6 h-6 text-indigo-500"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
            </svg>
            <div className="ml-4 text-xl">
              Series ({detailMavel.series.available})
            </div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            {series.map((_) => (
              <li key={_.resourceURI}>{_.name}</li>
            ))}
          </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/2 lg:border-b-0">
          <div className="flex items-center mb-6">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="w-6 h-6 text-indigo-500"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
            </svg>
            <div className="ml-4 text-xl">
              Stories ({detailMavel.stories.available})
            </div>
          </div>
          <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            {stories.map((_) => (
              <li key={_.resourceURI}>{_.name}</li>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Detail;
