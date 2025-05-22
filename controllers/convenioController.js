export default class convenioController {
    convenioView(req, res) {
        res.render('convenio/convenio', { hideHeader: false });
    }
}