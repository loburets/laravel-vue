<?php
namespace App\GraphQL\Helpers;

class PaginationHelper
{
    /**
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return array
     */
    public function getQueryResult($query, $perPage, $page)
    {
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
}