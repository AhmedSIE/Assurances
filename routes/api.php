<?php

use App\Http\Controllers\AssuranceController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CarteController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\MarqueController;
use App\Http\Controllers\NotificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login',            [AuthController::class,'login']);
    Route::post('loginemail',       [AuthController::class,'loginemail']);
    Route::post('logout',           [AuthController::class,'logout']);
    Route::post('register',         [AuthController::class,'register']);
    Route::post('photo',            [AuthController::class,'photo']);
    Route::get('partir/{id}',       [AuthController::class,'destroy']);
    Route::post('refresh',          [AuthController::class,'refresh']);
    Route::post('user',             [AuthController::class,'user']);
    Route::post('edit',             [AuthController::class,'edit']);
    Route::post('montoken',         [AuthController::class,'usertoken']);
    Route::get('notifications',     [NotificationController::class,'notification']);
    Route::get('marques',           [MarqueController::class,'index']);

});
Route::group([

    'middleware' => 'api',
    'prefix' => 'services'

], function ($router) {

    Route::get('servicesfree',          [CarteController::class,'free']);
    Route::get('servicessilver',        [CarteController::class,'silver']);
    Route::get('servicesgold',          [CarteController::class,'gold']);
    Route::get('servicesplatinum',      [CarteController::class,'platinum']);
    Route::post('servicessourcription', [CarteController::class,'souscrire']);
});
Route::group([

    'middleware' => 'api',
    'prefix' => 'assurances'

], function ($router) {

    Route::post('assuranceAuto/save',   [AssuranceController::class,'autosave']);
    Route::post('assuranceMoto/save',   [AssuranceController::class,'Motosave']);
    Route::post('assuranceMaison/save', [AssuranceController::class,'maisonsave']);
    Route::post('assuranceSante/save',  [AssuranceController::class,'santesave']);
    Route::post('fichiers',             [ DocumentController::class,'fichiers']);
});
Route::group([

    'middleware' => 'api',
    'prefix' => 'messages'

], function ($router) {

    Route::post('message/save', [MessageController::class,'save']);
    Route::post('message',      [MessageController::class,'index']);
});


// Route::middleware('auth:api')->post('/user', function (Request $request) {
//     return $request->user();
// });
