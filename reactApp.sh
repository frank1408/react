#!/bin/bash
echo "DIC 29 2021 11:45:33 FUNCIONA"

# ESTE SCRIPT DEBE EJECUTARSE EN LA CARPETA RAIZ DEL PROYECTO
cat > Dockerfile << EOF
# PULL OFFICIAL BASE IMAGE
#FROM node:13.12.0-alpine
FROM node:17-alpine3.12 

# SET WORKING DIRECTORY INSIDE CONTAINER
WORKDIR /app

# ADD `/app/node_modules/.bin` TO $PATH
ENV PATH `/app/node_modules/.bin`:$PATH

# INSTALL APP DEPENDENCIES
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install axios --silent
RUN npm install react-scripts@3.4.1 -g --silent

# ADD APP
COPY . ./


# START APP PRODUCTION MODE ??? ALGO FALTA...
###RUN npm install -g serve  --silent
###RUN npm run build #CMD ["npm", "run", "build"] 
###CMD ["serve" "-s" "build"]
# START APP PRODUCTION MODE ??? ALGO FALTA...


# START APP DEV MODE
CMD ["npm", "start"] 
EOF

cat > .dockerignore << EOF
node_modules
build
.dockerignore
Dockerfile
Dockerfile.prod
EOF



# BUILD AND TAG
docker build -t reactappdocker:dev .

# EJECUTAR CONTENEDOR
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true reactappdocker:dev # si hay error, agregar este volumen -v /app/package.json


echo "OPEN YOUR BROWSER TO http://localhost:3001"





## OPCION ALTERNATIVA PARA DESARROLLO
#cat > docker-compose.yml << EOF
#version: '3.7'
#
#services:
#
#  sample:
#    container_name: sample
#    build:
#      context: .
#      dockerfile: Dockerfile
#    volumes:
#      - '.:/app'
#      - '/app/node_modules'
#    ports:
#      - 3001:3000
#    environment:
#      - CHOKIDAR_USEPOLLING=true
#
#EOF
## BUILD THE IMAGE AND FIRE UP THE CONTAINER:
#docker-compose up -d --build











## OPCION ALTERNATIVA AMBIENTE PRODUCCION
#mkdir nginx; cd nginx;
#cat > nginx.conf << EOF
#server {
#
#  listen 80;
#
#  location / {
#    root   /usr/share/nginx/html;
#    index  index.html index.htm;
#    try_files $uri $uri/ /index.html;
#  }
#
#  error_page   500 502 503 504  /50x.html;
#
#  location = /50x.html {
#    root   /usr/share/nginx/html;
#  }
#
#}
#EOF
#cd ..
#cat > Dockerfile.prod << EOF
## BUILD ENVIRONMENT
#FROM node:13.12.0-alpine as build
#WORKDIR /app
#ENV PATH /app/node_modules/.bin:$PATH
#COPY package.json ./
#COPY package-lock.json ./
#RUN npm ci --silent
#RUN npm install react-scripts@3.4.1 -g --silent
#COPY . ./
#RUN npm run build
#
## PRODUCTION ENVIRONMENT
#FROM nginx:stable-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
#EOF

##USING THE PRODUCTION DOCKERFILE, BUILD AND TAG THE DOCKER IMAGE:
#docker build -f Dockerfile.prod -t sample:prod .
##SPIN UP THE CONTAINER:
#docker run -it --rm -p 1337:80 sample:prod
#echo "NAVIGATE TO http://localhost:1337/ IN YOUR BROWSER TO VIEW THE APP."


exit 0;
