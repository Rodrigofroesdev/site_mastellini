import BaseEntity from "./baseEntity.js";

export default class UnidadeEntity extends BaseEntity {
    #id;
    #titulo;
    #atendimento;
    #ativo;
    #endereco;
    #telefone;
    #whatsapp;
    #image;

    constructor(id, titulo, atendimento, ativo, endereco, telefone, whatsapp, image) {
        super();
        this.#id = id;
        this.#titulo = titulo;
        this.#atendimento = atendimento;
        this.#ativo = ativo;
        this.#endereco = endereco;
        this.#telefone = telefone;
        this.#whatsapp = whatsapp;
        this.#image = image;
    }

    get id() { return this.#id; }
    get titulo() { return this.#titulo; }
    get atendimento() { return this.#atendimento; }
    get ativo() { return this.#ativo; }
    get endereco() { return this.#endereco; }
    get telefone() { return this.#telefone; }
    get whatsapp() { return this.#whatsapp; }
    get image() { return this.#image; }

    set id(id) { this.#id = id; }
    set titulo(titulo) { this.#titulo = titulo; }
    set atendimento(atendimento) { this.#atendimento = atendimento; }
    set ativo(ativo) { this.#ativo = ativo; }
    set endereco(endereco) { this.#endereco = endereco; }
    set telefone(telefone) { this.#telefone = telefone; }
    set whatsapp(whatsapp) { this.#whatsapp = whatsapp; }
    set image(image) { this.#image = image; }
}