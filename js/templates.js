export const templates = {
    home: `
        <section>
            <h1>Bem-vindo à Conexão Solidária</h1>
            <p style="margin-top: 0.5rem; color: #64748b;">Transformando realidades através do apoio social, educação e suporte comunitário.</p>
            <div style="margin-top: 2rem; background: #ffffff; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h2>Nossa Missão</h2>
                <p style="margin-top: 0.5rem;">Conectar voluntários engajados a projetos de alto impacto social em todo o país.</p>
            </div>
        </section>
    `,
    
    projetos: (listaProjetos) => `
        <section>
            <h1>Nossos Projetos Ativos</h1>
            <p style="color: #64748b; margin-top: 0.5rem;">Conheça as iniciativas em andamento na nossa comunidade.</p>
            <div class="grid-projetos">
                ${listaProjetos.map(p => `
                    <article class="card-projeto">
                        <h3><i class="fa-solid fa-seedling"></i> ${p.titulo}</h3>
                        <p>${p.descricao}</p>
                        <span style="display:inline-block; margin-top:1rem; font-size:0.85rem; color: var(--primary); font-weight:600;">Status: Ativo</span>
                    </article>
                `).join('')}
            </div>
        </section>
    `,

    cadastro: (voluntarios) => `
        <section>
            <h1>Cadastro de Voluntários</h1>
            <div class="form-container" style="margin-top: 1.5rem;">
                <form id="form-voluntario">
                    <div class="form-group">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" placeholder="Digite seu nome completo">
                        <span class="error-message" id="error-nome">Campo obrigatório.</span>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail Institucional</label>
                        <input type="email" id="email" placeholder="seu.email@exemplo.com">
                        <span class="error-message" id="error-email">Insira um e-mail válido.</span>
                    </div>
                    <button type="submit" class="btn-primary">Cadastrar Voluntário</button>
                </form>
            </div>
            
            <div style="margin-top: 2rem;">
                <h3>Voluntários Cadastrados (${voluntarios.length})</h3>
                <ul style="margin-top: 0.5rem; padding-left: 1.2rem;">
                    ${voluntarios.map(v => `<li><strong>${v.nome}</strong> (${v.email})</li>`).join('')}
                </ul>
            </div>
        </section>
    `,

    notFound: `
        <section style="text-align: center; padding: 3rem;">
            <h1>404</h1>
            <p>Página não encontrada.</p>
            <a href="#home" style="color: var(--primary); text-decoration: none; font-weight: 600; display:inline-block; margin-top:1rem;">Voltar ao Início</a>
        </section>
    `
};