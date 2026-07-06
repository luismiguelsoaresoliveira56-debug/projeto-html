const API = "https://rickandmortyapi.com/api";


async function buscarPersonagem() {

    const id = document.getElementById("input-personagem").value;
    const resultado = document.getElementById("resultado-personagem");

    if (!id) {
        resultado.innerHTML = "<p>Digite um ID.</p>";
        return;
    }

    try {

        const response = await fetch(`${API}/character/${id}`);

        if (!response.ok) {
            throw new Error("Personagem não encontrado.");
        }

        const personagem = await response.json();

        resultado.innerHTML = `
            <img src="${personagem.image}" alt="${personagem.name}">
            <p><strong>Nome:</strong> ${personagem.name}</p>
            <p><strong>Espécie:</strong> ${personagem.species}</p>
            <p><strong>Status:</strong> ${personagem.status}</p>
            <p><strong>Gênero:</strong> ${personagem.gender}</p>
        `;

    } catch (erro) {
        resultado.innerHTML = "<p>Registro não encontrado.</p>";
    }
}


async function buscarEpisodio() {

    const id = document.getElementById("input-episodio").value;
    const resultado = document.getElementById("resultado-episodio");

    if (!id) {
        resultado.innerHTML = "<p>Digite um ID.</p>";
        return;
    }

    try {

        const response = await fetch(`${API}/episode/${id}`);

        if (!response.ok) {
            throw new Error("Episódio não encontrado.");
        }

        const episodio = await response.json();

        resultado.innerHTML = `
            <p><strong>Nome:</strong> ${episodio.name}</p>
            <p><strong>Código:</strong> ${episodio.episode}</p>
            <p><strong>Data:</strong> ${episodio.air_date}</p>
        `;

    } catch (erro) {
        resultado.innerHTML = "<p>Registro não encontrado.</p>";
    }
}


async function buscarLocalizacao() {

    const id = document.getElementById("input-localizacao").value;
    const resultado = document.getElementById("resultado-localizacao");

    if (!id) {
        resultado.innerHTML = "<p>Digite um ID.</p>";
        return;
    }

    try {

        const response = await fetch(`${API}/location/${id}`);

        if (!response.ok) {
            throw new Error("Localização não encontrada.");
        }

        const localizacao = await response.json();

        resultado.innerHTML = `
            <p><strong>Nome:</strong> ${localizacao.name}</p>
            <p><strong>Tipo:</strong> ${localizacao.type}</p>
            <p><strong>Dimensão:</strong> ${localizacao.dimension}</p>
        `;

    } catch (erro) {
        resultado.innerHTML = "<p>Registro não encontrado.</p>";
    }
}