FROM node:16.13.1-alpine3.14

# Crea un usuario y grupo para la aplicación
RUN addgroup -S appgroup
RUN adduser node appgroup

# Crea la carpeta de registros de npm y cambia su propietario y permisos
RUN mkdir -p /root/.npm/_logs
RUN chown -R node:appgroup /root/.npm/_logs
RUN chmod -R 770 /root/.npm/_logs

# Cambia al usuario appuser para todos los comandos siguientes

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src

RUN npm install

CMD ["npm", "run", "dev", "npx"]
