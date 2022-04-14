from rest_framework import serializers
from .models import Blog


class BlogSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=50)
    username = serializers.SerializerMethodField('get_username_from_author')
    desc = serializers.CharField(max_length=500)
    img = serializers.ImageField()


    class Meta:
        model = Blog
        fields = ('title','username','desc','img','created_at', 'updated_at','slug')

    def get_username_from_author(self,blog):
        username = blog.author.username
        return username