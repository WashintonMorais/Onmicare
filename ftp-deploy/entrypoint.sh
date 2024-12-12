#!/bin/sh -l

# ... (resto do script)

echo "Connecting to FTP server..."
lftp $INPUT_HOST -u $INPUT_USER,$INPUT_PASSWORD -e "
    set ftp:ssl-force $INPUT_FORCESSL;
    set ssl:verify-certificate false;
    set debug ftp;
    mirror $INPUT_OPTIONS --reverse --continue --dereference -x ^\.git/$ $INPUT_LOCALDIR $INPUT_REMOTEDIR;
    quit"