from django.db import models
from .tasks import send_status


class Hero(models.Model):
    photo = models.ImageField('Фотография', upload_to='photo/%Y/%m/%d/')
    last_name = models.CharField('Фамилия ветерана', max_length=100)
    first_name = models.CharField('Имя ветерана', max_length=100)
    middle_name = models.CharField(
        'Отчество ветерана', max_length=100, null=True, blank=True)
    description = models.TextField('Описание')
    student = models.CharField('Студент(ка)', max_length=255)
    kinship = models.CharField('Ветеран приходится', max_length=100)
    email = models.EmailField('Email')
    signature = models.CharField(
        'Подпись', max_length=100, null=True, blank=True)
    verified = models.BooleanField('Проверен', default=False)
    date_added = models.DateTimeField('Дата добавления', auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.last_name} {self.first_name[:1]}.'

    def save(self, *args, **kwargs):
        if self.id:
            old_hero = Hero.objects.get(pk=self.id)
            if old_hero.verified == False and self.verified == True:
                send_status.delay(
                    self.email, 'Мы обработали вашу заявку в Музее славы.')
            elif old_hero.verified == True and self.verified == False:
                send_status.delay(
                    self.email, 'Нам пришлось снять вашу заявку в Музее славы.')
        super(Hero, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        send_status.delay(
            self.email, 'Нам пришлось удалить вашу заявку в Музее славы.')
        super(Hero, self).delete(*args, **kwargs)

    class Meta:
        verbose_name = 'Ветеран'
        verbose_name_plural = 'Ветераны'
