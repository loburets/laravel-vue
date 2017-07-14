composer install \
&& cp /var/www/docker/.env /var/www/.env \
&& php artisan key:generate \
&& php artisan view:clear \
&& php artisan cache:clear \
&& php artisan clear-compiled \
&& php artisan optimize \
&& php artisan migrate:refresh --seed
