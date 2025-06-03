# 🎯 Credenciais de Demonstração - Sistema Administrativo

## 📋 Informações de Acesso

Para acessar o painel administrativo em modo demonstração, utilize as seguintes credenciais:

### 🔐 Login de Administrador

- **URL:** `/admin/login`
- **Usuário:** `admin`
- **Senha:** `123456`

### 🚀 Como Acessar

1. Acesse a página: `https://seu-dominio.com/admin/login`
2. Clique no botão **"🎯 Usar Credenciais de Demo"**
3. As credenciais serão preenchidas automaticamente
4. Clique em **"Entrar (Demo)"**
5. Você será redirecionado para o painel administrativo

### ⚡ Modo Demo Ativado

Quando o modo demo estiver ativado, você verá:

- ✅ Chip verde "Modo Demo Ativado"
- 🔒 Botão de login verde "Entrar (Demo)"
- 📝 Credenciais visíveis: "admin / 123456"

### 🔧 Funcionalidades Disponíveis

No painel administrativo você pode:

- 📊 Visualizar dashboard com estatísticas
- 👥 Gerenciar leads e usuários
- 📋 Ver detalhes de adesões
- 🔄 Atualizar status de leads
- 📄 Baixar documentos (se configurado)
- ✏️ Editar informações de usuários
- 🗑️ Remover usuários

### 🛡️ Segurança

- O sistema mock é **apenas para demonstração**
- As credenciais são armazenadas localmente no navegador
- Para logout, clique no botão "Sair" no cabeçalho do admin
- Os dados são mockados e não afetam o banco de dados real

### 🔄 Reset do Sistema

Para resetar o sistema demo:

1. Faça logout pelo painel admin, ou
2. Limpe o localStorage do navegador, ou
3. Use as ferramentas de desenvolvedor para remover:
   - `mock_admin_token`
   - `mock_admin_user`

---

## 🌐 Deploy na Vercel

### Problema da Logo Resolvido ✅

O problema da logo não aparecer no deploy foi corrigido:

- **Antes:** Caminho absoluto `/src/assets/images/sinvest-logo.png`
- **Depois:** Import direto `import logoSinvest from "@/assets/images/sinvest-logo.png"`

### Arquivos Atualizados

- `src/components/Header.tsx`
- `src/components/Footer.tsx`

A logo agora funcionará corretamente tanto em desenvolvimento quanto em produção na Vercel.

---

💡 **Dica:** Este sistema foi criado especificamente para demonstrações ao cliente, permitindo acesso rápido ao painel sem necessidade de configuração de backend.
