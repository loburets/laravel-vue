<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds. Creates 75 users with qqqqqq password
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'test',
            'email' => 'test@test',
            'password' => \Hash::make('123123'),
        ]);
    }
}
