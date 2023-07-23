FROM jakejarvis/hugo-extended:latest
VOLUME /src
EXPOSE 1313
USER root
ADD . /src
WORKDIR /src/themes/tomoya-2023
RUN npm install
WORKDIR /src
ENTRYPOINT hugo --gc --minify
