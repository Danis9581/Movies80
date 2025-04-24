import { useState, useEffect } from 'react';

export function MovieModal({ movie, onClose }) {
  const [spanishOverview, setSpanishOverview] = useState(null);
  const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;
  
  useEffect(() => {
    if (!movie || !movie.id) return;

    const fetchSpanishOverview = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_KEY}&language=es-ES`
        );
        const data = await response.json();
        setSpanishOverview(data.overview);
      } catch (error) {
        console.error("Error cargando sinopsis en español:", error);
        setSpanishOverview(null);
      }
    };

    fetchSpanishOverview();
  }, [movie, TMDB_KEY]);

  if (!movie) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      {/* Efecto de ruido de película */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjA1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] opacity-10 pointer-events-none"></div>
      
      {/* Borde de pantalla de CRT */}
      <div className="absolute inset-0 border-8 border-transparent border-t-red-900/20 border-b-purple-900/20 border-l-blue-900/20 border-r-blue-900/20 pointer-events-none mix-blend-overlay"></div>

      {/* Contenedor principal con posición relativa */}
      <div className="relative w-full max-w-full lg:max-w-5xl xl:max-w-6xl mx-2 my-4 landscape:max-w-4xl landscape:mx-4 max-h-[85vh]">
        {/* Contenedor del contenido con efecto VHS */}
        <div 
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-4 sm:p-5 landscape:p-5 relative border-2 border-red-900/50 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Efecto de esquinas VHS */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500 rounded-br-lg"></div>
          
          {/* Botón de cerrar con estilo retro */}
          <button 
            onClick={onClose}
            className="
              absolute top-1 right-1 sm:top-2 sm:right-2
              text-white hover:text-red-500 
              text-xl sm:text-2xl font-mono
              leading-none
              p-1
              cursor-pointer
              z-20
            "
            aria-label="Cerrar"
          >
            ×
          </button>
          
          {/* Contenido del modal - Más compacto */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-6">
            {/* Poster con efecto VHS - Tamaño ajustado */}
            <div className="relative group w-full md:w-2/5 lg:w-1/3 mx-auto max-w-[160px] md:max-w-none">
              <div className="absolute inset-0 bg-red-900/10 rounded-lg group-hover:opacity-0 transition-opacity duration-300"></div>
              <img 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                alt={movie.title}
                className="w-full h-auto rounded-lg shadow-lg border border-gray-700/50 transform group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg"></div>
              <div className="absolute bottom-1 left-1 text-red-400 font-mono text-[0.65rem] tracking-wider">
                VHS • {movie.release_date?.split("-")[0]}
              </div>
            </div>
            
            {/* Contenido - Texto más compacto */}
            <div className="flex-1 mt-1 md:mt-0">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-red-500 mb-1 sm:mb-2 font-sans tracking-tight drop-shadow-[0_0_6px_rgba(220,38,38,0.7)]">
                {movie.title}
              </h2>
              
              {/* Metadatos - Más compactos */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center mb-2 sm:mb-3">
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[0.65rem] sm:text-xs font-bold flex items-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {movie.vote_average.toFixed(1)}
                </span>
                
                <span className="text-gray-300 font-mono text-[0.65rem] sm:text-xs bg-gray-800/50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full border border-gray-700">
                  {movie.release_date}
                </span>
                
                {movie.runtime && (
                  <span className="text-gray-300 font-mono text-[0.65rem] sm:text-xs bg-gray-800/50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full border border-gray-700">
                    {Math.floor(movie.runtime/60)}h {movie.runtime%60}m
                  </span>
                )}
              </div>
              
              {/* Descripción - Más compacta */}
              <div className="mb-2 sm:mb-4">
                <h3 className="text-red-400 font-mono tracking-wider text-[0.65rem] sm:text-xs mb-1">SINOPSIS:</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed border-l-2 border-red-900/50 pl-2 sm:pl-3 italic max-h-[120px] overflow-y-auto">
                  {spanishOverview || movie.overview || "Descripción no disponible."}
                </p>
              </div>
              
              {/* Detalles adicionales - Más compactos */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-gray-900/50 p-1.5 sm:p-3 rounded-lg border border-gray-800">
                  <h3 className="text-red-400 font-mono tracking-wider text-[0.65rem] sm:text-xs mb-0.5">GÉNEROS</h3>
                  <p className="text-gray-300 font-serif text-xs sm:text-sm">
                    {movie.genres?.map(g => g.name).join(' • ') || "Terror • Thriller"}
                  </p>
                </div>
                
                <div className="bg-gray-900/50 p-1.5 sm:p-3 rounded-lg border border-gray-800">
                  <h3 className="text-red-400 font-mono tracking-wider text-[0.65rem] sm:text-xs mb-0.5">ESTADO</h3>
                  <p className="text-gray-300 font-serif text-xs sm:text-sm">
                    Popularidad: <span className="text-purple-400">{movie.popularity.toFixed(0)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Efecto de scanlines */}
          <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,_rgba(255,255,255,0.03)_0px_1px,_transparent_1px_2px)] opacity-15"></div>
        </div>
      </div>
    </div>
  );
}