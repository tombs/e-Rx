from django.contrib.auth.models import User, Group
from .models import PatientInfoModel, DoctorInfoModel
from rest_framework import viewsets
from rest_framework import permissions
from ereceipt.rxapp.serializers import UserSerializer, GroupSerializer, PatientInfoSerializer, DoctorInfoSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class PatientInfoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows patients to be viewed
    """
    queryset = PatientInfoModel.objects.all()
    serializer_class = PatientInfoSerializer
    permission_classes = [permissions.AllowAny]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class DoctorInfoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows patients to be viewed
    """
    queryset = DoctorInfoModel.objects.all()
    serializer_class = DoctorInfoSerializer
    permission_classes = [permissions.AllowAny]