<?php
namespace App\GraphQL\Helpers;

class PaginationHelper
{
    /**
     * Return paginated result for the GraphQL resolver inside any of the paginated type
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param array $args
     * @return array
     */
    public function getQueryResult($query, $args)
    {
        $page = 1;
        $perPage = 5;

        if (isset($args['page']) && isset($args['page']['number'])) {
            $page = $args['page']['number'];
        }

        if (isset($args['page']) && isset($args['page']['size'])) {
            $perPage = $args['page']['size'];
        }

        $paginator = $query->paginate($perPage, ['*'], 'page', $page);

        return [
            'items' => $paginator,
            'totalPages' => $paginator->lastPage(),
            'hasNextPage' => $paginator->hasMorePages(),
            'hasPreviousPage' => $page > 1,
            'size' => $paginator->perPage(),
            'totalCount' => $paginator->total(),
            'currentPage' => $paginator->currentPage(),
            'firstItem' => $paginator->firstItem(),
            'lastItem' => $paginator->lastItem(),
            'count' => $paginator->count(),
            'lastPage' => $paginator->lastPage(),
        ];
    }

    /**
     * Return type based on the target type with the pagination fields
     *
     * @param string $baseTypeName Type for pagination
     * @return \GraphQL\Type\Definition\ObjectType
     */
    public function getPaginatedType($baseTypeName)
    {
        $type = \GraphQL::type($baseTypeName);
        $paginationTypeName = 'App\GraphQL\Type\PaginationListType';

        return app()->makeWith($paginationTypeName, ['type' => $type])->toType();
    }
}