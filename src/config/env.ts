// Configuração de ambiente para o frontend

// Detectar ambiente
const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

// URLs base por ambiente
const PRODUCTION_API_URL = "https://seu-backend-da-sinvest.onrender.com"; // Substitua pela URL real do seu deploy
const DEVELOPMENT_API_URL = "http://localhost:5000"; // Porta correta do backend (5000)

// Configurações
const config = {
  // API
  API_URL: isProduction ? PRODUCTION_API_URL : DEVELOPMENT_API_URL,

  // Ambiente
  IS_PRODUCTION: isProduction,
  IS_DEVELOPMENT: isDevelopment,

  // Frontend
  FRONTEND_URL: isProduction
    ? "https://seu-dominio-sinvest.vercel.app" // Substitua pela URL real do seu frontend
    : "http://localhost:8081", // Porta correta do frontend
};

export default config;
