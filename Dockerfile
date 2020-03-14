FROM node:12.16.1-buster

RUN apt-get update
RUN apt-get install -y graphviz

ADD package.json /
RUN npm i

ADD src/ src/
EXPOSE 80
CMD npm start
