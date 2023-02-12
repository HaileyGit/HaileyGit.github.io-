import { Link } from "react-router-dom";

const Mavel = ({ id, imgSrc, mavelName, modified }) => {
  return (
    <div key={id} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={imgSrc}
          alt={"imageAlt"}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/detail/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {mavelName}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{modified}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">👆</p>
      </div>
    </div>
  );
};
export default Mavel;
