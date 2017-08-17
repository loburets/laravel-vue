<?php

namespace App\GraphQL\Query;

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
        return Type::listOf(GraphQL::type('Article'));
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

        $page = 1;
        $perPage = 5;

        if (isset($args['page']) && isset($args['page']['number'])) {
           $page = $args['page']['number'];
        }

        if (isset($args['page']) && isset($args['page']['size'])) {
            $perPage = $args['page']['size'];
        }

        return $articles->paginate($perPage, ['*'], 'page', $page);
    }
}