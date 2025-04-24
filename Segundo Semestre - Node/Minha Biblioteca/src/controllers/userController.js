import express from "express";
import usuario from "../entities/user.js";
import { AppDataSource } from "../database/data-source.js";

const route = express.Router();
const repositorioUsuario = AppDataSource.getRepository(usuario);

route.get("/", (request, response) => {
    response.status(200).send("Deu certo!!!!");
});

route.post("/", async (request, response) => {
   const {name, email, password, typeUser} = request.body;

   if(name.length < 1) {
    return response.status(400).send({"response": "Campo 'name' deve ter pelo menos um caractere."});
   }

   if(!email.includes("@")){
        return response.status(400).send({"response": "Campo 'email' está no padrão incorreto."});
   }

   if(password.length < 6){
        return response.status(400).send({"response": "A senha deve conter pelo menos 6 caracteres."})
   }

   if(typeUser.toLowerCase() != "admin" && typeUser.toLowerCase() != "comum"){
        return response.status(400).send({"response": 'O tipo de usuário deve ser "admin" ou "comum".'})
   }

   try {
     const NovoUser = repositorioUsuario.create({name, email, password, typeUser});
     await repositorioUsuario.save(NovoUser);
     return response.status(201).send("Usuário cadastrado com sucesso.");
   } catch(err) {
     return response.status(500).send({"response": err});
   }
});

export default route;