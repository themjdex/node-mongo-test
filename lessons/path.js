const path = require('path'); // подключение стандартной библиотеки

console.log(path.join('first', 'second')); // first\second сложение путей
console.log(__dirname); // D:\my-projects\node-ubli\lessons
console.log(__filename); // D:\my-projects\node-ubli\lessons\path.js
console.log(path.join(__dirname, '..', '..')); // D:\my-projects
console.log(path.resolve()); // абсолютный путь D:\my-projects\node-ubli\lessons
console.log(path.parse(__filename)) /*
{
  root: 'D:\\',
  dir: 'D:\\my-projects\\node-ubli\\lessons',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}*/


console.log('разделитель в ОС', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла',path.basename(__filename))
console.log('расширение файла',path.extname(__filename))

const siteURL = 'http://localhost:8080/users?id=5123';

const url = require('url');

console.log(url)