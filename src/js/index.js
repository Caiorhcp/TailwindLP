    const images = [
        '/src/Images/Divulgação1.jpg',
        '/src/Images/Divulgação2.webp',
        '/src/Images/Divulgação3.png',
        '/src/Images/Divulgação4.jpeg',
        '/src/Images/Divulgação5.jpeg',
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById('imagem-1');

    document.getElementById('prev-button').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        imgElement.src = images[currentIndex];
    });

    document.getElementById('next-button').addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        imgElement.src = images[currentIndex];
    });


    const descriptions = {
        direito: "Direito: O curso de Direito prepara os alunos para a prática jurídica em diversas áreas, incluindo advocacia, magistratura e promotorias.",
        medicina: "Medicina: O curso de Medicina forma profissionais para atuarem na prevenção, diagnóstico e tratamento de doenças, além de promover a saúde.",
        enfermagem: "Enfermagem: Enfermagem é a ciência que se dedica ao cuidado e à recuperação dos pacientes, além de promover a saúde e o bem-estar.",
        sistemas: "Sistemas de Informação: Este curso ensina os alunos a desenvolver e gerenciar sistemas computacionais e soluções tecnológicas para empresas.",
        fisioterapia: "Fisioterapia: O curso de Fisioterapia prepara profissionais para atuar na reabilitação física e na promoção da saúde através de técnicas de terapia física."
      };
  
      document.addEventListener('DOMContentLoaded', () => {
        const courseButtons = document.querySelectorAll('.course-btn');
        const courseDescription = document.getElementById('course-description');
  
        courseButtons.forEach(button => {
          button.addEventListener('click', () => {
            const courseKey = button.getAttribute('data-course');
            courseDescription.innerHTML = `
              <h2 class="text-xl font-bold">${button.innerText}</h2>
              <p>${descriptions[courseKey]}</p>
            `;
          });
        });
      });

      const descriptions2 = {
        direito2: "Este programa oferece uma especialização avançada em Direito Civil e Processo Civil, abordando temas como responsabilidade civil, contratos, direitos reais, processo civil, recursos e jurisprudência atualizada. Os participantes desenvolverão habilidades para atuar em escritórios de advocacia, empresas e órgãos públicos, aprofundando seu conhecimento nas áreas civil e processual ",
        medicina2: "Esta especialização em Medicina do Trabalho visa capacitar médicos para atuar na prevenção, diagnóstico e tratamento de doenças relacionadas ao ambiente de trabalho. Os participantes aprenderão sobre legislação trabalhista, ergonomia, toxicologia ocupacional, saúde mental no trabalho e gestão de saúde ocupacional, preparando-os para exercer a medicina ocupacional em empresas e órgãos públicos.",
        enfermagem2: "Esta pós-graduação proporciona uma formação especializada em enfermagem em terapia intensiva, preparando profissionais para atuar em unidades de terapia intensiva (UTIs) em hospitais. O curso aborda conceitos avançados de cuidados críticos, ventilação mecânica, monitoramento hemodinâmico, gerenciamento de emergências e procedimentos específicos de enfermagem em pacientes críticos.",
        sistemas2: "Esta especialização em Robótica Aplicada oferece uma abordagem prática e abrangente para o desenvolvimento, implementação e aplicação de sistemas robóticos em diversos contextos. Os participantes explorarão conceitos avançados de robótica, incluindo programação de robôs, inteligência artificial, visão computacional, controle de movimento e interação humano-robô. O curso combina teoria e prática, capacitando os alunos a projetar, construir e programar robôs para aplicações em áreas como manufatura, automação industrial, assistência médica, logística, agricultura e robótica de serviço. Ao concluir a pós-graduação, os profissionais estarão preparados para liderar projetos de robótica, desenvolver soluções inovadoras e integrar tecnologias robóticas avançadas em diversos setores industriais.",
        fisioterapia2: "Esta especialização em Fisioterapia Traumato-Ortopédica proporciona uma formação avançada em avaliação, diagnóstico e tratamento de lesões musculoesqueléticas. O curso aborda técnicas de reabilitação, exercícios terapêuticos, mobilização articular, terapias manuais e recursos fisioterapêuticos específicos para o tratamento de pacientes com lesões ortopédicas e traumas, preparando os profissionais para atuar em clínicas especializadas, hospitais e centros de reabilitação."
      };
  
      document.addEventListener('DOMContentLoaded', () => {
        const courseButtons = document.querySelectorAll('.course-btn2');
        const courseDescription = document.getElementById('course-description2');
  
        courseButtons.forEach(button => {
          button.addEventListener('click', () => {
            const courseKey = button.getAttribute('data-course');
            courseDescription.innerHTML = `
              <h2 class="text-xl font-bold">${button.innerText}</h2>
              <p>${descriptions2[courseKey]}</p>
            `;
          });
        });
      });