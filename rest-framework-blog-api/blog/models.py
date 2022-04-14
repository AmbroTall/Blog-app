import random

from django.db import models
from django.template.defaultfilters import slugify
from account.models import Account
from django.conf import settings

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=50)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    desc = models.CharField(max_length=500)
    img = models.ImageField(upload_to='images', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=100, blank=True)

    def __str__(self):
        return f'{self.title} '

    def save(self, *args, **kwargs):
        rand = random.randint(0,100)
        self.slug = slugify(f'{self.title}{rand}')
        super(Blog, self).save(*args, **kwargs)