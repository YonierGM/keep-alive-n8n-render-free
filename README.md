# ⚡ Interfaz de Ping para el Webhook de n8n

Este es un proyecto simple de **React con Vite** que envía pings a un webhook de **n8n** para mantener una instancia gratuita de **Render.com** despierta y activa.

---

## ✨ Características

- 🔄 **Pinging automático:** Envía una solicitud a un webhook de **n8n** cada 10 minutos.
- 🖥 **Interfaz de usuario simple:** Muestra el estado del último ping y la hora del último ping exitoso.
- 🔐 **Variables de entorno seguras:** Utiliza `.env` para proteger la URL de tu webhook.

---

## 📋 Requisitos

- [Node.js](https://nodejs.org/) (versión **14 o superior**)
- Un **webhook de n8n** configurado para responder con un mensaje.
- Una instancia de **Render.com** (Plan gratuito).

---

## 🚀 Configuración e instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/YonierGM/keep-alive-n8n-render-free
   cd keep-alive-n8n-render-free
---

2. **Instala las dependencias:**
   ```bash
   npm install
---

3. **Configura el archivo .env:**
   Crea un archivo .env en la raíz del proyecto con el contenido:
   ```bash
   VITE_N8N_WEBHOOK_URL=https://tu-webhook-de-n8n.com/webhook/keep-alive
---

4. **Uso:**
   Ejecuta el proyecto en modo desarrollo:
   ```bash
   npm run dev
---
