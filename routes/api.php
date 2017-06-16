<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//todo https://laravel.com/docs/5.4/passport
//Route::middleware('auth:api')->group(function () {
Route::middleware('api')->group(function () {

    Route::resource(
        'article',
        'ArticleController',
        [
            'except' => ['create', 'show', 'edit', 'update', 'destroy']
        ]
    );
});
