if('serviceWorker' in navigator) navigator.serviceWorker.register('/dulich/dev-sw.js?dev-sw', { scope: '/dulich/', type: 'classic' })