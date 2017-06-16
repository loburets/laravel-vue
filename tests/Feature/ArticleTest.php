<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArticleTest extends TestCase
{
    use DatabaseTransactions;
    use DatabaseMigrations;

    /**
     * Test creation
     *
     * @return void
     * @test
     */
    public function user_can_create_article()
    {
        $user = factory(User::class)->create();

        $response = $this->actingAs($user)
            ->json('POST', '/api/article', ['name' => 'Name', 'text' => 'Some article text']);

        $response->assertStatus(200)
            ->assertJson([
                'created' => true,
            ]);

        $this->assertDatabaseHas('articles', [
            'name' => 'Name',
            'text' => 'Some article text',
        ]);
    }

    /**
     * Test creation
     *
     * @return void
     * @test
     */
    public function article_creation_is_validated()
    {
        $user = factory(User::class)->create();

        $failResponse = $this->actingAs($user)
            ->json('POST', '/api/article');

        $failResponse->assertStatus(422)
            ->assertJsonStructure([
                'name',
                'text',
            ]);
    }

    /**
     * Test creation
     *
     * @return void
     * @test
     */
    public function anyone_can_view_list_of_articles()
    {
        $articles = factory(Article::class, 3)->create();

        $response = $this->json('get', '/api/article');

        foreach ($articles as $article) {

            $response->assertStatus(200)
                ->assertJsonFragment([
                    'id' => $article->id,
                    'name' => $article->name,
                    'text' => $article->text,
                ]);
        }
    }

    /**
     * TODO try to use Dusk
     *
     * @return void
     * @test
     */
    public function some_dusk_test()
    {
        $this->assertTrue(true);
    }
}
