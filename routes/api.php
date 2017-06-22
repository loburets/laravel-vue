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

Route::middleware('api')->group(function () {

//    Auth::routes();
    Route::post('jwt-login', 'Auth\LoginController@jwtLogin');
    Route::get('article', 'ArticleController@index');
});


Route::middleware(['auth', 'jwt.auth'])->group(function () {
    Route::resource(
        'article',
        'ArticleController',
        [
            'except' => ['create', 'index', 'show', 'edit', 'update', 'destroy']
        ]
    );
});
