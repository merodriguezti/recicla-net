import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Quiz from './Quiz';
import '../styles/animations.css';

interface Page {
  id: number;
  title: string;
  content: string;
  image?: string;
  audio?: string;
  video?: string;
  modalContent?: {
    title: string;
    audio: string;
    text: string;
  };
  hasQuiz?: boolean;
}

const pages: Page[] = [
  {
    id: 1,
    title: "Unidad 1: ¿Qué es el reciclaje?",
    content: "El reciclaje es cuando usamos de nuevo cosas que ya no necesitamos, como botellas, papel o cartón, para crear cosas nuevas. Así ayudamos a que no se llene el planeta de basura.",
    video: "/videos/botella.mp4"
  },
  {
    id: 2,
    title: "Unidad 2: Tipos de residuos",
    content: "Aprende sobre residuos orgánicos, reciclables e inservibles. Orgánicos: vienen de la naturaleza, como cáscaras de frutas o restos de comida. Reciclables: se pueden usar otra vez, como papel, cartón o botellas plásticas. Inservibles: no se pueden reutilizar, como el papel sucio o vidrios rotos.",
    audio: "/audios/Basura en su lugar.mp4",
    image: "/imagenes/gato.jpg",
    modalContent: {
      title: "🌿 Capítulo 1: Canecas♻️",
      audio: "/audios/Audio cap 1.mpeg",
      text: "Una mañana fría en Tunja, Sofía, una niña de 10 años con ojos grandes llenos de curiosidad, salió a explorar el Parque Pinzón con su gato y fiel compañero: Miau Miau..."
    }
  },
  {
    id: 3,
    title: "Unidad 3: Colores del reciclaje",
    content: "⚪ Blanca: Residuos reciclables limpios – Plásticos, botellas, latas, vidrio, papel y cartón (no sucios). ⚫ Negra: Residuos no reciclables – Papel higiénico, servilletas, papel y cartón sucios. 🟩 Verde: Residuos orgánicos – Restos de comida, cáscaras de frutas, desechos de jardín.",
    image: "/imagenes/rio.jpg",
    modalContent: {
      title: "🌊 Capítulo 2: El lamento del río",
      audio: "/audios/Audio cap 2.mpeg",
      text: "En una mañana un poco más fría de lo habitual Sofía se alista muy emocionada, en su colegio realizarán una excursión hacia el río Jordán..."
    }
  },
  {
    id: 4,
    title: "Unidad 4: Las 3R",
    content: "Las 3R nos ayudan a cuidar el planeta: Reducir: usar menos cosas que contaminan. Reutilizar: volver a usar objetos en vez de botarlos. Reciclar: transformar residuos en nuevos productos.",
    image: "/imagenes/Tunja.jpg",
    modalContent: {
      title: "Capítulo 3: El misterio de los desechos",
      audio: "/audios/Audio cap 3.mpeg",
      text: "Sofía se encuentra jugando en la Plaza Mayor de Tunja acompañada de su gato MiauMiau..."
    }
  },
  {
    id: 5,
    title: "Unidad 5: Pon a prueba tu conocimiento",
    content: "¡Es hora de demostrar lo que has aprendido!",
    video: "/videos/Retroalimentacion.mp4",
    hasQuiz: true
  }
];

interface BookProps {
  onReturnToHome: () => void;
}

