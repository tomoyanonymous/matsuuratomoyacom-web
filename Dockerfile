FROM jakejarvis/hugo-extended:latest
VOLUME /src
EXPOSE 1313
USER root
ADD . /src
RUN hugo mod get -u
RUN hugo mod npm pack
RUN npm install
WORKDIR /src
ENTRYPOINT hugo --gc --minify
