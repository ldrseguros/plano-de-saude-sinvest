#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🚀 Configuração automática do Backend Brasil Saúde SINVEST");
console.log("=".repeat(60));

// Template do arquivo .env
const envTemplate = `# ========================================
# CONFIGURAÇÕES DO BANCO DE DADOS
# ========================================

# IMPORTANTE: Substitua pela sua URL do Neon Database
DATABASE_URL="postgresql://username:password@hostname:5432/database_name?sslmode=require"

# ========================================
# CONFIGURAÇÕES DE SEGURANÇA
# ========================================

# JWT Secret - Use uma chave forte em produção
JWT_SECRET="brasil-saude-sinvest-jwt-secret-${Date.now()}"

# ========================================
# CONFIGURAÇÕES DO SERVIDOR
# ========================================

# Porta do servidor
PORT=3001

# Ambiente (development, production)
NODE_ENV=development

# URLs do frontend
FRONTEND_URL=http://localhost:8080
PRODUCTION_FRONTEND_URL=https://seu-dominio.vercel.app

# URL base da aplicação
BASE_URL=http://localhost:3001

# ========================================
# CONFIGURAÇÕES DE RATE LIMITING
# ========================================

RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# ========================================
# CONFIGURAÇÕES DE EMAIL
# ========================================

# Servidor SMTP
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false

# Credenciais de autenticação
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-app-gmail

# Email para onde enviar notificações de adesão
EMAIL_NOTIFICACAO=adesoes@sinvest.com.br

# ========================================
# CONFIGURAÇÕES DE WHATSAPP
# ========================================

# Tipo de API WhatsApp (twilio, messagebird, whatsapp-business, generic)
WHATSAPP_API_TYPE=generic

# URL da API WhatsApp
WHATSAPP_API_URL=https://api.exemplo.com/v1/messages

# Chave de API
WHATSAPP_API_KEY=sua-chave-de-api-aqui

# Números de telefone
WHATSAPP_NUMERO_ORIGEM=+5562999999999
WHATSAPP_NUMERO_DESTINO=+5562888888888
`;

// Função para criar arquivo .env
function createEnvFile() {
  const envPath = path.join(__dirname, ".env");

  if (fs.existsSync(envPath)) {
    console.log("⚠️  Arquivo .env já existe!");
    console.log(
      "   Para recriá-lo, delete o arquivo atual e execute novamente."
    );
    return false;
  }

  try {
    fs.writeFileSync(envPath, envTemplate);
    console.log("✅ Arquivo .env criado com sucesso!");
    console.log(`   Localização: ${envPath}`);
    return true;
  } catch (error) {
    console.error("❌ Erro ao criar arquivo .env:", error.message);
    return false;
  }
}

// Função para verificar dependências
function checkDependencies() {
  const packageJsonPath = path.join(__dirname, "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    console.log("❌ package.json não encontrado!");
    return false;
  }

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    const requiredDeps = [
      "@prisma/client",
      "express",
      "cors",
      "helmet",
      "dotenv",
      "bcryptjs",
      "jsonwebtoken",
    ];

    const missingDeps = requiredDeps.filter(
      (dep) => !packageJson.dependencies[dep]
    );

    if (missingDeps.length > 0) {
      console.log("❌ Dependências faltando:", missingDeps.join(", "));
      console.log("   Execute: npm install");
      return false;
    }

    console.log("✅ Todas as dependências estão instaladas!");
    return true;
  } catch (error) {
    console.error("❌ Erro ao verificar dependências:", error.message);
    return false;
  }
}

// Função para criar diretórios necessários
function createDirectories() {
  const dirs = ["uploads", "uploads/pdfs", "uploads/documents", "logs"];

  let success = true;

  dirs.forEach((dir) => {
    const dirPath = path.join(__dirname, dir);

    if (!fs.existsSync(dirPath)) {
      try {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`✅ Diretório criado: ${dir}`);
      } catch (error) {
        console.error(`❌ Erro ao criar diretório ${dir}:`, error.message);
        success = false;
      }
    } else {
      console.log(`✅ Diretório já existe: ${dir}`);
    }
  });

  return success;
}

// Função principal
async function main() {
  console.log("1. Verificando dependências...");
  const depsOk = checkDependencies();

  console.log("\\n2. Criando arquivo .env...");
  const envOk = createEnvFile();

  console.log("\\n3. Criando diretórios necessários...");
  const dirsOk = createDirectories();

  console.log("\\n" + "=".repeat(60));
  console.log("📋 PRÓXIMOS PASSOS:");
  console.log("");

  if (!depsOk) {
    console.log("1. Execute: npm install");
  }

  if (envOk) {
    console.log("2. Edite o arquivo .env e configure:");
    console.log("   - DATABASE_URL (sua URL do Neon)");
    console.log("   - EMAIL_USER e EMAIL_PASSWORD (para notificações)");
    console.log("   - FRONTEND_URL (URL do seu frontend)");
  }

  console.log("3. Execute as migrações do banco:");
  console.log("   npx prisma generate");
  console.log("   npx prisma migrate deploy");

  console.log("\\n4. Inicie o servidor:");
  console.log("   npm run dev");

  console.log("\\n5. Acesse: http://localhost:3001/health");
  console.log("   Para verificar se tudo está funcionando!");

  console.log("\\n🎯 CONFIGURAÇÃO DA URL DO NEON:");
  console.log("1. Acesse: https://console.neon.tech/");
  console.log("2. Selecione seu projeto");
  console.log('3. Vá em "Connection Details"');
  console.log('4. Copie a "Connection string"');
  console.log("5. Cole no DATABASE_URL do arquivo .env");

  console.log("\\n✨ Tudo pronto! Bom desenvolvimento!");
}

// Executar
main().catch(console.error);
