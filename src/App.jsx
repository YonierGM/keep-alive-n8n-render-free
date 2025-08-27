import { useState, useEffect } from 'react';

// Define la URL de tu webhook de n8n usando una variable de entorno.
// Vite expone las variables de entorno con el prefijo VITE_.
// Se accede a ellas a través de import.meta.env.
// El valor de VITE_N8N_WEBHOOK_URL debe ser establecido en tu archivo .env
const N8N_WEBHOOK_URL = typeof import.meta.env.VITE_N8N_WEBHOOK_URL !== 'undefined' ? import.meta.env.VITE_N8N_WEBHOOK_URL : '';

function App() {
  const [lastPingStatus, setLastPingStatus] = useState('Esperando el primer ping...');
  const [lastPingTime, setLastPingTime] = useState(null);

  /**
   * Fetches the status from the n8n webhook and updates the state.
   */
  const pingN8n = async () => {
    // Check if the URL is defined before making the fetch request
    if (!N8N_WEBHOOK_URL) {
      setLastPingStatus('Error: La URL de n8n no está configurada en las variables de entorno.');
      return;
    }

    try {
      const response = await fetch(N8N_WEBHOOK_URL);
      const data = await response.json();

      if (response.ok) {
        setLastPingStatus(data.response);
        setLastPingTime(new Date());
      } else {
        setLastPingStatus(`Error: ${data.message || 'No se pudo conectar'}`);
      }
    } catch (error) {
      setLastPingStatus(`Error en la conexión: ${error.message}`);
    }
  };

  useEffect(() => {
    // Pingea la primera vez cuando el componente se monta
    pingN8n();

    // Configura un intervalo para pingear cada 10 minutos (600,000 ms)
    const intervalId = setInterval(pingN8n, 600000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  /**
   * Formats a Date object into a readable string (e.g., "27-Agosto-2025 02:30 PM").
   * @param {Date} date - The date object to format.
   * @returns {string} The formatted date string.
   */
  const formatTime = (date) => {
    if (!date) return 'N/A';
    
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/New_York',
    };

    return new Intl.DateTimeFormat('es-ES', options).format(date);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-lg text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold mb-4">Estado del Webhook de n8n</h1>
        
        <div className="mt-6 p-4 bg-gray-200 dark:bg-gray-700 rounded-xl transition-colors duration-300">
          <p className="text-lg font-semibold">Último estado recibido:</p>
          <p className="mt-2 text-2xl font-extrabold text-green-600 dark:text-green-400">
            {lastPingStatus}
          </p>
        </div>

        <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-700 rounded-xl transition-colors duration-300">
          <p className="text-lg font-semibold">Último ping exitoso:</p>
          <p className="mt-2 text-xl font-medium text-gray-700 dark:text-gray-300">
            {formatTime(lastPingTime)}
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Esta interfaz se actualiza automáticamente cada 10 minutos.
        </p>
      </div>
    </div>
  );
}

export default App;
