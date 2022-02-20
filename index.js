import chalk from "chalk";
import fs from "fs";

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}

const texto = 'A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.São geralmente recuperados a partir de um objeto[FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)';

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^#$\s].[^\s]*)\)/gm;
    const linksExtraidos = texto.match(regex);
    console.log(linksExtraidos)
}

extraiLinks(texto);

//com async / await
async function pegaArquivo(pathArquivo) {
        const encoding = 'UTF-8'
        try {
            const texto = await fs.promises.readFile(pathArquivo, encoding)
            console.log(chalk.green(texto))
        } catch (erro) {
            trataErro(erro)
        } finally {
            console.log(chalk.blue('A operação foi finalizada!'))
        }
    }

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
/* function pegaArquivoSemPromises(pathArquivo) {
    const encoding = 'UTF-8'
    fs.readFile(pathArquivo, encoding, (err, texto) => {
        if (err) {
            trataErro(err)
            return
        }
        console.log(chalk.green(texto))
    })
} */
//pegaArquivoSemPromises('./arquivos/texto1.md')

// pegaArquivo('./arquivos/texto1.md')
