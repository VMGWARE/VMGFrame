/*
 * VMGFrame - login.js
 * Version 1.0.1
 * https://github.com/VMGWARE/VMGFrame
 *
 * (C) 2023 Company VMGWare. All rights reserved.
 * This code is open source and available under the MIT License.
 * https://opensource.org/licenses/MIT
 */

window.login = function () {
    const root = document.getElementById('root');
    root.innerHTML = ''; 
  
    const container = document.createElement('div');
    container.classList.add('container', 'mt-5');
  
    const loginForm = document.createElement('form');
    loginForm.classList.add('p-4', 'bg-light', 'rounded');
    loginForm.innerHTML = `
      <h2 class="mb-4">Login</h2>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Enter your username">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your password">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    `;
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      window.showNotification('Incorrect password. Please try again.');
    });
  
    container.appendChild(loginForm);
    root.appendChild(container);
  };
  
