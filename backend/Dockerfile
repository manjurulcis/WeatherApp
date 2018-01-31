FROM node:latest

# set working directory
COPY . /src
WORKDIR /src

# install app dependencies
ADD package.json package.json
RUN npm install

# start app
CMD ["npm", "start"]