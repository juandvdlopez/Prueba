import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import GenericRepository from './GenericRepository.js';
import getPool from '../config/db.connection.js';
//import { response } from 'express';
import errorHelper from '../utils/errors.helper.js';

process.loadEnvFile('./.env')


class UserRepository extends GenericRepository {
  constructor() {
    super('users'); // nombre de la tabla
  }

  async findByEmail(email) {
    const pool = await getPool();
    const [rows] = await pool.query(`SELECT * FROM ${this.table} WHERE email = ?`, [email]);
    return rows[0];
  }

  async create({ email, password }) {
  const pool = await getPool();
 

  try {
    const [result] = await pool.query(
      `INSERT INTO ${this.table} (email, password) VALUES (?, ?)`,
      [email, password]
    );

    

    if (result.affectedRows !== 1) {
      throw errorHelper.conflictError(
        'Error al crear el usuario',
        'CREATE_USER_ERROR'
      );
    }

    return { id: result.insertId, email };
  } catch (error) {
   
    throw error;
  }
}


  async update(id, { email, password }) {
    const pool = await getPool();
    await pool.query(
      `UPDATE ${this.table} SET email = ?, password = ? WHERE id = ?`,
      [ email,password,  id]
    );
    return { id, email};
  }

  async loginUser(data) {
    const pool = await getPool();
    const sqlQuery = `SELECT * FROM ${this.table} WHERE email = ? `;
    const values = [data.email]; 

   
    const [result] = await pool.query(sqlQuery, values);
 
    if (result.length === 0) {
      throw errorHelper.notFoundError('Usuario no encontrado');
    }

    const validation = await bcrypt.compare(data.password, result[0].password);
     if (!validation) {
      throw errorHelper.notAuthorizedError('Contraseña incorrecta');
    }

    const tokenInfo = {
      id: result[0].id,
    }
    console.log (tokenInfo)
    const token = jwt.sign(tokenInfo, process.env.SECRET_KEY, {
      expiresIn: '1h'
    })
    //devolver respuesta
    return token

  } 
}

export default new UserRepository();