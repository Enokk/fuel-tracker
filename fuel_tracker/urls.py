from django.urls import path
from .views import *

urlpatterns = [
  path("", refueling_list, name="refueling_list"),
]