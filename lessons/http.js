const Application = require('../framework/Application');
const userRouter = require('../src/user-router');
const jsonParser = require('../framework/parsejson');
const parsedUrl = require('../framework/parseUrl');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

const app = new Application();

app.use(jsonParser);
app.use(parsedUrl('http://localhost:8000'));

app.addRouter(userRouter);



const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.zjj7z.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log(`Порт запущен на порту ${PORT}`)
        });
    } catch (e) {
        console.log(e);
    }
}

start();