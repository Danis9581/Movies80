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
      <div className="relative w-full max-w-full md:max-w-4xl mx-2 my-4">
        {/* Contenedor del contenido con efecto VHS */}
        <div 
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 relative border-2 border-red-900/50 shadow-2xl md:overflow-y-auto md:max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Efecto de esquinas VHS */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500 rounded-br-lg"></div>
          
          {/* Botón de cerrar con estilo retro */}
          <button 
            onClick={onClose}
            className="
              absolute top-2 right-2 sm:top-4 sm:right-4
              text-white hover:text-red-500 
              text-2xl sm:text-3xl font-mono
              leading-none
              p-2
              cursor-pointer
              z-20
            "
            aria-label="Cerrar"
          >
            ×
          </button>
          
          {/* Contenido del modal - Ajustado para móviles */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-8">
            {/* Poster con efecto VHS - Más pequeño en móviles */}
            <div className="relative group w-full md:w-1/3 mx-auto max-w-[180px] md:max-w-none">
              <div className="absolute inset-0 bg-red-900/10 rounded-lg group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                alt={movie.title}
                className="w-full h-auto rounded-lg shadow-xl border border-gray-700/50 transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg"></div>
              <div className="absolute bottom-1 left-1 text-red-400 font-mono text-xs tracking-wider">
                VHS • {movie.release_date?.split("-")[0]}
              </div>
            </div>
            
            {/* Contenido - Texto más compacto en móviles */}
            <div className="flex-1 mt-2 md:mt-0">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-2 sm:mb-3 font-sans tracking-tight drop-shadow-[0_0_8px_rgba(220,38,38,0.7)]">
                {movie.title}
              </h2>
              
              {/* Metadatos - Más compactos en móviles */}
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center mb-3 sm:mb-5">
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {movie.vote_average.toFixed(1)}
                </span>
                
                <span className="text-gray-300 font-mono text-xs sm:text-sm bg-gray-800/50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-gray-700">
                  {movie.release_date}
                </span>
                
                {movie.runtime && (
                  <span className="text-gray-300 font-mono text-xs sm:text-sm bg-gray-800/50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-gray-700">
                    {Math.floor(movie.runtime/60)}h {movie.runtime%60}m
                  </span>
                )}
              </div>
              
              {/* Descripción - Texto más pequeño en móviles */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-red-400 font-mono tracking-wider text-xs sm:text-sm mb-1 sm:mb-2">SINOPSIS DEL ARCHIVO:</h3>
                <p className="text-gray-300 text-sm sm:text-lg leading-relaxed border-l-2 border-red-900/50 pl-3 sm:pl-4 italic max-h-[100px] sm:max-h-none overflow-y-auto">
                  {spanishOverview || movie.overview || "Descripción no disponible en nuestros registros."}
                </p>
              </div>
              
              {/* Detalles adicionales - Grid ajustado para móviles */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-5">
                <div className="bg-gray-900/50 p-2 sm:p-4 rounded-lg border border-gray-800">
                  <h3 className="text-red-400 font-mono tracking-wider text-xs sm:text-sm mb-1 sm:mb-2">GÉNEROS</h3>
                  <p className="text-gray-300 font-serif text-sm sm:text-base">
                    {movie.genres?.map(g => g.name).join(' • ') || "Terror • Thriller • Suspenso"}
                  </p>
                </div>
                
                <div className="bg-gray-900/50 p-2 sm:p-4 rounded-lg border border-gray-800">
                  <h3 className="text-red-400 font-mono tracking-wider text-xs sm:text-sm mb-1 sm:mb-2">ESTADO</h3>
                  <p className="text-gray-300 font-serif text-sm sm:text-base">
                    Popularidad: <span className="text-purple-400">{movie.popularity.toFixed(0)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Efecto de scanlines */}
          <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,_rgba(255,255,255,0.03)_0px_1px,_transparent_1px_3px)] opacity-20"></div>
        </div>
      </div>
    </div>
  );
}