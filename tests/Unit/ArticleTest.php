<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArticleTest extends TestCase
{
    /**
     * Test creation method in controller
     *
     * @return void
     */
    public function testCreationMethod(\App\Http\Controllers\ArticleController $articleController)
    {
        $articleController->store(\Illuminate\Http\Request::create('/', 'POST', ['name' => 'test name', 'text' => 'test text']));

        $this->assertDatabaseHas('article', [
            'name' => 'test name',
            'text' => 'test text',
        ]);
    }
}
