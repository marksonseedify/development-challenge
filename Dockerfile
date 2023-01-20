FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY project/backend/src/package.json /usr/src/app
RUN yarn

# Install nodemon
RUN yarn global add nodemon

# Bundle app source
COPY project/backend/src/ .

EXPOSE 3000
CMD ["yarn", "start"]