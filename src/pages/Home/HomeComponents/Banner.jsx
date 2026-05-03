import React from 'react';

const Banner = () => {
    const slides = [
        {
            id: "slide1",
            image: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
            title: "Interstellar",
            rating: "8.6",
            desc: "A team travels through a wormhole in space to ensure humanity's survival."
        },
        {
            id: "slide2",
            image: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
            title: "Inception",
            rating: "8.8",
            desc: "A thief who steals corporate secrets through dream-sharing technology."
        },
        {
            id: "slide3",
            image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            title: "The Dark Knight",
            rating: "9.0",
            desc: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos."
        }
    ];

    return (
        <div className="carousel w-full h-[75vh]">

            {slides.map((slide, index) => (
                <div key={slide.id} id={slide.id} className="carousel-item relative w-full">

                    {/* Background Image */}
                    <img
                        src={slide.image}
                        className="w-full h-full object-cover brightness-75"
                        alt={slide.title}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#140f1f] via-[#140f1fc9] to-transparent"></div>

                    {/* Content */}
                    <div className="absolute z-10 h-full flex flex-col justify-center px-10 max-w-xl text-white">

                        <p className="text-sm text-gray-300 mb-2">🔥 Trending</p>

                        <h1 className="text-4xl md:text-5xl font-bold">
                            {slide.title}
                        </h1>

                        <p className="mt-3 text-gray-300 text-sm">
                            {slide.desc}
                        </p>

                        <div className="mt-5 flex gap-3">
                            <button className="btn bg-white text-black hover:bg-gray-200">
                                ▶ Watch Trailer
                            </button>

                            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
                                ⭐ Rate Now
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                        <a
                            href={`#slide${index === 0 ? slides.length : index}`}
                            className="btn btn-circle bg-black/50 border-none text-white"
                        >
                            ❮
                        </a>

                        <a
                            href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
                            className="btn btn-circle bg-black/50 border-none text-white"
                        >
                            ❯
                        </a>
                    </div>

                </div>
            ))}

        </div>
    );
};

export default Banner;