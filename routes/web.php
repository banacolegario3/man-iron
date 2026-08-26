<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

Route::get('/', function () {
    return 'Laravel is running';
});

Route::get('/students', [StudentController::class, 'index'])
    ->name('students.index');
