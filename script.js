fetch('/api/featured-sitters')
    .then(response => response.json())
    .then(sitters => {
        const sittersDiv = document.getElementById('featured-sitters');
        sitters.forEach(sitter => {
            const sitterDiv = document.createElement('div');
            sitterDiv.className = 'featured-sitter';
            sitterDiv.innerHTML = `
                <h2>${sitter.name}</h2>
                <img src="${sitter.image}" alt="${sitter.name}">
                <p>${sitter.description}</p>
            `;
            sittersDiv.appendChild(sitterDiv);
        });
    });