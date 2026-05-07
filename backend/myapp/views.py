from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import permissions,viewsets
from . import serializers
from . import models

def Hello(request):
    return HttpResponse('hello world')

class WelcomeViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.WelcomeSerializer
    queryset =models.Welcome.objects.all()
    
    def list(self,request):
        queryset = models.Welcome.objects.all()
        serializer = self.serializer_class(queryset,many = True)
        return Response(serializer.data)

class LiveUpdatesViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.LiveUpdatesserilizer
    queryset = models.LiveUpdates.objects.all()
    
    def list(self,request):
        queryset = models.LiveUpdates.objects.all()
        serializer = self.serializer_class(queryset,many = True)
        return Response(serializer.data)