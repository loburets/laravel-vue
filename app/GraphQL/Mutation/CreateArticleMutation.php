<?php
namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\Article;

class CreateArticleMutation extends Mutation {

    protected $attributes = [
        'name' => 'UpdateArticle'
    ];

    public function type()
    {
        return GraphQL::type('Article');
    }

    public function args()
    {
        return [
            'name' => [
                'name' => 'name',
                'type' => Type::nonNull(Type::string()),
                'rules' => ['required']
            ],
            'text' => [
                'name' => 'text',
                'type' => Type::nonNull(Type::string()),
                'rules' => ['required']
            ],
        ];
    }

    public function resolve($root, $args)
    {
        /** @var Article $article */
        $article = Article::make($args);
        $user = \JWTAuth::parseToken()->toUser();
        $article->user()->associate($user);
        $article->save();

        return $article;
    }

}