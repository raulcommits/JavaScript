module.exports = class Db1744181170779 {
    name = 'Db1744181170779'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`categoria\` (\`codigo_categoria\` int NOT NULL AUTO_INCREMENT, \`nome_categoria\` varchar(45) NOT NULL, \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime NULL, PRIMARY KEY (\`codigo_categoria\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`author\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deletedAt\` \`deletedAt\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`DROP TABLE \`categoria\``);
    }
}
