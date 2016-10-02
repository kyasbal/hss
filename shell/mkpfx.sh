if [ ! -e ./keys/server_key.pem ]; then
mkdir keys
openssl genrsa -out ./keys/server_key.pem 2048
openssl req -batch -new -key ./keys/server_key.pem -out ./keys/server_csr.pem \
-subj "/C=JP/ST=Tokyo/L=Musashino-shi/O=Foo/OU=Bar/CN=localhost"
openssl x509 -in ./keys/server_csr.pem -out ./keys/server_crt.pem -req \
-signkey ./keys/server_key.pem -days 73000 -sha256
fi
