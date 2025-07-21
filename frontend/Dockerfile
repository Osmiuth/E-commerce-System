FROM node:alpine
FROM --platform=linux/arm64 node:16


WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install \
    && npm install vite axios react-router-dom jwt-decode \
    && npm install vite @vitejs/plugin-react-refresh --save-dev \
    && npm install bootstrap@5.3.3 \
    && npm install -g vite \
    && npm install --save-dev @babel/preset-env \
    && npm install --save-dev @babel/preset-react \
    && npm install --save-dev @testing-library/react \
    && npm install --save-dev jest-environment-jsdom

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"]

