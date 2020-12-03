from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('search',views.search,name="search"),
    path('result',views.result,name='result'),
    #path('geturlhistory',views.geturlhistory,name="geturlhistory")

]

