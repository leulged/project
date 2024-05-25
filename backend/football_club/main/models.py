from django.db import models

# Create your models here.

class Player(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    country = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    image = models.ImageField(upload_to='player_images')

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['name']

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)
    news_image = models.ImageField(upload_to='news_image', blank=True)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-published_date']
        verbose_name_plural = "News"