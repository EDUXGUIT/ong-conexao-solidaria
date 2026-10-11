export const validation = {
    validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    aplicarFeedback(inputElement, errorElement, isValid, mensagemErro = '') {
        if (isValid) {
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
            if (errorElement) errorElement.style.display = 'none';
        } else {
            inputElement.classList.remove('is-valid');
            inputElement.classList.add('is-invalid');
            if (errorElement) {
                errorElement.textContent = mensagemErro;
                errorElement.style.display = 'block';
            }
        }
    }
};