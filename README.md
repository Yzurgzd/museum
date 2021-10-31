
![Logo](https://tatngpi.ru/bitrix/images/Logo.png)


# Музей славы для ФГБОУ ВО «НГПУ»

У каждого из нас есть возможность увековечить своих героев, сохранив в семейных хрониках имена погибших и пропавших без вести солдат.


## Tech Stack

**Client:** NEXT.JS

**Server:** Django, DRF, Celery

**Database:** PostgreSQL


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Backend:

`SECRET_KEY` = A secret key for a particular Django installation.

`ALLOWED_HOSTS` = A list of strings representing the host/domain names that this Django site can serve. Example: *

`CORS_ALLOWED_ORIGINS` = A list of origins that are authorized to make cross-site HTTP requests.. Example: http://localhost:3000

`DATABASE_NAME` = Example: db_name

`DATABASE_USER` = Example: postgres

`DATABASE_PASSWORD` = Example: ******

`DATABASE_HOST` = Example: 127.0.0.1

`DATABASE_PORT` = Example: 5432

`STATIC_URL` = In your file, define STATIC_URL. Example: /static/

`MEDIA_URL` = In your file, define MEDIA_URL. Example: /media/

`EMAIL_HOST_USER` = Example: user456@gmail.com

`EMAIL_HOST_PASSWORD` = Example: ******

`REDIS_HOST` = Example: 127.0.0.1

`REDIS_PORT` = Example: 6379

Frontend:

`BASE_URL` = URL Backend. Example: http://127.0.0.1:8000

`API_URL` = API Backend. Example: ${BASE_URL}/api


## Run Locally

Clone the project

```bash
  git clone https://github.com/Yzurgzd/museum.git
```

Go to the project directory

```bash
  cd museum
```

Go to the backend directory

```bash
  cd backend
```

Install requirements.txt

```bash
  python3 install -r requirements.txt
```

Go to the backend directory

```bash
  cd core
```

Create `.env` file

Go to the back

```bash
  cd ../
```

Migrate database

```bash
  python3 manage.py makemigrations

  python3 manage.py migrate
```

Start the server

```bash
  python3 manage.py runserver
```

Start the [Redis](https://redis.io/)

If you want to run it on Docker execute this

```bash
  docker run -d -p 6379:6379 redis
```

Running the Celery worker server on Linux

```bash
  celery -A core worker --loglevel=INFO
```

If you use Windows, then run Redis using [Eventlet](https://docs.celeryproject.org/en/stable/userguide/concurrency/eventlet.html)

```bash
  celery -A core worker --loglevel=INFO -P eventlet
```

Go to the frontend directory

```bash
  cd ../frontend
```

Create `.env` file

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

