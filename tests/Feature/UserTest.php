<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    use DatabaseTransactions;
    use DatabaseMigrations;

    /**
     * @return void
     * @test
     */
    public function user_can_login()
    {
        $user =factory(User::class)->create();

        $response = $this->json(
            'POST',
            '/api/jwt-login/',
            ['email' => $user->email, 'password' => 'secret']
        );

        $response->assertStatus(200)
            ->assertJsonStructure([
                'token',
                'user',
            ]);
    }

    /**
     * @return void
     * @test
     */
    public function user_can_register()
    {
        $response = $this->json(
            'POST',
            '/api/jwt-register/',
            ['email' => 'test@test.loc', 'password' => 'secret', 'password_confirmation' => 'secret', 'name' => 'John']
        );

        $response->assertStatus(200)
            ->assertJsonStructure([
                'token',
                'user',
            ]);

        $this->assertDatabaseHas('users', [
            'email' => 'test@test.loc',
            'name' => 'John',
        ]);
    }

    /**
     * @return void
     * @test
     */
    public function user_can_check_jwt_token()
    {
        $user =factory(User::class)->create();
        $token = \JWTAuth::fromUser($user);

        $response = $this->json(
            'GET',
            '/api/jwt-check/',
            [],
            ['HTTP_Authorization' => 'Bearer ' . $token]
        );

        $response->assertStatus(200)
            ->assertJsonStructure([
                'token',
                'user',
            ])
            ->assertJsonFragment([
                'id' => $user->id,
                'name' => $user->name,
            ]);
    }

    /**
     * @return void
     * @test
     */
    public function user_can_not_check_wrong_jwt_token()
    {
        $user =factory(User::class)->create();
        $token = \JWTAuth::fromUser($user) . 'wrong_part';

        $response = $this->json(
            'GET',
            '/api/jwt-check/',
            [],
            ['HTTP_Authorization' => 'Bearer ' . $token]
        );

        $response->assertStatus(400)
            ->assertJson([
                'error' => 'token_invalid',
            ]);
    }
}
