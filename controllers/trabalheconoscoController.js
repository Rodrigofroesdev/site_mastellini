import EmailAdapter from '../adapter/email/emailAdapter.js';

export default class trabalheconoscoController {
    async trabalheconosco(req, res) {
        const {
            iName,
            iTelefone,
            iEmail,
            iEstado,
            iCidade,
            iMsg
        } = req.body;

        const file = req.file;

        try {
            const emailAdapter = new EmailAdapter();
            await emailAdapter.enviarCurriculo(iName, iTelefone, iEmail, iEstado, iCidade, iMsg, file);
            res.json({ success: true });
        } catch (error) {
            console.error("Erro ao enviar currículo:", error);
            res.status(500).json({ success: false });
        }
    }
}
