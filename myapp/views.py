#!/usr/bin/python
# -*- coding: utf-8 -*-
def warn(*args, **kwargs):
    pass

from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, JsonResponse
from django.db.models import Q
from .models import *

def search(request):
    try:
        query = request.GET['search']
        query = str(query).lower()
        mydict = {
            "urls" : Url.objects.all().filter(Q(link__contains=query) | Q(result__contains=query) | Q(created_at__contains=query) |
            Q(rank__contains=query) | Q(dom__contains=query)  | Q(country__contains=query) | Q(state__contains=query) | Q(emails__contains=query) |
            Q(add__contains=query) | Q(org__contains=query) | Q(city__contains=query)
            ).order_by('-created_at')
        }
        return render(request,'list.html',context=mydict)
    except:
        return render(request,'404.html')




def error_404_view(request, exception):
    return render(request,'404.html')

def index(request):
    try:
        return render(request, '404.html')
    except:
        return render(request, '404.html')




from requests import get
import json
from dateutil import parser as dateparser
from django.http import HttpResponse
from django.shortcuts import render

def result(request):
    #text=request.GET['nm'].strip()
    #http://127.0.0.1:8000/result?uniqueid=12&nm=hi&phonenumber=12321&time=21%2F12%2F1998+12%3A12%3A12
    #result="booked"
    lat=request.GET['LAT']
    lon=request.GET['LON']
    
    import reverse_geocoder as rg

    coordinates = (lat,lon)
    #print (rg.search(coordinates)[0]['name'], rg.search(coordinates)[0]['admin1'])
    mydict = {
                "query" : f"{lat},{lon}",
                "city" : rg.search(coordinates)[0]['name'],
                "state" : rg.search(coordinates)[0]['admin1']
            }
    response = JsonResponse(mydict)
    return response 
    







