FROM node:buster
# Env
RUN useradd -u 8877 ayoinc
USER ayoinc
ENV TIME_ZONE=Europe/London
ENV ENV_NAME dev
ENV EGG_SERVER_ENV dev
ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev
# Set the timezone in docker
# RUN apk --update add tzdata
#    && cp /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime \\    && echo "Asia/Hong_Kong" > /etc/timezone \\   && apk del tzdata
# Create Directory for the Container
WORKDIR /usr/src/app
# # Copy all other source code to work directory
ADD . /usr/src/app
CMD ["npm", "install"]
# # Start
CMD [ "npm", "start" ]

EXPOSE 3000
