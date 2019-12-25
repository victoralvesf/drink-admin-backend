FROM node:10

LABEL maintainer="Victor Alves <viictor.alvess12@gmail.com>"

WORKDIR /var/www/app

COPY . .

COPY init.sh /init.sh

RUN chmod 755 /init.sh

CMD ["/init.sh"]
