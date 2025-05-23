import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import homeRouter from './routes/homeRoute.js';
import exameRouter from './routes/exameRoute.js';
import unidadeRouter from './routes/unidadeRoute.js';
import coletaRouter from './routes/coletaRoute.js';
import quemsomosRouter from './routes/quemsomosRoute.js';
import faleconoscoRouter from './routes/faleconosco.js';
import parceiroRouter from './routes/parceiroRoute.js';
import convenioRouter from './routes/convenioRoute.js';
import trabalheconoscoRouter from './routes/trabalheconoscoRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const porta = process.env.PORT;

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
app.use('/parceiro', parceiroRouter);
app.use('/convenios', convenioRouter);
app.use('/trabalhe-conosco', trabalheconoscoRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { hideHeader: true });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', { hideHeader: true });
});

app.listen(porta, () => {
    console.log(`Server is running on http://localhost:${porta}`);
});
