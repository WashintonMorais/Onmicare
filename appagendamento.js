function formatarCelular(numero) {
    // Remove caracteres não numéricos
    let numeroLimpo = numero.replace(/\D/g, '');
    
    // Verifica se o número tem o formato esperado para celulares no Brasil
    if (numeroLimpo.length === 11) {
        // Adiciona o código do país se estiver ausente
        if (!numeroLimpo.startsWith('55')) {
            numeroLimpo = '55' + numeroLimpo;
        }
    } else if (numeroLimpo.length === 13 && numeroLimpo.startsWith('55')) {
        // Já no formato correto
    } else {
        // Retorna erro se não for um número válido
        console.warn('Número inválido. Por favor, forneça um número válido de celular com 11 dígitos.');
        return null;
    }
  
    // Formata o número no estilo +55 XX XXXXX-XXXX
    const codigoPais = numeroLimpo.slice(0, 2);
    const ddd = numeroLimpo.slice(2, 4);
    const numeroPrincipal = numeroLimpo.slice(4, 9) + '-' + numeroLimpo.slice(9);
  
    return `+${codigoPais} ${ddd} ${numeroPrincipal}`;
  }
  
  function obterProdutos(servicoNome, categoriaNome) {
    const servicoNormalizado = servicoNome.trim().toLowerCase();
    const categoriaNormalizado = categoriaNome.trim().toLowerCase();
  
    return produtos.filter(produto => {
        const servicoCorreto = produto.servico.nome.trim().toLowerCase() === servicoNormalizado;
        const categoriaCorreta = produto.categoria.nome.trim().toLowerCase() === categoriaNormalizado;
        return servicoCorreto && categoriaCorreta;
    });
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
        <input type="tel" id="telefone" name="telefone" placeholder="Informe seu telefone +55 XX XXXXX-XXXX" required>
        <select id="servico" name="servico">
            <option value="">Selecione o Serviço</option>
        </select>
        <select id="categoria" name="categoria">
            <option value="">Selecione a Categoria</option>
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
  
    // Popula o dropdown de serviços
    const servicosUnicos = [...new Set(produtos.map(produto => produto.servico.nome))];
    criarOpcoes(form.querySelector('#servico'), servicosUnicos, 'Selecione o Serviço');
  
    form.querySelector('#servico').addEventListener('change', function () {
        const servicoSelecionado = form.querySelector('#servico').value;
  
        const categoriasDoServico = produtos
            .filter(produto => produto.servico.nome === servicoSelecionado)
            .map(produto => produto.categoria.nome);
  
        const categoriasUnicas = [...new Set(categoriasDoServico)];
        criarOpcoes(form.querySelector('#categoria'), categoriasUnicas, 'Selecione a Categoria');
    });
  
    form.querySelector('#categoria').addEventListener('change', function () {
        const servicoSelecionado = form.querySelector('#servico').value;
        const categoriaSelecionada = form.querySelector('#categoria').value;
  
        const produtosDaCategoria = obterProdutos(servicoSelecionado, categoriaSelecionada)
            .map(produto => produto.titulo);
  
        criarOpcoes(form.querySelector('#produto'), produtosDaCategoria, 'Selecione o Procedimento');
    });
  
    // Configura o seletor de data
    flatpickr(form.querySelector('#data'), {
        enableTime: false,
        dateFormat: "Y-m-d",
        minDate: "today",
    });
  
    container.innerHTML = '';
    container.appendChild(formulario);
  
    // Botão "Fechar" para ocultar o formulário
    botaoFechar.addEventListener('click', function () {
        formulario.style.display = 'none';
    });
  
    // Submissão do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const nome = form.querySelector('#nome').value;
        const email = form.querySelector('#email').value;
        const telefone = form.querySelector('#telefone').value;
        const servico = form.querySelector('#servico').value;
        const categoria = form.querySelector('#categoria').value;
        const produto = form.querySelector('#produto').value;
        const data = form.querySelector('#data').value;
        const hora = form.querySelector('#hora').value;
  
        const telefoneFormatado = formatarCelular(telefone);
        if (!telefoneFormatado) {
            alert('Por favor, insira um número de celular válido.');
            return;
        }
  
        if (!nome || !email || !servico || !categoria || !produto || !data || !hora) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }
  
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Telefone:', telefoneFormatado);
        console.log('Serviço:', servico);
        console.log('Categoria:', categoria);
        console.log('Produto:', produto);
        console.log('Data:', data);
        console.log('Hora:', hora);
    });
  }
  