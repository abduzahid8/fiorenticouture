import { Link } from "react-router-dom";
// Import your video file
import heroVideo from "../../assets/aurelien.mp4"; // 👈 Change this to your video file

const Hero = () => {
  return (
    <section className="relative">
      {/* Replace the img tag with a video tag */}
      <video
        src={heroVideo} // 👈 Use the imported video
        autoPlay // 👈 Add autoPlay to start the video automatically
        loop // 👈 Add loop to play the video repeatedly
        muted // 👈 Add muted, as autoplay often requires it, and for background videos it's good practice
        playsInline // 👈 Add playsInline for better compatibility on mobile devices
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      >
        {/* You can add a fallback message or image here for browsers that don't support the video tag */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-2xl md:text-9xl font-medium tracking-tighter uppercase mb-4 color:black">
            New Collection <br /> Summer 2025
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our New Collection outfits with fast worldwide shipping.
          </p>
          <Link 
            to="/collections/all?gender=Men"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
