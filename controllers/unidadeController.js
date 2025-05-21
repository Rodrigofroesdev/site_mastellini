import UnidadeRepository from "../repositories/unidadeRepository.js";

export default class unidadeController {
    async unidadeView(req, res) {
        const response = new UnidadeRepository();
        const unidades = await response.unidades();
        if (unidades != null) {
            console.log(unidades);
            return res.render('unidade/unidade', { unidades: unidades });
        }
        res.render('unidade/unidade', { unidades: [] });
    }
}
