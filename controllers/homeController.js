import BannerRepository from "../repositories/bannerRepository.js";
import ExameRepository from "../repositories/exameRepository.js";

export default class homeController {
    async homeView(req, res) {

        const bannerRepository = new BannerRepository();
        const bannersDesk = await bannerRepository.bannersDesk();
        const bannersMobile = await bannerRepository.bannersMobile();

        const exameRepository = new ExameRepository();
        const e = await exameRepository.examePrioridade();
        console.log(e);
        if (bannersDesk != null && bannersMobile != null && e != null) {
            return res.render('home/home', { bannersDesk: bannersDesk, bannersMobile: bannersMobile, exames: e, hideHeader: false });
        } else {
            return res.render('home/home', { bannersDesk: [], bannersMobile: [], exames: [], hideHeader: false, exames: [] });
        }
    }
}