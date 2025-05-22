import EmailAdapter from "../adapter/email/emailAdapter.js";

export default class faleconoscoController {
    faleconoscoView(req, res) {
        res.render('faleconosco/faleconosco', { hideHeader: false });
    }

    async faleconosco(req, res) {
        const emailAdapter = new EmailAdapter();
        const {
            iName,
            iTelefone,
            iEmail,
            iTipoContato,
            iDescobriu,
            iMsg
        } = req.body;
        try {
            await emailAdapter.enviarEmail(iName, iTelefone, iEmail, iTipoContato, iDescobriu, iMsg);
            res.json({ success: true });
        } catch (error) {
            console.error('Erro ao enviar o email:', error);
            res.json({ success: false });
        }
    }
}