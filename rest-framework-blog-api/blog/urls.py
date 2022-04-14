from django.urls import path
from .views import api_view_delete,api_view_create,api_view_update,api_view_detail,BlogApiListView

app_name = 'blog'

urlpatterns = [
    path('blog/<str:slug>', api_view_detail, name='detailview'),
    path('blog/update/<str:slug>', api_view_update, name='updateview'),
    path('blog/delete/<str:slug>', api_view_delete, name='deleteview'),
    path('blog/create/', api_view_create, name='createview'),
    path('blog/all/', BlogApiListView.as_view(), name='listView'),
]