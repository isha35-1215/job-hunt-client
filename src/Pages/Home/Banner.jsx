
const Banner = () => {


  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/2yvwVyp/coins-job-word.jpg')]">
      <div className="w-full h-full backdrop-opacity-70 bg-white/40 flex flex-col justify-center items-center text-center ">
        <div className="text-center  font-poppins">
            <h1 className="text-pink-950 text-5xl font-extrabold">Unlock Your Career Potential with JobHunt</h1>
            <p className="mx-56 mt-4 mb-10 text-pink-800 text-xl font-bold">Discover your dream job with JobHunt, personalized recommendations, and expert guidance. Your next opportunity is just a click away!</p>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search here…"
              className="input border-gray-300 w-96"
            />
            <button
              className="bg-pink-700 text-white px-4 py-2 rounded-r-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
