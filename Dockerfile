FROM debian:jessie
MAINTAINER kerker <yes-reply@linux.com>


EXPOSE 80
ENV NODE_ENV test
RUN apt-get update \
    && apt-get -y install apache2 \

# 用完包管理器后安排打扫卫生可以显著的减少镜像大小
    && apt-get clean \
    && apt-get autoclean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /var/www/html/* \
    && echo "ServerName localhost" >> /etc/apache2/apache2.conf \
    && sed -i "s/AllowOverride None/AllowOverride All/g" /etc/apache2/apache2.conf \
    # enable rewrite mod:https://stackoverflow.com/questions/18740419/how-to-set-allowoverride-all
    && a2enmod rewrite



ADD . /tmp/
RUN cp -r /tmp/dist/* /var/www/html/ \
  && rm -rf /tmp/*




CMD ["apache2ctl", "-D", "FOREGROUND"]

#usage:
#docker build -t <REPO_NAME> .
#docker run -d -p <PORT>:80 <REPO_NAME>
