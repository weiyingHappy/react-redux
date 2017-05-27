FROM debian:jessie
MAINTAINER kerker <yes-reply@linux.com>

RUN apt-get update \
    && apt-get -y install apache2 \

# 用完包管理器后安排打扫卫生可以显著的减少镜像大小
    && apt-get clean \
    && apt-get autoclean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /var/www/html/* 
ADD . /var/www/html/


EXPOSE 80
CMD ["apache2ctl", "-D", "FOREGROUND"]

#usage:
#docker build -t <REPO_NAME> .
#docker run -d -p <PORT>:80 <REPO_NAME>