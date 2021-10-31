from django import forms
from django.contrib import admin
from .models import Hero
from ckeditor.widgets import CKEditorWidget
from django.utils.safestring import mark_safe


class HeroAdminForm(forms.ModelForm):
    description = forms.CharField(
        label='Описание', widget=CKEditorWidget())

    class Meta:
        model = Hero
        fields = '__all__'


@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_image', 'last_name',
                    'first_name', 'email', 'verified', 'date_added')
    list_editable = ('verified',)
    search_fields = ('last_name', 'first_name', 'email')
    list_filter = ('verified', 'date_added')
    form = HeroAdminForm
    actions = ['publish', 'unpublish']
    readonly_fields = ('get_image', 'date_added')
    fieldsets = (
        ('Изображение', {
            'fields': (
                ('photo', 'get_image'),
            ),
        }),
        ('Ветеран', {
            'fields': (
                ('last_name', 'first_name', 'middle_name'),
            )
        }),
        ('Сообщение', {
            'fields': (
                ('description',)
            )
        }),
        ('Контактные данные', {
            'fields': (
                ('student', 'email'),
                ('kinship', 'signature'),
            )
        }),
        ('Опции', {
            'fields': (
                ('verified', 'date_added')
            )
        })
    )

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.photo.url} width="auto" height="75"')
    get_image.short_description = 'Фотография'

    def publish(self, request, queryset):
        """Опубликовать"""
        row_update = queryset.update(draft=False)
        if row_update == 1:
            message_bit = "1 запись была обновлена"
        else:
            message_bit = f"{row_update} записей были обновлены"
        self.message_user(request, f"{message_bit}")
    publish.short_description = "Опубликовать"
    publish.allowed_permissions = ('change', )

    def unpublish(self, request, queryset):
        """Снять с публикации"""
        row_update = queryset.update(draft=True)
        if row_update == 1:
            message_bit = "1 запись была обновлена"
        else:
            message_bit = f"{row_update} записей были обновлены"
        self.message_user(request, f"{message_bit}")
    unpublish.short_description = "Снять с публикации"
    unpublish.allowed_permissions = ('change',)
