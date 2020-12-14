FROM node:12.19.0-alpine3.12

ENV PORT 80

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN yarn add

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn run build
EXPOSE 80

# Running the app
CMD "yarn" "start"