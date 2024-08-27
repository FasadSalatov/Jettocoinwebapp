# JettonApp Setup Guide

## Оглавление

1. [Клонирование репозиториев](#1-клонирование-репозиториев)
2. [Установка зависимостей](#2-установка-зависимостей)
3. [Запуск приложений](#3-запуск-приложений)
4. [Настройка Nginx](#4-настройка-nginx)
5. [Запуск бота](#5-запуск-бота)

## 1. Клонирование репозиториев

### Backend

Клонируйте репозиторий с backend:

```bash
git clone <URL_РЕПОЗИТОРИЯ_С_БЭКОМ>
cd <ПАПКА_РЕПОЗИТОРИЯ_С_БЭКОМ>
```

### Frontend
Клонируйте репозиторий с frontend:

```bash
git clone <URL_РЕПОЗИТОРИЯ_С_ФРОНТОМ>
cd <ПАПКА_РЕПОЗИТОРИЯ_С_ФРОНТОМ>
```
## 2. Установка зависимостей
### Backend
Перейдите в папку с клонированным репозиторием backend и выполните команду для установки зависимостей:

```bash
npm install
```
### Frontend
Перейдите в папку с клонированным репозиторием frontend и выполните команду для установки зависимостей:

```bash
npm install
```
## 3. Запуск приложений
### Backend
Запустите backend-приложение с использованием pm2:

```bash
pm2 start index.js --name jetton-backend
```
### Frontend
Для разработки запустите frontend-приложение:

```bash
npm run start
```
Для сборки frontend-приложения выполните:

```bash
npm run build
```
## 4. Настройка Nginx
### Backend
Настройте проксирование запросов на backend через Nginx. Добавьте следующий конфиг в файл настроек Nginx:

```nginx
server {
    listen 80;
    server_name your_domain_or_IP;

    location /api {
        proxy_pass http://127.0.0.1:5000/api;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
### Frontend
Настройте раздачу статических файлов, собранных с помощью npm run build, через Nginx. Добавьте следующий конфиг в файл настроек Nginx:

```nginx
server {
    listen 80;
    server_name your_domain_or_IP;

    location / {
        root /var/www/html/build;
        try_files $uri $uri/ /index.html;
    }
}
```
## 5. Запуск бота
Перейдите в папку с backend-репозиторием и запустите бота через pm2:

```bash
pm2 start bot.js --name jetton-bot
```
После выполнения всех шагов ваше приложение будет готово к использованию!
