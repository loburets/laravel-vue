<?php

namespace App\GraphQL\Query;

use App\GraphQL\Helpers\PaginationHelper;
use App\GraphQL\Type\PaginationListType;
use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use App\Models\Article;

class ArticlesQuery extends Query
{
    protected $attributes = [
        'name' => 'articles'
    ];
    
    public function type()
    {
        return \PaginationHelper::getPaginatedType('Article');
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'orderBy' => ['name' => 'orderBy', 'type' => Type::listOf(Type::string())],
            'page' => ['name' => 'page', 'type' => GraphQL::type('Page')],
        ];
    }

    public function resolve($root, $args, $context, GraphQL\Type\Definition\ResolveInfo $info)
    {
        if (isset($args['id'])) {
            return Article::where('id' , $args['id'])->get();
        }

        $fields = $info->getFieldSelection($depth = 3);
        $articles = Article::query();

        foreach ($fields as $field => $keys) {
            if ($field === 'user') {
                $articles->with('user');
            }
        }

        if (isset($args['orderBy'])) {
            $articles->orderBy(...$args['orderBy']);
        }

        return \PaginationHelper::getQueryResult($articles, $args);
    }
}