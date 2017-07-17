#/bin/sh

composer install \
&& cp /var/www/.env.example /var/www/.env \
&& php artisan key:generate \
&& php artisan view:clear \
&& php artisan cache:clear \
&& php artisan clear-compiled \
&& php artisan optimize \
&& php artisan migrate:refresh --seed
