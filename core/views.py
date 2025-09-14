from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    context = {
        'title': 'Home',
        'course': 'MSIT 210 - DevOps and Software Lifecycle Automation',
        'units': 3,
    }
    return render('request', 'home.html', context)

def about(request):
    context = {
        'title': 'About',
        'name': 'Daniel Ligutan',
        'student_id': '2021-32347',
    }
    return render('request', 'about.html', context)

def base(request):
    return render('request', 'base.html')