import { templates } from './templates.js';
import { storage } from './storage.js';
import { validation } from './validation.js';

const projetosData = [
    { titulo: 'Educação Solidária', descricao: 'Apoio escolar e reforço para crianças em vulnerabilidade.' },
    { titulo: 'Saúde Comunitária', descricao: 'Campanhas de orientação médica e atendimento itinerante.' },
    { titulo: 'Alimento na Mesa', descricao: 'Arrecadação e distribuição de cestas básicas mensais.' }
];

export function router() {
    const hash = window.location.hash || '#home';
    const mainContainer = document.getElementById('app-container');

    // Atualiza classes ativas no menu de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Renderização das Rotas baseada na hash da URL
    switch (hash) {
        case '#home':
            mainContainer.innerHTML = templates.home;
            break;
        case '#projetos':
            mainContainer.innerHTML = templates.projetos(projetosData);
            break;
        case '#cadastro':
            renderizarTelaCadastro(mainContainer);
            break;
        default:
            mainContainer.innerHTML = templates.notFound;
            break;
    }
}

function renderizarTelaCadastro(container) {
    const voluntarios = storage.getVoluntarios();
    container.innerHTML = templates.cadastro(voluntarios);

    const form = document.getElementById('form-voluntario');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const inputNome = document.getElementById('nome');
            const inputEmail = document.getElementById('email');
            const errorNome = document.getElementById('error-nome');
            const errorEmail = document.getElementById('error-email');

            const nomeValido = inputNome.value.trim().length >= 3;
            const emailValido = validation.validarEmail(inputEmail.value.trim());

            validation.aplicarFeedback(inputNome, errorNome, nomeValido, 'O nome deve ter pelo menos 3 caracteres.');
            validation.aplicarFeedback(inputEmail, errorEmail, emailValido, 'Por favor, insira um e-mail válido.');

            if (nomeValido && emailValido) {
                storage.salvarVoluntario({
                    nome: inputNome.value.trim(),
                    email: inputEmail.value.trim()
                });

                alert('Voluntário cadastrado com sucesso!');
                window.location.hash = '#projetos'; // Redireciona via SPA para a lista
            }
        });
    }
}