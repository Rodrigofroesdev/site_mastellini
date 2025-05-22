import ExameRepository from "../repositories/exameRepository.js";

export default class exameController {
    async exameView(req, res) {
        const exameRepository = new ExameRepository();
        const exames = await exameRepository.exames();
        console.log(exames);
        if (exames != null) {
            return res.render('exame/exame', { exames: exames, hideHeader: false });
        }
        res.render('exame/exame', { exames: [], hideHeader: false });
    }

    async exameUrl(req, res) {
        const exameRepository = new ExameRepository();
        const exame = await exameRepository.exame(req.params.url);
        if (exame != null) {
            return res.render('exameurl/exameurl', { exame: exame, hideHeader: false });
        }
        res.render('exameurl/exameurl', { exame: [], hideHeader: false });
    }
}