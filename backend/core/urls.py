from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from ckeditor_uploader import views as ckeditor_views

admin.site.site_header = 'Музей славы НГПУ'
admin.site.site_title = 'Музей славы НГПУ'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('heroes.urls')),
    path('ckeditor/upload/', ckeditor_views.upload,
         name='ckeditor_upload'),
    path('ckeditor/browse/', never_cache(ckeditor_views.browse),
         name='ckeditor_browse'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
