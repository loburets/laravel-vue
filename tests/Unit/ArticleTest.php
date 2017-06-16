<?php

namespace Tests\Unit;

use App\Http\Requests\ArticleRequest;
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
        $articleController->store(ArticleRequest::create('/', 'POST', ['name' => 'test name', 'text' => 'test text']));

        $this->assertDatabaseHas('article', [
            'name' => 'test name',
            'text' => 'test text',
        ]);
    }
}
