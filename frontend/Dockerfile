FROM node:12.16.1-slim

WORKDIR /frontend

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]