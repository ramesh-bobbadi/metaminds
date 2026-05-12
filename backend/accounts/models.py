from django.db import models
from django.contrib.auth.models import AbstractUser
    
class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin','Admin'),
        ('hr','Hr'),
        ('manager','Manager'),
        ('employee','Employee'),
    )
    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,default='employee'
    )
    phone_number = models.CharField(
        max_length=15,blank=True,null=True
    )
    profile_picture = models.ImageField(default="falback.png",blank=True,null=True)
    is_active_employee = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
       return self.username
    
    
