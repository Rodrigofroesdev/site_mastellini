import ExameEntity from "../entities/exameEntity.js";
import BaseRepository from "./baseRepository.js";

export default class ExameRepository extends BaseRepository {
    constructor(db) {
        super(db);
    }

    async exames() {
        let sql = 'SELECT * FROM exames_type where enabled = 1';
        const rows = await this.db.ExecutaComando(sql);
        return this.toMap(rows);
    }

    async exame(url) {
        let sql = 'SELECT * FROM exames_type where enabled = 1 and url = ?';
        const rows = await this.db.ExecutaComando(sql, [url]);
        return this.toMap(rows);
    }

    async examePrioridade() {
        let sql = 'SELECT * FROM exames_type where prioridade_buscados  is not null and enabled = 1  order by prioridade_buscados asc';
        const rows = await this.db.ExecutaComando(sql);
        return this.toMap(rows);
    }

    toMap(rows) {
        if (rows && typeof rows.length == "number") {
            let lista = [];
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let exame = new ExameEntity();
                exame.id = row.id;
                exame.titulo = row.title;
                exame.url = row.url;
                exame.observacao = row.observacoes;
                exame.ativo = row.enabled;
                exame.orientacao = row.orientacoes;
                exame.prioridade_buscados = row.prioridade_buscados;
                lista.push(exame);
            }
            return lista;
        } else if (rows) {
            let exame = new ExameEntity();
            exame.id = rows['id'];
            exame.titulo = rows['title'];
            exame.url = rows['url'];
            exame.observacao = rows['observacoes'];
            exame.ativo = rows['enabled'];
            exame.orientacao = rows['orientacoes'];
            exame.prioridade_buscados = rows['prioridade_buscados'];
            return exame;
        } else {
            return null;
        }
    }

}


