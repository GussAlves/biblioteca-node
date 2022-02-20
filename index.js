import chalk from "chalk";
import fs from "fs";

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^#$\s].[^\s]*)\)/gm //https://regex101.com/
    const arrayResultados = []
    let temp
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados
}

//com async / await
async function pegaArquivo(pathArquivo) {
    const encoding = 'UTF-8'
    try {
        const texto = await fs.promises.readFile(pathArquivo, encoding)
        console.log(extraiLinks(texto))
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.blue('A operação foi finalizada!'))
    }
}

pegaArquivo('./arquivos/texto1.md')



// com promisses
/* function pegaArquivo(pathArquivo) {
    const encoding = 'UTF-8'
    fs
        .promises
        .readFile(pathArquivo, encoding)
        .then(x => console.log(chalk.green(x)))
        .catch(err => trataErro(err))
} */

// Sem promises
/* function pegaArquivo(pathArquivo) {
    const encoding = 'UTF-8'
    fs.readFile(pathArquivo, encoding, (err, texto) => {
        if (err) {
            trataErro(err)
            return
        }
        console.log(chalk.green(texto))
    })
} */