const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.resolve(__dirname, 'dir')) // создание папки
// fs.mkdirSync(path.resolve(__dirname, 'dir2', 'dir3'), {recursive: true}) // рекурсивное создание вложенных папок

/*console.log('start');
fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Папка создана');
}) // асинхронная фукнция создания папки


console.log('end');*/

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         throw new Error(err);
//         return;
//     }
//     console.log('Папка удалена');
// }) // удаление папки


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path,data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, 'test.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt'))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`)))