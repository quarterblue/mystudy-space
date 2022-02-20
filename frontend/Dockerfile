# FROM node:12.16.1-slim

# WORKDIR /frontend

# COPY package.json package.json
# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev"]

FROM node:17-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

# Building app
# RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]