const Book: React.FC<BookProps> = ({ onReturnToHome }: BookProps) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);

  const nextPage = (): void => {
    setDirection(1);
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = (): void => {
    setDirection(-1);
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progress = ((currentPage + 1) / pages.length) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-400 to-green-500 opacity-90">
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          {/* Hojas flotantes */}
          <div className="leaf leaf-1 animate-float-slow">🍃</div>
          <div className="leaf leaf-2 animate-float-medium">🌿</div>
          <div className="leaf leaf-3 animate-float-fast">🍀</div>
          <div className="leaf leaf-4 animate-float-slow">🌱</div>
          <div className="leaf leaf-5 animate-float-medium">🌾</div>
          
          {/* Telarañas */}
          <div className="web web-1 animate-pulse-slow"></div>
          <div className="web web-2 animate-pulse-medium"></div>
          <div className="web web-3 animate-pulse-slow"></div>
          <div className="web web-4 animate-pulse-medium"></div>
          <div className="web web-5 animate-pulse-slow"></div>
          
          {/* Gotas de agua */}
          <div className="water-drop drop-1 animate-drop-slow">💧</div>
          <div className="water-drop drop-2 animate-drop-medium">💧</div>
          <div className="water-drop drop-3 animate-drop-slow">💧</div>
          <div className="water-drop drop-4 animate-drop-medium">💧</div>
          <div className="water-drop drop-5 animate-drop-slow">💧</div>

          {/* Mariposas */}
          <div className="butterfly butterfly-1 animate-float-slow">🦋</div>
          <div className="butterfly butterfly-2 animate-float-medium">🦋</div>
          <div className="butterfly butterfly-3 animate-float-fast">🦋</div>
          <div className="butterfly butterfly-4 animate-float-slow">🦋</div>
          <div className="butterfly butterfly-5 animate-float-medium">🦋</div>

          {/* Flores */}
          <div className="flower flower-1 animate-pulse-slow">🌸</div>
          <div className="flower flower-2 animate-pulse-medium">🌺</div>
          <div className="flower flower-3 animate-pulse-slow">🌼</div>
          <div className="flower flower-4 animate-pulse-medium">🌻</div>
          <div className="flower flower-5 animate-pulse-slow">🌹</div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative p-1 sm:p-2">
        <div className="max-w-3xl mx-auto">
          {/* Barra de progreso */}
          <div className="mb-1 sm:mb-2 bg-white/80 backdrop-blur-sm rounded-full h-1 sm:h-2">
            <div
              className="bg-primary h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Indicador de página y botón de inicio */}
          <div className="flex justify-between items-center mb-1 sm:mb-2">
            <div className="text-white text-xs sm:text-sm">
              Página {currentPage + 1} de {pages.length}
            </div>
            <button
              onClick={onReturnToHome}
              className="px-2 sm:px-3 py-1 bg-secondary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center text-xs sm:text-sm"
            >
              🏠 Inicio
            </button>
          </div>

          {/* Contenedor del libro */}
          <div className="bg-white rounded-lg shadow-xl p-2 sm:p-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -1000 : 1000, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2 sm:space-y-3"
              >
                <h2 className="text-base sm:text-lg font-bold text-primary">{pages[currentPage].title}</h2>
                <p className="text-xs sm:text-sm text-gray-700">{pages[currentPage].content}</p>
                
                {pages[currentPage].image && (
                  <img 
                    src={pages[currentPage].image} 
                    alt={pages[currentPage].title}
                    className={`w-full ${
                      pages[currentPage].title.includes('Tunja') 
                        ? 'h-64 sm:h-80 object-contain' 
                        : 'h-48 sm:h-64 object-cover'
                    } rounded-lg shadow-md`}
                  />
                )}
                
                {pages[currentPage].video && (
                  <div className="relative w-full" style={{ paddingBottom: '45%' }}>
                    <video 
                      controls 
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    >
                      <source src={pages[currentPage].video} type="video/mp4" />
                      Tu navegador no soporta el video.
                    </video>
                  </div>
                )}

                {pages[currentPage].audio && (
                  <audio controls className="w-full text-xs">
                    <source src={pages[currentPage].audio} type="audio/mp3" />
                    Tu navegador no soporta el audio.
                  </audio>
                )}

                {pages[currentPage].modalContent && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="mt-1 sm:mt-2 px-2 sm:px-3 py-1 bg-primary text-white rounded-lg hover:bg-green-600 text-xs sm:text-sm"
                  >
                    Leer historia 📖
                  </button>
                )}

                {pages[currentPage].hasQuiz && (
                  <button
                    onClick={() => setShowQuiz(true)}
                    className="mt-1 sm:mt-2 px-3 sm:px-4 py-1 bg-secondary text-white rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm"
                  >
                    Jugar Cuestionario 🎮
                  </button>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Controles de navegación */}
            <div className="flex justify-between mt-2 sm:mt-3">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm ${
                  currentPage === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-green-600'
                }`}
              >
                ⬅ Anterior
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm ${
                  currentPage === pages.length - 1
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-green-600'
                }`}
              >
                Siguiente ➡
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de historia */}
      {showModal && pages[currentPage].modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-1 sm:p-2 z-50">
          <div className="bg-white rounded-lg p-2 sm:p-3 w-full max-w-xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h3 className="text-base sm:text-lg font-bold">{pages[currentPage].modalContent?.title}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm"
              >
                ✖
              </button>
            </div>
            <audio controls className="w-full mb-2 sm:mb-3 text-xs">
              <source src={pages[currentPage].modalContent?.audio} type="audio/mpeg" />
              Tu navegador no soporta el audio.
            </audio>
            <p className="text-xs sm:text-sm text-gray-700 whitespace-pre-line">
              {pages[currentPage].modalContent?.text}
            </p>
          </div>
        </div>
      )}

      {/* Modal del Quiz */}
      {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
    </div>
  );
};

export default Book; 