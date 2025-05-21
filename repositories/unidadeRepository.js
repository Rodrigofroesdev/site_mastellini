import UnidadeEntity from "../entities/unidadeEntity.js";
import BaseRepository from "./baseRepository.js";

export default class UnidadeRepository extends BaseRepository {
    constructor(db) {
        super(db);
    }

    async unidades() {
        let sql = 'SELECT * FROM unidades_type';
        const rows = await this.db.ExecutaComando(sql);
        return this.toMap(rows);
    }

    toMap(rows) {
        if (rows && typeof rows.length == "number") {
            let lista = [];
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let unidade = new UnidadeEntity();
                unidade.id = row.id;
                unidade.titulo = row.title;
                unidade.atendimento = row.atendimento;
                unidade.ativo = row.enabled;
                unidade.endereco = row.endereco;
                unidade.telefone = row.telefone;
                unidade.whatsapp = row.whatsapp;
                unidade.image = row.image;
                lista.push(unidade);
            }
            return lista;
        } else if (rows) {
            let unidade = new UnidadeEntity();
            unidade.id = rows['id'];
            unidade.titulo = rows['title'];
            unidade.atendimento = rows['atendimento'];
            unidade.ativo = rows['enabled'];
            unidade.endereco = rows['endereco'];
            unidade.telefone = rows['telefone'];
            unidade.whatsapp = rows['whatsapp'];
            unidade.image = rows['image'];
            return unidade;
        } else {
            return null;
        }
    }

}