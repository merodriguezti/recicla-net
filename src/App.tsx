import React, { useState } from 'react';
import Book from './components/Book';
import './index.css';

function App() {
  const [showBook, setShowBook] = useState(false);

  const handleReturnToHome = () => {
    setShowBook(false);
  };

  if (!showBook) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md">
          <img 
            src="/imagenes/Logo.png" 
            alt="Logo ReciclaNet" 
            className="w-48 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-primary mb-4">ReciclaNet</h1>
          <p className="text-gray-700 mb-6">Libro interactivo sobre reciclaje</p>
          <button
            onClick={() => setShowBook(true)}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Empezar 📖
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Book onReturnToHome={handleReturnToHome} />
    </div>
  );
}

export default App; 