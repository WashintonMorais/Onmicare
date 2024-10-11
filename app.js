class Tratamento {
    constructor(nome, sessoes, indicacao, contraindicacoes, observacoes) {
      this.nome = nome;
      this.sessoes = sessoes
      this.indicacao = indicacao;
      this.contraindicacoes = contraindicacoes;
      this.observacoes = observacoes;
    }
  }
  
  class Servico {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Produto {
    constructor(tratamento, servico, titulo, subtitulo, duracao, preco, profissional, imagem) {
      this.tratamento = tratamento;
      this.servico = servico;
      this.titulo = titulo;
      this.subtitulo = subtitulo;
      this.duracao = duracao;
      this.preco = preco;
      this.profissional = profissional;
      this.imagem = imagem;
    }
  }
  
  // Criando um tratamento padrão para depilação a laser
  const depilacaoALaser = new Tratamento(
    "Depilação a Laser",
    "8 a 10 Sessões",
    "A depilação a laser com o aparelho Hakon é indicada para todos os fototipos de pele, sendo eficaz em peles claras e escuras, graças à combinação de diferentes comprimentos de onda.",
    "Não é indicado para pelos muito claros ou brancos, diabetes não controlada, pacientes com câncer, hipertensão descompensada, epilepsia, gravidez, ou erupções cutâneas.",
    "O Hakon utiliza 4 tipos de laser (Rubi, Alexandrite, Diodo e ND-YAG), ajustando o tratamento de acordo com o tipo de pele e pelo, proporcionando maior segurança e eficácia."
  );

    // Criando um tratamento padrão para remoçao a laser
    const remocao = new Tratamento(
        "Remoção a laser",
        "8 a 10 Sessões",
        "A depilação a laser com o aparelho Hakon é indicada para todos os fototipos de pele, sendo eficaz em peles claras e escuras, graças à combinação de diferentes comprimentos de onda.",
        "Não é indicado para pelos muito claros ou brancos, diabetes não controlada, pacientes com câncer, hipertensão descompensada, epilepsia, gravidez, ou erupções cutâneas.",
        "O Hakon utiliza 4 tipos de laser (Rubi, Alexandrite, Diodo e ND-YAG), ajustando o tratamento de acordo com o tipo de pele e pelo, proporcionando maior segurança e eficácia."
      );
  
  // Criando os serviços
  const depilacaoFeminina = new Servico("Depilação Feminina");
  const depilacaoMasculina = new Servico("Depilação Masculina");
  const remocaoALaser = new Servico("Remoção A laser");
  
  // Criando os produtos
  const produtos = [
    new Produto(depilacaoALaser, depilacaoFeminina, "Abdômen", "", "5 Minutos", 109.00, "Michele Sales", "abdomem.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Antebraço", "", "5 Minutos", 80.00, "Michele Sales", "antebraco.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Areolas", "", "5 Minutos", 29.00, "Michele Sales", "areolas.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Axilas", "", "5 Minutos", 120.00, "Michele Sales", "axilas.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Braço", "", "5 Minutos", 150.00, "Michele Sales", "braco.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Braços Completos", "", "5 Minutos", 180.00, "Michele Sales", "bracocompleto.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Buço", "", "5 Minutos", 80.00, "Michele Sales", "buco.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Facial com buço", "", "5 Minutos", 100.00, "Michele Sales", "facialcombuco.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Face lateral", "", "5 Minutos", 120.00, "Michele Sales", "facelateral.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Coxas completas", "", "5 Minutos", 250.00, "Michele Sales", "coxascompletas.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Costas inteiras", "", "5 Minutos", 220.00, "Michele Sales", "costasinteira.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Dorsal", "", "5 Minutos", 200.00, "Michele Sales", "dorsal.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Glabela", "(entre as sobrancelhas)", "5 Minutos", 50.00, "Michele Sales", "glabela.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Linha Alba", "", "5 Minutos", 90.00, "Michele Sales", "linhaalba.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Glúteos", "", "5 Minutos", 200.00, "Michele Sales", "gluteos.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Lombar", "", "5 Minutos", 200.00, "Michele Sales", "lombar.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Maça do Rosto", "", "5 Minutos", 80.00, "Michele Sales", "macadorosto.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Mãos com Dedos", "", "5 Minutos", 200.00, "Michele Sales", "maoscomdedos.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Meia Perna", "", "5 Minutos", 200.00, "Michele Sales", "meiaperna.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Nariz", "", "5 Minutos", 200.00, "Michele Sales", "nariz.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Nuca", "", "5 Minutos", 200.00, "Michele Sales", "nuca.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Ombros", "", "5 Minutos", 200.00, "Michele Sales", "ombros.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Orelhas", "", "5 Minutos", 200.00, "Michele Sales", "orelhas.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Peito", "", "5 Minutos", 200.00, "Michele Sales", "peito.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Perianal", "", "5 Minutos", 200.00, "Michele Sales", "perianal.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Pernas Inteiras", "", "5 Minutos", 300.00, "Michele Sales", "pernasinteiras.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Pés", "", "5 Minutos", 150.00, "Michele Sales", "pes.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Pescoço", "", "5 Minutos", 100.00, "Michele Sales", "pescoco.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Queixo", "", "5 Minutos", 80.00, "Michele Sales", "queixo.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Testa", "", "5 Minutos", 80.00, "Michele Sales", "testa.png"),
    new Produto(depilacaoALaser, depilacaoFeminina, "Virilha", "", "5 Minutos", 200.00, "Michele Sales", "virilha.png"),
  

    new Produto(depilacaoALaser, depilacaoMasculina, "Abdômen", "", "5 Minutos", 109.00, "Michele Sales", "abdomemmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Antebraço", "", "5 Minutos", 80.00, "Michele Sales", "antebracomasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Areolas", "", "5 Minutos", 29.00, "Michele Sales", "areolasmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Axilas", "", "5 Minutos", 120.00, "Michele Sales", "axilasmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Barba com Bigode", "", "5 Minutos", 180.00, "Michele Sales", "barbacombigode.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Barba com pescoço", "", "5 Minutos", 250.00, "Michele Sales", "barbapescoco.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Braço", "", "5 Minutos", 150.00, "Michele Sales", "bracomasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Braços Completos", "", "5 Minutos", 180.00, "Michele Sales", "bracocompletomasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Buço (bigode)", "", "5 Minutos", 80.00, "Michele Sales", "bucomasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Buço com queixo", "(bigode)", "5 Minutos", 100.00, "Michele Sales", "bucoqueixomasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Contorno da barba", "", "5 Minutos", 120.00, "Michele Sales", "contornodabarba.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Coxas completas", "", "5 Minutos", 250.00, "Michele Sales", "coxascompletasmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Costas completas com ombro", "", "5 Minutos", 250.00, "Michele Sales", "costascompletasombrosmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Costas inteiras", "", "5 Minutos", 220.00, "Michele Sales", "costasinteirasmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Costeletas", "", "5 Minutos", 100.00, "Michele Sales", "costeletasmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Dorsal", "", "5 Minutos", 200.00, "Michele Sales", "dorsalmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Glabela (entre as sobrancelhas  ", "(entre as sobrancelhas)", "5 Minutos", 50.00, "Michele Sales", "glabelamasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Linha Alba", "", "5 Minutos", 90.00, "Michele Sales", "linhaalbamasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Glúteos", "", "5 Minutos", 200.00, "Michele Sales", "gluteosmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Lombar", "", "5 Minutos", 200.00, "Michele Sales", "lombarmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Maça do Rosto", "", "5 Minutos", 80.00, "Michele Sales", "macadorostomasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Mãos com Dedos", "", "5 Minutos", 200.00, "Michele Sales", "maoscomdedosmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Meia Perna", "", "5 Minutos", 200.00, "Michele Sales", "meiapernamasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Nariz", "", "5 Minutos", 200.00, "Michele Sales", "narizmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Nuca", "", "5 Minutos", 200.00, "Michele Sales", "nucamasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Ombros", "", "5 Minutos", 200.00, "Michele Sales", "ombrosmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Orelha", "", "5 Minutos", 200.00, "Michele Sales", "orelhasmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Peito", "", "5 Minutos", 200.00, "Michele Sales", "peitomasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Peito Com Abdômen", "", "5 Minutos", 200.00, "Michele Sales", "peitocomabdomenmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Perianal", "", "5 Minutos", 200.00, "Michele Sales", "perianalmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Pernas Inteiras", "", "5 Minutos", 300.00, "Michele Sales", "pernasinteirasmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Pés", "", "5 Minutos", 150.00, "Michele Sales", "pesmasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Pescoço", "", "5 Minutos", 100.00, "Michele Sales", "pescocomasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Queixo", "", "5 Minutos", 80.00, "Michele Sales", "queixomasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Testa", "", "5 Minutos", 80.00, "Michele Sales", "testamasculino.png"),
    new Produto(depilacaoALaser, depilacaoMasculina, "Virilha", "", "5 Minutos", 200.00, "Michele Sales", "virilhamasculino.png"),

    new Produto(remocao, remocaoALaser, "Remoção de Micro", "Sobrancelhas", "60 Minutos", 200.00, "Michele Sales", "remocaomicro.png"),
    new Produto(remocao, remocaoALaser, "Remoção de Tatuagem", "Até 3Cm", "60 Minutos", 200.00, "Michele Sales", "remocaotatoo3cm.png"),

];
  
  console.log(produtos);
      
  // Função para extrair produtos filtrados
  function extrairProdutosFiltrados(tratamentos, filtros = {}) {
    const { servico } = filtros;
    const resultados = [];
  
    tratamentos.forEach(produto => {
      if (servico && produto.servico !== servico) return;
      resultados.push(produto);
    });
  
    return resultados;
  }
  
  // Função para criar um produto (atualização)
  function criarProduto(tratamento, servico, titulo, subtitulo, duracao, preco, profissional, imagem) {
    produtos.push(new Produto(tratamento, servico, titulo, subtitulo, duracao, preco, profissional, imagem));
  }
  
  // Função para criar um card de produto
  function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="img/servicos/${produto.imagem}" alt="${produto.titulo}">
        <h2>${produto.titulo}</h2>
        ${produto.subtitulo ? `<h3 class="subtitulo">${produto.subtitulo}</h3>` : '-'}
        <h3 class="servico">${produto.servico.nome}</h3>
        <p>Preço: R$ ${produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
    `;
  
    const botaoDetalhes = document.createElement('button');
    botaoDetalhes.textContent = 'Detalhes';
    botaoDetalhes.addEventListener('click', () => {
        mostrarCardDetalhes(produto);
    });
  
    card.appendChild(botaoDetalhes);
    return card;
  }
 
  function fecharCardDetalhes() {
    if (cardDetalhesAtivo) {
        cardDetalhesAtivo.remove();
        cardDetalhesAtivo = null;
    }
} 

  let cardDetalhesAtivo = null; // Variável global para armazenar o card ativo
  
// Função para mostrar o card de detalhes
function mostrarCardDetalhes(produto) {
  // Remover o card ativo anterior, se existir
  if (cardDetalhesAtivo) {
      cardDetalhesAtivo.remove();
  }

  // Criar o novo card de detalhes
  const cardDetalhes = document.createElement('div');
  cardDetalhes.classList.add('card-detalhes', 'ativo'); // Adicionar a classe 'ativo'
  
    cardDetalhes.innerHTML = `
    <div class="card-detalhes-conteudo">
      <div class="grid-container">
        <div class="grid-item">
          <img src="img/servicos/${produto.imagem}" alt="${produto.titulo}">
          <h2>${produto.titulo}</h2>
          ${produto.subtitulo ? `<h3>${produto.subtitulo}</h3>` : '-'}
          <p>Preço: R$ ${produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
          <p class="descricao-meta"><strong>Duração:</strong> ${produto.duracao}</p>
          <p class="descricao-meta"><strong>Sessões:</strong> ${produto.tratamento.sessoes}</p>
          <button class="whatsapp-button">
      <i class="fa-brands fa-whatsapp"></i> Agendar via WhatsApp
    </button> 
          </div>
<div class="grid-item">
          <h2>${produto.tratamento.nome}</h2>
          <p class="descricao-meta"><strong>Profissional:</strong> ${produto.profissional}</p>
          <p class="descricao-meta"><strong>Indicações:</strong> ${produto.tratamento.indicacao}</p>
          <p class="descricao-meta"><strong>Contraindicações:</strong> ${produto.tratamento.contraindicacoes}</p>
          <p class="descricao-meta"><strong>Observações:</strong> ${produto.tratamento.observacoes}</p>
          </div>
      </div>
      <button class="fechar-detalhes">Fechar</button>
    </div>
    `;
  
    // Criar um container para os botões
    const botaoContainer = document.createElement('div');
    botaoContainer.classList.add('botoes-detalhes');

    // Adicionar o evento de clique ao botão de WhatsApp
    const botaoWhatsApp = cardDetalhes.querySelector('.whatsapp-button');
    botaoWhatsApp.addEventListener('click', () => {
        const numeroWhatsApp = produto.whatsapp || '5535988740679'; // Número padrão
        const mensagem = `Olá, tenho interesse na ${produto.tratamento.nome} e gostaria de saber mais sobre o protocolo ${produto.servico.nome} "${produto.titulo}".`;
        window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`);
    });

    // Adicionar o botão ao container
    botaoContainer.appendChild(botaoWhatsApp);

    // Adicionar o container de botões ao card de detalhes
    cardDetalhes.appendChild(botaoContainer);

    // Criar o botão de fechar
    const botaoFechar = document.createElement('button');
    botaoFechar.classList.add('fechar-detalhes');
    botaoFechar.textContent = 'Fechar';
    botaoFechar.addEventListener('click', () => {
        cardDetalhes.remove();
    });

    cardDetalhes.appendChild(botaoFechar);

    document.body.appendChild(cardDetalhes);
    cardDetalhesAtivo = cardDetalhes;
  
        // **Logar no console para verificar se o botão está sendo criado**
        console.log('Botão de WhatsApp criado:', botaoWhatsApp);

    // Adicionar um z-index para garantir que o card ativo fique acima dos outros
    cardDetalhes.style.zIndex = 100;        
}
  
  // Função para exibir produtos na vitrine
  function exibirProdutosNaVitrine(produtos, container) {
    container.innerHTML = '';
    produtos.forEach(produto => {
      const card = criarCardProduto(produto);
      container.appendChild(card);
    });
  }
  
  // Função para filtrar produtos por tratamento
  function filtrarProdutosPorTratamento(produtos, tratamento) {
    return produtos.filter(produto => produto.tratamento.nome === tratamento);
  }
  
  // Função para filtrar produtos por gênero
  function filtrarProdutosPorServico(produtos, servico) {
    return produtos.filter(produto => produto.servico.nome.toLowerCase() === servico.toLowerCase());
  }
  
  // Inicialização
  window.onload = () => {
    const todosOsProdutos = produtos;
  
    // Exibe todos os produtos inicialmente
    exibirProdutosNaVitrine(todosOsProdutos, document.getElementById('homevitrine'));
  
    // Obtém as referências aos botões
    const botaoTodos = document.getElementById('botao-todos');
    const botaoDepilacaoFeminina = document.getElementById('botao-depilacaoFeminina');
    const botaoDepilacaoMasculina = document.getElementById('botao-depilacaoMasculina');
    const botaoRemocaoALaser = document.getElementById('botao-remocaoALaser');
  
    // Adiciona event listeners aos botões
    botaoTodos.addEventListener('click', () => {
      exibirProdutosNaVitrine(todosOsProdutos, document.getElementById('homevitrine'));
    });
  
    botaoDepilacaoFeminina.addEventListener('click', () => {
      const produtosFiltrados = filtrarProdutosPorServico(todosOsProdutos, 'Depilação Feminina');
      exibirProdutosNaVitrine(produtosFiltrados, document.getElementById('homevitrine'));
    });
  
    botaoDepilacaoMasculina.addEventListener('click', () => {
      const produtosFiltrados = filtrarProdutosPorServico(todosOsProdutos, 'Depilação Masculina');
      exibirProdutosNaVitrine(produtosFiltrados, document.getElementById('homevitrine'));
    });

    botaoRemocaoALaser.addEventListener('click', () => {
    const produtosFiltrados = filtrarProdutosPorServico(todosOsProdutos, 'Remoção A Laser');
    exibirProdutosNaVitrine(produtosFiltrados, document.getElementById('homevitrine'));
  });
};


