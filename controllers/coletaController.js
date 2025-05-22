export default class ColetaController {
    async coletaView(req, res) {
        res.render('coleta/coleta', { hideHeader: false });
    }
}