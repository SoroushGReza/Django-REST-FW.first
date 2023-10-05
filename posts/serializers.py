from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Post
        # fields = '__all__'   <--- To include ALL fields
        fields = [
            'id', 'owner', 'is_owner', 'profiles_id',
            'updated_at', 'content', 'image',
            'created_at', 'profile_image', 'title'
        ]