from core.celery import app
from .service import send_message


@app.task
def send_status(user_email, text_content):
    send_message(user_email, 'Обновление статуса', text_content)
