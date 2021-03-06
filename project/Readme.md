# Руководство по работе с проектом

Данный проект создан с помощью [Create React App](https://github.com/facebook/create-react-app).

## Структура проекта

---

_Не удаляйте и не изменяйте папки и файлы:_
_`.editorconfig`, `.gitattributes`, `.gitignore`, `package.json`._

---

### public

Директория для размещения статичных ресурсов (шрифты, стили, изображения и так далее). Корневая директория проекта.

**Обратите внимание**, файл `Readme.md`, в директории `public`, содержит описание подготовительного процесса, который вам необходимо выполнить перед тем, как приступать к работе над проектом.

### src

В директории размещаются исходный код проекта: компоненты, файлы с тестами, модули и так далее. Структура директории `src` может быть произвольной.

### Файл .env.example

Файл `.env.example` позволяет задать необходимые переменные окружения для запуска проекта. Попросту говоря, через него мы можем [повлиять на настройку отдельных частей проекта](https://create-react-app.dev/docs/advanced-configuration). Например, выбрать другой порт.

Для того, чтобы воспользоваться этой возможностью, файл `.env.example` нужно переименовать в `.env`. Но на курсе вам скорее всего не понадобится изменение этих настроек.

## Сценарии

После создания проекта вам доступны следующие сценарии. Обратите внимание, для запуска сценария, вы должны находится в директории проекта (`./project`).

### Запуск проекта

```bash
npm start
```

После запуска, приложение доступно для просмотра в браузере по адресу [http://localhost:3000](http://localhost:3000).

При сохранении изменений, проект перезапускается и обновляется в браузере. Таким образом, вы можете следить за разработкой проекта в режиме реального времени.

**Обратите внимание**, режим разработки настроен таким образом, при котором ошибки, найденные статическим анализатором кода **ESLint**, отображаются в той же вкладке браузера, в которой запущен проект.

### Запуск тестов

```bash
npm test
```

Запуск тестов приложения в интерактивном режиме.

В данном случае, имеются в виду тесты, которые вынесены в отдельные файлы, в имени которых присутствует суффикс `*.test.*`. Например, `app.test.js`.

Подробную информацию вы можете найти на странице [Запуск тестов](https://facebook.github.io/create-react-app/docs/running-tests).

### Проверка линтером

```bash
npm run test:eslint
```

Запуск проверки проекта статическим анализатором кода **ESLint**.

Анализ кода производится только в файлах, которые находятся в директории `src`.

**Обратите внимание**, при запуске данной команды, ошибки выводятся в терминал.

### Сборка проекта

```bash
npm run build
```

Запуск сборки приложения.

В процессе сборки приложения, код приложения оптимизируется и минимизируется, для достижения наилучшей производительности.

Во время выполнения инструкций по сборке проекта, в корне проекта создается директория `build`, в которую будут помещены результирующие файлы. После сборки проект готов к публикации.

Подробную информацию вы можете найти на странице [Развертывание проекта](https://facebook.github.io/create-react-app/docs/deployment).

### Извлечение конфигурации проекта

```bash
npm run eject
```

**Обратите внимание**, при запуске команды `npm run eject` нет возможности вернуть внесённые изменения обратно!

Выполнение данной команды, `react-scripts` скопирует все конфигурационные файлы и скрипты в корень проекта. Данный процесс позволяет получить полный контроль над конфигурацией проекта.

Не используйте данную команду, если не уверены как именно она работает или к какому результату приведёт ее выполнение.
