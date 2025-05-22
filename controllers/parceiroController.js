export default class parceiroController {
    async parceiroView(req, res) {
        res.render('parceiro/parceiro', { hideHeader: true });
    }
}
