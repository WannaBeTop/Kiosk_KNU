from django.urls import path
from . import views
app_name = 'manager'

urlpatterns = [
    path('delete-menu/', views.delete_menu.as_view(),name='delete_menu'),
]