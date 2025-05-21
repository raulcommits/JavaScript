import { time } from "console";

import {promises as fs} from "fs";

// EXERCÍCIO 1 - Criar uma função para leitura do arquivo JSON = CONCLUÍDO
async function coletaDados() {
    const dados = JSON.parse (await fs.readFile("./times 1.json"));
    return dados;
}

// EXERCÍCIO 2 - Criar uma função que liste os nomes dos Times = CONCLUÍDO
async function exercicio2() {
    const dadosGuardados = await coletaDados();

    dadosGuardados.forEach(times => {
        console.log(times.nome);
    });
}

// EXERCÍCIO 3 - Criar uma função que liste os times iniciados com "S" = CONCLUÍDO
async function exercicio3() {
    const dadosGuardados = await coletaDados();

    const dados = []

    dadosGuardados.forEach(times => {
        if (times.detalhes.nome_oficial.startsWith("S")) {
            dados.push(times.detalhes.nome_oficial)
        }
    });
    console.log(dados);
}

// EXERCÍCIO 4 - Criar uma função que liste os estádios em ordem de menos à mais letras
async function exercicio4() {
    const dadosGuardados = await coletaDados();

    const filtroDados = dadosGuardados.map((time) => {
         return  time.detalhes.estadio.nome
    }).sort((time0, time2) => {
        return time0.length - time2.length
    });
    console.log(filtroDados)
}

// EXERCÍCIO 5 - Criar uma função que liste o nome, a capacidade e a cidade de localização para os estádios de São Paulo = CONCLUÍDO
async function exercicio5() {
    const dadosGuardados = await coletaDados();

    const estadiosSP = dadosGuardados.filter(times => {
        return (times.detalhes.localizacao.estado == "SP")
    }).map(times => {
        return {
            "Nome do Estádio": (times.detalhes.estadio.nome),
            "Capacidade": (times.detalhes.estadio.capacidade),
            "Cidade de Localização": (times.detalhes.localizacao.cidade)
        }
    });
    console.log(estadiosSP)
}

// EXERCÍCIO 6 - Criar uma função que liste o nome dos times do RS com + de 7 letras = CONCLUÍDO
async function exercicio6() {
    const dadosGuardados = await coletaDados();

    const timesRS7mais = dadosGuardados.filter(times => {
        return (times.nome.length) > 7 && (times.detalhes.localizacao.estado == "RS")
    }).map(times => {
        return {
            "Nome": (times.nome)
        }
    });
    console.log(timesRS7mais)
}

// EXERCÍCIO 7 - Criar uma função que informe o nome e quantidade de títulos de cada time
async function exercicio7() {
    const dadosGuardados = await coletaDados();
    
    const nomeeTitulos = dadosGuardados.filter(time => {
        return (time.nome) + (time.historico.principais_titulos)
    }).map(time => {
        return {
            "Nome do Time": time.nome,
            "Quantidade de Títulos": time.historico.principais_titulos.length
        }
    })
    console.log(nomeeTitulos);
}

// EXERCÍCIO 8 - Criar uma função que liste o nome do time, do estádio e do mascote para os que tiverem estádio +50,000 de capacidade = CONCLUÍDO
async function exercicio8() {
    const dadosGuardados = await coletaDados();

    const mais50m = dadosGuardados.filter(times => {
        return (times.detalhes.estadio.capacidade) > 50000
    }).map(times => {
        return {
            "Nome do Time": (times.nome),
            "Nome do Estádio": (times.detalhes.estadio.nome),
            "Nome do Mascote": (times.mascote)
        }
    });
    console.log(mais50m);
}

// EXERCÍCIO 9 - Criar uma função que exiba o nome do time e seus ídolos, onde os ídolos deverão ser apresentados em ordem alfabética = CONCLUÍDO
async function exercicio9() {
    const dadosGuardados = await coletaDados();
    dadosGuardados.forEach(time => {
        const idolos = []
        time.historico.maiores_idolos.forEach(idolo => {
            idolos.push(idolo)
        })
        const ordenado = idolos.sort((a, b) => {
            return a.localeCompare(b)
        })
        console.log(`Nome do time: ${time.nome} -> Ídolos: [${ordenado}]`)
    })
}

// EXERCÍCIO 10 - Criar uma função que exiba a sigla do estado e quantidade de times
async function exercicio10() {
    const dadosGuardados = await coletaDados();

    const timesPorEstado = dadosGuardados.reduce((acrescentarTime, time) => {
        const estado = time.detalhes.localizacao.estado;
        acrescentarTime[estado] = (acrescentarTime[estado] || 0) + 1;
        return acrescentarTime;
      }, {});
    
      // Objeto convertido em um Array para a leitura de dados
    const conversaoFeita = Object.entries(timesPorEstado).map(([estado, quantidade]) => ({
        Estado: estado,
        "Quantidade de times": quantidade,
    }));
    
      console.log(conversaoFeita);
    
}
  
exercicio10()