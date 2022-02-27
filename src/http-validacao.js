import fetch from "node-fetch";
// object.value(--array)
// .join()

function manejaErros(erro) {
    throw new Error(erro.message)
}

// Com object.value é possível extrair valores dentro de um objeto
// Extrai links dos objetos
function extraiUrls(arrayLink) {
    return arrayLink.map( link => Object.values(link).join());
}

async function checaStatus(arrayUrls) {
    try {
        const arrayStatus = await Promise
            .all(arrayUrls
                .map( async url => {
                    const res = await fetch(url)
                    return `${res.status} - ${res.statusText}`
                }))
            return arrayStatus
    } catch (erro) {
        manejaErros(erro)
    }
}

async function validaUrls(arrayLinks) {
    const links = extraiUrls(arrayLinks)
    const statusLink = await checaStatus(links)
    
    const resultados = arrayLinks.map( (objeto, index) => ({ 
        ...objeto,
        status: statusLink[index]   
    }))
    return resultados
}

export default validaUrls;