FROM node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src

# Install app dependencies
COPY package.json /usr/src/
RUN npm install

# Bundle app source
COPY app/. /usr/src/app

EXPOSE 8000
CMD [ "npm", "start" ]