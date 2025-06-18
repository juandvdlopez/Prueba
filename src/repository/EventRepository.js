import GenericRepository from "./GenericRepository.js";


import getPool from '../config/db.connection.js';
//import { response } from 'express';
import errorHelper from '../utils/errors.helper.js';

process.loadEnvFile('./.env')


class EventRepository extends GenericRepository {
  constructor() {
    super('eventos'); // nombre de la tabla
  }

  async findById(id) {
    const pool = await getPool();
    const [rows] = await pool.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
    return rows[0];
  }

  async create({ tipo, banda, evento  }) {
 
    const pool = await getPool();

    try{  
        const [result] = await pool.query(
      `INSERT INTO ${this.table} (tipo, banda, evento) VALUES (?, ?, ?)`,
      [tipo, banda, evento]
    );

    if (result.affectedRows !== 1) {
      throw errorHelper.conflictError(
        'Error al crear el evento',
        'CREATE_EVENT_ERROR'
      );
    }         
     
     return { id: result.insertId, tipo, banda, evento};
    }catch (error) {
      throw error;
    }

  
    
   
}
}

export default new EventRepository();   
