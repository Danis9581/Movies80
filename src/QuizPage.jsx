// src/QuizPage.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import bosqueTerror from './assets/Bosque-terror5.jpg';
import exorcistaTheme from './assets/exorcista-theme2.mp3';
import soundOnIcon from './assets/sound-on.png';
import soundOffIcon from './assets/sound-off.png';
import clickSound from './assets/click.wav';
import pennywiseLaugh from './assets/pennywise_laugh.mp4';
import questions from './data/questions';

// Función para detectar si el dispositivo es táctil
const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

// Estilos CSS-in-JS para efectos retro (versión ligera)
const retroStyles = {
  scanlines: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)`,
    backgroundSize: '100% 3px',
    pointerEvents: 'none',
    zIndex: 6,
    opacity: 0.6
  },
  crtEffect: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)',
    pointerEvents: 'none',
    zIndex: 7,
    opacity: 0.4
  },
  bloodDrips: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0yMCAyMEg0MHY0MEgyMHoiIGZpbGw9InJnYmEoMjAwLDAsMCwwLjAyKSIvPjxwYXRoIGQ9Ik02MCA2MEg4MHY0MEg2MHoiIGZpbGw9InJnYmEoMjAwLDAsMCwwLjAyKSIvPjxwYXRoIGQ9Ik0xMDAgMTIwSDEyMHY0MEgxMDB6IiBmaWxsPSJyZ2JhKDIwMCwwLDAsMC4wMikiLz48L3N2Zz4=")',
    pointerEvents: 'none',
    zIndex: 4,
    opacity: 0.2
  }
};

// Imágenes de fondo para desktop y mobile
const backgroundImages = {
  desktop: [
    `url(${bosqueTerror})`,
    'url("/imgGame/0.jpg")',
    'url("/imgGame/10.jpg")',
    'url("/imgGame/20.jpg")',
    'url("/imgGame/30.jpg")',
    'url("/imgGame/40.jpg")',
    'url("/imgGame/50.jpg")',
  ],
  mobile: [
    `url(${bosqueTerror})`,
    'url("/imgGame/0mobile.jpg")',
    'url("/imgGame/10mobile.jpg")',
    'url("/imgGame/20mobile.jpg")',
    'url("/imgGame/30mobile.jpg")',
    'url("/imgGame/40mobile.jpg")',
    'url("/imgGame/50mobile.jpg")',
  ]
};

function QuizPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [showPennywiseVideo, setShowPennywiseVideo] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef(new Audio(exorcistaTheme));
  const clickSoundRef = useRef(new Audio(clickSound));
  const videoRef = useRef(null);
  const isMounted = useRef(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Precargar imágenes para móviles
  useEffect(() => {
    if (isMobile) {
      backgroundImages.mobile.forEach(img => {
        new Image().src = img.replace('url("', '').replace('")', '');
      });
    }
  }, [isMobile]);

  // Efecto de glitch aleatorio
  useEffect(() => {
    if (!gameStarted) return;
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 100 + Math.random() * 200);
      }
    }, 5000);
    return () => clearInterval(glitchInterval);
  }, [gameStarted]);

  // Control de audio
  useEffect(() => {
    isMounted.current = true;
    const audio = audioRef.current;
    audio.loop = true;
    if (isPlaying) audio.play().catch(console.error);
    return () => {
      audio.pause();
      isMounted.current = false;
    };
  }, [isPlaying]);

  // Cambiar fondo cada 10 aciertos
  useEffect(() => {
    if (gameStarted && !gameOver && !gameCompleted) {
      const nextIndex = Math.min(Math.floor(correctAnswers / 10) + 1, backgroundImages.desktop.length - 1);
      setBackgroundImageIndex(nextIndex);
    }
  }, [correctAnswers, gameStarted, gameOver, gameCompleted]);

  const toggleSound = () => setIsPlaying(!isPlaying);

  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    setCurrentQuestion(questions[0]);
    setScore(0);
    setCorrectAnswers(0);
    setGameOver(false);
    setGameCompleted(false);
    setShowPennywiseVideo(false);
    setBackgroundImageIndex(1);
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 500);
  };

  const handleAnswerSelection = (selectedOption) => {
    clickSoundRef.current.play();
    setSelectedAnswer(selectedOption);
    const isCorrect = String(selectedOption).toLowerCase() === String(currentQuestion.correctAnswer).toLowerCase();

    if (isCorrect) {
      const newScore = score + 1;
      const newCorrectAnswers = correctAnswers + 1;
      setScore(newScore);
      setCorrectAnswers(newCorrectAnswers);
      
      if (currentQuestionIndex + 1 < questions.length) {
        setGlitchEffect(true);
        setTimeout(() => {
          setGlitchEffect(false);
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setCurrentQuestion(questions[currentQuestionIndex + 1]);
          setSelectedAnswer(null);
        }, 300);
      } else {
        setGameCompleted(true);
      }
    } else {
      setIsPlaying(false);
      setShowPennywiseVideo(true);
      videoRef.current?.play();
    }
  };

  const handleVideoEnd = () => {
    setShowPennywiseVideo(false);
    setGameOver(true);
  };

  const resetGame = () => {
    setGlitchEffect(true);
    setTimeout(() => {
      setGlitchEffect(false);
      setGameStarted(false);
      setGameOver(false);
      setGameCompleted(false);
      setShowPennywiseVideo(false);
      setCurrentQuestionIndex(0);
      setCurrentQuestion(questions[0]);
      setSelectedAnswer(null);
      setScore(0);
      setCorrectAnswers(0);
      setBackgroundImageIndex(0);
      setIsPlaying(true);
    }, 500);
  };

  const getAnswerImageSize = () => ({
    width: isMobile ? '120px' : '200px',
    height: isMobile ? '90px' : '150px'
  });

  // Estilo principal SIN filtros oscuros
  const mainContainerStyle = {
    backgroundColor: 'black',
    backgroundImage: isMobile 
      ? backgroundImages.mobile[backgroundImageIndex] 
      : backgroundImages.desktop[backgroundImageIndex],
    backgroundSize: isMobile ? 'contain' : 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    fontFamily: "'Courier New', monospace",
    textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000'
  };

  return (
    <div className="min-h-screen text-white p-4 relative flex flex-col items-center justify-center overflow-hidden"
         style={mainContainerStyle}>
      
      {/* Efectos visuales muy sutiles */}
      <div style={retroStyles.bloodDrips} />
      <div style={retroStyles.scanlines} />
      <div style={retroStyles.crtEffect} />
      
      {glitchEffect && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(0deg, transparent 0%, rgba(255,0,0,0.1) 50%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 5,
          animation: 'vhsGlitch 0.3s linear'
        }} />
      )}

      <Link to="/" className="absolute top-4 right-4 hover:text-red-500 text-4xl font-bold transition duration-300 z-20"
            style={{ 
              textDecoration: 'none',
              fontFamily: "'Creepster', cursive",
              textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
            }}>
        ☠
      </Link>

      {showPennywiseVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <video ref={videoRef} src={pennywiseLaugh} autoPlay onEnded={handleVideoEnd} 
                 className="w-full h-full object-contain" />
        </div>
      )}

      <div className="relative z-10 text-center w-full max-w-md md:max-w-6xl px-4">
        {!gameStarted ? (
          <div className="animate-flicker">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 tracking-widest uppercase"
                style={{
                  fontFamily: "'Creepster', cursive",
                  color: '#ff0000',
                  textShadow: '3px 3px 0 #000, 5px 5px 0 #8b0000',
                  lineHeight: '1.2',
                  animation: 'pulse 2s infinite alternate'
                }}>
              Horror Quiz
              <br />
              <span className="text-xl md:text-2xl lg:text-4xl block mt-2 md:mt-4" 
                    style={{ fontFamily: "'Courier New', monospace" }}>
                ¿Cuántas preguntas serás capaz de acertar?
              </span>
            </h1>
            <button className="relative overflow-hidden bg-transparent border-2 md:border-4 border-red-600 text-red-500 font-bold py-2 md:py-4 px-4 md:px-8 rounded-none text-lg md:text-xl uppercase tracking-widest mt-4 md:mt-8 hover:bg-red-600 hover:text-white transition duration-300 group"
                    onClick={startGame}
                    style={{
                      fontFamily: "'Creepster', cursive",
                      letterSpacing: '0.3em',
                      boxShadow: '0 0 15px rgba(255, 0, 0, 0.7)'
                    }}>
              <span className="relative z-10">Comenzar</span>
              <span className="absolute inset-0 bg-red-800 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500 opacity-70"></span>
            </button>
            
            <div className="mt-6 md:mt-12 text-yellow-400 text-xs md:text-sm lg:text-base bg-black/60 p-2" 
                 style={{ fontFamily: "'Courier New', monospace" }}>
              <p>⚠ ADVERTENCIA: Este juego contiene elementos de terror</p>
              <p className="mt-1 md:mt-2">No recomendado para menores de 18 años</p>
            </div>
          </div>
        ) : gameOver ? (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center p-4 md:p-6"
               style={{ backdropFilter: 'blur(3px)' }}>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 uppercase tracking-widest"
                style={{
                  fontFamily: "'Creepster', cursive",
                  color: '#ff0000',
                  textShadow: '5px 5px 0 #000, 8px 8px 0 #8b0000',
                  animation: 'shake 0.5s infinite alternate'
                }}>
              GAME OVER
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6"
               style={{
                 fontFamily: "'Courier New', monospace",
                 textShadow: '0 0 5px #ff0000'
               }}>
              Acertaste <span className="text-red-500 font-bold">{score}</span> de <span className="text-red-500 font-bold">{questions.length}</span> preguntas.
            </p>
            <button className="relative overflow-hidden bg-transparent border-2 md:border-4 border-red-600 text-red-500 font-bold py-3 md:py-4 px-4 md:px-6 rounded-none text-base md:text-lg uppercase tracking-widest hover:bg-red-600 hover:text-white transition duration-300 group flex items-center justify-center"
                    onClick={resetGame}
                    style={{
                      fontFamily: "'Creepster', cursive",
                      letterSpacing: '0.3em',
                      boxShadow: '0 0 15px rgba(255, 0, 0, 0.7)'
                    }}>
              <span className="relative z-10">Volver a intentar</span>
              <span className="absolute inset-0 bg-red-800 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500 opacity-70"></span>
            </button>
          </div>
        ) : gameCompleted ? (
          <div className="animate-flicker">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 uppercase tracking-widest"
                style={{
                  fontFamily: "'Creepster', cursive",
                  color: '#00ff00',
                  textShadow: '5px 5px 0 #000, 8px 8px 0 #006400',
                  animation: 'glow-green 1s infinite alternate'
                }}>
              YOU WIN
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6"
               style={{
                 fontFamily: "'Courier New', monospace",
                 textShadow: '0 0 5px #00ff00'
               }}>
              Acertaste <span className="text-green-500 font-bold">{score}</span> de <span className="text-green-500 font-bold">{questions.length}</span> preguntas.
            </p>
            <button className="relative overflow-hidden bg-transparent border-2 md:border-4 border-green-600 text-green-500 font-bold py-2 md:py-3 px-4 md:px-6 rounded-none text-base md:text-lg uppercase tracking-widest hover:bg-green-600 hover:text-white transition duration-300 group"
                    onClick={resetGame}
                    style={{
                      fontFamily: "'Creepster', cursive",
                      letterSpacing: '0.3em',
                      boxShadow: '0 0 15px rgba(0, 255, 0, 0.7)'
                    }}>
              <span className="relative z-10">Volver a jugar</span>
              <span className="absolute inset-0 bg-green-600 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
            </button>
          </div>
        ) : (
          <>
            {currentQuestion && (
              <div className="mb-4 md:mb-8 animate-fadeIn">
                <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 px-2 md:px-4 py-3 md:py-6 border-b-2 border-t-2 border-red-700"
                    style={{
                      fontFamily: "'Creepster', cursive",
                      color: '#ff9900',
                      textShadow: '2px 2px 0 #8b0000, 4px 4px 0 #000',
                      lineHeight: '1.4',
                      background: 'rgba(0,0,0,0.5)'
                    }}>
                  {currentQuestion.question}
                </h2>
                <div className="grid grid-cols-2 gap-2 md:gap-4 w-full max-w-md mx-auto">
                  {currentQuestion.options.map((option, index) => {
                    const imageSize = getAnswerImageSize();
                    return (
                      <button key={index}
                              className={`transition duration-300 relative overflow-hidden ${
                                !isTouchDevice() ? 'group' : ''
                              } ${
                                option.type === 'text' 
                                  ? 'bg-black/70 hover:bg-black/90 border border-red-900 hover:border-red-600 text-white font-semibold py-2 md:py-4 px-2 md:px-4 text-sm md:text-lg'
                                  : 'border border-red-900 hover:border-red-600 mx-auto'
                              }`}
                              onClick={() => handleAnswerSelection(option.value)}
                              style={option.type === 'image' ? { 
                                width: imageSize.width, 
                                height: imageSize.height, 
                                backgroundImage: `url(${option.value})`, 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center',
                                boxShadow: '0 0 10px rgba(255,0,0,0.5)',
                                display: 'flex',
                                margin: '0 auto'
                              } : {
                                fontFamily: "'Courier New', monospace",
                                textShadow: '0 0 5px #ff0000',
                                boxShadow: '0 0 10px rgba(255,0,0,0.3)'
                              }}>
                        {option.type === 'text' && (
                          <>
                            <span className="relative z-10">{option.value}</span>
                            {!isTouchDevice() && (
                              <span className="absolute inset-0 bg-red-800 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500 opacity-70"></span>
                            )}
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <p className="text-base md:text-lg lg:text-xl mt-4 md:mt-6 py-1 md:py-2 px-2 md:px-4 bg-black/50 border border-red-900"
               style={{
                 fontFamily: "'Courier New', monospace'",
                 color: '#ff9900',
                 textShadow: '0 0 5px #ff0000'
               }}>
              Aciertos: <span className="text-red-500 font-bold">{score}</span> de <span className="text-red-500 font-bold">{questions.length}</span>
            </p>
          </>
        )}
      </div>

      <button onClick={toggleSound}
              className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 md:p-3 transition duration-300 z-20 border border-red-900 hover:border-red-600"
              style={{ boxShadow: '0 0 10px rgba(255,0,0,0.5)' }}>
        <img src={isPlaying ? soundOnIcon : soundOffIcon}
             alt={isPlaying ? "Sonido activado" : "Sonido desactivado"}
             className="w-4 h-4 md:w-6 md:h-6" />
      </button>
    </div>
  );
}

export default QuizPage;