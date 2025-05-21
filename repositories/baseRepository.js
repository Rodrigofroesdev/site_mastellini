import Database from "../db/database.js";

export default class BaseRepository {
    #db;

    constructor() {
        this.#db = Database.getInstance();
    }

    get db() { return this.#db; }
}