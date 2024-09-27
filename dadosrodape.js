const dadosRodape = [
  {
    titulo: "Institucional",
    links: [
      { titulo: "Sobre nós", link: "#", conteudo: "A Onmicare é referência em depilação a laser, oferecendo tecnologia avançada e equipe especializada para garantir conforto e resultados duradouros. Nossa missão é proporcionar bem-estar e autoestima por meio de soluções eficazes." },
      { titulo: "Procedimentos", link: "#", conteudo: "Conheça nossos tratamentos de depilação e remoção a laser, adaptados para diferentes tipos de pele e necessidades, com o uso das tecnologias mais modernas do mercado." },
      { titulo: "Nosso Laser", link: "#", conteudo: "Utilizamos o avançado aparelho Hakon '4 LASERS em 01', combinando as tecnologias Rubi, Alexandrite, Diodo e ND-YAG para oferecer resultados precisos e seguros." },
      { titulo: "Onde Estamos", link: "#", conteudo: "Encontre a clínica Onmicare mais próxima de você. Estamos localizados em várias cidades para melhor atender nossos clientes." },
      { titulo: "Contato", link: "#", conteudo: "Entre em contato conosco para agendar sua consulta ou tirar dúvidas. Estamos disponíveis por telefone, e-mail ou redes sociais." }
    ]
  },
  {
    titulo: "Políticas e Termos",
    links: [
      { titulo: "Política de Privacidade", link: "#", conteudo: "Na Onmicare, levamos sua privacidade a sério. Saiba mais sobre como protegemos seus dados e informações pessoais." },
      { titulo: "Política de Cancelamento", link: "#", conteudo: "Confira nossas condições para reagendamentos e cancelamentos de consultas e procedimentos." },
      { titulo: "Termos e Condições", link: "#", conteudo: "Saiba mais sobre os termos e condições de uso dos nossos serviços e plataforma." }
    ]
  },
  {
    titulo: "Atendimento ao Cliente",
    informacoes: [
      { titulo: "Horário de Atendimento", conteudo: "De segunda a sexta, das 08:00h às 18:00h" },
      { titulo: "Dúvidas sobre procedimentos", link: "#", conteudo: "Tire suas dúvidas sobre os procedimentos de depilação a laser e saiba o que esperar de cada sessão." }
    ]
  },
  {
    titulo: "Siga nossas redes sociais",
    redesSociais: [
      { nome: "Instagram", link: "https://www.instagram.com/dra.michelesales/", conteudo: "Acompanhe nossas novidades, dicas de cuidados com a pele e promoções exclusivas em nosso Instagram oficial." },
      { nome: "Facebook", link: "https://www.facebook.com/michelesalesestetica/", conteudo: "Curta nossa página no Facebook e fique por dentro dos nossos serviços e novidades em estética." }
    ]
  }
];


const containerCards = document.getElementById('container-cards');
const pageContent = document.getElementById('page-content');

// Função para criar cards com o título e o conteúdo
function criarCard(titulo, conteudo) {
    const card = document.createElement('div');
    card.classList.add('card'); // Adicione suas classes CSS aqui

    const tituloElemento = document.createElement('h3');
    tituloElemento.textContent = titulo;

    const conteudoElemento = document.createElement('p');
    conteudoElemento.textContent = conteudo;

    card.appendChild(tituloElemento);
    card.appendChild(conteudoElemento);

    return card;
}

// Função para atualizar o conteúdo na página
function atualizarConteudo(categoria, item) {
    const conteudo = dadosRodape[categoria].links
        ? dadosRodape[categoria].links[item].conteudo
        : dadosRodape[categoria].informacoes[item].conteudo;
        
    const titulo = dadosRodape[categoria].links
        ? dadosRodape[categoria].links[item].titulo
        : dadosRodape[categoria].informacoes[item].titulo;

    const card = criarCard(titulo, conteudo);

    // Limpar o conteúdo anterior
    pageContent.innerHTML = '';

    // Adicionar o novo card
    pageContent.appendChild(card);
}

// Função para criar os links dinâmicos no rodapé
function criarLinksDinamicos(dados) {
    const rodape = document.createElement('div');
    rodape.classList.add('rodape-container'); // Adicione suas classes CSS para layout em 4 colunas

    dados.forEach((categoria, categoriaIndex) => {
        const coluna = document.createElement('div');
        coluna.classList.add('rodape-coluna');

        const tituloColuna = document.createElement('h4');
        tituloColuna.textContent = categoria.titulo;
        coluna.appendChild(tituloColuna);

        const lista = document.createElement('ul');
        lista.classList.add('nav-list');

        if (categoria.links) {
            categoria.links.forEach((linkItem, itemIndex) => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#${categoriaIndex}-${itemIndex}`;
                link.textContent = linkItem.titulo;
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    atualizarConteudo(categoriaIndex, itemIndex);
                });
                li.appendChild(link);
                lista.appendChild(li);
            });
        }

        if (categoria.informacoes) {
            categoria.informacoes.forEach((infoItem, itemIndex) => {
                const li = document.createElement('li');
                const info = document.createElement('span');
                info.textContent = `${infoItem.titulo}: ${infoItem.conteudo}`;
                li.appendChild(info);
                lista.appendChild(li);
            });
        }

        coluna.appendChild(lista);
        rodape.appendChild(coluna);
    });

    containerCards.appendChild(rodape);
}

// Inicializa a criação dos links dinâmicos no rodapé
criarLinksDinamicos(dadosRodape);
