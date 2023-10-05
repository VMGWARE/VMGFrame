/*
 * VMGFrame - navbar.js
 * Version 1.0.1
 * https://github.com/VMGWARE/VMGFrame
 *
 * (C) 2023 Company VMGWare. All rights reserved.
 * This code is open source and available under the MIT License.
 * https://opensource.org/licenses/MIT
 */

window.navbar = function() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');
  
    const navbarBrand = document.createElement('a');
    navbarBrand.classList.add('navbar-brand');
    navbarBrand.href = '#';
    navbarBrand.innerText = 'My Website';
  
    const navbarCollapse = document.createElement('div');
    navbarCollapse.classList.add('collapse', 'navbar-collapse');
  
    const navbarNav = document.createElement('ul');
    navbarNav.classList.add('navbar-nav', 'mr-auto');
  
    const navItem1 = document.createElement('li');
    navItem1.classList.add('nav-item');
    const navLink1 = document.createElement('a');
    navLink1.classList.add('nav-link');
    navLink1.href = '#home';
    navLink1.innerText = 'Home';
    navItem1.appendChild(navLink1);
  
    const navItem2 = document.createElement('li');
    navItem2.classList.add('nav-item');
    const navLink2 = document.createElement('a');
    navLink2.classList.add('nav-link');
    navLink2.href = '#login';
    navLink2.innerText = 'Login';
    navItem2.appendChild(navLink2);
  
    navbarNav.appendChild(navItem1);
    navbarNav.appendChild(navItem2);
  
    navbarCollapse.appendChild(navbarNav);
  
    navbar.appendChild(navbarBrand);
    navbar.appendChild(navbarCollapse);
  
    return navbar;
  };
  
