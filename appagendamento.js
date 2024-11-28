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
      <div id="produto-lista" class="lista-produtos">
          <option value="">Selecione o Procedimento</option>
      </div>
      <div id="procedimentos-selecionados" class="procedimentos-selecionados">
          <!-- Aqui serão exibidos os procedimentos selecionados -->
      </div>
      <input type="text" id="data" name="data" placeholder="Selecione a data" required>
      <input type="time" id="hora" name="hora" placeholder="Selecione a hora" required>
      <input type="hidden" id="produto" name="produto"> <!-- Campo oculto para armazenar o produto selecionado -->
      <button type="submit">Agendar</button>
    `;
    formulario.appendChild(form);
  
    // Função para criar opções nos selects
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
  
        // Obtém os produtos da categoria e serviço selecionados
        const produtosDaCategoria = obterProdutos(servicoSelecionado, categoriaSelecionada);
  
        // Atualiza a lista de produtos
        const listaProdutos = form.querySelector('#produto-lista');
        listaProdutos.innerHTML = ''; // Limpa a lista existente
  
        if (produtosDaCategoria.length > 0) {
            produtosDaCategoria.forEach(produto => {
                const itemProduto = document.createElement('div');
                itemProduto.classList.add('item-produto');
                itemProduto.innerHTML = `
                  <div class="coluna imagem">
                      <img src="img/servicos/${produto.imagem}" alt="${produto.titulo}" class="imagem-produto-agenda">
                  </div>
                  <div class="coluna descricao">
                      <strong>${produto.titulo}</strong><br>
                      ${produto.subtitulo}
                  </div>
                  <div class="coluna preco-duracao">
                      <div>R$${produto.preco}</div>
                      <div>(${produto.duracao})</div>
                  </div>
                `;
  
              // Define os atributos data-* no itemProduto
              itemProduto.setAttribute('data-servico', servicoSelecionado);
              itemProduto.setAttribute('data-categoria', categoriaSelecionada);
              itemProduto.setAttribute('data-titulo', produto.titulo);
  
                itemProduto.addEventListener('click', () => {
                    const procedimentoCompleto = `${servicoSelecionado} > ${categoriaSelecionada} > ${produto.titulo}`;
                
                    // Alterna a seleção do item
                    if (procedimentosSelecionados.includes(procedimentoCompleto)) {
                        procedimentosSelecionados = procedimentosSelecionados.filter(item => item !== procedimentoCompleto);
                        itemProduto.classList.remove('selecionado');
                    } else {
                        procedimentosSelecionados.push(procedimentoCompleto);
                        itemProduto.classList.add('selecionado');
                    }
                
                    // Atualiza os procedimentos selecionados
                    atualizarProcedimentosSelecionados();
                });
                
  
                listaProdutos.appendChild(itemProduto);
            });
  
            // Exibe a lista de produtos
            listaProdutos.classList.remove('oculto');
        } else {
            const msgNenhumProduto = document.createElement('option');
            msgNenhumProduto.textContent = 'Nenhum produto disponível';
            msgNenhumProduto.disabled = true;
            listaProdutos.appendChild(msgNenhumProduto);
  
            // Esconde a lista se não houver produtos
            listaProdutos.classList.add('oculto');
        }
    });
  
    // Função para atualizar a exibição dos procedimentos selecionados
    let procedimentosSelecionados = [];
  
    function atualizarProcedimentosSelecionados() {
      const divProcedimentos = form.querySelector('#procedimentos-selecionados');
      divProcedimentos.innerHTML = ''; // Limpa a área dos procedimentos selecionados
  
      procedimentosSelecionados.forEach(procedimento => {
          const procedimentoDiv = document.createElement('div');
          procedimentoDiv.classList.add('procedimento-selecionado');
          procedimentoDiv.innerHTML = `
              <span>${procedimento}</span>
              <button type="button" class="remover-procedimento">Remover</button>
          `;
          procedimentoDiv.querySelector('.remover-procedimento').addEventListener('click', () => {
              // Remove o procedimento da lista
              procedimentosSelecionados = procedimentosSelecionados.filter(item => item !== procedimento);
              
              // Desmarca o procedimento correspondente no #produto-lista
              const itensProduto = form.querySelectorAll('#produto-lista .item-produto');
              itensProduto.forEach(item => {
                  const tituloCompleto = `${item.dataset.servico} > ${item.dataset.categoria} > ${item.dataset.titulo}`;
                  if (tituloCompleto === procedimento) {
                      item.classList.remove('selecionado');
                  }
              });
  
              atualizarProcedimentosSelecionados(); // Atualiza a lista após remoção
          });
  
          divProcedimentos.appendChild(procedimentoDiv);
      });
  }
  
  
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
        const data = form.querySelector('#data').value;
        const hora = form.querySelector('#hora').value;
  
        if (!nome || !email || !telefone || !servico || !categoria || !data || !hora || procedimentosSelecionados.length === 0) {
            alert('Por favor, preencha todos os campos e selecione pelo menos um procedimento.');
            return;
        }
  
        alert('Agendamento confirmado!');
    });
  }
  