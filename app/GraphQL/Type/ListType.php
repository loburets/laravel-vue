<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;
use GraphQL;

class ListType extends GraphQLType
{
    /**
     * @var array
     */
    private $fields;

    /**
     * ListType constructor.
     *
     * @param GraphQLType $type
     */
    public function __construct($type)
    {
        $name = $type->config['name'];
        $this->attributes['name'] = $name . 'List';
        $this->attributes['description'] = 'List of ' . $name;

        $this->fields = [
            'totalPages' => [
                'type' => Type::int(),
                'description' => 'The quantity of the pages'
            ],
            'size' => [
                'type' => Type::int(),
                'description' => 'The quantity of the items per page'
            ],
            'totalCount' => [
                'type' => Type::int(),
                'description' => 'The quantity of the items'
            ],
            'currentPage' => [
                'type' => Type::int(),
                'description' => 'The number of the page'
            ],
            'firstItem' => [
                'type' => Type::int(),
                'description' => 'The number of the first item for the page'
            ],
            'lastItem' => [
                'type' => Type::int(),
                'description' => 'The number of the last item for the page'
            ],
            'count' => [
                'type' => Type::int(),
                'description' => 'The number of the entities at current page'
            ],
            'hasNextPage' => [
                'type' => Type::boolean(),
                'description' => 'There are the next page'
            ],
            'hasPreviousPage' => [
                'type' => Type::boolean(),
                'description' => 'There are the previous page'
            ],
            'lastPage' => [
                'type' => Type::boolean(),
                'description' => 'It is the last page'
            ],
            'items' => [
                'type' => Type::listOf($type),
                'description' => 'List of ' . $name
            ],
        ];

        parent::__construct();
    }

    public function fields()
    {
        return $this->fields;
    }
}