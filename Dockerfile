# Use a imagem oficial do Node.js com Alpine como base
FROM node:18-alpine

# Defina o diretório de trabalho como /home/node/app
WORKDIR /home/node/app

# Copie os arquivos package.json e package-lock.json (se existir) e instale as dependências
COPY package*.json ./
RUN npm install

# Copie todo o código da aplicação e ajuste as permissões para o usuário node
COPY --chown=node:node . .

# Exponha a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "app.js"]
