<?php

namespace Tests\Unit;

use App\Http\Requests\ArticleRequest;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArticleTest extends TestCase
{
    use DatabaseTransactions;
    use DatabaseMigrations;

    /**
     * @return void
     * @test
     */
    public function controller_can_create_article()
    {
        $articleController = $this->app->make('\App\Http\Controllers\ArticleController');
        $articleController->store(ArticleRequest::create('/', 'POST', ['name' => 'test name', 'text' => 'test text']));

        $this->assertDatabaseHas('articles', [
            'name' => 'test name',
            'text' => 'test text',
        ]);
    }
}
