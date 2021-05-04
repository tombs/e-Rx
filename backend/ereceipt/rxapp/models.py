from django.db import models
  
class PatientInfoModel(models.Model):
    firstName = models.CharField(max_length = 254)
    middleName = models.CharField(max_length = 254)
    lastName = models.CharField(max_length = 254)
    birthDate = models.DateField()
    sex=models.CharField(max_length=50)
    address = models.TextField()
    created = models.DateField(auto_now_add=True)
    modified = models.DateField(auto_now=True)

    def __str__(self):
        return self.lastName + ', ' + self.firstName + ' ' + self.middleName

class DoctorInfoModel(models.Model):
    firstName = models.CharField(max_length = 254)
    middleName = models.CharField(max_length = 254)
    lastName = models.CharField(max_length = 254)
    specialization = models.CharField(max_length = 254)
    prcLicenseNumber = models.CharField(max_length = 50)
    mobileNumber = models.CharField(max_length = 100)
    created = models.DateField(auto_now_add=True)
    modified = models.DateField(auto_now=True)
  
    def __str__(self):
        return  self.firstName + ' ' + self.middleName + ' ' + self.lastName + ', MD'