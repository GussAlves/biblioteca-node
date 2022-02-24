import fetch from "node-fetch";
// object.value(--array)
// .join()

function manejaErros(erro) {
    throw new Error(erro.message)
}

async function checaStatus(arrayUrls) {
    try {
        const arrayStatus = await Promise
            .all(arrayUrls
                .map( async url => {
                    const res = await fetch(url)
                    return res.status
                }))
            return arrayStatus
    } catch (erro) {
        manejaErros(erro)
    }
}

// Com object.value é possível extrair valores dentro de um objeto
function geraArrayUrls(arrayLink) {
    return arrayLink.map( link => Object.values(link).join());
}

async function validaUrls(arrayUrls) {
    const links = geraArrayUrls(arrayUrls)
    const statusLink = await checaStatus(links)
    
    const resultados = arrayUrls.map( (objeto, index) => ({ 
        ...objeto,
        status: statusLink[index]
    }))
    return resultados
}

export default validaUrls;