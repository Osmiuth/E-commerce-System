FROM python:alpine

ENV PYTHONUNBUFFERED 1

WORKDIR /code

RUN apk add --no-cache mariadb-dev build-base python3-dev
COPY requirements.txt /code/
RUN pip install -r requirements.txt

COPY . /code/