//command line interface / cli
import chalk from "chalk";
import pegaArquivo from "./index.js";
import validaUrls from "./http-validacao.js";

const codigo = process.argv

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    if (codigo[3] === 'validar') {
        console.log(chalk.yellow('links validados'), validaUrls(resultado))
    } else {
        console.log(chalk.yellow('lista de links'), resultado)
    }
}

processaTexto(codigo) 