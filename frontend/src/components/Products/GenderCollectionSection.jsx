import { Link } from "react-router-dom";
import topwearsCollectionImage from "../../assets/loro.webp";
import bottomwearsCollectionImage from "../../assets/loro_shoes.webp";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Bottom's wear Collection */}
        <div className="relative flex-1">
          <img
            src={bottomwearsCollectionImage}
            alt="Bottom's wear Collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Shoes Collection
            </h2>
            <Link
              to="/collections/all?category=Bottom Wear"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* Men's Collection */}
        <div className="relative flex-1">
          <img
            src={topwearsCollectionImage}
            alt="Top's wear Collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Top's Wear Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GenderCollectionSection;
