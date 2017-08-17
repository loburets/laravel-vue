<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class PageType extends GraphQLType
{
    protected $inputObject = true;

    protected $attributes = [
        'name' => 'Page',
        'description' => 'An page of some list'
    ];

    public function fields()
    {
        return [
            'number' => [
                'type' => Type::int(),
                'description' => 'The number of the page'
            ],
            'size' => [
                'type' => Type::int(),
                'description' => 'The size of the page'
            ],
        ];
    }
}