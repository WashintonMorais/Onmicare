let currentServiceId = 1;  // ID inicial para os serviços
let currentCategoryId = 1; // ID inicial para as categorias
let currentProductId = 1;  // ID inicial para os produtos

class Servico {
  constructor(nome, sessoes, indicacao, contraindicacoes, observacoes, imagem, icone) {
    this.id = currentServiceId++; // Atribui o ID e incrementa para o próximo serviço
    this.nome = nome;
    this.sessoes = sessoes;
    this.indicacao = indicacao;
    this.contraindicacoes = contraindicacoes;
    this.observacoes = observacoes;
    this.imagem = imagem;
    this.icone = icone;
  }
}

// Atualizando a classe Categoria para incluir imagens e vincular ao serviço
class Categoria {
  constructor(servico, nome, imagem, icone) {
    this.id = currentCategoryId++; // Atribui o ID e incrementa para a próxima categoria
    this.servico = servico;  // Vincula a categoria ao serviço
    this.nome = nome;
    this.imagem = imagem;
    this.icone = icone;
  }
}

class Produto {
  constructor(servico, categoria, titulo, subtitulo, duracao, preco, profissional, imagem) {
    this.id = currentProductId++; // Atribui o ID e incrementa para o próximo produto
    this.servico = servico;
    this.categoria = categoria;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.duracao = duracao;
    this.preco = preco;
    this.profissional = profissional;
    this.imagem = imagem;
  }
}

// Agrupando os serviços em um array
const Servicos = [
  new Servico(
    "Depilação a Laser",
    "8 a 10 Sessões",
    "A depilação a laser com o aparelho Hakon é indicada para todos os fototipos de pele, sendo eficaz em peles claras e escuras, graças à combinação de diferentes comprimentos de onda.",
    "Não é indicado para pelos muito claros ou brancos, diabetes não controlada, pacientes com câncer, hipertensão descompensada, epilepsia, gravidez, ou erupções cutâneas.",
    "O Hakon utiliza 4 tipos de laser (Rubi, Alexandrite, Diodo e ND-YAG), ajustando o tratamento de acordo com o tipo de pele e pelo, proporcionando maior segurança e eficácia.",
    "depilacao.png",
    "iconedepilacao.png"
  ),
  new Servico(
    "Remoção a laser",
    "8 a 10 Sessões",
    "A depilação a laser com o aparelho Hakon é indicada para todos os fototipos de pele, sendo eficaz em peles claras e escuras, graças à combinação de diferentes comprimentos de onda.",
    "Não é indicado para pelos muito claros ou brancos, diabetes não controlada, pacientes com câncer, hipertensão descompensada, epilepsia, gravidez, ou erupções cutâneas.",
    "O Hakon utiliza 4 tipos de laser (Rubi, Alexandrite, Diodo e ND-YAG), ajustando o tratamento de acordo com o tipo de pele e pelo, proporcionando maior segurança e eficácia.",
    "remocao.png",
    "iconeremocao.png"
  ),
  new Servico(
    "Sobrancelhas",
    "1 Sessão",
    "Melhora o design e a estética das sobrancelhas.",
    "Não recomendado para pessoas com alergia a pigmentos ou em tratamento dermatológico.",
    "Proporciona um look natural e harmônico, com técnicas avançadas.",
    "sobrancelhas.png",
    "iconeSobrancelhas.png"
  ),
  new Servico(
    "Cuidados com a Pele",
    "1 Sessão",
    "Promove a hidratação e limpeza profunda da pele.",
    "Não indicado para peles com alergias a componentes dos produtos.",
    "Ideal para revitalizar a pele, promovendo frescor e juventude.",
    "cuidadosPele.png",
    "iconeCuidadosPele.png"
  )  
];

