# PULL OFFICIAL BASE IMAGE
#FROM node:13.12.0-alpine
#FROM node:17-alpine3.12 
FROM node:18.0.0-alpine3.14

# SET WORKING DIRECTORY INSIDE CONTAINER
WORKDIR /app

# ADD MIPATH
ENV PATH :/opt/homebrew/bin:/Users/xmen/bin:/Users/xmen/all/java.maven.spring/maven/bin:/usr/local/bin:/Users/xmen/Library/Python/3.8/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:/opt/X11/bin:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands

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

