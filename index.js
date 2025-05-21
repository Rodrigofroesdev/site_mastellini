import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import homeRouter from './routes/homeRoute.js';
import exameRouter from './routes/exameRoute.js';
import unidadeRouter from './routes/unidadeRoute.js';
import coletaRouter from './routes/coletaRoute.js';
import quemsomosRouter from './routes/quemsomosRoute.js';
import faleconoscoRouter from './routes/faleconosco.js';

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(expressLayouts);

app.use('/', homeRouter);
app.use('/exames', exameRouter);
app.use('/unidades', unidadeRouter);
app.use('/coletas', coletaRouter);
app.use('/quem-somos', quemsomosRouter);
app.use('/fale-conosco', faleconoscoRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
