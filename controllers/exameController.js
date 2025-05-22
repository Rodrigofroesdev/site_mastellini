import ExameRepository from "../repositories/exameRepository.js";
import UnidadeRepository from "../repositories/unidadeRepository.js";

export default class exameController {
    async exameView(req, res) {
        const exameRepository = new ExameRepository();
        const exames = await exameRepository.exames();
        if (exames != null) {
            return res.render('exame/exame', { exames: exames, hideHeader: false });
        }
        res.render('exame/exame', { exames: [], hideHeader: false });
    }

    async exameUrl(req, res) {
        const exameRepository = new ExameRepository();
        const exame = await exameRepository.exame(req.params.url);
        const unidadeRepository = new UnidadeRepository();
        const unidades = await unidadeRepository.unidades();
        if (exame != null && unidades != null) {
            return res.render('exame/exameurl', { exame: exame, hideHeader: false, unidades: unidades });
        }
        res.render('exame/exameurl', { exame: [], hideHeader: false, unidades: [] });
    }
}
