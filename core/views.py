from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    context = {
        'title': 'Home',
        'course': 'MSIT217 - Web App',
        'units': 3,
    }
    return render('request', 'home.html', context)

def about(request):
    context = {
        'title': 'About',
    }
    return render('request', 'about.html', context)

def base(request):
    context = {
        'title': 'Base',
    }
    return render('request', 'base.html', context)