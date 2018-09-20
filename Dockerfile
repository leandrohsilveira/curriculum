FROM node
LABEL maintainer 'Leandro Hinckel Silveira <leandro.hinckel at gmail.com>'

COPY . /app

WORKDIR /app
RUN yarn

EXPOSE 3000

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]