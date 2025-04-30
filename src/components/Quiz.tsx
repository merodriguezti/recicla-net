import React, { useState } from 'react';

interface Question {
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  imagen?: string;
}

const preguntas: Question[] = [
  {
    pregunta: "¿En qué color de caneca se depositan los residuos orgánicos?",
    opciones: ["Caneca Blanca", "Caneca Verde", "Caneca Negra"],
    respuestaCorrecta: 1,
    imagen: "https://www.canecasdereciclaje.com/cdn/shop/files/cabe_b5c819348a9f8f71512303d1494725ad.png?v=1683126527&width=1500"
  },
  {
    pregunta: "¿Qué tipo de residuos van en la caneca blanca?",
    opciones: ["Residuos orgánicos", "Papel higiénico usado", "Plásticos y vidrios limpios"],
    respuestaCorrecta: 2,
    imagen: "https://www.canecasdereciclaje.com/cdn/shop/files/cabe_b5c819348a9f8f71512303d1494725ad.png?v=1683126527&width=1500"
  },
  {
    pregunta: "¿Cuál de las siguientes acciones NO es parte de las 3R?",
    opciones: ["Reducir", "Reciclar", "Romper"],
    respuestaCorrecta: 2,
    imagen: "https://www.canecasdereciclaje.com/cdn/shop/files/cabe_b5c819348a9f8f71512303d1494725ad.png?v=1683126527&width=1500"
  },
  {
    pregunta: "¿Qué residuos se consideran orgánicos?",
    opciones: ["Botellas de plástico", "Cáscaras de frutas", "Papel usado"],
    respuestaCorrecta: 1,
    imagen: "https://www.canecasdereciclaje.com/cdn/shop/files/cabe_b5c819348a9f8f71512303d1494725ad.png?v=1683126527&width=1500"
  },
  {
    pregunta: "¿Qué debes hacer con una botella de plástico antes de reciclarla?",
    opciones: ["Romperla", "Limpiarla", "Dejarla con líquido"],
    respuestaCorrecta: 1,
    imagen: "https://www.canecasdereciclaje.com/cdn/shop/files/cabe_b5c819348a9f8f71512303d1494725ad.png?v=1683126527&width=1500"
  }
];

interface QuizProps {
  onClose: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [message, setMessage] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  const handleAnswerClick = (selectedAnswer: number) => {
    setShowFeedback(true);
    if (selectedAnswer === preguntas[currentQuestion].respuestaCorrecta) {
      setScore(score + 1);
      setMessage('¡Correcto! 🎉');
    } else {
      setMessage('Incorrecto 😢');
    }

    setTimeout(() => {
      setShowFeedback(false);
      setMessage('');
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < preguntas.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setMessage('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-primary">Juego de Preguntas</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✖
          </button>
        </div>

        {showScore ? (
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              ¡Has completado el cuestionario!
            </h3>
            <p className="text-base sm:text-lg mb-4">
              Tu puntuación es: {score} de {preguntas.length}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={resetQuiz}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Intentar de nuevo
              </button>
              <button
                onClick={onClose}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-500">
                Pregunta {currentQuestion + 1} de {preguntas.length}
              </span>
              <span className="text-xs sm:text-sm font-bold">
                Puntuación: {score}
              </span>
            </div>

            {preguntas[currentQuestion].imagen && (
              <div className="relative w-full h-20 sm:h-25 overflow-hidden rounded-lg bg-gray-100">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                )}
                <img
                  src={preguntas[currentQuestion].imagen}
                  alt="Ilustración de la pregunta"
                  className={`w-full h-full object-contain transition-opacity duration-300 ${
                    imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </div>
            )}

            <h3 className="text-lg sm:text-xl font-bold">
              {preguntas[currentQuestion].pregunta}
            </h3>

            <div className="space-y-2 sm:space-y-3">
              {preguntas[currentQuestion].opciones.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showFeedback}
                  className={`w-full p-3 sm:p-4 text-left rounded-lg transition-colors text-sm sm:text-base ${
                    showFeedback
                      ? index === preguntas[currentQuestion].respuestaCorrecta
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-gray-100'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {opcion}
                </button>
              ))}
            </div>

            {message && (
              <div className={`mt-4 text-center text-lg sm:text-xl font-bold ${
                message.includes('Correcto') ? 'text-green-600' : 'text-red-600'
              }`}>
                {message}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz; 