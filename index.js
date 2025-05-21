import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import homeRouter from './routes/homeRoute.js';

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(expressLayouts);

app.use('/', homeRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