// função filtrar barra de navegação
document.getElementById('botao-filtrar').addEventListener('click', function () {
  const opcoesTratamento = document.getElementById('opcoes-tratamento');

  // Verifica se as opções de tratamento estão ocultas ou visíveis
  if (opcoesTratamento.style.display === 'none' || opcoesTratamento.style.display === '') {
    // Mostra as opções de tratamento
    opcoesTratamento.style.display = 'block';

    // Mostra todos os botões de tratamento e remove o destaque
    const botoesTratamento = document.querySelectorAll('#opcoes-tratamento button');
    botoesTratamento.forEach(function (btn) {
      btn.style.display = 'block'; // Mostra todos os botões novamente
      btn.style.border = ''; // Remove o destaque do botão
    });

    // Remove o texto da opção selecionada (limpa o filtro)
    const elementoSelecionado = document.getElementById('tratamento-selecionado');
    if (elementoSelecionado) {
      elementoSelecionado.innerText = '';
    }
  } else {
    // Oculta as opções de tratamento se já estiverem visíveis
    opcoesTratamento.style.display = 'none';
  }
});

// Adiciona eventos de clique para cada botão dentro das opções
const botoesTratamento = document.querySelectorAll('#opcoes-tratamento button');
botoesTratamento.forEach(function (botao) {
  botao.addEventListener('click', function () {
    const tratamentoSelecionado = this.innerText;

    // Exibe a opção selecionada ao lado do botão de filtro, sem substituí-lo
    let elementoSelecionado = document.getElementById('tratamento-selecionado');
    if (!elementoSelecionado) {
      // Cria o elemento que vai exibir o tratamento selecionado, se ainda não existir
      elementoSelecionado = document.createElement('span');
      elementoSelecionado.id = 'tratamento-selecionado';
      elementoSelecionado.style.marginLeft = '10px'; // Adiciona espaço entre o botão e o texto
      document.querySelector('.barranavegacao').appendChild(elementoSelecionado);
    }
    elementoSelecionado.innerText = `Tratamento Selecionado: ${tratamentoSelecionado}`;

    // Oculta todos os botões exceto o selecionado
    botoesTratamento.forEach(function (btn) {
      if (btn !== botao) {
        btn.style.display = 'none'; // Oculta os outros botões
      } else {
        btn.style.border = '2px solid red'; // Destaca o botão selecionado
      }
    });

    // Oculta as opções de tratamento após a seleção de uma opção
    document.getElementById('opcoes-tratamento').style.display = 'none';
  });
});




