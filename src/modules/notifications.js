/*
 * VMGFrame - notifications.js
 * Version 1.0.1
 * https://github.com/VMGWARE/VMGFrame
 *
 * (C) 2023 Company VMGWare. All rights reserved.
 * This code is open source and available under the MIT License.
 * https://opensource.org/licenses/MIT
 */

window.notifications = function(message) {
    window.showNotification = function(message) {
        const notification = document.createElement('div');
        notification.classList.add('alert', 'alert-info', 'mt-3');
        notification.innerText = message;
        document.getElementById('root').appendChild(notification);
      
        setTimeout(() => {
          notification.remove();
        }, 3000);
    }
  };
  
