function obterProdutos(tratamentoNome, servicoNome) {
    const tratamentoNormalizado = tratamentoNome.trim().toLowerCase();
    const servicoNormalizado = servicoNome.trim().toLowerCase();

    const produtosFiltrados = produtos.filter(produto => {
        const tratamentoCorreto = produto.tratamento.nome.trim().toLowerCase() === tratamentoNormalizado;
        const servicoCorreto = produto.servico.nome.trim().toLowerCase() === servicoNormalizado;
        return tratamentoCorreto && servicoCorreto;
    });

    if (produtosFiltrados.length === 0) {
        console.warn(`Nenhum produto encontrado para Tratamento: "${tratamentoNome}", Serviço: "${servicoNome}"`);
    }
    return produtosFiltrados;
}

function criarFormularioAgendamento(produtos, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container com id ${containerId} não encontrado`);
        return;
    }

    const formulario = document.createElement('div');
    formulario.classList.add('formulario-agendamento');

    // Botão de fechar (X)
    const botaoFechar = document.createElement('span');
    botaoFechar.textContent = 'X';
    botaoFechar.classList.add('fechar-formulario');
    formulario.appendChild(botaoFechar);

    const form = document.createElement('form');
    form.innerHTML = `
        <h2>Marque uma sessão</h2>
        <input type="text" id="nome" name="nome" placeholder="Informe o seu nome" required>
        <input type="email" id="email" name="email" placeholder="Informe seu e-mail" required>
        <input type="tel" id="telefone" name="telefone" placeholder="Informe seu telefone" required>
        <select id="tratamento" name="tratamento">
            <option value="">Selecione o Tratamento</option>
        </select>
        <select id="servico" name="servico">
            <option value="">Selecione o Serviço</option>
        </select>
        <select id="produto" name="produto">
            <option value="">Selecione o Procedimento</option>
        </select>
        <input type="text" id="data" name="data" placeholder="Selecione a data">
        <input type="time" id="hora" name="hora">
        <button type="submit">Agendar</button>
    `;
    formulario.appendChild(form);

    function criarOpcoes(select, dados, textoInicial) {
        select.innerHTML = ''; // Limpar as opções existentes
        const optionInicial = document.createElement('option');
        optionInicial.value = '';
        optionInicial.textContent = textoInicial;
        optionInicial.selected = true;
        optionInicial.disabled = true;
        select.appendChild(optionInicial);

        if (dados.length > 0) {
            dados.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                select.appendChild(option);
            });
        } else {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Nenhum disponível';
            option.disabled = true;
            select.appendChild(option);
        }
    }

    // Popula o dropdown de tratamentos
    const tratamentosUnicos = [...new Set(produtos.map(produto => produto.tratamento.nome))];
    criarOpcoes(form.querySelector('#tratamento'), tratamentosUnicos, 'Selecione o Tratamento');

    function atualizarSelects() {
        const tratamentoSelecionado = form.querySelector('#tratamento').value;

        if (tratamentoSelecionado) {
            const servicosDoTratamento = produtos
                .filter(produto => produto.tratamento.nome.trim().toLowerCase() === tratamentoSelecionado.trim().toLowerCase())
                .map(produto => produto.servico.nome);
            const servicosUnicos = [...new Set(servicosDoTratamento)];
            criarOpcoes(form.querySelector('#servico'), servicosUnicos, 'Selecione o Serviço');

            form.querySelector('#servico').addEventListener('change', function() {
                const servicoSelecionado = form.querySelector('#servico').value;
                const produtosDoServico = obterProdutos(tratamentoSelecionado, servicoSelecionado)
                    .map(produto => produto.titulo);
                criarOpcoes(form.querySelector('#produto'), produtosDoServico, 'Selecione o Procedimento');
            });
        }
    }

    // Configura o seletor de data
    flatpickr(form.querySelector('#data'), {
        enableTime: false,
        dateFormat: "Y-m-d",
        minDate: "today",
    });

    form.querySelector('#tratamento').addEventListener('change', atualizarSelects);

    container.innerHTML = '';
    container.appendChild(formulario);

    // Botão "Agendar"
    const botaoAgendar = document.getElementById('botao-agendar');
    if (botaoAgendar) {
        botaoAgendar.addEventListener('click', function() {
            formulario.style.display = 'block';
        });
    }

    // Botão "X" para fechar o formulário
    botaoFechar.addEventListener('click', function() {
        formulario.style.display = 'none';
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const tratamento = form.querySelector('#tratamento').value;
        const servico = form.querySelector('#servico').value;
        const produto = form.querySelector('#produto').value;
        const data = form.querySelector('#data').value;
        const hora = form.querySelector('#hora').value;

        if (!tratamento || !servico || !produto || !data || !hora) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        console.log('Tratamento:', tratamento);
        console.log('Serviço:', servico);
        console.log('Produto:', produto);
        console.log('Data:', data);
        console.log('Hora:', hora);
    });

    atualizarSelects();
}
