import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        //   
        <div data-aos="zoom-in" className="hero min-h-screen mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/KwCFCHb/stationeries-laptop-camera-envelope-alarm-clock-stationeries-pink-backdrop.jpg)' }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="text-5xl lg:text-6xl text-black font-bold">Unlock Your Career Potential with JobHunt</h1>
                    <p className="m-4 text-black text-xl lg:text-2xl font-medium">Discover your dream job with JobHunt, personalized recommendations, and expert guidance. Your next opportunity is just a click away!</p>
                    <div className="form-control ml-16">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search here…"
                                className="input border-gray-300 ml-6 lg:ml-12 w-40 lg:w-96"
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
        </div>
    );
};

export default Banner;
