// Funções para inserir o conteúdo

// Quem Somos
function exibirQuemSomos() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div class="section" id="aboutSection">
            <div class="container pt-lg-2">
                <div class="row mt-2 mt-md-3 mt-lg-0">
                    <div class="col-md-8">
                        <div class="title-wrap text-center text-md-left">
                            <div class="title-wrap text-center">
                                <h2 class="h1">OnMiCare Laser</h2>
                                <div class="h-decor"></div>
                            </div>
                            <h2 class="h1"><span class="theme-color">Experiência e Tecnologia</span></h2>
                        </div>
                        <div class="pr-xl-1">
                            <p align="justify">A OnMICare Laser é uma empresa que veio para proporcionar aos nossos clientes a melhor experiência em depilação a LASER, com tecnologia avançada e qualidade.</p>
                            <ul class="marker-list-md">
                                <li>Ótima localização</li>
                                <li>LASER de alto desempenho</li>
                                <li>Profissionais qualificados</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 mt-4 mt-md-0">
                        <div class="video-box-poster">
                            <img src="img/tecnologias.png" alt="Experiência e Tecnologia">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Rolar para a seção do conteúdo
    document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
}

// Nossa Tecnologia
function exibirTecnologia() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div class="section" id="departmentsSection">
            <div class="container">
                <div class="title-wrap text-center">
                    <h2 class="h1">Tecnologias</h2>
                    <div class="h-decor"></div>
                </div>

                <!-- Nova Tecnologia 1: Hakon Medical San -->
                <div class="row mt-5">
                    <div class="col-md-4 mt-4 mt-md-0">
                        <div class="video-box-poster">
                            <img src="img/hakon-medical-san.jpg" alt="Hakon Medical San - Equipamento de Laser">
                        </div>
                    </div>
                    <div class="col-lg-8 col-xl-8">
                        <h3>Hakon Medical San - Equipamento de Laser para Epilação Premium 4D</h3>
                        <p class="max-1000" align="justify">
                            <strong>Diferenciais e Benefícios:</strong>
                            <ul>
                                <li>4 LASERS em 01: Rubi (694nm), Alexandrite (755nm), Diodo (808nm) e ND-YAG (1064nm)</li>
                                <li>40 MILHÕES de disparos</li>
                                <li>Sistema indolor com resfriamento da ponteira que atinge até -12º em 50 segundos</li>
                                <li>Projetado para alta demanda de atendimentos</li>
                                <li>Laser de epilação mais silencioso do mercado</li>
                                <li>Handipiece com 3 modos de aplicação:</li>
                                <ul>
                                    <li><strong>Modo Varredura:</strong> Mantém o botão pressionado, efetuando 5 disparos por segundo</li>
                                    <li><strong>Modo Pontual:</strong> Disparos singulares</li>
                                </ul>
                            </ul>
                        </p>
                    </div>
                </div>

                <!-- Nova Tecnologia 2: Ômer Smart -->
                <div class="row mt-5 align-items-center">
                    <div class="col-lg-8 col-xl-8 order-1 order-lg-0">
                        <h3>Ômer Smart - Laser 3D Portátil para Remoção de Tatuagem e Micropigmentação</h3>
                        <p class="max-1000" align="justify">
                            <strong>Ponteiras do Ômer:</strong>
                            <ul>
                                <li><strong>Carbon:</strong> Indicado para rejuvenescimento de pele</li>
                                <li><strong>ND-YAG 1064 nm:</strong> Indicado para remoção de tatuagens escuras</li>
                                <li><strong>532 nm:</strong> Indicado para remoção de tatuagens coloridas</li>
                            </ul>
                            <strong>Registro ANVISA:</strong> 8124380008
                        </p>
                        <p class="max-1000" align="justify">
                            <strong>Diferenciais e Benefícios:</strong>
                            <ul>
                                <li>Carrinho de brinde na compra do Ômer Smart com a BCMED</li>
                                <li>4 milhões de disparos</li>
                                <li>3 ponteiras com distintas indicações</li>
                                <li>Resultados rápidos em poucas sessões</li>
                                <li>Disparos em nanossegundos</li>
                                <li>Leve, com apenas 27 quilos</li>
                                <li>Fácil transporte e portátil</li>
                                <li>Especialmente desenvolvido para remoção de pigmentos (tattoos) e micropigmentação</li>
                            </ul>
                        </p>
                        <p class="max-1000" align="justify">
                            <strong>Indicações:</strong>
                            <ul>
                                <li>Remoção de tatuagem</li>
                                <li>Despigmentação</li>
                            </ul>
                        </p>
                    </div>
                    <div class="col-md-4 order-0 order-lg-1 mt-4 mt-md-0">
                        <div class="video-box-poster">
                            <img src="img/omer-smart.jpg" alt="Ômer Smart - Laser 3D Portátil">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Rolar para a seção do conteúdo
    document.getElementById('departmentsSection').scrollIntoView({ behavior: 'smooth' });
}

function exibirTratamentos() {
    const contentDiv = document.getElementById('content');
    
    // Função para gerar o HTML para as categorias de tratamento
    function gerarListaCategoria(categoriasFiltradas) {
        let listaHtml = '';
        categoriasFiltradas.forEach(categoria => {
            listaHtml += `
                <li>${categoria.nome}</li>
            `;
        });
        return listaHtml;
    }

    // Filtra as categorias para Tratamentos Femininos (excluindo "Depilação Masculina")
    const categoriasFemininas = Categorias.filter(categoria => categoria.nome !== "Depilação Masculina");
    // Filtra as categorias para Tratamentos Masculinos (excluindo "Depilação Feminina")
    const categoriasMasculinas = Categorias.filter(categoria => categoria.nome !== "Depilação Feminina");

    contentDiv.innerHTML = `
        <div class="section" id="servicesSection">
            <div class="container">
                <div class="title-wrap text-center">
                    <h2 class="h1">Tratamentos</h2>
                    <div class="h-decor"></div>
                </div>

                <!-- Tratamento Feminino -->
                <div class="row mt-5">
                    <div class="col-md-4 mt-4 mt-md-0">
                        <div class="video-box-poster">
                            <img src="img/imagemfem.jpg" alt="Tratamentos Femininos" style="width: 100%; height: auto; border-radius: 8px;">
                        </div>
                    </div>
                    <div class="col-lg-8 col-xl-8">
                        <h5 class="service-card-name">Tratamentos Femininos</h5>
                        <ul class="marker-list-md">
                            ${gerarListaCategoria(categoriasFemininas)}
                        </ul>
                    </div>
                </div>

                <!-- Tratamento Masculino -->
                <div class="row mt-5 align-items-center">
                    <div class="col-lg-8 col-xl-8 order-1 order-lg-0">
                        <h5 class="service-card-name">Tratamentos Masculinos</h5>
                        <ul class="marker-list-md">
                            ${gerarListaCategoria(categoriasMasculinas)}
                        </ul>
                    </div>
                    <div class="col-md-4 order-0 order-lg-1 mt-4 mt-md-0">
                        <div class="video-box-poster">
                            <img src="img/imagemmen.jpg" alt="Tratamentos Masculinos" style="width: 100%; height: auto; border-radius: 8px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    // Rolar para a seção do conteúdo
    document.getElementById('servicesSection').scrollIntoView({ behavior: 'smooth' });
}

// Eventos para os botões
document.getElementById('quemSomosButton').addEventListener('click', exibirQuemSomos);
document.getElementById('nossaTecnologiaButton').addEventListener('click', exibirTecnologia);
document.getElementById('nossosServicosButton').addEventListener('click', exibirTratamentos);
