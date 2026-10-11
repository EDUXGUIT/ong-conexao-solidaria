import { router } from './router.js';

// Inicialização da aplicação SPA
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);