function normalizarTexto(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  
const buscaInput = document.getElementById('busca');
  
function buscarProdutos(produtos, termoBusca) {
  const termoMin = termoBusca.toLowerCase();
  const termoNormalizado = normalizarTexto(termoBusca);
  return produtos.filter(produto => {
    return (
      produto.tratamento.nome.toLowerCase().includes(termoMin) ||
      produto.servico.nome.toLowerCase().includes(termoMin) ||
      produto.titulo.toLowerCase().includes(termoMin)  ||
      normalizarTexto(produto.tratamento.nome).includes(termoNormalizado) ||
      normalizarTexto(produto.servico.nome).includes(termoNormalizado) ||
      normalizarTexto(produto.titulo).includes(termoNormalizado)
      );
    });
}
  
buscaInput.addEventListener('input', () => {
  const termoBusca = buscaInput.value;
  const produtosFiltrados = buscarProdutos(produtos, termoBusca);
  exibirProdutosNaVitrine(produtosFiltrados, document.getElementById('homevitrine'));
});
  


const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const width = slides[0].offsetWidth;
  slider.scrollLeft = index * width; // Controla o deslocamento horizontal baseado no índice
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    currentIndex = index;
  });
});

// Ajusta o slide visível ao redimensionar a tela
window.addEventListener('resize', () => {
  showSlide(currentIndex);
});