// Agrupando as categorias em um array
const Categorias = [
  new Categoria(Servicos[0], "Depilação Feminina", "imagemfem.jpg", "iconefem.png"),
  new Categoria(Servicos[0], "Depilação Masculina", "imagemmen.jpg", "iconemem.png"),
  new Categoria(Servicos[1], "Remoção de Tatuagem", "imagemremocaotatuagem.png","iconeremocaotatuagem.png"),
  new Categoria(Servicos[1], "Remoção de Micropigmentação", "imagemremocaomicro.png", "iconeremocaomicro.png"),

  new Categoria(Servicos[2], "Micropigmentação Sobrancelhas", "micropigmentacaoSobrancelhas.png", "iconemicropigmentacao.png"),
  new Categoria(Servicos[3], "Tratamento a Laser para Pele", "tratamentoLaserPele.jpg", "iconeTratamentoLaserPele.png"),
  new Categoria(Servicos[3], "Tratamento com Produtos para Pele","tratamentoProdutosPele.png","iconeTratamentoProdutosPele.png"),
  new Categoria(Servicos[2], "Designer de Sobrancelhas", "designer.png", "iconedesigner.png"),
];
  
// Criando os produtos
     const produtos = [
      new Produto(Servicos[0], Categorias[0], "Abdômen", "", "5 Minutos", 109.00, "Michele Sales", "abdomem.png"),
      new Produto(Servicos[0], Categorias[0], "Antebraço", "", "5 Minutos", 80.00, "Michele Sales", "antebraco.png"),
      new Produto(Servicos[0], Categorias[0], "Areolas", "", "5 Minutos", 29.00, "Michele Sales", "areolas.png"),
      new Produto(Servicos[0], Categorias[0], "Axilas", "", "5 Minutos", 120.00, "Michele Sales", "axilas.png"),
      new Produto(Servicos[0], Categorias[0], "Braço", "", "5 Minutos", 150.00, "Michele Sales", "braco.png"),
      new Produto(Servicos[0], Categorias[0], "Braços Completos", "", "5 Minutos", 180.00, "Michele Sales", "bracocompleto.png"),
      new Produto(Servicos[0], Categorias[0], "Buço", "", "5 Minutos", 80.00, "Michele Sales", "buco.png"),
      new Produto(Servicos[0], Categorias[0], "Facial com buço", "", "5 Minutos", 100.00, "Michele Sales", "facialcombuco.png"),
      new Produto(Servicos[0], Categorias[0], "Face lateral", "", "5 Minutos", 120.00, "Michele Sales", "facelateral.png"),
      new Produto(Servicos[0], Categorias[0], "Coxas completas", "", "5 Minutos", 250.00, "Michele Sales", "coxascompletas.png"),
      new Produto(Servicos[0], Categorias[0], "Costas inteiras", "", "5 Minutos", 220.00, "Michele Sales", "costasinteira.png"),
      new Produto(Servicos[0], Categorias[0], "Dorsal", "", "5 Minutos", 200.00, "Michele Sales", "dorsal.png"),
      new Produto(Servicos[0], Categorias[0], "Glabela", "(entre as sobrancelhas)", "5 Minutos", 50.00, "Michele Sales", "glabela.png"),
      new Produto(Servicos[0], Categorias[0], "Linha Alba", "", "5 Minutos", 90.00, "Michele Sales", "linhaalba.png"),
      new Produto(Servicos[0], Categorias[0], "Glúteos", "", "5 Minutos", 200.00, "Michele Sales", "gluteos.png"),
      new Produto(Servicos[0], Categorias[0], "Lombar", "", "5 Minutos", 200.00, "Michele Sales", "lombar.png"),
      new Produto(Servicos[0], Categorias[0], "Maça do Rosto", "", "5 Minutos", 80.00, "Michele Sales", "macadorosto.png"),
      new Produto(Servicos[0], Categorias[0], "Mãos com Dedos", "", "5 Minutos", 200.00, "Michele Sales", "maoscomdedos.png"),
      new Produto(Servicos[0], Categorias[0], "Meia Perna", "", "5 Minutos", 200.00, "Michele Sales", "meiaperna.png"),
      new Produto(Servicos[0], Categorias[0], "Nariz", "", "5 Minutos", 200.00, "Michele Sales", "nariz.png"),
      new Produto(Servicos[0], Categorias[0], "Nuca", "", "5 Minutos", 200.00, "Michele Sales", "nuca.png"),
      new Produto(Servicos[0], Categorias[0], "Ombros", "", "5 Minutos", 200.00, "Michele Sales", "ombros.png"),
      new Produto(Servicos[0], Categorias[0], "Orelhas", "", "5 Minutos", 200.00, "Michele Sales", "orelhas.png"),
      new Produto(Servicos[0], Categorias[0], "Peito", "", "5 Minutos", 200.00, "Michele Sales", "peito.png"),
      new Produto(Servicos[0], Categorias[0], "Perianal", "", "5 Minutos", 200.00, "Michele Sales", "perianal.png"),
      new Produto(Servicos[0], Categorias[0], "Pernas Inteiras", "", "5 Minutos", 300.00, "Michele Sales", "pernasinteiras.png"),
      new Produto(Servicos[0], Categorias[0], "Pés", "", "5 Minutos", 150.00, "Michele Sales", "pes.png"),
      new Produto(Servicos[0], Categorias[0], "Pescoço", "", "5 Minutos", 100.00, "Michele Sales", "pescoco.png"),
      new Produto(Servicos[0], Categorias[0], "Queixo", "", "5 Minutos", 80.00, "Michele Sales", "queixo.png"),
      new Produto(Servicos[0], Categorias[0], "Testa", "", "5 Minutos", 80.00, "Michele Sales", "testa.png"),
      new Produto(Servicos[0], Categorias[0], "Virilha", "", "5 Minutos", 200.00, "Michele Sales", "virilha.png"),
    
    
      new Produto(Servicos[0], Categorias[1], "Abdômen", "", "5 Minutos", 109.00, "Michele Sales", "abdomemmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Antebraço", "", "5 Minutos", 80.00, "Michele Sales", "antebracomasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Areolas", "", "5 Minutos", 29.00, "Michele Sales", "areolasmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Axilas", "", "5 Minutos", 120.00, "Michele Sales", "axilasmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Barba com Bigode", "", "5 Minutos", 180.00, "Michele Sales", "barbacombigode.png"),
      new Produto(Servicos[0], Categorias[1], "Barba com pescoço", "", "5 Minutos", 250.00, "Michele Sales", "barbapescoco.png"),
      new Produto(Servicos[0], Categorias[1], "Braço", "", "5 Minutos", 150.00, "Michele Sales", "bracomasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Braços Completos", "", "5 Minutos", 180.00, "Michele Sales", "bracocompletomasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Buço (bigode)", "", "5 Minutos", 80.00, "Michele Sales", "bucomasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Buço com queixo", "(bigode)", "5 Minutos", 100.00, "Michele Sales", "bucoqueixomasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Contorno da barba", "", "5 Minutos", 120.00, "Michele Sales", "contornodabarba.png"),
      new Produto(Servicos[0], Categorias[1], "Coxas completas", "", "5 Minutos", 250.00, "Michele Sales", "coxascompletasmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Costas completas com ombro", "", "5 Minutos", 250.00, "Michele Sales", "costascompletasombrosmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Costas inteiras", "", "5 Minutos", 220.00, "Michele Sales", "costasinteirasmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Costeletas", "", "5 Minutos", 100.00, "Michele Sales", "costeletasmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Dorsal", "", "5 Minutos", 200.00, "Michele Sales", "dorsalmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Glabela", "(entre as sobrancelhas)", "5 Minutos", 50.00, "Michele Sales", "glabelamasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Linha Alba", "", "5 Minutos", 90.00, "Michele Sales", "linhaalbamasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Glúteos", "", "5 Minutos", 200.00, "Michele Sales", "gluteosmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Lombar", "", "5 Minutos", 200.00, "Michele Sales", "lombarmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Maça do Rosto", "", "5 Minutos", 80.00, "Michele Sales", "macadorostomasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Mãos com Dedos", "", "5 Minutos", 200.00, "Michele Sales", "maoscomdedosmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Meia Perna", "", "5 Minutos", 200.00, "Michele Sales", "meiapernamasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Nariz", "", "5 Minutos", 200.00, "Michele Sales", "narizmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Nuca", "", "5 Minutos", 200.00, "Michele Sales", "nucamasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Ombros", "", "5 Minutos", 200.00, "Michele Sales", "ombrosmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Orelha", "", "5 Minutos", 200.00, "Michele Sales", "orelhasmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Peito", "", "5 Minutos", 200.00, "Michele Sales", "peitomasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Peito Com Abdômen", "", "5 Minutos", 200.00, "Michele Sales", "peitocomabdomenmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Perianal", "", "5 Minutos", 200.00, "Michele Sales", "perianalmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Pernas Inteiras", "", "5 Minutos", 300.00, "Michele Sales", "pernasinteirasmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Pés", "", "5 Minutos", 150.00, "Michele Sales", "pesmasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Pescoço", "", "5 Minutos", 100.00, "Michele Sales", "pescocomasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Queixo", "", "5 Minutos", 80.00, "Michele Sales", "queixomasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Testa", "", "5 Minutos", 80.00, "Michele Sales", "testamasculino.png"),
      new Produto(Servicos[0], Categorias[1], "Virilha", "", "5 Minutos", 200.00, "Michele Sales", "virilhamasculino.png"),
    
      new Produto(Servicos[1], Categorias[3], "Remoção de Micro", "Sobrancelhas", "60 Minutos", 200.00, "Michele Sales", "remocaomicro.png"),
      new Produto(Servicos[1], Categorias[2], "Remoção de Tatuagem 3Cm", "Até 3Cm", "60 Minutos", 200.00, "Michele Sales", "remocaotatoo3cm.png"),
      new Produto(Servicos[1], Categorias[2], "Remoção de Tatuagem 5Cm", "Até 5Cm", "60 Minutos", 200.00, "Michele Sales", "remocaotatoo5cm.png"),
      new Produto(Servicos[1], Categorias[2], "Remoção de Tatuagem 8Cm", "Até 8Cm", "60 Minutos", 200.00, "Michele Sales", "remocaotatoo8cm.png"),
    
      new Produto(Servicos[2], Categorias[4], "Micropigmentação Fio a Fio", "Simula fios naturais", "90 Minutos", 350.00, "Michele Sales", "micropigmentacaoFioAFio.png"),
      new Produto(Servicos[3], Categorias[5], "Black Peel", "Revitaliza e hidrata", "40 Minutos", 200.00, "Michele Sales", "blackpeel.png"),
      new Produto(Servicos[3], Categorias[5], "Clareamento da Pele", "Remove manchas e revitaliza", "40 Minutos", 150.00, "Michele Sales", "clareamentoPeleLaser.png"),
      new Produto(Servicos[3], Categorias[5], "Rejuvenescimento da Pele", "Remove manchas e revitaliza", "40 Minutos", 150.00, "Michele Sales", "rejuvenescimentoLaser.png"),

      new Produto(Servicos[3], Categorias[5], "Clareamento das Axilas", "Clareia e revitaliza", "30 Minutos", 60.00, "Michele Sales", "clareamentoAxilasLaser.png"),
      new Produto(Servicos[3], Categorias[5], "Clareamento da Virilha", "Clareia e revitaliza", "30 Minutos", 80.00, "Michele Sales", "clareamentoVirilhaLaser.png"),
      new Produto(Servicos[3], Categorias[5], "Peeling de Carbono", "Limpesa de pele a Laser", "60 Minutos", 289.00, "Michele Sales", "peelingCarbono.png"),
      new Produto(Servicos[3], Categorias[5], "Tratamento de Micose", "Tratamento da pele a Laser", "30 Minutos", 99.00, "Michele Sales", "tratamentoMicose.png"),   
      new Produto(Servicos[3], Categorias[5], "Limpeza de Pele Profunda", "Limpesa a Laser", "90 Minutos", 150.00, "Michele Sales", "limpezaPeleLaser.png"),
      new Produto(Servicos[3], Categorias[5], "Peeling Hexil Dermo Clareamento", "Limpesa de pele com produto", "60 Minutos", 150.00, "Michele Sales", "peelingHexil.png"),
      new Produto(Servicos[3], Categorias[5], "Plástica dos Pés", "Spa dos Pés", "30 Minutos", 60.00, "Michele Sales", "peelingHexil.png"),

      new Produto(Servicos[3], Categorias[6], "Peeling de Diamante", "Melhora a textura da pele", "60 Minutos", 250.00, "Michele Sales", "peelingDiamante.png"),
      new Produto(Servicos[3], Categorias[6], "Limpeza de Pele Profunda", "Revitaliza e hidrata", "90 Minutos", 150.00, "Michele Sales", "limpezaPele.png"),
      new Produto(Servicos[2], Categorias[7], "Designer de Sobrancelhas Feminimo", "Design perfeito para sobrancelhas", "15 Minutos", 35.00, "Michele Sales", "designerFeminino.png"),
      new Produto(Servicos[2], Categorias[7], "Designer de Sobrancelhas Com Henna", "Design perfeito para sobrancelhas", "30 Minutos", 40.00, "Michele Sales", "designerHenna.png"),
      new Produto(Servicos[2], Categorias[7], "Designer de Sobrancelhas Masculino", "Design perfeito para sobrancelhas", "15 Minutos", 30.00, "Michele Sales", "designerMasculino.png"),

    ];

    console.log(Servicos);
    console.log(Categorias);
    console.log(produtos);    
    
    function exibirServicos() {
        const containerServicos = document.getElementById('servicos-container');
        const containerCategorias = document.getElementById('categorias-container');
        const containerProdutos = document.getElementById('produtos-container');
        
        // Limpa todos os containers
        containerServicos.innerHTML = '';
        containerCategorias.innerHTML = '';
        containerProdutos.innerHTML = '';
        containerProdutos.style.display = 'none'; // Oculta os produtos
        
        Servicos.forEach((servico) => {
            const cardServico = document.createElement('div');
            cardServico.classList.add('card-servico');
            cardServico.innerHTML = `
                <div class="grid-servico">
                    <div class="grid-servico-1">
                        <img src="img/${servico.imagem}" alt="${servico.nome}" class="imagem-servico" />
                        <h3>${servico.nome}</h3>
                    </div>

                </div>
                <button onclick="filtrarCategorias(${servico.id})">Ver Categorias</button>
            `;
            containerServicos.appendChild(cardServico);
        });
        
        
        // Exibe apenas serviços
        containerServicos.style.display = 'grid';
        containerCategorias.style.display = 'none';
        }
        
        function filtrarCategorias(servicoId) {
          const containerCategorias = document.getElementById('categorias-container');
          const containerServicos = document.getElementById('servicos-container');
          const containerProdutos = document.getElementById('produtos-container');
          
          // Limpa categorias e produtos
          containerCategorias.innerHTML = '';
          containerProdutos.innerHTML = '';
          
           const servicoSelecionado = Servicos.find(servico => servico.id === servicoId);
              if (!servicoSelecionado) {
                  alert("Serviço não encontrado.");
                  return;
              }
          
              atualizarServicoSelecionado(servicoSelecionado);
          
              const categoriasFiltradas = Categorias.filter(categoria => categoria.servico.id === servicoId);
              if (categoriasFiltradas.length === 0) {
                  containerCategorias.innerHTML = '<p>Nenhuma categoria disponível.</p>';
                  return;
              }
          
              categoriasFiltradas.forEach(categoria => {
                  const cardCategoria = document.createElement('div');
                  cardCategoria.classList.add('card-categoria');
                  cardCategoria.innerHTML = `
                      <img src="img/${categoria.imagem}" alt="${categoria.nome}" class="imagem-categoria" />
                      <h4>${categoria.nome}</h4>
                      <button onclick="filtrarProdutos(${servicoId}, ${categoria.id})">Ver Produtos</button>
                  `;
                  containerCategorias.appendChild(cardCategoria);
           
          
              // Atualiza o ícone e a categoria atual no cabeçalho
              cardCategoria.addEventListener('click', () => {
                  atualizarCategoriaSelecionada(categoria);
              });
          });
              
              // Exibe apenas categorias
              containerServicos.style.display = 'none';
              containerCategorias.style.display = 'grid';
              containerProdutos.style.display = 'none';
      
      
          }
          
      function filtrarProdutos(servicoId, categoriaId) {
          const containerProdutos = document.getElementById('produtos-container');
          const containerCategorias = document.getElementById('categorias-container');
          
          containerProdutos.innerHTML = ''; // Limpa os produtos
          
          const produtosFiltrados = produtos.filter(produto =>
              produto.servico.id === servicoId && produto.categoria.id === categoriaId
          );
          
          if (produtosFiltrados.length === 0) {
              containerProdutos.innerHTML = '<p>Nenhum produto disponível.</p>';
              return;
          }
          
              produtosFiltrados.forEach(produto => {
                  const cardProduto = document.createElement('div');
                  cardProduto.classList.add('card-produto');
                  cardProduto.innerHTML = `
                      <img src="img/servicos/${produto.imagem}" alt="${produto.titulo}" class="imagem-produto" />
                      <h5>${produto.titulo}</h5>
                      <p>${produto.subtitulo || '-'}</p>
                      <p>${produto.categoria.nome}</p>
                      <p>Preço: R$ ${produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                      <button onclick="mostrarDetalhes(${produto.id})">Detalhes</button>
                      `;
                  containerProdutos.appendChild(cardProduto);
              });
          
              // Exibe apenas produtos
              containerCategorias.style.display = 'none';
              containerProdutos.style.display = 'grid';
          }
          
  let cardDetalhesAtivo = null; // Variável global para armazenar o card ativo
  // Função para mostrar o card de detalhes
          function mostrarDetalhes(produtoId) {
              if (cardDetalhesAtivo) {
                  cardDetalhesAtivo.remove();
                }
  
          const cardDetalhes = document.createElement('div');
          cardDetalhes.classList.add('card-detalhes', 'ativo');   
                    
              const containerProdutos = document.getElementById('produtos-container');
              if (!containerProdutos) {
                  console.error("Erro: containerProdutos não encontrado.");
                  return;
              }
          
          
              const produto = produtos.find(p => p.id === produtoId);
              if (!produto) {
                  alert("Produto não encontrado.");
                  return;
              }
          
   
  cardDetalhes.innerHTML = `
    <div class="grid-detalhes">
        <button class="fechar-card">&times;</button>
        <div class="grid-detalhe-1">
            <img src="img/servicos/${produto.imagem}" alt="${produto.titulo}" class="imagem-produto" />
            <div class="conteudo-detalhes">
                <h3>${produto.titulo}</h3>
                <p>${produto.subtitulo || '-'}</p>
                <p><strong>Categoria:</strong> ${produto.categoria.nome}</p>
                <p><strong>Duração:</strong> ${produto.duracao}</p>
                <p><strong>Profissional:</strong> ${produto.profissional}</p>
                <p><strong>Preço:</strong> R$ ${produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                <button class="whatsapp-button">
                    <i class="fa-brands fa-whatsapp"></i> Agendar via WhatsApp
                </button>
            </div>
        </div>
        <div class="grid-detalhe-2">
            <p><strong>Serviço:</strong> ${produto.servico.nome}</p>
            <p><strong>Indicação:</strong> ${produto.servico.indicacao}</p>
            <p><strong>Contraindicações:</strong> ${produto.servico.contraindicacoes}</p>
            <p><strong>Observações:</strong> ${produto.servico.observacoes}</p>
        </div>
    </div>
  `;
   
              const botaoWhatsApp = cardDetalhes.querySelector('.whatsapp-button');
              botaoWhatsApp.addEventListener('click', () => {
                const numeroWhatsApp = produto.whatsapp || '5535988740679'; // Número padrão
                const mensagem = `Olá, tenho interesse na ${produto.servico.nome} e gostaria de saber mais sobre o protocolo ${produto.categoria.nome} "${produto.titulo}".`;
                window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`);
              });    
  
              const botaoFechar = cardDetalhes.querySelector('.fechar-card');
              if (botaoFechar) {
                  botaoFechar.addEventListener('click', () => {
                      cardDetalhes.remove();
                  });
              } else {
                  console.error("Erro: botão de fechar não encontrado.");
              }
   
              document.body.appendChild(cardDetalhes);
              cardDetalhesAtivo = cardDetalhes;
              cardDetalhes.style.zIndex = 100;           
          
              containerProdutos.appendChild(cardDetalhes);
          }
          
        
        // Inicializa a exibição dos serviços ao carregar a página
        document.addEventListener('DOMContentLoaded', () => {
          exibirServicos();
        });
        document.addEventListener('DOMContentLoaded', function () {
          const botao = document.getElementById('exibir-servicos');
          if (botao) {
              botao.onclick = exibirServicos;
          } else {
              console.error("Elemento com ID 'exibir-servicos' não foi encontrado.");
          }
      });              
      
        function atualizarServicoSelecionado(servico) {
          const imagemServico = document.getElementById('icone-servico');
          const servicoAtual = document.getElementById('servico-atual');
          const servicoSelecionado = document.getElementById('servico-selecionado'); // Seleciona o span para exibição do serviço
      
           // Remove a classe 'oculto' para mostrar o ícone
           imagemServico.classList.remove('oculto');
          
          imagemServico.src = `img/${servico.icone}`; // Atualiza o icone
          imagemServico.alt = `Imagem do serviço ${servico.nome}`;
          servicoAtual.textContent = servico.nome; // Atualiza o texto
          if (servicoAtual) {
              servicoAtual.textContent = servico.nome; // Atualiza o texto em um elemento específico
          }
      
          if (servicoSelecionado) {
              servicoSelecionado.textContent = servico.nome; // Atualiza o texto no span
          }
      }
      
      function atualizarCategoriaSelecionada(categoria) {
          const imagemCategoria = document.getElementById('icone-categoria');
          const categoriaAtual = document.getElementById('categoria-atual');
      
      
           // Remove a classe 'oculto' para mostrar o ícone
           imagemCategoria.classList.remove('oculto');   
      
          imagemCategoria.src = `img/${categoria.icone}`; // Atualiza o icone
          imagemCategoria.alt = `Imagem da categoria ${categoria.nome}`;
          categoriaAtual.textContent = categoria.nome; // Atualiza o texto
      }
      
      
      function obterProdutosFiltrados() {
          const containerProdutos = document.getElementById('produtos-container');
          if (!containerProdutos) {
              console.error("Erro: containerProdutos não encontrado.");
              return [];
          }
      
          const produtosAtuais = Array.from(containerProdutos.children);
      
          return produtosAtuais.map(produtoElement => {
              const titulo = produtoElement.querySelector('h5')?.textContent.trim(); // Nome do produto
              const precoText = produtoElement.querySelector('p:nth-child(5)')?.textContent.trim() || '';
      
              // Extrai o número do texto do preço
              const precoNumerico = parseFloat(
                  precoText
                      .replace('Preço:', '') // Remove "Preço:"
                      .replace('R$', '') // Remove "R$"
                      .replace(/\./g, '') // Remove separadores de milhares
                      .replace(',', '.') // Converte vírgula para ponto decimal
                      .trim() // Remove espaços extras
              );
      
              // Log de depuração em caso de preço inválido
              if (isNaN(precoNumerico)) {
                  console.warn(`Preço inválido para o produto: ${titulo} - Texto do preço: "${precoText}"`);
              }
      
              return {
                  elemento: produtoElement,
                  titulo,
                  preco: isNaN(precoNumerico) ? 0 : precoNumerico, // Valor padrão 0 para evitar erros
              };
          });
      }
      
  function limparFiltros() {
      // Redefine os textos e ícones de Serviço e Categoria
      document.getElementById('icone-servico').classList.add('oculto');
      document.getElementById('servico-atual').textContent = 'Selecione um Serviço';
      document.getElementById('icone-categoria').classList.add('oculto');
      document.getElementById('categoria-atual').textContent = 'Selecione uma Categoria';
      document.getElementById('servico-selecionado').textContent = 'Selecione um Serviço'; // Seleciona o span para exibição do serviço
  
      
      // Opcional: Redefine os filtros de produtos
    
      const containerServicos = document.getElementById('servicos-container');
      containerServicos.innerHTML = ''; // Limpa o container (ajuste conforme necessário)
  
      const containerCategorias = document.getElementById('categorias-container');
      containerCategorias.innerHTML = ''; // Limpa o container (ajuste conforme necessário)
  
      const containerProdutos = document.getElementById('produtos-container');
      containerProdutos.innerHTML = ''; // Limpa o container (ajuste conforme necessário)  
  
  
      // Reseta a ordenação
      console.log('Filtros limpos!'); // Para fins de depuração
  }
  
  
  function ordenarProdutos(criterio) {
      const produtosFiltrados = obterProdutosFiltrados();
  
      switch (criterio) {
          case 'az':
              produtosFiltrados.sort((a, b) => a.titulo.localeCompare(b.titulo));
              break;
          case 'za':
              produtosFiltrados.sort((a, b) => b.titulo.localeCompare(a.titulo));
              break;
          case 'maior-preco':
              produtosFiltrados.sort((a, b) => parseFloat(b.preco) - parseFloat(a.preco));
              break;
          case 'menor-preco':
              produtosFiltrados.sort((a, b) => parseFloat(a.preco) - parseFloat(b.preco));
              break;
          default:
              console.error("Critério de ordenação desconhecido:", criterio);
              return;
      }
  
      // Atualiza a exibição no DOM
      const containerProdutos = document.getElementById('produtos-container');
      if (!containerProdutos) {
          console.error("Elemento #produtos-container não encontrado.");
          return;
      }
  
      containerProdutos.innerHTML = ''; // Limpa o container
  
      produtosFiltrados.forEach(produto => {
          containerProdutos.appendChild(produto.elemento); // Reinsere os elementos ordenados
      });
  }
  
  function normalizarTexto(texto) {
      return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }
  
    function normalizarTexto(texto) {
      return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  
  function buscarTratamento() {
      const termoBusca = normalizarTexto(document.getElementById('busca').value.trim());
      const containerProdutos = document.getElementById('produtos-container');
      const containerCategorias = document.getElementById('categorias-container');
      const containerServicos = document.getElementById('servicos-container');
  
      // Limpa exibição anterior
      containerProdutos.innerHTML = '';
      containerCategorias.style.display = 'none';
      containerServicos.style.display = 'none';
      containerProdutos.style.display = 'grid';
  
      // Filtra produtos com base no termo de busca
      const produtosFiltrados = produtos.filter(produto =>
          normalizarTexto(produto.titulo).includes(termoBusca) ||
          (produto.subtitulo && normalizarTexto(produto.subtitulo).includes(termoBusca)) ||
          normalizarTexto(produto.categoria.nome).includes(termoBusca)
      );
  
      if (produtosFiltrados.length === 0) {
          containerProdutos.innerHTML = '<p>Nenhum produto encontrado com os termos buscados.</p>';
          return;
      }
  
      // Exibe os produtos encontrados
      produtosFiltrados.forEach(produto => {
          const cardProduto = document.createElement('div');
          cardProduto.classList.add('card-produto');
          cardProduto.innerHTML = `
              <img src="img/servicos/${produto.imagem}" alt="${produto.titulo}" class="imagem-produto" />
              <h5>${produto.titulo}</h5>
              <p>${produto.subtitulo || '-'}</p>
              <p>${produto.categoria.nome}</p>
              <p>Preço: R$ ${produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              <button onclick="mostrarDetalhes(${produto.id})">Detalhes</button>
          `;
          containerProdutos.appendChild(cardProduto);
      });
  }
  
    
      document.addEventListener('DOMContentLoaded', function () {
        // Garantir que o DOM foi completamente carregado
        const botaoAgendar = document.getElementById('botaoAgendar');
      
        if (botaoAgendar) {
          botaoAgendar.addEventListener('click', function () {
            // Chama a função para criar o formulário de agendamento
            criarFormularioAgendamento(produtos, 'formulario-container');
          });
        }
      });