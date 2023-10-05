function getSessionId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('sessionid');
}

function setSessionId(sessionId) {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('sessionid', sessionId);
  const newUrl = `${window.location.pathname}?${urlParams.toString()}#${window.location.hash}`;
  window.history.replaceState({}, document.title, newUrl);

  localStorage.setItem('sessionId', sessionId);
}

function generateSessionId() {
  return Math.random().toString(36).substr(2, 100);
}

function redirectToNewSession() {
  const sessionId = generateSessionId();
  setSessionId(sessionId);
  window.location.reload();
}

function loadModule(moduleName, isPage, sessionId) {
  console.log(`Loading module: ${moduleName}`);
  return new Promise((resolve, reject) => {
    const cachedModule = localStorage.getItem(`${sessionId}_${moduleName}`);
    if (cachedModule) {
      console.log(`Loading ${moduleName} from cache.`);
      const moduleFunction = eval(`(${cachedModule})`);  
      if (isPage) {
        resolve(() => moduleFunction());
      } else {
        resolve(moduleFunction());
      }
    } else {
      console.log(`Module ${moduleName} not found in cache. Loading from server...`);
      loadScript(`./src/modules/${moduleName}.js`)
        .then(() => {
          const module = window[moduleName];
          if (!module) {
            reject(new Error(`Module not found: ${moduleName}`));
          }
          if (isPage) {
            resolve(() => module());
          } else {
            resolve(module());
            localStorage.setItem(`${sessionId}_${moduleName}`, module.toString());
          }
        })
        .catch(reject);
    }
  });
}

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const sessionId = getSessionId();

const previousSessionId = localStorage.getItem('sessionId');
if (sessionId !== previousSessionId) {
  console.log('Session ID has changed. Clearing cache...');
  localStorage.clear();
}

if (!sessionId) {
  redirectToNewSession();
} else {
  const pages = {
    login: loadModule('login', true, sessionId),
    home: loadModule('home', true, sessionId),
  };

  const regularModules = {
    notifications: loadModule('notifications', false, sessionId),
    css: loadModule('css', false, sessionId),
  };

  function showPage(pageName) {
    pages[pageName].then((page) => {
      console.log(`Showing ${pageName} page`);
      const root = document.getElementById('root');
      root.innerHTML = '';
      page(); 
    });
  }

  window.addEventListener('hashchange', () => {
    const pageName = window.location.hash.substring(1);
    if (pages[pageName]) {
      showPage(pageName);
    } else if (regularModules[pageName]) {
      regularModules[pageName].then((module) => {
        module(); 
      });
    } else {
      console.log('Page or module not found.');
    }
  });

  const initialPage = window.location.hash.substring(1) || 'login';
  if (pages[initialPage]) {
    showPage(initialPage);
  } else if (regularModules[initialPage]) {
    regularModules[initialPage].then((module) => {
      module(); 
    });
  } else {
    console.log('Page or module not found.');
  }
}
