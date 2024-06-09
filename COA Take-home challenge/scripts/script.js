//this files comes to display the cards format
import data from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
    
            <img src="${item.image}" alt="${item.name} class="card-image">
            <div class="card-body">
                <p class="animal-name">${item.name}</p>
                <p class="location">${item.location}</p>
                <div class="card-know-more">
                <a href="#" >${item.link}</a>
                <img src="${item.arrow}" alt="${item.arrow} class="card-know-more-arrow">
                </div>

</div>
        `;

        container.appendChild(card);
    });
});
