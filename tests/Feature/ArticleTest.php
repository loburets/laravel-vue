<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArticleTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Test creation
     *
     * @return void
     */
    public function testCreation()
    {
        $user = factory(User::class)->create();

        //todo check validation
        $response = $this->actingAs($user)
            ->json('POST', '/article', ['name' => 'Sally', 'text' => 'Some article text']);

        $response->assertStatus(200)
            ->assertJson([
                'created' => true,
            ]);
    }

    /**
     * TODO try to use Dusk
     *
     * @return void
     */
    public function testCreationFrontend()
    {
        $this->assertTrue(true);
    }
}
