import React from "react";

const PosterSide = () => {
    const posters = [
        "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg", // The Batman
        "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", // Spider-Man
        "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", // Avengers Endgame
        "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg", // Doctor Strange
        "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg", // Joker
        "https://image.tmdb.org/t/p/w500/rTh4K5uw9HypmpGslcKd4QfHl93.jpg", // Black Panther

        "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg", // Oppenheimer
        "https://image.tmdb.org/t/p/w500/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg", // Dune
        "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", // John Wick
        "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg", // Interstellar

        "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg", // Avatar
        "https://image.tmdb.org/t/p/w500/zGVbrulkupqpbwgiNedkJPyQum4.jpg", // Tenet
        "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", // The Dark Knight
        "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", // Inception

        "https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg", // Deadpool
        "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", // Fight Club
        "https://image.tmdb.org/t/p/w500/aNtAP8ZzUMdnCPoqYgVOcgI0Eh4.jpg", // The Matrix
        "https://image.tmdb.org/t/p/w500/yF1eOkaYvwiORauRCPWznV9xVvi.jpg", // Harry Potter

        // 🇧🇩 You should replace these with real BD posters later
        "https://www.imdb.com/title/tt30415138/mediaviewer/rm3701963265/?ref_=ext_shr_lnk",
        "https://via.placeholder.com/300x450?text=Bangla+Movie+2",
    ];

    const column = [...posters, ...posters]; // duplicate for smooth loop

    return (
        <div className="hidden md:flex h-screen bg-[#140f1f] overflow-hidden relative">

            {/* Bottom 30% Gradient */}
            <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>

            <div className="grid grid-cols-3 gap-3 p-3 w-full">

                {/* Column 1 (UP) */}
                <div className="flex flex-col gap-3 animate-up-fast">
                    {column.map((img, i) => (
                        <img key={i} src={img} className="rounded-xl" />
                    ))}
                </div>

                {/* Column 2 (DOWN) */}
                <div className="flex flex-col gap-3 animate-down-fast mt-6">
                    {column.map((img, i) => (
                        <img key={i} src={img} className="rounded-xl" />
                    ))}
                </div>

                {/* Column 3 (UP) */}
                <div className="flex flex-col gap-3 animate-up">
                    {column.map((img, i) => (
                        <img key={i} src={img} className="rounded-xl" />
                    ))}
                </div>

            </div>

            {/* Animations */}
            <style>
                {`
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

          @keyframes scrollDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }

          .animate-up {
  animation: scrollUp 32s linear infinite;
}

.animate-up-fast {
  animation: scrollUp 24s linear infinite;
}

.animate-down-fast {
  animation: scrollDown 26s linear infinite;
}

          /* Smooth hover effect */
          img {
            transition: transform 0.3s ease;
          }

          img:hover {
            transform: scale(1.05);
          }
        `}
            </style>
        </div>
    );
};

export default PosterSide;