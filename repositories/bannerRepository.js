import BannerEntity from "../entities/bannerEntity.js";
import BaseRepository from "./baseRepository.js";

export default class BannerRepository extends BaseRepository {
    constructor(db) {
        super(db);
    }

    async bannersDesk() {
        let sql = 'SELECT * FROM banner where enabled = 1 and type = 1 order by banner.order asc';
        const rows = await this.db.ExecutaComando(sql);
        return this.toMap(rows);
    }

    async bannersMobile() {
        let sql = 'SELECT * FROM banner where enabled = 1 and type = 2 order by banner.order asc';
        const rows = await this.db.ExecutaComando(sql);
        return this.toMap(rows);
    }

    toMap(rows) {
        if (rows && typeof rows.length == "number") {
            let lista = [];
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let banner = new BannerEntity();
                banner.id = row.id;
                banner.tipo = row.tipo;
                banner.titulo = row.title;
                banner.url = row.url;
                banner.image = row.image;
                banner.ativo = row.enabled;
                banner.ordem = row.ordem;
                banner.show_in = row.show_in;
                banner.show_out = row.show_out;
                lista.push(banner);
            }
            return lista;
        } else if (rows) {
            let banner = new BannerEntity();
            banner.id = rows['id'];
            banner.tipo = rows['tipo'];
            banner.titulo = rows['title'];
            banner.url = rows['url'];
            banner.image = rows['image'];
            banner.ativo = rows['enabled'];
            banner.ordem = rows['ordem'];
            banner.show_in = rows['show_in'];
            banner.show_out = rows['show_out'];
            return banner;
        } else {
            return null;
        }


    }
}
