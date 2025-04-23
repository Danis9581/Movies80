import { useState, useEffect } from "react";
import { MovieModal } from "./MovieModal";
import { fetch80sHorrorMovies } from "../api/movies";

export function MovieList() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadProgress, setLoadProgress] = useState(0);

  // Cargar TODAS las películas
  useEffect(() => {
    const loadAllMovies = async () => {
      try {
        setIsLoading(true);
        let allResults = [];
        let page = 1;
        let totalPages = 1;
        let loadedPages = 0;

        const firstPage = await fetch80sHorrorMovies(page);
        allResults = firstPage.results;
        totalPages = firstPage.totalPages;
        loadedPages = 1;
        setLoadProgress((loadedPages / totalPages) * 100);

        for (let p = 2; p <= totalPages; p++) {
          const data = await fetch80sHorrorMovies(p);
          allResults = [...allResults, ...data.results];
          loadedPages++;
          setLoadProgress((loadedPages / totalPages) * 100);
        }

        // Ordenar películas alfabéticamente y eliminar duplicados
        const uniqueMovies = allResults.filter(
          (movie, index, self) =>
            index === self.findIndex((m) => (
              m.id === movie.id
            ))
        );
        
        const sortedMovies = uniqueMovies.sort((a, b) => 
          a.title.localeCompare(b.title)
        );
        
        setAllMovies(sortedMovies);
        setFilteredMovies(sortedMovies);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllMovies();
  }, []);

  // Filtrar películas - Versión mejorada
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredMovies(allMovies);
      return;
    }

    const searchText = searchTerm.toLowerCase().trim();
    const filtered = allMovies.filter(movie => {
      const movieTitle = movie.title.toLowerCase();
      
      // Búsqueda flexible pero precisa
      return (
        movieTitle === searchText || // Coincidencia exacta
        movieTitle.startsWith(searchText + ' ') || // Comienza con el término
        movieTitle.includes(' ' + searchText + ' ') || // Término en medio
        movieTitle.endsWith(' ' + searchText) || // Término al final
        movieTitle.split(' ').some(word => word.startsWith(searchText)) // Palabras que empiecen
      );
    });

    setFilteredMovies(filtered);
  }, [searchTerm, allMovies]);

  return (
    <div className="pb-16 relative">
      {/* Efecto de cinta VHS en la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>

      {/* Barra de búsqueda con estilo retro */}
      <div className="px-2 sm:px-4 mb-6 sm:mb-8">
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar en nuestro archivo VHS..."
              className="w-full bg-gray-800/80 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-lg border-2 border-gray-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-900/50 backdrop-blur-sm font-mono tracking-wide placeholder-gray-400 text-sm sm:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-red-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Botón para limpiar la búsqueda */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-10 top-3 text-gray-400 hover:text-red-500 transition-colors"
              >
                ×
              </button>
            )}
          </div>
          <div className="text-xs text-gray-500 mt-2 ml-1 font-mono tracking-wider">
            {searchTerm ? `Buscando: "${searchTerm}" (${filteredMovies.length} resultados)` : 
             `Total en archivo: ${allMovies.length} películas`}
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-20 relative z-10">
          <div className="text-red-400 text-3xl mb-4 font-mono tracking-wider animate-pulse">
            DESANGRANDO CATÁLOGO...
          </div>
          <div className="w-full max-w-md mx-auto bg-gray-800/50 rounded-full h-2.5 overflow-hidden border border-gray-700">
            <div 
              className="bg-gradient-to-r from-red-900 to-red-600 h-full rounded-full transition-all duration-300" 
              style={{ width: `${loadProgress}%` }}
            ></div>
          </div>
          <div className="mt-4 text-gray-400 font-mono text-sm">
            <span className="text-red-400">{Math.round(loadProgress)}%</span> • 
            Películas cargadas: <span className="text-purple-400">{Math.round(loadProgress/100 * allMovies.length)}/{allMovies.length}</span>
          </div>
          <div className="mt-6 text-gray-500 text-xs font-mono animate-pulse">
            POR FAVOR ESPERE • VHS EN PROCESO...
          </div>
        </div>
      ) : (
        <>
          {filteredMovies.length === 0 ? (
            <div className="text-center py-16 relative z-10">
              <div className="text-gray-400 text-xl font-mono mb-2">
                {searchTerm 
                  ? `>>> NO ENCONTRADO: "${searchTerm.toUpperCase()}" <<<`
                  : ">>> ARCHIVO VACÍO <<<"}
              </div>
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent mx-auto my-4"></div>
              <p className="text-gray-500 text-sm max-w-md mx-auto font-mono">
                {searchTerm 
                  ? "Prueba con otro título o revisa nuestra colección completa"
                  : "Error al cargar el catálogo. Por favor recarga la página."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4 relative z-10">
              {filteredMovies.map(movie => (
                <div 
                  key={movie.id} 
                  className="cursor-pointer group relative"
                  onClick={() => {
                    setSelectedMovie(movie);
                    setIsModalOpen(true);
                  }}
                >
                  {/* Efecto de borde VHS al hacer hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-900/50 rounded-lg transition-all duration-300 pointer-events-none"></div>
                  
                  {/* Efecto de degradado en la parte inferior */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg pointer-events-none"></div>
                  
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto rounded-lg shadow-xl group-hover:scale-105 transition-all duration-500 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/500x750?text=Poster+No+Disponible';
                    }}
                  />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-sm font-bold truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {movie.title}
                    </p>
                    <p className="text-red-400 text-xs font-mono">
                      {movie.release_date?.split("-")[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {isModalOpen && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}

      {/* Efecto de cinta VHS en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-900/50 to-transparent"></div>
    </div>
  );
}