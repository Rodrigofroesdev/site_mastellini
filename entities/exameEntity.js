import BaseEntity from "./baseEntity.js";

export default class ExameEntity extends BaseEntity {
    #id;
    #titulo;
    #url;
    #observacao;
    #ativo;
    #orientacao;
    #prioridade_buscados;

    constructor(id, titulo, url, observacao, ativo, orientacao, prioridade_buscados) {
        super();
        this.#id = id;
        this.#titulo = titulo;
        this.#url = url;
        this.#observacao = observacao;
        this.#ativo = ativo;
        this.#orientacao = orientacao;
        this.#prioridade_buscados = prioridade_buscados;
    }

    get id() { return this.#id; }
    get titulo() { return this.#titulo; }
    get url() { return this.#url; }
    get observacao() { return this.#observacao; }
    get ativo() { return this.#ativo; }
    get orientacao() { return this.#orientacao; }
    get prioridade_buscados() { return this.#prioridade_buscados; }


    set id(id) { this.#id = id; }
    set titulo(titulo) { this.#titulo = titulo; }
    set url(url) { this.#url = url; }
    set observacao(observacao) { this.#observacao = observacao; }
    set ativo(ativo) { this.#ativo = ativo; }
    set orientacao(orientacao) { this.#orientacao = orientacao; }
    set prioridade_buscados(prioridade_buscados) { this.#prioridade_buscados = prioridade_buscados; }
}