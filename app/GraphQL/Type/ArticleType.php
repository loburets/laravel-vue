<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;
use GraphQL;

class ArticleType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Article',
        'description' => 'An article'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the article'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'The name of the article'
            ],
            'text' => [
                'type' => Type::string(),
                'description' => 'The text of the article'
            ],
            'user' => [
                'type' =>  GraphQL::type('User'),
                'description' => 'The user who create the article'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'The date of creation'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'The date of last updating'
            ],
        ];
    }
}