const dadosRodape = [
  {
      titulo: "Institucional",
      links: [
          { nome: "Sobre nós", link: "#", conteudo: "A Onmicare é referência em depilação a laser..." },
          { nome: "Procedimentos", link: "#", conteudo: "Conheça nossos tratamentos de depilação e remoção a laser..." },
          { nome: "Nosso Laser", link: "#", conteudo: "Utilizamos o avançado aparelho Hakon..." },
          { nome: "Onde Estamos", link: "#", conteudo: "Encontre a clínica Onmicare mais próxima de você..." },
          { nome: "Contato", link: "#", conteudo: "Entre em contato conosco..." }
      ]
  },
  {
      titulo: "Políticas e Termos",
      links: [
          { nome: "Política de Privacidade", link: "#", conteudo: "Na Onmicare, levamos sua privacidade a sério..." },
          { nome: "Política de Cancelamento", link: "#", conteudo: "Confira nossas condições para reagendamentos..." },
          { nome: "Termos e Condições", link: "#", conteudo: "Saiba mais sobre os termos e condições..." }
      ]
  },
  {
      titulo: "Atendimento ao Cliente",
      informacoes: [
          { nome: "Horário de Atendimento", conteudo: "De segunda a sexta, das 08:00h às 18:00h" },
          { nome: "Dúvidas sobre procedimentos", link: "#", conteudo: "Tire suas dúvidas sobre os procedimentos..." }
      ]
  },
  {
      titulo: "Siga nossas redes sociais",
      redesSociais: [
          { nome: "Instagram", link: "https://www.instagram.com/dra.michelesales/", conteudo: "Acompanhe nossas novidades..." },
          { nome: "Facebook", link: "https://www.facebook.com/michelesalesestetica/", conteudo: "Curta nossa página no Facebook..." }
      ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  criarLinksDinamicos();
});

function criarLinksDinamicos() {
  const colunaTitulos = document.getElementById("coluna-titulos");

  if (!colunaTitulos) {
      console.error("O elemento 'coluna-titulos' não foi encontrado.");
      return;
  }

  colunaTitulos.innerHTML = ""; // Limpa os títulos existentes

  const isMobile = window.innerWidth <= 768; // Detecta se é uma tela menor

  dadosRodape.forEach((categoria) => {
      const containerCategoria = document.createElement("div");
      containerCategoria.classList.add("container-categoria");

      const tituloPrincipal = document.createElement("h4");
      tituloPrincipal.textContent = categoria.titulo;
      tituloPrincipal.classList.add("titulo-principal");

      // Apenas para telas menores, cria o botão
      if (isMobile) {
          const botaoExpandir = document.createElement("button");
          botaoExpandir.textContent = "+"; // Botão padrão "Expandir"
          botaoExpandir.classList.add("botao-expandir");
          botaoExpandir.setAttribute("aria-expanded", "false");

          // Adiciona evento ao botão
          botaoExpandir.addEventListener("click", () => {
              const subtitulos = containerCategoria.querySelectorAll(".subtitulo");
              subtitulos.forEach((sub) => sub.classList.toggle("oculto"));

              // Alterna entre "+" e "-"
              const isExpanded = botaoExpandir.textContent === "+";
              botaoExpandir.textContent = isExpanded ? "-" : "+";
              botaoExpandir.setAttribute("aria-expanded", isExpanded);
          });

          // Adiciona o botão dentro do título principal
          tituloPrincipal.appendChild(botaoExpandir);
      }

      // Adiciona o título principal ao container
      containerCategoria.appendChild(tituloPrincipal);

      // Adiciona os subtítulos
      categoria.links?.forEach((link) => {
          const subtitulo = document.createElement("p");
          subtitulo.textContent = link.nome; // Usar 'nome' em vez de 'titulo'
          subtitulo.classList.add("subtitulo");
          if (isMobile) subtitulo.classList.add("oculto"); // Oculta por padrão em telas menores
          subtitulo.addEventListener("click", () => exibirConteudo(link.conteudo, link.link, categoria.titulo, link.nome));
          containerCategoria.appendChild(subtitulo);
      });

      categoria.informacoes?.forEach((info) => {
          const subtitulo = document.createElement("p");
          subtitulo.textContent = info.nome; // Usar 'nome' em vez de 'titulo'
          subtitulo.classList.add("subtitulo");
          if (isMobile) subtitulo.classList.add("oculto"); // Oculta por padrão em telas menores
          subtitulo.addEventListener("click", () => exibirConteudo(info.conteudo, null, categoria.titulo, info.nome));
          containerCategoria.appendChild(subtitulo);
      });

      categoria.redesSociais?.forEach((rede) => {
          // Cria o subtítulo com o nome da rede social
          const subtitulo = document.createElement("p");
          subtitulo.textContent = rede.nome; // Usar 'nome' em vez de 'titulo'
          subtitulo.classList.add("subtitulo");
      
          // Se for em dispositivos móveis, oculta o subtítulo por padrão
          if (isMobile) subtitulo.classList.add("oculto");
      
          // Adiciona o evento de clique para exibir o conteúdo
          subtitulo.addEventListener("click", () => exibirConteudo(rede.conteudo, rede.link, categoria.titulo, rede.nome));
      
          // Cria o ícone da rede social
          const icon = document.createElement('i');
          if (rede.nome === 'Instagram') {
              icon.className = 'fa-brands fa-instagram'; // Ícone do Instagram
          } else if (rede.nome === 'Facebook') {
              icon.className = 'fa-brands fa-facebook'; // Ícone do Facebook
          } else if (rede.nome === 'Twitter') {
              icon.className = 'fa-brands fa-twitter'; // Ícone do Twitter
          } else if (rede.nome === 'LinkedIn') {
              icon.className = 'fa-brands fa-linkedin'; // Ícone do LinkedIn
          }
      
          // Estiliza o ícone (opcional)
          icon.style.marginRight = '10px'; // Espaço entre o ícone e o nome
      
          // Adiciona o ícone antes do texto do subtítulo
          subtitulo.insertBefore(icon, subtitulo.firstChild);
      
          // Adiciona o subtítulo ao container
          containerCategoria.appendChild(subtitulo);
      });
      

      colunaTitulos.appendChild(containerCategoria);
  });
}




window.addEventListener("resize", () => {
  criarLinksDinamicos(); // Recria os links ao redimensionar a janela
});


function exibirConteudo(conteudo, link = null, titulo = null, nome = null) {
  const colunaConteudo = document.getElementById("coluna-conteudo");
  const rodapeContainer = document.querySelector(".rodape-container");

  if (!colunaConteudo) {
      console.error("O elemento 'coluna-conteudo' não foi encontrado.");
      return;
  }

  // Diagnóstico: Verificar o conteúdo recebido
  console.log("Conteúdo recebido:", { conteudo, link, titulo, nome });

  // Verifica se o conteúdo principal existe
  if (!conteudo || conteudo.trim() === "") {
      conteudo = "Conteúdo em breve. Por favor, volte mais tarde!";
  }

  // Preenche a coluna de conteúdo com os dados fornecidos
  colunaConteudo.innerHTML = `
      ${titulo ? `<h3>${titulo}</h3>` : ""}
      ${nome ? `<h4>${nome}</h4>` : ""}
      <p>${conteudo}</p>
      ${link ? `<a href="${link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>` : ""}
  `;

  // Diagnóstico: Verificar o conteúdo inserido
  console.log("Conteúdo renderizado:", colunaConteudo.innerHTML);

  // Alterna visibilidade
  colunaConteudo.style.display = "block";
  rodapeContainer?.classList.add("exibe-conteudo");
}
