import { EntitySchema } from "typeorm";

const autorLivro = new EntitySchema({
    name: "AutorLivro",
    tableName: "autorLivro",
    columns: {
        idAutor: {primary: true, type: Number, nullable: false},
        idLivro: {primary: true, type: Number, nullable: false},
        createdAt: {type: "datetime", nullable: false, default: () => "CURRENT_TIMESTAMP"},
        deletedAt: {type: "datetime", nullable: true}
    },
    relations: {
        autor: {type: "many-to-one", target: "Autor", nullable: false},
        livro: {type: "many-to-one", target: "Livro", nullable: false}
    },
});

export default autorLivro;