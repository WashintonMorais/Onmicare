#!/bin/sh -l

# Verifica se as variáveis necessárias estão presentes
if [ -z "$INPUT_HOST" ] || [ -z "$INPUT_USER" ] || [ -z "$INPUT_PASSWORD" ]; then
  echo "Error: Missing FTP credentials"
  exit 1
fi

# Executa o comando lftp com as variáveis de ambiente passadas
lftp $INPUT_HOST -u $INPUT_USER,$INPUT_PASSWORD -e "set ftp:ssl-force $INPUT_FORCESSL; set ssl:verify-certificate false; mirror $INPUT_OPTIONS --reverse --continue --dereference -x ^\.git/$ $INPUT_LOCALDIR $INPUT_REMOTEDIR; quit"
