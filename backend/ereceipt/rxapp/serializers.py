from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import PatientInfoModel, DoctorInfoModel


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class PatientInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PatientInfoModel
        fields = ['firstName', 'middleName','lastName', 'birthDate','sex','address']

class DoctorInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DoctorInfoModel
        fields = ['firstName', 'middleName','lastName','specialization', 'prcLicenseNumber', 'mobileNumber']        
