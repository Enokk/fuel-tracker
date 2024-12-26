from django.shortcuts import render
from ..models import Refuelings

def refueling_list(request):
    refuelings = Refuelings.objects.all()
    return render(request, 'refueling_list.html', {'refuelings': refuelings})