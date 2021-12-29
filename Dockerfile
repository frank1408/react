# PULL OFFICIAL BASE IMAGE
#FROM node:13.12.0-alpine
FROM node:17-alpine3.12 

# SET WORKING DIRECTORY INSIDE CONTAINER
WORKDIR /app

# ADD  TO /opt/homebrew/bin:/Users/xmen/bin:/Users/xmen/all/java.maven.spring/maven/bin:/usr/local/bin:/Users/xmen/Library/Python/3.8/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:/opt/X11/bin:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands
ENV PATH /app/node_modules/.bin:/opt/homebrew/bin:/Users/xmen/bin:/Users/xmen/all/java.maven.spring/maven/bin:/usr/local/bin:/Users/xmen/Library/Python/3.8/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:/opt/X11/bin:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands

# INSTALL APP DEPENDENCIES
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# ADD APP
COPY . ./


# START APP PRODUCTION MODE ???
###RUN npm install -g serve  --silent
###RUN npm run build #CMD ["npm", "run", "build"] 
###CMD ["serve" "-s" "build"]
# START APP PRODUCTION MODE ???


# START APP DEV MODE
CMD ["npm", "start"] 
