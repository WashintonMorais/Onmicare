# Usando a imagem base do Alpine
FROM alpine:3.11

# Instalando o lftp
RUN apk --no-cache add lftp

# Copiando o script de entrada para o contêiner
COPY entrypoint.sh /entrypoint.sh

# Garantindo permissões de execução
RUN chmod +x /entrypoint.sh

# Definindo o ponto de entrada do contêiner
ENTRYPOINT ["/entrypoint.sh"]
