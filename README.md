Interfaz de ping para el webhook de n8n
Este es un proyecto simple de React con Vite que envía pings a un webhook de n8n para mantener una instancia gratuita de Render.com despierta y activa.

Características
Pinging automático: Envía una solicitud a un webhook de n8n cada 10 minutos.

Interfaz de usuario simple: Muestra el estado del último ping y la hora del último ping exitoso.

Variables de entorno seguras: Utiliza variables de entorno para proteger la URL de tu webhook.

Requisitos
Node.js (versión 14 o superior)

Un webhook de n8n configurado para responder con un mensaje.

Una instancia de Render.com (Plan gratuito).

Configuración e instalación
Clona el repositorio en tu máquina local:

git clone https://github.com/YonierGM/keep-alive-n8n-render-free
cd keep-alive-n8n-render-free

Instala las dependencias del proyecto:

npm install

Crea un archivo .env en la raíz de tu proyecto con la URL de tu webhook de n8n:

VITE_N8N_WEBHOOK_URL="TU_WEBHOOK_URL_AQUI"

Importante: Asegúrate de reemplazar TU_WEBHOOK_URL_AQUI con la URL real de tu webhook.

Añade el archivo .env a tu .gitignore para que no se suba al repositorio de GitHub:

# .gitignore

Para ejecutar la aplicación en modo de desarrollo:

npm run dev
