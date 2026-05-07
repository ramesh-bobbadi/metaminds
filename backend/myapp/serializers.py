from rest_framework import serializers
from . import models

class WelcomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Welcome
        fields = "__all__"
        
class LiveUpdatesserilizer(serializers.ModelSerializer):
    class Meta:
        model = models.LiveUpdates
        fields = "__all__"
        