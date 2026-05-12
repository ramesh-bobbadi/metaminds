from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import permissions,viewsets
from rest_framework.permissions import IsAuthenticated
from . import models
from . import serializers

class UserViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.UserSerializer
    queryset = models.User.objects.all()
    
    def list(self,request):
        queryset = models.User.objects.all()
        serializer = self.serializer_class(queryset,many=True)
        
        return Response(serializer.data)
    
    
    