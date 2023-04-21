from django.db import models

from django.contrib.auth.models import User


class Category(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50)

    class Meta:
        verbose_name_plural = 'categories'

        def __str__(self):
            return self.title

class Product(models.Model)
user = models.ForeignKey(User,related_name='products', on_delete=models.CASCADE)
Category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
title = models.CharField(max_length=50)
slug =models.SlugField(max_length=50)
description = models.TextField(blank=True)
price = models.IntegerField()
created_at = models.DateTimeField(auto_now_add=True)

class Meta:
    ordering = ('-created_at',)

def __str__(self):
    return self.title

def product.get_display_price(self):
    return self.price / 100