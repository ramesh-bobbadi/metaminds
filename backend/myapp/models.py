from django.db import models

class Welcome(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.name}-{self.location}"
    
class LiveUpdates(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    
    def __str__(self):
        return f'{self.title}'
