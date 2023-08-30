import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './assets';
const srcFolder = '.';

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		js: `${srcFolder}/assets/js/main.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/assets/scss/*.scss`,
		html: `${srcFolder}/html/*.html`,
	},
	watch: {
		js: `${srcFolder}/assets/js/**/*.js`,
		scss: `${srcFolder}/assets/scss/**/*.scss`,
		html: `${srcFolder}/html/**/**/*.html`,
		images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp, svg}`,
	},
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}
