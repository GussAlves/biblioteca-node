//command line interface / cli
import chalk from "chalk";
import pegaArquivo from "./index.js";

const codigo = process.argv

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2])
    console.log(chalk.yellow('lista de links'), resultado)
}

processaTexto(codigo) 