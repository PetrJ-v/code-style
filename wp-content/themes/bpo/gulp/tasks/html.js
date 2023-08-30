import fileinclude from "gulp-file-include";
import versonNumber from "gulp-version-number";

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Eror: <%= error.message %>"
			}))
		)
		.pipe(fileinclude())
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(app.plugins.replace(/@js\//g, 'js/'))
		// .pipe(
		// 	app.plugins.if(
		// 		app.isBuild,
		// 		webpHtmlNosvg()
		// 	)
		// )
		.pipe(
			versonNumber({
				'value': '%DT%',
				'append': {
					'key': '_v',
					'cover': 0,
					'to': [
						'css',
						'js',
					]
				},
				'output': {
					'file': 'gulp/version.json'
				}
			})
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream());
}
