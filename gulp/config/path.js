import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); 

const buildFolder = `./dist/`;
const srcFolder = `./src`;

export const path = {
  build:{
    js: `${buildFolder}/assets/templates/js`,
    css: `${buildFolder}/assets/templates/css`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/assets/templates/images/`,
    fonts: `${buildFolder}/assets/templates/fonts`,
    files: `${buildFolder}/`,
    svgicons: `${buildFolder}/img/`,
  },
  src:{
    js: `${srcFolder}/assets/templates/js/scripts.js`,
    images: `${srcFolder}/assets/templates/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
    svg: `${srcFolder}/assets/templates/images/**/*.svg`,
    scss: `${srcFolder}/assets/templates/scss/styles.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/assets/templates/files/**/*.*`,
    svgicons: `${srcFolder}/assets/templates/svgicons/*.svg`,
  },
  watch:{
    scss: `${srcFolder}/assets/templates/scss/**/*.scss`,
    svgicons: `${srcFolder}/assets/templates/svgicons/*.svg`,
    js: `${srcFolder}/assets/templates/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/assets/templates/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    files: `${srcFolder}/assets/templates/files/**/*.*`,
    fonts: `${srcFolder}/assets/templates/fonts/**/*.{otf,ttf}`
  },
  clean:buildFolder,
  buildFolder:buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
