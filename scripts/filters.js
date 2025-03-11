document.addEventListener('DOMContentLoaded', () => {
    const galleryDiv = document.getElementById('gallery');

    // Carregar dados do JSON
    fetch('assets/data/obras.json')
        .then(response => response.json())
        .then(data => {
            const obras = data.obras;
            mostrarObras(obras);
        });
});

function mostrarObras(obras) {
    const galleryDiv = document.getElementById('gallery');
    galleryDiv.innerHTML = obras.map(obra => `
        <div class="artwork">
            <img src="${obra.imagem}" alt="${obra.titulo}">
            <h3>${obra.titulo}</h3>
            <p>${obra.ano} | ${obra.tecnica}</p>
        </div>
    `).join('');
}
