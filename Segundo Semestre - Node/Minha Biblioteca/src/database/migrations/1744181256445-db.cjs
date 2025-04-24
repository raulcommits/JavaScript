module.exports = class Db1744181256445 {
    name = 'Db1744181256445'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`editora\` (\`codigo_editora\` int NOT NULL AUTO_INCREMENT, \`nome_editora\` varchar(100) NOT NULL, \`cnpj\` varchar(18) NOT NULL, \`email\` varchar(100) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, PRIMARY KEY (\`codigo_editora\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`categoria\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`DROP TABLE \`editora\``);
    }
}
