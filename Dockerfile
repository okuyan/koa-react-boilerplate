FROM node:6
 
RUN useradd --user-group --create-home --shell /bin/false app
 
ENV HOME=/home/app

COPY package.json $HOME/koa-react-app/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/koa-react-app
RUN npm install
