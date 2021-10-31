from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from core.settings import EMAIL_HOST_USER


def send_message(user_email, subject, text_content):
    html_content = render_to_string(
        'email.html', {'text_content': text_content})
    msg = EmailMultiAlternatives(
        subject, text_content, EMAIL_HOST_USER, [user_email])
    msg.attach_alternative(html_content, 'text/html')
    msg.send()
