from django.db import models

class Refuelings(models.Model):
  refueling_date = models.DateField(auto_now_add=True)
  from_km = models.IntegerField()
  to_km = models.IntegerField()
  fuel_lt = models.DecimalField(max_digits=5, decimal_places=2)
  fuel_cost = models.DecimalField(max_digits=5, decimal_places=2)