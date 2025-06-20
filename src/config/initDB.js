import getPool from './db.connection.js'

const main = async () => {
  const pool = await getPool()
  console.log('Borrando tablas')
  await pool.query('DROP TABLE IF EXISTS eventos, notes, users')

  console.log('Creando tablas')
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(250) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
        modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
    )	
    `)

  await pool.query(`
    CREATE TABLE IF NOT EXISTS eventos (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        tipo VARCHAR(10) NOT NULL,
        banda VARCHAR(50) NOT NULL,
        evento VARCHAR(10) NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
        modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
    )	
    `)

  // await pool.query(`
  //   CREATE TABLE IF NOT EXISTS notes (
  //       id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  //       title VARCHAR(50) NOT NULL,
  //       text TEXT NOT NULL,
  //       userId INT UNSIGNED NOT NULL,
  //       categoryId INT UNSIGNED NOT NULL,
  //       createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
  //       modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
  //       FOREIGN KEY (userId) REFERENCES users(id),
  //       FOREIGN KEY (categoryId) REFERENCES categories(id)
  //   )
  //   `)

  console.log('Tablas creadas')
}

main()
