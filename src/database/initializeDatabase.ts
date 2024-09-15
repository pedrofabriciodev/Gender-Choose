import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync('genderChoose.db');

export async function initializeDatabase() {

    try {
        db.execSync(`
            DROP TABLE rh;
            DROP TABLE generos;

        `)
    } catch (error) {
        console.log(error)
    }

    try {
        // Primeiro bloco para criar a tabela `rh`
        
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            PRAGMA foreign_keys = ON;

            CREATE TABLE IF NOT EXISTS rh (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                cpf TEXT UNIQUE NOT NULL,
                matricula INTEGER UNIQUE NOT NULL
            );
            CREATE TABLE IF NOT EXISTS generos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                cpf TEXT UNIQUE NOT NULL,
                genero TEXT NOT NULL,
                FOREIGN KEY (cpf) REFERENCES rh(cpf)
                );
                
            
        `);

        console.log('Banco iniciado');

    } catch (error) {
        console.log("Erro ao inicializar o banco de dados:", error);
    }

    try {
        db.execAsync(`
            INSERT OR IGNORE INTO rh (nome, cpf, matricula) VALUES ('João Silva', '12345678901', 12345678);
            INSERT OR IGNORE INTO rh (nome, cpf, matricula) VALUES ('Maria Souza', '10987654321', 87654321);
            INSERT OR IGNORE INTO rh (nome, cpf, matricula) VALUES ('Teste Conexão', '12', 1);
            INSERT OR IGNORE INTO rh (nome, cpf, matricula) VALUES ('Teste Conexão2', '2', 2);
            INSERT OR IGNORE INTO rh (nome, cpf, matricula) VALUES ('Igor', '71408618460', 01614346);
            INSERT OR IGNORE INTO rh (nome, cpf, matricula) VALUES ('Pedro Fabricio', '99999999999', 01617002);
            
          
            INSERT OR IGNORE INTO generos (cpf, genero) VALUES ('12345678901', 'Masculino');
            INSERT OR IGNORE INTO generos (cpf, genero) VALUES ('10987654321', 'Feminino');
            INSERT OR IGNORE INTO generos (cpf, genero) VALUES ('2', 'muie');
            INSERT OR IGNORE INTO generos (cpf, genero) VALUES ('71408618460', 'Gay');
        `)

        console.log("inserts ok")
        } catch (error) {
            console.log(error)
    }
}

export { db };
