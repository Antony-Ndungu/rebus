FROM node:8
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app
RUN npm install
COPY . /src/app
CMD ["npm", "start"]


