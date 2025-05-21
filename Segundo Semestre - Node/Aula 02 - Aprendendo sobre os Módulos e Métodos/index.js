import {promises as fs} from "fs";

async function seguraDados() {
    const dados = JSON.parse (await fs.readFile("./people.json"));
    return dados;
}

async function exemplinforEach() {
    const dadosSegurados = await seguraDados();

    dadosSegurados.forEach(people => {
        console.log(people.name.first + ": " + people.location.street.name + ", " + people.location.street.number)
    });
}

async function exemploMap() {
    const dadosSegurados = await seguraDados();

    // o método MAP permite criar uma nota variável para pegar apenas os dados necessários. Ou seja, ele vai criar uma nova variável com os dados limpos.
    const dadosLimpos = dadosSegurados.map(people => {
        return {
            "nomeCompleto": (people.name.first + ": " + people.name.last),
            "idade": (people.dob.age),
            "email": (people.email)
        }
    });
    console.log(dadosLimpos)
}  
async function exemploFilter() {
    const dadosSegurados = await seguraDados();

    // o método FILTER é um comando que permite selecionar os dados baseado num teste lógico que se deseja ser implementado. Ele irá criar uma nova variável.
    const maisFifty = dadosSegurados.filter(people => {
        return (people.dob.age) > 70 && (people.gender == "male")
    }).map(people => {
        return {
            "nomeCompleto": (people.name.first + ": " + people.name.last),
            "idade": (people.dob.age),
            "email": (people.email)
        }
    });
    console.log(maisFifty)
}
async function exemploFind() {
    const dadosSegurados = await seguraDados();

    const existePessoa = dadosSegurados.find(people => {
        return people.email == "norma.viana@example.com"
    });
    console.log(existePessoa)
}
async function exemploSome() {
    const dadosSegurados = await seguraDados();

    const existeMacho = dadosSegurados.some(people => {
        return people.gender == "male"
    });
    console.log(existeMacho)
}
async function login() {
    const dadosSegurados = await seguraDados();

    const loginCorreto = dadosSegurados.some(people => {
        return people.email == "herman.dacosta@example.com" && people.login.password == "royals"
    });
    console.log(loginCorreto)
}
async function exemploEvery() {
    const dadosSegurados = await seguraDados();

    const brasileiros = dadosSegurados.every(people => {
        return people.location.country == "Brazil"
    });
    console.log(brasileiros)
}
async function exemploSort01() {
    const dadosSegurados = await seguraDados();

    const dadosEmOrdem = dadosSegurados.sort((people1, people2) => {
        return people1.dob.age - people2.dob.age
    }).map(people => {
        return people.dob.age
    });
    console.log(dadosEmOrdem)
}
async function exemploSort02() {
    const dadosSegurados = await seguraDados();

    // O método "localeCompare" permite fazer a comparação entre Strings

    const dadosEmOrdem = dadosSegurados.sort((people1, people2) => {
        return people1.name.first.localeCompare(people2.name.first)
    }).map(people => {
        return people.name.first
    });
    console.log(dadosEmOrdem)
}
async function exemploIncludes() {
    const dadosSegurados = await seguraDados();

    const dados = []

    dadosSegurados.forEach(people => {
        if(people.name.first.toLowerCase().includes("ma".toLowerCase())) {
            dados.push(people.name.first)
        }
    });
    console.log(dados)
}
async function exemploStartsWith() {
    const dadosSegurados = await seguraDados();

    const dados = []

    dadosSegurados.forEach(people => {
        if(people.name.first.toUpperCase().startsWith("l".toUpperCase())) {
            dados.push(people.name.first)
        }
    });
    console.log(dados);
}
async function exemploLength() {
    const dadosSegurados = await seguraDados();

    const nome = "Raul Tomaz"

    console.log(nome.length)
}
exemploMap()