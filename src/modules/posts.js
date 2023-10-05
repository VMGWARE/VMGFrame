window.posts = function () {
    const root = document.getElementById('root');
    root.innerHTML = '';

    const container = document.createElement('div');
    container.classList.add('container', 'mt-5');

    const heading = document.createElement('h2');
    heading.innerText = 'Welcome to FakeBook';

    const posts = [
        {
            username: 'John Doe',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://via.placeholder.com/150',
            imageAlt: 'Placeholder Image 1'
        },
        {
            username: 'Alice Smith',
            text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: 'https://via.placeholder.com/150',
            imageAlt: 'Placeholder Image 2'
        },
        {
            username: 'Bob Johnson',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imageUrl: 'https://via.placeholder.com/150',
            imageAlt: 'Placeholder Image 3'
        }
    ];

    const postContainer = document.createElement('div');
    postContainer.classList.add('mt-4');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('card', 'mb-3');
        postElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${post.username}</h5>
                <p class="card-text">${post.text}</p>
            </div>
            <img data-src="${post.imageUrl}" alt="${post.imageAlt}">
        `;
        postContainer.appendChild(postElement);
    });

    container.appendChild(heading);
    container.appendChild(postContainer);
    root.appendChild(container);

    // Lazy load images
    const images = postContainer.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
    });
};
