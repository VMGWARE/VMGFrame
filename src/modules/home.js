/*
 * VMGFrame - home.js
 * Version 1.0.1
 * https://github.com/VMGWARE/VMGFrame
 *
 * (C) 2023 Company VMGWare. All rights reserved.
 * This code is open source and available under the MIT License.
 * https://opensource.org/licenses/MIT
 */

window.home = function () {
    const root = document.getElementById('root');
    root.innerHTML = '';
  
    const container = document.createElement('div');
    container.classList.add('container', 'mt-5');
  
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light', 'mb-4');
    navbar.innerHTML = `
      <a class="navbar-brand" href="#">FakeBook</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Friends</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Messages</a>
          </li>
        </ul>
      </div>
    `;
  
    const header = document.createElement('header');
    header.innerHTML = `
      <h1 class="display-4">Welcome to FakeBook</h1>
      <p class="lead">Connect with friends and the world around you.</p>
    `;
  
    const sections = document.createElement('div');
    sections.classList.add('row');
  
    const leftSection = document.createElement('div');
    leftSection.classList.add('col-md-6', 'mb-4');
    leftSection.innerHTML = `
      <h2>Discover New Friends</h2>
      <p>Connect with people and expand your network.</p>
    `;
  
    const rightSection = document.createElement('div');
    rightSection.classList.add('col-md-6', 'mb-4');
    rightSection.innerHTML = `
      <h2>Share Your Life</h2>
      <p>Share your thoughts, photos, and more with your friends.</p>
    `;
  
    const footer = document.createElement('footer');
    footer.classList.add('text-muted', 'text-center', 'mt-5');
    footer.innerHTML = `
      <p>&copy; 2023 FakeBook. All rights reserved.</p>
    `;
  
    navbar.appendChild(header);
    sections.appendChild(leftSection);
    sections.appendChild(rightSection);
  
    container.appendChild(navbar);
    container.appendChild(sections);
    container.appendChild(footer);
  
    root.appendChild(container);
  };
  
