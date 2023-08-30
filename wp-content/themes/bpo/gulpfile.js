// Основной модуль
import gulp from "gulp";

// Импорт путей
import { path } from "./gulp/config/path.js";

// Имопрт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp, gulp,
	plugins: plugins,
}

// Импорт задач
import { html } from "./gulp/tasks/html.js"; // Генерирует html из фрагментов
import { server } from "./gulp/tasks/server.js"; // Локакльный сервер для запуска проекта
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js"; // Конвертирует шрифты в woff и woff2 форматы, генерирует стили для подключения шрифтов

// Вспомагательные задачи
const fontsPrepare = gulp.series(ttfToWoff, fontsStyle);
export { otfToTtf }
export { fontsPrepare }

// Наблюдатель за именениями файлов
function watcher() {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	// gulp.watch(path.watch.images, images);
}

// Последовательная обработка шрифтов
// const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.parallel(html, scss, js, fonts);

// Построение сценария выполнения задач
const dev = gulp.series(mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(html, scss);

// Экспорт сценариев
export { dev }
export { build }

// Выполнение сценария по умолчанию
gulp.task('default', dev);
