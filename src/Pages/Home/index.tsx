import React from 'react';
import AllSemesters from '../../Components/AllSemesters';
import SubjectInfo from '../../Components/SubjectInfo';
import { Container } from './style';
import { useSubjectContext } from '../../Contexts/PreRequesites';

function Home() {
    
    const { currentSubject } = useSubjectContext();
    
    return (
        <Container>
            <AllSemesters/>
            <SubjectInfo
                id={Subjects[currentSubject].subject.id}
                name={Subjects[currentSubject].subject.name}
                preRequisites={Subjects[currentSubject].subject.preRequisites}
                credits={Subjects[currentSubject].subject.credits}
                content={Subjects[currentSubject].subject.content}
                difficultyLevel={Subjects[currentSubject].subject.difficultyLevel}
                exams={Subjects[currentSubject].subject.exams}
                teachers={Subjects[currentSubject].subject.teachers}
                advice={Subjects[currentSubject].subject.advice}/>
        </Container>
  );
}

export default Home;

const Subjects = [
    { subject: { name: '',
        id : 0,
        preRequisites : [],
        credits : 0,
        content : '',
        difficultyLevel: '', 
        exams : '',
        teachers : '',
        advice : ''
    }},
    { subject: {
        name: 'Programação de Computadores I', 
        id : 1,    
        preRequisites : [],    
        credits : 4,    
        content : 'Resolução de problemas de forma algorítmica; Funções e modularização; Recursão; Variáveis, expressões; Controle de fluxo e repetições; Tipos básicos e estruturados; Tipos abstratos de dados; Vetores e matrizes; Cadeias de caracteres; Documentação, legibilidade, manutenção e eficiência de programas.',
        difficultyLevel: '3/5' , 
        exams : 'Provas, trabalhos, apresentações, listas.',
        teachers : 'Valeria, Giseli',
        advice : 'Não costuma ser muito complicada, mas é sempre bom praticar o que se aprende em aula.'
    }},
    { subject: {
        name: 'Processos de Software',
        id : 2,
        preRequisites : [],
        credits : 4,
        content : 'Conceitos de organização, sistema e sistema de informação; Processos de Negócio (Modelagem de Processos (BPMN)); Introdução a Engenharia de Software (Conceito de Partes Interessadas, Valor e Qualidade de Software); Processo de Software (Requisitos, Modelagem, Projeto de software, Implementação, Testes, Manutenção); Conceitos de no-code programming.',
        difficultyLevel : '2/5',
        exams: 'Trabalhos, apresentações',
        teachers : 'Juliana França, Jonice',
        advice : 'A segunda mais tranquila do primeiro período, não precisa ter medo.'
    }},
    { subject: {
        name: 'Fund de Sistemas de Computação',
        id : 3,
        preRequisites : [],
        credits : 4,
        content : 'Organização dos sistemas de computação unitários e distribuídos; Inicialização e finalização do sistema de computação; Caminho percorrido por um programa; Representação, processamento e armazenamento digital de dados (sistemas de numeração, representação de caracteres, áudio e imagem, álgebra booleana, circuitos lógicos, representação e aritmética de números inteiros e reais); Codificação, envio, transmissão e recepção de dados digitais em redes de computadores.',
        difficultyLevel :  '3/5',
        exams : 'Provas, trabalhos',
        teachers : 'Silvana, Quilula, Ageu', 
        advice : 'Pode ser difícil se for a sua primeira vez vendo este conteúdo, recomenda-se rever as aulas e pesquisar conteúdo no youtube.'
    }},
    { subject: {
        name: 'Números Inteiros Criptografia',
        id : 4,
        preRequisites : [],
        credits : 4,
        content : 'Divisão de inteiros e algoritmo euclidiano. Primos e o teorema da fatoração única. Indução e recursão. Aritmética modular e teorema de Fermat. Testes de primalidade. Criptografia RSA.', 
        difficultyLevel :  '5/5',
        exams : 'Provas, listas',
        teachers : 'Hugo Nobrega', 
        advice : 'Matéria mais complicada do primeiro período, estuda y estuda, nunca deixe de perguntar e de refazer questão, se for o Hugo dando a matéria conte a compaixão dele.'
    }},
    { subject: {
        name: 'Projeto de Carreira',
        id : 5,
        preRequisites : [],
        credits : 4,
        content : 'Identidade Profissional: Relações entre formação e carreira profissional; Perfis profissionais na área de computação e identidade profissional; Plano de carreira. Comunicação profissional: comunicação e contexto-leitura, compreensão e escrita de textos técnicos/acadêmicos; Autorregulação da Aprendizagem: Projetos de aprendizagem; Aprendizagem universitária; Gestão de tempo. Cidadania e dimensões do trabalho: o trabalho e a sociedade; Ética, sociedade e trabalho; Legislação-aspectos individuais.',
        difficultyLevel :  '1/5',
        exams : 'Trabalhos, apresentações',
        teachers : 'Eldanae, Marilu ', 
        advice : 'Matéria mais tranquila do primeiro período, basicamente fazer todos os trabalhos e treinar apresentações que você consegue sair com uma nota alta.'
    }},
    { subject: {
        name: 'Introd Pensamento Dedutivo',
        id : 6,
        preRequisites : [],
        credits : 4,
        content : 'Conjuntos e suas operações; conceitos básicos de lógica; definição, teorema e demonstração; medidas de comprimento e área; teorema de Pitágoras e áreas; congruência e semelhança de triângulos; aplicações de geometria plana; irracionalidade de √2 e números reais; coordenadas no plano; função, domínio e imagem; circunferência; trigonometria; funções linear e quadrática; gráficos de funções; funções polinomiais;raízes e divisão de polinômios; exponencial e logaritmo.',
        difficultyLevel :  '4/5',
        exams : 'Provas, listas',
        teachers : 'Collier, Juliana Valério ', 
        advice : 'Basicamente pré-cálculo, essa e cripto se complementam, estude bastante.'
    }},
    { subject: {
        name: 'Programação de Computadores II',
        id : 7,
        preRequisites : ['1'],
        credits : 4,
        content : 'Pesquisa sequencial e pesquisa binária; Ordenação por inserção e por seleção; Ponteiros e alocação dinâmica de memória; Estruturas de dados lineares: listas, pilhas e filas; Persistência de dados com arquivos; Noções de complexidade de algoritmos.',
        difficultyLevel :  '3/5',
        exams : 'Provas, trabalhos',
        teachers : 'Giseli, Rafaela', 
        advice : 'Continuação de Prog I, mesma coisa.'
    }},
    { subject: {
        name: 'Organização de Dados I',
        id : 8,
        preRequisites : [],
        credits : 2,
        content : 'Tipos de dados: dado bruto, dado agregado, dado primário, dado secundário, estruturado, semi e não estruturado, etc.; Ciclo de vida do dado: geração, coleta, tratamento, exploração e visualização; Valor do dado: interoperabilidade e reuso; Dado e metadado; Conceito de Transparência e Privacidade, Legislação associada; Engenharia e Ciência de Dados no apoio a gestão de dados nas organizações.',
        difficultyLevel :  '1/5',
        exams : 'Apresentações, trabalhos',
        teachers : 'Jonice, Vivacqua', 
        advice : 'Outra matéria pra você ficar tranquilo.'
    }},
    { subject: {
        name: 'Projeto Prático',
        id : 9,
        preRequisites : ['1', '2', '3'],
        credits : 2,
        content : 'Conceitos básicos para o desenvolvimento de um projeto de software aplicado.',
        difficultyLevel :  '3/5',
        exams : 'Trabalhos',
        teachers : 'Gabriel', 
        advice : 'Antigo CL, estude pela internet.'
    }},
    { subject: {
        name: 'Matemática Discreta',
        id : 10,
        preRequisites : ['4'],
        credits : 4,
        content : 'Contagem: Revisão sobre permutações, combinações e arranjos. Princípio de inclusão e exclusão. Números binomiais. Triângulo de Pascal. Números de Fibonacci e recorrências lineares de segunda ordem. Grafos: definição; grau de um vértice; caminhos, ciclos e conectividade; caminhos de Euler e ciclos hamiltonianos; árvores; contagem de árvores; grafos bipartidos e aplicações; grafos planares e a fórmula de Euler; coloração de mapas e grafos; teorema das cinco cores.',
        difficultyLevel :  '5/5',
        exams : 'Provas',
        teachers : 'Mitre, Claudson, Gusmão', 
        advice : 'Provavelmente você já viu algum meme sobre discrete maths. Essa matéria é o porque'
    }},
    { subject: {
        name: 'Habilidades Sociais p Trabalho',
        id : 11,
        preRequisites : ['5'],
        credits : 2,
        content : 'Relações e contexto profissional: Psicologia das organizações e relações profissionais. Liderança, delegação e colaboração; Comunicação profissional; Relações sociais e vida virtual. Comunicação profissional: Mídias e Comunicação, Comunicação inclusiva,Técnicas de negociação, entrevista e condução de reuniões. Cidadania e dimensões do trabalho: Ética profissional, Inclusão no mundo profissional, Legislação e aspectos coletivos (sindicatos, regulamentação da profissão, comitê de ética).',
        difficultyLevel :  '1/5',
        exams : 'Apresentações, trabalhos',
        teachers : 'Vivacqua', 
        advice : 'Ótima matéria!'
    }},
    { subject: {
        name: 'Cálculo Infinitesimal I',
        id : 12,
        preRequisites : [],
        credits : 6,
        content : 'Funções de uma variável real. Limites e derivadas. Cálculo de derivadas e aplicações. Teorema do valor médio. Integral definida. Teorema fundamental do cálculo. Cálculo de integrais e aplicações.',
        difficultyLevel :  '5/5',
        exams : 'Provas',
        teachers : 'Vários', 
        advice : 'Inferno 1.0. Estuda até dizer chega. Se passar de primeira, será um dos poucos.'
    }},
    { subject: {
        name: 'Álgebra Linear Algorítmica',
        id : 13,
        preRequisites : [],
        credits : 5,
        content : 'Vetores no plano, base e combinação linear. Transformações lineares e matrizes no plano. Autovalores e autovetores para operadores do plano. Diagonalização e mudança de variáveis em dimensão dois. Sistemas lineares e eliminação gaussiana. Rn e seus subespaços. Interseção, soma e complemento de subespaços. Dependência e independência linear. Base e coordenadas. Transformações lineares e matrizes. Mudança de base. Autovalores e autovetores e diagonalização de operadores.',
        difficultyLevel :  '5/5',
        exams : 'Provas, trabalhos',
        teachers : 'Paixão, Juliana, Marcello', 
        advice : 'Estude e faça exercício, repetition is key.'
    }},
    { subject: {
        name: 'Estrutura dos Dados',
        id : 14,
        preRequisites : ['7'],
        credits : 4,
        content : 'Complexidade de algoritmos. Listas lineares em alocação sequencial e dinâmica. Árvores, Árvores Binárias de Busca e Árvores balanceadas, heap. Tabelas de dispersão (hash tables). Conjuntos, coleção de conjuntos disjuntos. Listas de Prioridades. Algoritmos de ordenação: Radix sort, quick e heap sort.',
        difficultyLevel :  '3/5',
        exams : 'Provas, trabalhos',
        teachers : 'Claudson', 
        advice : 'Essencial, vale a pena ir bem nessa daqui, conta legal pra currículo.'
    }},
    { subject: {
        name: 'Introd à Modelagem de Sistemas',
        id : 15,
        preRequisites : ['2'],
        credits : 4,
        content : 'Introdução à modelagem de sistemas (por que e o que modelar de sistemas computacionais); Modelagem de Sistemas usando notação atual (ex: UML): Caso Uso; Diagramas de Atividade; Diagrama de Classes (conceitual); Modelagem de Dados.',
        difficultyLevel :  '2/5',
        exams : 'Trabalhos',
        teachers : 'Rafael, França, Eldanae', 
        advice : 'Se for com a França aproveite, ótima professora. Rafael e Eldanae são bem rígidos em relação a presença.'
    }},
    { subject: {
        name: 'Introd à Computação Numérica',
        id : 16,
        preRequisites : ['1', '3'],
        credits : 2,
        content : 'Noções sobre erros e representação de ponto flutuante. Número de condicionamento e sensibilidade dos métodos numéricos. Diferenciação numérica e Polinômio de Taylor. Cálculo de zeros de funções. Interpolação polinomial: formas de Lagrange e de Newton. Integração numérica. Métodos numéricos para equações diferenciais ordinárias.',
        difficultyLevel :  '3/5',
        exams : 'Provas, trabalhos',
        teachers : 'Vigo', 
        advice : 'Antigo Cálculo Numérico, é bom ter aprendido os outros cálculos.'
    }},
    { subject: {
        name: 'Programação Orientada a Objeto',
        id : 17,
        preRequisites : ['7'],
        credits : 4,
        content : 'Classes e objetos; Atributos e métodos; Encapsulamento; Herança e polimorfismo; Agregação e composição; Métodos abstratos e classes abstratas; Interfaces; Tipos genéricos; Tipos enumeráveis; Padrões de projeto: singleton, factory, observer (orientação a eventos); Testes unitários; Escrita e depuração de programas usando IDEs modernas; Listas, Mapas, Conjuntos; Tratamento de exceções.',
        difficultyLevel :  '3/5',
        exams : 'Provas, trabalhos',
        teachers : 'Mitre', 
        advice : 'Outra matéria essencial, estude bastante, a média costuma ser 5 com o Mitre.'
    }},
    { subject: {
        name: 'Cálculo Integ e Diferencial II',
        id : 18,
        preRequisites : ['12'],
        credits : 4,
        content : 'Curvas no plano e no espaço, velocidade e aceleração. Funções de duas e mais variáveis, derivadas direcionais. Derivadas parciais e derivada como aproximação linear. Funções implícitas, multiplicadores de lagrange. Hessiana. Equações diferenciais ordinárias de primeira ordem e equações diferenciais ordinárias de segunda ordem com coeficientes constantes.',
        difficultyLevel :  '5/5',
        exams : 'Provas',
        teachers : 'Vários', 
        advice : 'Inferno 2.0. Escolha um professor bom para assistir as aulas. Talvez o Responde Aí te ajude. Maioria das pessoas já fez mais de uma vez'
    }},
    { subject: {
        name: 'Arquitet Comput e Sist Operac',
        id : 19,
        preRequisites : ['3', '7'],
        credits : 4,
        content : 'Organização interna e arquiteturas de computadores. Conjunto de instruções. Modos de endereçamento. Linguagem de máquina. Interrupções e exceções. Barramentos, comunicações, interfaces, periféricos. Gerência de operações de entrada/saída. Processadores superescalares e superpipeline e arquiteturas multiprocessadores. Organização da memória, coerência e consistência de cache, memória virtual. Gerência de tarefas e de memória. Sistemas de armazenamento e de arquivos.',
        difficultyLevel :  '4/5',
        exams : 'Provas, trabalhos',
        teachers : 'Gabriel, Valéria, Rafaela', 
        advice : 'Muita matéria para pouco tempo. A prova da Rafaela é bem condizente, preste atenção na revisão dela.'
    }},
    { subject: {
        name: 'Comput Científ e Análise Dados',
        id : 20,
        preRequisites : ['13', '16'],
        credits : 4,
        content : 'Sistemas lineares: Modelagem de sistemas lineares, Métodos diretos: Fatoração LU e QR., Métodos iterativos: Gauss-Jacobi; Gauss-Seidel. Ajuste de curvas: Modelagem; Método dos Mínimos quadrados; Curvas Spline. SVD e autovalores: Modelagem: Sistema lineares dinâmicos; Métodos iterativos: Método da potência; Algoritmo QR.; Aplicações: Redução de dimensão; Pseudoinversa. Sistemas não lineares: Modelagem de sistemas não lineares; Método de Newton; Método do gradiente descendente.',
        difficultyLevel :  '4/5',
        exams : 'Provas, trabalhos',
        teachers : 'Paixão', 
        advice : 'Listas, trabalhos e provas bem longas estilo João Paixão.'
    }},
    { subject: {
        name: 'Tecnologia e Sociedade',
        id : 21,
        preRequisites : ['11'],
        credits : 4,
        content : 'Idade média: surgimento das primeiras universidades. Idade moderna: a característica universal de Leibniz, redes sociais acadêmicas no século XVII, Euler e a teoria de grafos. Revolução industrial: Boole, de Morgan e a lógica simbólica, Babbage, Ada Lovelace e a máquina analítica, algoritmos eficientes e computação humana. Século XX: Turing e o computador universal, von Neumann e os primeiros computadores eletrônicos, Julia Robinson e a impossibilidade da solução de equações diofantinas. Século XXI: internet e outros temas atuais.',
        difficultyLevel :  '1/5',
        exams : 'Trabalhos, Apresentações',
        teachers : 'Jonice, Marilu', 
        advice : 'Se for a Jonice comemore. Com a Marilu, relatos dizem que é bem trabalhoso, mas nada muito complicado.'
    }},
    { subject: {
        name: 'Banco de Dados I',
        id : 22,
        preRequisites : ['14'],
        credits : 4,
        content : 'Introdução a Sistemas de Banco de Dados; Projeto de Banco de Dados; Modelo de Dados Relacional; Consultas em Dados Relacionais; Recursos Avançados em SQL.',
        difficultyLevel :  '3/5',
        exams : 'Provas, trabalhos, apresentações',
        teachers : 'Giseli, Vivian', 
        advice : 'Se garanta na P1. Álgebra relacional is no joke.'
    }},
    { subject: {
        name: 'Estatística e Probabilidade',
        id : 23,
        preRequisites : ['18'],
        credits : 4,
        content : 'Noções básicas de Estatística e Probabilidade. Análise exploratória. Variáveis aleatórias e Distribuições de Probabilidades. Distribuições conjuntas marginais e condicionais. Valores esperados. Teoremas limites. Teorema central do limite. Distribuições amostrais. Estimação de parâmetros. Testes de Hipóteses.',
        difficultyLevel :  '3/5',
        exams : 'Provas, trabalhos',
        teachers : 'Hugo Tremonte, Zanini', 
        advice : 'Matéria essencial pra AD. Estude bastante, ambos os professores que atualmente dão são tranquilos. Caso tenha muita dificuldade, o Responde Aí é uma das melhores fontes de estudo, basicamente segue o formato do conteúdo dado em sala.'
    }},
    { subject: {
        name: 'Linguagens Formais',
        id : 24,
        preRequisites : ['7', '10'],
        credits : 4,
        content : 'Hierarquia de Chomsky. Linguagens e gramáticas (regulares, livres de contexto, sensíveis ao contexto). Máquinas de estados finitos (modelos não determinísticos, expressões regulares, minimização). Autômato de pilha. Algoritmos e ferramentas de análise léxica e sintática (LL(k) e LR(k)).',
        difficultyLevel :  '4/5',
        exams : 'Provas, trabalhos',
        teachers : 'Mitre, Anamaria, Hugo Musso', 
        advice : 'Matéria abstrata, pré-lógica. Estude e reze para não ser o Mitre. Apostila do Menasché é uma boa.'
    }},
    { subject: {
        name: 'Modelagem e Aval de Desempenho',
        id : 25,
        preRequisites : ['13', '23'],
        credits : 4,
        content : 'Introdução às técnicas de aferição e modelagem analítica. Técnicas para a construção de simuladores e análise de resultados com uso de intervalos de confiança. Uso de cadeias de Markov de tempo discreto e de tempo contínuo para a modelagem e resolução de diferentes problemas envolvendo a análise em equilíbrio e em transiente. Aplicação da teoria de filas M/G/1 e análise de suas variações. Filas com prioridade e aplicações práticas.',
        difficultyLevel :  '5/5',
        exams : 'Provas, trabalhos, listas, apresentações',
        teachers : 'Sadoc', 
        advice : 'Provavelmente a matéria mais díficil do curso inteiro. Conteúdo complicado, listas longas, provas maiores ainda. Faça todos os exercícios, pergunte em sala, demonstre interesse. Ela foi o fim de muitos alunos do curso.'
    }},
    { subject: {
        name: 'Model Matemát e Computacional',
        id : 26,
        preRequisites : ['13', '18'],
        credits : 4,
        content : 'Etapas do processo de modelagem. Modelos científicos e definição de modelo matemático. Classificação dos modelos de interesse. Apresentação de exemplos dos vários tipos de modelos. Modelagem de problemas de diferentes áreas do conhecimento, como física, biologia, etc., baseados em sistemas de equações de diferenças e diferenciais, otimização, grafos e cadeias de Markov. Outros tópicos de interesse a critério do professor.',
        difficultyLevel :  '3/5',
        exams : 'Trabalhos, listas',
        teachers : 'Marcello, Amaury', 
        advice : 'Se for o Marcello, aproveite. Se for o Amaury, corra.'
    }},
    { subject: {
        name: 'Computadores e Programação',
        id : 27,
        preRequisites : ['19'],
        credits : 4,
        content : 'Tradução de linguagem de alto nível para linguagem de montagem; Compilação com otimização e análise de desempenho; Comparativo entre as arquiteturas de 32 e 64 bits; Comunicação entre processos, chamadas de sistemas, tratadores de eventos; Ligação de programas e criação de bibliotecas estáticas e compartilhadas; Otimização de desempenho de programas frente a novas arquiteturas de processadores e limitações dos compiladores.',
        difficultyLevel :  '4/5',
        exams : 'Provas, trabalhos',
        teachers : 'Valéria', 
        advice : 'Outra matéria de arquitetura, bem baixo nível. Estude e tire bastante dúvida, traduzir coisas de assembly nunca são fáceis.'
    }},
    { subject: {
        name: 'Algoritmos e Grafos',
        id : 28,
        preRequisites : ['10', '14'],
        credits : 4,
        content : 'Representação de Grafos; Ordenação Topológica; Buscas em grafos e Digrafos (largura e profundidade); Técnicas de Desenvolvimento de Algoritmos; Decomposição; Recursão; Algoritmo Guloso; Programação Dinâmica; Aplicação das Técnicas Usadas; Fluxo Máximo.',
        difficultyLevel :  '4/5',
        exams : 'Provas',
        teachers : 'Gusmão', 
        advice : 'É o Gusmão né, aproveite.'
    }},
    { subject: {
        name: 'Programação Concorrente',
        id : 29,
        preRequisites : ['17', '27'],
        credits : 4,
        content : 'Técnicas de programação concorrente: multiprocessos, multithreading. Comunicação via variáveis compartilhadas e troca de mensagens. Sincronização por exclusão mútua e condicional e métodos de trava: locks, semáforos, variáveis de condição. Problemas clássicos da concorrência. Deadlock, starvation, thread safety. Programação assíncrona: futuros, promessas, async/await. Modelagem, teste e avaliação de programas concorrentes. Ambientes de programação concorrente.',
        difficultyLevel :  '4/5',
        exams : 'Provas, trabalhos',
        teachers : 'Silvana', 
        advice : 'Matéria relativamente complicada, porém a didática da Silvana é excelente. Contudo, a mão dela é bem pesada então estude bastante.'
    }},
    { subject: {
        name: 'Redes de Computadores I',
        id : 30,
        preRequisites : ['1', '23'],
        credits : 4,
        content : 'Motivação e apresentação geral do estudo sobre redes de computadores; Arquitetura de redes; Princípios de comunicação e nível físico; Tecnologias de acesso; Congestionamento em redes; A Internet e seus protocolos de aplicação, de transporte, de roteamento, e de enlace; Acesso múltiplo a meio de transmissão; Tecnologia Ethernet e suas variações; MPLS (Multiprotocol Label Switching) e engenharia de tráfego; Comunicação sem fio e mobilidade IP (Internet Protocol).',
        difficultyLevel :  '4/5',
        exams : 'Provas, trabalhos, listas, apresentações',
        teachers : 'Sadoc, Carol', 
        advice : 'Se for com o Sadoc é uma matéria 5/5. Muito conteúdista e densa, estudar nunca vai ser o suficiente. Caso a Carol esteja lecionando aproveite para passar.'
    }},
    { subject: {
        name: 'Introd Aprendizado de Máquina',
        id : 31,
        preRequisites : ['20', '23'],
        credits : 4,
        content : 'Contextualizando o aprendizado de máquina (história e paradigmas); Questões éticas; Tipos de aprendizado de máquina: supervisionado, não supervisionado, por reforço; Métricas de avaliação; Tipos de problemas; Métodos de aprendizado: classificação (árvore de decisão, regressão linear, regressão logística, classificador Bayesiano, redes neurais, SVM), agrupamento (K-means, classificação hierárquico), associação (algoritmos a priori); Aprendizado por reforço; Programação em lógica indutiva.',
        difficultyLevel :  '4/5',
        exams : 'Provas, trabalhos, listas',
        teachers : 'JC', 
        advice : 'Matéria densa, mas trabalhos relativamente tranquilos, cuidado com a prova'
    }},
    { subject: {
        name: 'Otimização',
        id : 32,
        preRequisites : ['13', '16'],
        credits : 4,
        content : 'Modelagem e Caracterização dos Problemas. Programação Linear. Programação Linear Inteira. Programação Não Linear Irrestrita. Aplicações.',
        difficultyLevel :  '4/5',
        exams : 'Provas, trabalhos, listas, apresentações',
        teachers : 'Maria Helena, Luziane', 
        advice : 'Matemática densa, faça muitos exercícios, a Maria Helena é bem compreensível.'
    }},
    { subject: {
        name: 'Lógica e Computabilidade',
        id : 33,
        preRequisites : ['24'],
        credits : 4,
        content : 'Linguagens e sintaxe da Lógica de Primeira Ordem (LPO). Formalização e modelagem de problemas usando LPO. Semântica da LPO. Sistemas de prova para a LPO. Noções da equivalência entre consequência semântica e sintática. Noções de provadores automáticos. O Problema da Decisão de Hilbert-Ackermann. Máquina de Turing. Programação em Máquinas de Turing. Máquina de Turing universal. Problema da Parada. Reduções entre problemas; problemas indecidíveis. Noções da equivalência entre Máquinas de Turing e outros modelos de computação.',
        difficultyLevel :  '4/5',
        exams : 'Provas, listas',
        teachers : 'JC, Hugo Nobrega', 
        advice : 'Matéria muito densa e abstrata, mesmo se você estudar e achar que está entendendo, na verdade não está. Sempre double-check com o prof, conte com a compaixão do Hugo.'
    }},
    { subject: {
        name: 'Metodologia da Pesquisa',
        id : 34,
        preRequisites : ['21'],
        credits : 4,
        content : 'Concepções do conhecimento e da pesquisa acadêmica. Tipos de pesquisa. Processo de desenvolvimento da pesquisa. Estruturação, redação e formatação de projeto de pesquisa. Relevância e contextualização da pesquisa. Fundamentação e contextualização da pesquisa. Estratégias de embasamento. Levantamento de fontes e referências. Ética na redação científica e legitimidade do saber. Métodos e estratégias de pesquisa. Coleta de dados. Técnicas para análise de dados. Planejamento e cronograma.',
        difficultyLevel :  '2/5',
        exams : 'Apresentações, trabalhos',
        teachers : 'Carla', 
        advice : 'Matéria tranquila, talvez tenha uma quantidade de trabalho um pouco desproporcional, por isso é recomendável puxar com algumas eletivas.'
    }},
    { subject: {
        name: 'Segurança da Informação',
        id : 35,
        preRequisites : ['27', '30'],
        credits : 4,
        content : 'Fundamentos e princípios de segurança em sistemas computacionais; Leis, normas, políticas e padrões de segurança da informação; Elementos do processo de segurança da informação; Segurança em redes e em infraestrutura; Tipos de ataque; Ferramentas e políticas de segurança em redes; Segurança na Web; Segurança de software; Técnicas básicas e modernas de encriptação; Assinatura e certificado digital; Segurança de dados e criptografia; Segurança da informação e sociedade.',
        difficultyLevel :  '3/5',
        exams : 'Apresentações, prova',
        teachers : 'Evandro', 
        advice : 'Pouco se sabe sobre essa matéria, porém parece ser tranquila.'
    }},
];
