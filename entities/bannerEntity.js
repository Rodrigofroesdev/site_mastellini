import BaseEntity from "./baseEntity.js";

export default class BannerEntity extends BaseEntity {
    #id;
    #tipo;
    #titulo;
    #url;
    #image;
    #ativo;
    #ordem;
    #show_in;
    #show_out;

    constructor(id, tipo, titulo, url, image, ativo, ordem, show_in, show_out) {
        super();
        this.#id = id;
        this.#tipo = tipo;
        this.#titulo = titulo;
        this.#url = url;
        this.#image = image;
        this.#ativo = ativo;
        this.#ordem = ordem;
        this.#show_in = show_in;
        this.#show_out = show_out;
    }

    get id() { return this.#id; }
    get tipo() { return this.#tipo; }
    get titulo() { return this.#titulo; }
    get url() { return this.#url; }
    get image() { return this.#image; }
    get ativo() { return this.#ativo; }
    get ordem() { return this.#ordem; }
    get show_in() { return this.#show_in; }
    get show_out() { return this.#show_out; }

    set id(id) { this.#id = id; }
    set tipo(tipo) { this.#tipo = tipo; }
    set titulo(titulo) { this.#titulo = titulo; }
    set url(url) { this.#url = url; }
    set image(image) { this.#image = image; }
    set ativo(ativo) { this.#ativo = ativo; }
    set ordem(ordem) { this.#ordem = ordem; }
    set show_in(show_in) { this.#show_in = show_in; }
    set show_out(show_out) { this.#show_out = show_out; }
}