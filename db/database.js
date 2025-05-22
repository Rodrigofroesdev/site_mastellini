import mysql from 'mysql2';

export default class Database {
    static #instance;
    #conexao;

    get conexao() { return this.#conexao; }
    set conexao(conexao) { this.#conexao = conexao; }

    constructor() {
        this.#conexao = mysql.createPool({
            host: process.env.HOSTDB,
            database: process.env.DATABASEDB,
            user: process.env.USERDB,
            password: process.env.PASSDB,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        }).promise(); // Use .promise() para trabalhar com async/await
    }

    static getInstance() {
        if (!Database.#instance) {
            Database.#instance = new Database();
        }
        return Database.#instance;
    }

    async ExecutaComando(sql, valores = []) {
        const [results] = await this.#conexao.query(sql, valores);
        return results;
    }

    async ExecutaComandoNonQuery(sql, valores = []) {
        const [results] = await this.#conexao.query(sql, valores);
        return results.affectedRows > 0;
    }

    async ExecutaComandoLastInserted(sql, valores = []) {
        const [results] = await this.#conexao.query(sql, valores);
        return results.insertId;
    }
}
