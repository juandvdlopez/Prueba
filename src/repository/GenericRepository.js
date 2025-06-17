import getPool from '../config/db.connection.js'; 



export default class GenericRepository {
  constructor(table) {
    this.table = table;
  }

  async findAll() {
    const pool = getPool();
    const [rows] = await pool.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async findById(id) {
    const pool = getPool();
    const [rows] = await pool.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
    return rows[0];
  }

  async delete(id) {
    const pool = getPool();
    const [result] = await pool.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    return result.affectedRows > 0;
  }

  // Método base para crear: los campos deben definirse en el repositorio específico
  async create(data) {
    throw new Error('Implementa create() en el repositorio específico');
  }

  async update(id, data) {
    throw new Error('Implementa update() en el repositorio específico');
  }
}