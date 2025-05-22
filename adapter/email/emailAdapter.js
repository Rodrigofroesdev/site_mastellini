import nodemailer from 'nodemailer';
import fs from 'fs';

export default class EmailAdapter {
    #email;

    constructor() {
        this.#email = nodemailer.createTransport({
            host: process.env.HOSTSTMP,
            port: process.env.PORTSTMP,
            auth: {
                user: process.env.USERSTMP,
                pass: process.env.PASSSTMP
            }
        });
    }

    async enviarEmail(nome, telefone, email, tipoContato, descobriu, mensagem) {
        const mailOptions = {
            from: `"Site Fale Conosco" <${process.env.USERSTMP}>`,
            to: 'mastelliniluizti@gmail.com',
            subject: 'Nova mensagem do formulário Fale Conosco',
            html: `
        <h3>Nova mensagem do site</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferência de contato:</strong> ${tipoContato}</p>
        <p><strong>Como conheceu:</strong> ${descobriu}</p>
        <p><strong>Mensagem:</strong><br>${mensagem}</p>
      `
        };

        await this.#email.sendMail(mailOptions);
    }

    async enviarCurriculo(nome, telefone, email, estado, cidade, mensagem, file) {
        const mailOptions = {
            from: `"Site Trabalhe Conosco" <${process.env.USERSTMP}>`,
            to: 'mastelliniluizti@gmail.com',
            subject: 'Novo currículo recebido pelo formulário Trabalhe Conosco',
            html: `
        <h3>Dados do candidato</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Estado:</strong> ${estado}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Mensagem:</strong><br>${mensagem}</p>
      `,
            attachments: [
                {
                    filename: file.originalname,
                    path: file.path,
                    contentType: file.mimetype
                }
            ]
        };

        await this.#email.sendMail(mailOptions);

        // (opcional) Deleta o arquivo temporário após envio
        fs.unlink(file.path, (err) => {
            if (err) console.error("Erro ao remover arquivo temporário:", err);
        });
    }
}
