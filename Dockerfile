FROM node:12.21

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json yarn.lock /usr/src/app/
RUN yarn

ADD . /usr/src/app
ENV REACT_APP_ECHO_SERVER_BASE=
RUN yarn build

FROM nginx:1.19

ADD config/nginx.conf /etc/nginx/templates/default.conf.template

RUN mkdir -p /var/www
COPY --from=0 /usr/src/app/build/ /var/www

EXPOSE 80

RUN nginx -t
