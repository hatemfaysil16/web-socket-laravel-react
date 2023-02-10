<?php

use App\Http\Controllers\PlayerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

  Route::group([
        // 'middleware' => ['cors'],
        // 'prefix' => 'socket.io',
    ], function ($router) {
Route::get('player/show',[PlayerController::class,'index'])->name('player.show');
Route::get('player/create',[PlayerController::class,'create'])->name('player.create');
Route::post('player/store',[PlayerController::class,'store'])->name('player.store');
Route::get('player/delete/{player}',[PlayerController::class,'delete'])->name('player.delete');
    });