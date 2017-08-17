<?php
namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\Models\Article;

class RemoveArticleMutation extends Mutation {

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
            'id' => [
                'name' => 'id',
                'type' => Type::nonNull(Type::int()),
                'rules' => ['required'],

            ],
        ];
    }

    public function resolve($root, $args)
    {
        $article = Article::find($args['id']);

        if (!$article) {
            return null;
        }

        $article->delete();

        return $article;
    }

}