document.addEventListener('DOMContentLoaded', function() {
    const posts = [
        {
            title: "Inclusão, Diversidade, Equidade e Acessibilidade de e para Pessoas, Tecnologias e Organizações",
            content: "O desafio amplia o conceito de acessibilidade para além da inclusão de pessoas com deficiência, abrangendo também aspectos relacionados à diversidade cultural, regional, racial, de gênero, sexualidade, educação e outras dimensões sociais, propondo uma agenda de Inclusão, Diversidade, Equidade e Acessibilidade voltada a pessoas, tecnologias e organizações. Nesse contexto, destaca-se a necessidade de reconhecer a não neutralidade das tecnologias, compreendendo que sistemas e artefatos carregam interesses, vieses e impactos sociais que podem reforçar desigualdades e assimetrias de poder. Para enfrentar esses desafios, enfatiza-se a importância de utilizar dados representativos e diversos na construção de sistemas, reduzindo vieses algorítmicos por meio de governança, transparência e monitoramento contínuo. Além disso, propõe-se fortalecer a formação e capacitação de profissionais em temas de diversidade, equidade e acessibilidade, promovendo abordagens participativas, design universal e responsabilidade social. O desafio também defende maior representatividade e pertencimento de grupos minorizados na comunidade de Sistemas de Informação e nos artefatos produzidos, por meio de políticas afirmativas, currículos inclusivos e desenvolvimento de soluções sensíveis a contextos regionais e interseccionais. Por fim, ressalta-se a necessidade de simplificar o acesso à informação, utilizando linguagem clara e representações acessíveis que favoreçam a participação de públicos diversos e ampliem a equidade na relação entre pessoas, tecnologias e organizações.",
            pdfUrl: "https://doi.org/10.5753/sbc.rt.2025.181.2",
            infographicUrl: "caminho/para/infografico1.png"
        },
        {
            title: "Sistemas de Informação Inteligentes sob a Perspectiva Sociotécnica",
            content: "Os participantes do Seminário destacaram como principais desafios para os Sistemas de Informação Inteligentes, sob uma perspectiva sociotécnica, questões relacionadas à ética, privacidade, sustentabilidade, confiança, integração social e técnica, governança e impacto societal. Nesse contexto, enfatiza-se a necessidade de desenvolver sistemas centrados no ser humano, alinhados à legalidade, transparentes, responsáveis e comprometidos com a proteção de dados, a mitigação de vieses algorítmicos e a promoção da justiça social. Além disso, ressalta-se a importância de considerar os impactos ambientais, organizacionais e sociais dessas tecnologias, incluindo inclusão digital, equidade, transformação do trabalho e combate à desinformação. Para enfrentar tais desafios, os participantes defendem práticas de design ético, auditoria contínua, mecanismos de responsabilização e frameworks regulatórios que conciliem inovação tecnológica, segurança, confiança e responsabilidade socioambiental.",
            pdfUrl: "https://doi.org/10.5753/sbc.rt.2025.181.3",
            infographicUrl: "caminho/para/infografico2.png"
        },
        {
            title: "Eco(Sistemas²) de Informação - Ecossistemas de Sistemas de Informação",
            content: "Os participantes do Seminário destacaram como principais eixos do desafio a simulação, os gêmeos digitais (digital twins), a interoperabilidade sociotécnica e a integração descentralizada, propondo a concepção de Ecossistemas de Sistemas de Informação (EcoSys²), compostos por múltiplos sistemas interconectados que cooperam para atingir objetivos comuns em contextos complexos, como cidades inteligentes. Nesse cenário, a interoperabilidade é vista como elemento central, abrangendo dimensões técnica, sintática, semântica, pragmática e organizacional, de forma a permitir comunicação eficiente, colaboração, tomada de decisão coletiva e integração social entre sistemas e atores. Além disso, enfatiza-se a necessidade de abordagens descentralizadas de integração, capazes de garantir privacidade, segurança e autonomia, reduzindo a dependência de tecnologias centralizadoras e possibilitando comunicação distribuída mesmo sem infraestrutura tradicional de rede, utilizando tecnologias como blockchain e comunicação por proximidade. Complementarmente, simulações e gêmeos digitais surgem como tecnologias habilitadoras fundamentais, permitindo representar, monitorar, analisar e otimizar sistemas físicos em tempo real, sendo essenciais em aplicações como carros autônomos e cidades inteligentes, nas quais diferentes sistemas precisam operar de forma integrada, interoperável e descentralizada.",
            pdfUrl: "https://doi.org/10.5753/sbc.rt.2025.181.4",
            infographicUrl: "caminho/para/infografico3.png"
        },
        {
            title: "Perspectivas Sociotécnicas, Macrotendências e Cosmovisões Plurais",
            content: "O desafio propõe uma visão crítica e ampliada dos Sistemas de Informação (SI), fundamentada em perspectivas sociotécnicas, múltiplas cosmovisões e na análise das interações entre agências humanas e não humanas, diante das transformações tecnológicas e das crises ecológicas, éticas e sociais contemporâneas. Nesse contexto, defende-se a necessidade de ressignificar o papel dos SI, superando visões exclusivamente tecnicistas e orientando-os para a construção de futuros desejáveis, sustentáveis e socialmente responsáveis. Além disso, o desafio enfatiza a importância de fortalecer uma comunidade acadêmica e profissional comprometida com abordagens interdisciplinares, sistêmicas, críticas e emancipadoras, capazes de enfrentar estruturas de poder e responder, de forma contextualizada, às macrotendências globais e nacionais que moldam a sociedade contemporânea.",
            pdfUrl: "https://doi.org/10.5753/sbc.rt.2025.181.5",
            infographicUrl: "caminho/para/infografico4.png"
        },
        {
            title: "Transformação da Formação e Atuação em SI em Tempos de IA Generativa",
            content: "A crescente presença da IA generativa nos Sistemas de Informação inaugura uma nova configuração sociotécnica que demanda revisão conceitual, metodológica e epistemológica da área, uma vez que a IA passa a atuar tanto como componente funcional dos sistemas quanto como ferramenta de apoio ao próprio processo de desenvolvimento. Nesse contexto, propõe-se reposicionar Sistemas de Informação como área protagonista no avanço e na aplicação crítica da IA generativa, influenciando comportamentos organizacionais, processos e relações humano-máquina. O desafio estrutura-se em três pilares interdependentes: a adequação técnico-metodológica, voltada à atualização de métodos e práticas de desenvolvimento, manutenção e gestão de sistemas baseados em IA; a formação e atualização curricular, incorporando explicitamente fundamentos, aplicações, riscos éticos e impactos sociais da IA generativa nos cursos da área; e a promoção da autonomia crítica e da interdisciplinaridade, buscando evitar o tecnocentrismo e fortalecer abordagens sensíveis a questões socioculturais, nacionais e regionais na formação profissional e na concepção de artefatos sistêmicos.",
            pdfUrl: "https://doi.org/10.5753/sbc.rt.2025.181.6",
            infographicUrl: "caminho/para/infografico5.png"
        }
    ];

    const postsContainer = document.getElementById('postsContainer');

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-header">
                <div class="post-title-wrapper">
                    <h3>${post.title}</h3>
                </div>
                <div class="post-toggle-icon">▼</div>
            </div>
            <div class="post-content">
                <div class="post-description">
                    <p>${post.content}</p>
                </div>
                
                <div class="post-buttons">
                    <a href="${post.pdfUrl}" target="_blank" rel="noopener noreferrer" class="post-pdf-button">📄 Ver PDF Completo</a>
                    <a href="${post.infographicUrl}" target="_blank" rel="noopener noreferrer" class="post-infographic-button">📊 Ver Infográfico</a>
                </div>
            </div>
        `;

        postCard.querySelector('.post-header').addEventListener('click', function() {
            postCard.classList.toggle('active');
        });

        postsContainer.appendChild(postCard);
    });
});