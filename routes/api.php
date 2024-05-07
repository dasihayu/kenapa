<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you define your API routes for the application.
|
*/

Route::get('/', [UserController::class, 'index'])->name('index'); // GET all users
Route::get('/{id}', [UserController::class, 'show']); // GET user by ID
Route::post('/', [UserController::class, 'store']); // POST create new user
Route::put('/{id}', [UserController::class, 'update']); // PUT update user
Route::delete('/{id}', [UserController::class, 'destroy']); // DELETE delete user
