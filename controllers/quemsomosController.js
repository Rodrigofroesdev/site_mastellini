export default class quemsomosController {
    quemsomosView(req, res) {
        res.render('quemsomos/quemsomos', { hideHeader: false });
    }
}