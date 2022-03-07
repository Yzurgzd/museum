import math
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 25

    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'page_count': math.ceil(self.page.paginator.count / self.page_size),
            'results': data,
        })
