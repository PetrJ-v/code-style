# Стартовая сборка (node v - 16.18.0)

## Верстка собирается в папку accets/
(js, libs и scss находятся в accets изначально)

## В сборке реализовано

* Разделение задач на dev и prod (в режиме dev (режим по умолчанию) не выполняется сжатие изображений и минификация стилей)
* Cжатие jpg и png в режиме Build
* Конвертация ttf и otf шрифтов, положеных в /fonts в woff и woff2 форматы в /accets/fonts 
* Генерация стилей для подулючения шрифтов в файл _fonts.scss
* Сборка html из фрагментов, расположенных в папке html/components
* Autoprefixer и brousersync

## Команды для запуска проекта
Запуск в режиме разработки
```
npm run dev
```
Запуск сборки со сжатием изображений и минифакицией стилей
```
npm run build
```
Упаковать результат в архив
```
npm run zip
```

Для удобной работы с изображениями доустанавливаю в vscode плагин Path Autocomplete
После установки в редакторе перехожу в файл настроек редактора settings.json (cmd shift p и поиск по фразе settings.json) и в конец файла добавляю следующие настройки

```
 "path-autocomplete.pathMappings": {
        "@img": "${folder}/accets/img", // alias for images
        "@scss": "${folder}/accets/scss", // alias for scss
        "@js": "${folder}/accets/js", // alias for js
    },
```

Это позволит в html, js и scss файлах писать @img/, @js/ и получать корректный autocompleat в нужную папку с файлами js и img. Пути в сниппете выше можно настроить под свое расположение каталогов

# junction
## Custom scrollbar lib
https://www.npmjs.com/package/simplebar#1-documentation
