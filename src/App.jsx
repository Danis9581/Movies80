// App.jsx
import { MovieList } from "./components/MovieList";
import { Link, Routes, Route, useLocation } from 'react-router-dom'; // Importa useLocation
import QuizPage from './QuizPage'; 
import './index.css';

export default function App() {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-4">
      {/* Efecto grano de película vintage */}
      <div className="fixed inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjA1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMiIvPgo8L3N2Zz4=')] opacity-10"></div>

      <header className="text-center mb-10 relative z-10">
        {/* Efecto de neón */}
        <h1 className="text-6xl font-bold text-red-500 mb-3 font-sans tracking-tight
                          drop-shadow-[0_0_8px_rgba(220,38,38,0.7)]
                          animate-pulse-slow transform transition duration-1000 hover:scale-105">
          TERROR OCHENTERO
        </h1>

        <div className="w-48 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-4"></div>

        <p className="text-lg text-gray-300 italic font-serif max-w-2xl mx-auto mb-6"> {/* Añadí mb-6 para dar espacio */}
          "Un viaje sangriento a la década donde el terror cobró vida"
        </p>

        {/* Contenedor para el botón y la imagen */}
        {location.pathname === "/" && (
          <Link
            to="/quiz"
            className="font-creepster inline-flex items-center justify-center bg-80s-yellow hover:bg-yellow-400 text-red-500 py-2 px-8 rounded-full shadow-xl transition duration-300 mb-8 border-2 border-80s-purple shadow-neon-purple text-xl"
          >
            ¿Qué tanto sabes sobre este género?
            <img src="/MandoRetro.png" alt="Mando de consola" className="ml-3 h-8 w-12" />
          </Link>
        )}
        
        {/* Efecto de cinta VHS */}
        <div className="absolute -bottom-5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </header>

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </main>

      <footer className="text-center mt-16 pb-6 relative z-10">
        <div className="text-xs text-gray-500 tracking-widest mb-2">
          EXPLORA • DISFRUTA • SOBREVIVE
        </div>
        <p className="text-gray-600 text-sm font-mono">
          Datos proporcionados por <span className="text-teal-400">TMDB</span> • © {new Date().getFullYear()}
        </p>
      </footer>

      {/* Efectos de borde vintage */}
      <div className="fixed inset-0 pointer-events-none border-8 border-transparent
                          border-t-red-900/30 border-b-purple-900/30 border-l-transparent border-r-transparent
                          mix-blend-overlay"></div>
    </div>
  );
}