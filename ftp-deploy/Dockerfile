FROM alpine:3.11

COPY LICENSE /

RUN apk --no-cache add lftp

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
