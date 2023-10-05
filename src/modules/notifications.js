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
  