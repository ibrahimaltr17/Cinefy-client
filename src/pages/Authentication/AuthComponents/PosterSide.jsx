import React from "react";

const PosterSide = () => {
    const posters = [
        "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
        "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
        "https://image.tmdb.org/t/p/w500/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
        "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
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
            animation: scrollUp 12s linear infinite;
          }

          .animate-up-fast {
            animation: scrollUp 8s linear infinite;
          }

          .animate-down-fast {
            animation: scrollDown 8s linear infinite;
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