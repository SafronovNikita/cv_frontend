#!/bin/bash

cp nginx.conf /etc/nginx

cd ..

PROJECT_DIR="$(pwd)"
CV_HOST_CONF="cv_host.conf"
SSL_CERT="${PROJECT_DIR}/RES/certificates/cv_host_certchain.txt"
SSL_CERT_KEY="${PROJECT_DIR}/RES/certificates/cv_host_key.txt"
ROOT_DIR="/home/ubuntu/cv_frontend"

echo "
server {
    listen 80;
    server_name nikitasafronov.ru;
    return 301 https://\$host\$request_uri;
}

server {
	listen 443;

	server_name nikitasafronov.ru;

  ssl on;
	ssl_certificate     ${SSL_CERT};
  ssl_certificate_key ${SSL_CERT_KEY};

  index index.html;
  root ${ROOT_DIR};

	location / {
#		try_files \$uri \$uri/ =404;
		try_files \$uri \$uri/ /index.html; # solution for history mode
	}

	# deny access to Apache's .htaccess files
    location ~ /\.ht {
    	deny all;
    }
}

" > /etc/nginx/sites-enabled/${CV_HOST_CONF}

nginx -s reload
