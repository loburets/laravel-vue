<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class PaginationHelper extends Facade {

    /**
     * Get the registered name of the settings component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() {

        return 'PaginationHelper';
    }
}