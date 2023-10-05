/*
 * VMGFrame - footer.js
 * Version 1.0.1
 * https://github.com/VMGWARE/VMGFrame
 *
 * (C) 2023 Company VMGWare. All rights reserved.
 * This code is open source and available under the MIT License.
 * https://opensource.org/licenses/MIT
 */

window.footer = function() {
    const footer = document.createElement('footer');
    footer.classList.add('footer', 'bg-light', 'text-center', 'py-2');
  
    const footerText = document.createElement('p');
    footerText.classList.add('mb-0');
    footerText.innerText = '© 2023 My Website';
  
    footer.appendChild(footerText);
  
    return footer;
  };
  
