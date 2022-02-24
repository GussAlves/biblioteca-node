import fetch from "node-fetch";
// object.value(--array)
// .join()

async function checaStatus(arrayLinks) {
    const arrayStatus = await Promise.all(arrayLinks.map( async url => {
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus
}

// Com object.value é possível extrair valores dentro de um objeto
function geraArrayUrls(arrayLink) {
    return arrayLink.map( link => Object.values(link).join());
}

async function validaUrls(arrayLinks) {
    const links = geraArrayUrls(arrayLinks)
    const statusLink = await checaStatus(links)
    return statusLink
}

export default validaUrls;