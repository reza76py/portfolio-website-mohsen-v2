from django.db import models

class AudioFile(models.Model):
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='audio/')
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    