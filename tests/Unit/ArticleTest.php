<?php

namespace Tests\Unit;

use App\Http\Requests\ArticleRequest;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArticleTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Test creation method in controller
     *
     * @return void
     */
    public function testCreationMethod()
    {
        $articleController = $this->app->make('\App\Http\Controllers\ArticleController');
        $articleController->store(ArticleRequest::create('/', 'POST', ['name' => 'test name', 'text' => 'test text']));

        $this->assertDatabaseHas('articles', [
            'name' => 'test name',
            'text' => 'test text',
        ]);
    }
}
