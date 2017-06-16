<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\Article::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->sentence(),
        'text' => $faker->text(),
    ];
});
