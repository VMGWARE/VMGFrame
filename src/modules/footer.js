window.footer = function() {
    const footer = document.createElement('footer');
    footer.classList.add('footer', 'bg-light', 'text-center', 'py-2');
  
    const footerText = document.createElement('p');
    footerText.classList.add('mb-0');
    footerText.innerText = '© 2023 My Website';
  
    footer.appendChild(footerText);
  
    return footer;
  };
  