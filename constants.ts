import { Battery, Zap, Clock, ShieldCheck, MapPin, Phone } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Guanda Baterias",
  phone: "14 3103-0303",
  whatsapp: "5514997411584",
  address: "Av. Nações Unidas, 38, Bauru - SP",
  whatsappLink: "https://api.whatsapp.com/send?phone=5514997411584",
};

export const NAV_LINKS = [
  { name: 'Início', href: '#hero' },
  // 'Produtos' is handled specially in the Navbar component
  { name: 'Quem Somos', href: '#about-us' },
  { name: 'Dicas', href: '#blog' }, // New Blog Link
  { name: 'Revendedor', href: '#reseller' },
  { name: 'Contato', href: '#footer' },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "automotiva",
    title: "Baterias Automotivas",
    description: "A bateria é a principal fonte de energia do veículo. Contamos com uma gama completa de produtos e as melhores marcas do mercado, aliando qualidade e custo-benefício.",
    heroImage: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-automotivas.png",
    brands: [
      { name: "Heliar AGM", img: "https://picsum.photos/200/200?random=10" },
      { name: "Heliar EFB", img: "https://picsum.photos/200/200?random=11" },
      { name: "Heliar Convencional", img: "https://picsum.photos/200/200?random=12" },
      { name: "Cral Top Line", img: "https://picsum.photos/200/200?random=13" },
      { name: "Cral Standard", img: "https://picsum.photos/200/200?random=14" },
      { name: "Cral Prime", img: "https://picsum.photos/200/200?random=15" },
      { name: "Lubax", img: "https://picsum.photos/200/200?random=16" },
      { name: "América", img: "https://picsum.photos/200/200?random=17" },
      { name: "Strada", img: "https://picsum.photos/200/200?random=18" },
    ]
  },
  {
    id: "moto",
    title: "Baterias de Moto",
    description: "A bateria é essencial para o bom funcionamento do veículo. Grandes marcas e produtos compõem o nosso portfólio de baterias para motocicletas, com a mais avançada tecnologia e desempenho.",
    heroImage: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-de-moto.png",
    brands: [
      { name: "Heliar Moto", img: "https://picsum.photos/200/200?random=20" },
      { name: "Moura Moto", img: "https://picsum.photos/200/200?random=21" },
      { name: "Cral Moto", img: "https://picsum.photos/200/200?random=22" },
    ]
  },
  {
    id: "performance",
    title: "Alta Performance",
    description: "Baterias para aplicações especiais. As baterias de Alta Performance são desenvolvidas para uso em som automotivo, som para competição, tuning e outros acessórios.",
    heroImage: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-alta-performace-e1567530716748.png",
    brands: [
      { name: "Optima RedTop", img: "https://picsum.photos/200/200?random=30" },
      { name: "Optima YellowTop", img: "https://picsum.photos/200/200?random=31" },
    ]
  },
  {
    id: "estacionaria",
    title: "Baterias Estacionárias",
    description: "As baterias estacionárias têm como característica a descarga profunda de energia e podem ser utilizadas em UPS/Nobreaks, PABS, telecomunicações, sinalização, entre outros.",
    heroImage: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-estacionarias.png",
    brands: [
      { name: "Freedom", img: "https://picsum.photos/200/200?random=40" },
      { name: "Moura Clean", img: "https://picsum.photos/200/200?random=41" },
    ]
  }
];

export const PRODUCTS = [
  {
    id: "prod-1",
    name: "Heliar AGM Start-Stop",
    category: "Automotiva",
    tech: "AGM",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-automotivas.png",
    features: ["Tecnologia AGM", "Veículos Start-Stop", "Maior durabilidade"]
  },
  {
    id: "prod-2",
    name: "Moura Moto",
    category: "Moto",
    tech: "VRLA",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-de-moto.png",
    features: ["Pronta para uso", "Maior corrente de partida", "Livre de manutenção"]
  },
  {
    id: "prod-3",
    name: "Bateria Caminhão 150Ah",
    category: "Pesada",
    tech: "Chumbo-Ácido",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-estacionarias.png",
    features: ["Linha Pesada", "Alta Resistência", "Placas Reforçadas"]
  },
  {
    id: "prod-4",
    name: "Impact Som e Tuning",
    category: "Som",
    tech: "Alta Performance",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-alta-performace-e1567530716748.png",
    features: ["Pico de Potência", "Ciclagem Profunda", "Áudio de Qualidade"]
  },
  {
    id: "prod-5",
    name: "Heliar EFB",
    category: "Automotiva",
    tech: "EFB",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-automotivas.png",
    features: ["Alta durabilidade", "Start-Stop EFB", "Garantia 24 Meses"]
  },
  {
    id: "prod-6",
    name: "Cral Moto",
    category: "Moto",
    tech: "Convencional",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2019/09/baterias-de-moto.png",
    features: ["Custo-benefício", "Robustez", "Garantia Nacional"]
  }
];

export const FEATURES = [
  {
    icon: Clock,
    title: "Entrega Flash",
    description: "Em Bauru, chegamos em minutos. Não perca seu dia.",
    accent: "text-yellow-400"
  },
  {
    icon: Zap,
    title: "Instalação Grátis",
    description: "Técnicos especializados realizam a troca no local.",
    accent: "text-blue-400"
  },
  {
    icon: ShieldCheck,
    title: "Garantia Total",
    description: "30 anos de mercado garantem a procedência original.",
    accent: "text-green-400"
  },
  {
    icon: Battery,
    title: "Variedade Tech",
    description: "Start-stop, AGM, EFB para veículos modernos.",
    accent: "text-purple-400"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Como agir em caso superaquecimento do motor?",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2020/08/superaquecimento-motor.jpg",
    excerpt: "Um dos piores problemas mecânicos que pode acontecer com o seu carro é o superaquecimento do motor. Saiba como agir.",
    content: `
      Um dos piores problemas mecânicos que pode acontecer com o seu carro é o superaquecimento do motor. Se você tem dúvidas de como agir ou checar se o seu veículo apresenta esse problema, continue lendo esse artigo.

      **Como ocorre o superaquecimento do motor?**
      Se você ou seu mecânico identificou um desgaste na correia, então as chances de ter problemas com o motor esquentando rápido aumentam muito. Outro ponto importante é sempre checar o funcionamento da ventoinha, pois ela é essencial para forçar a ventilação do ar no radiador e reduzir a temperatura da água que refrigera o motor.

      Observe também o estado da mangueira e do radiador do carro e utilize o aditivo para completar a água. Como o líquido é colorido, fica mais fácil de identificar onde está o vazamento e você poderá resolver o problema.

      A água do radiador tem como principal função impedir o superaquecimento do motor. Por isso, quando o nível está baixo, além do superaquecimento ainda pode ocorrer corrosão no sistema.

      O baixo nível de óleo no motor também é outro motivo que pode ocasionar o superaquecimento. Esse óleo, além de funcionar como lubrificante, também esfria o motor do veículo, pois evita que as partes móveis internas do motor não aqueçam por atrito. Assim, quanto menor o nível de óleo, maior a probabilidade de que você perceba o motor esquentando rápido.

      Outro ponto que precisa ser observado é se há falha no sistema de ignição, pois esse problema pode atrasar o tempo de disparo da vela e superaquecer o motor por conta da má queima do combustível.

      **O que fazer para evitar o superaquecimento?**
      Alguns cuidados básicos podem fazer a diferença e te ajudar a evitar esse problema, confira:

      *   **Faça uma revisão preventiva:** Verifique toda semana o nível da água do radiador, pois assim, você evita que ela abaixe por causas naturais e pode investigar caso haja um vazamento. Observe também os ruídos emitidos pelo carro e a temperatura.
      *   **Verifique a bomba d’água:** Se for preciso trocar a bomba d´água, observe se há algum ruído fora do normal.
      *   **Coloque a quantidade de aditivo recomendada:** Siga as instruções do manual do veículo.

      **Como identificar o superaquecimento do motor?**
      A regra principal é: nunca coloque a mão no motor superaquecido. Observe primeiramente o painel do carro, ele mostrará a temperatura correta. Se o termômetro estiver na faixa vermelha, pare o carro. Se notar um vapor subindo no capô do carro, pare imediatamente.

      **Cuidados com a bateria do seu veículo**
      Uma peça que também merece atenção do seu veículo para ajudar a evitar o superaquecimento do motor é a bateria. Com ela descarregada, você poderá ter problemas com o sistema elétrico e sensores como o de temperatura poderão não funcionar.
    `
  },
  {
    id: 2,
    title: "Como fazer checagem rápida no carro?",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2020/08/checagem-carro.jpg",
    excerpt: "Vai viajar ou sair de casa? Confira o checklist rápido para garantir a saúde do seu veículo.",
    content: `
      Você tem o costume de dar uma checada no seu veículo antes de sair de casa? Olhar a água, o óleo, o pneu? Na correria do dia a dia esses detalhes passam despercebidos, mas são muito importantes para manter a saúde do seu veículo em dia.

      Então, para te dar uma ajudinha de como fazer uma checagem rápida no carro em casa, separamos aqui alguns itens importantes:

      **Óleo**
      É importante verificar o nível do óleo sempre com o motor frio e o veículo parado em um lugar plano. Caso o nível esteja baixo, o melhor é não sair com o carro até comprar o lubrificante adequado.

      **Água**
      Sempre que verificar o nível do óleo, aproveite para verificar a água. Ponto de atenção: não verifique a água com o carro quente.

      **Mangueiras**
      Com a ajuda de uma lanterna verifique se há sinais de vazamento nos encaixes das mangueiras do sistema de arrefecimento.

      **Observe o chão**
      Desça um pouco o carro e veja se há manchas recentes de óleo ou do líquido colorido de arrefecimento no chão.

      **Atente aos pneus**
      Algumas raspadas em manobras de estacionamento desgastam as bordas das rodas e podem resultar em cortes superficiais.

      **Luzes**
      Acenda os faróis, pisca-alerta, as setas e veja se está tudo ok.
    `
  },
  {
    id: 3,
    title: "Durabilidade de uma bateria",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2020/08/durabilidade-bateria.jpg",
    excerpt: "Você sabe quanto tempo dura uma bateria e o que afeta sua vida útil? Descubra agora.",
    content: `
      Se o motor é o coração de um veículo, então podemos dizer que a bateria é o pulso para que esse coração funcione bem. Ela é uma peça importante para o que o carro ligue e trabalhe normalmente.

      **Quanto tempo dura a bateria de um carro?**
      Assim como demais equipamentos, a bateria tem um tempo de vida útil. Esse tempo pode variar de acordo com o tipo de uso e da marca de bateria. Mas segundo especialistas, as baterias duram em média de 2 a 4 anos.

      Esse tempo de vida útil pode cair pela metade se o dono do veículo não tiver um ponto de atenção e cuidados necessários. Alguns fatores que desgastam a bateria:

      *   **A temperatura:** No frio as baterias puxam mais energia. No calor, pode acontecer uma alteração interna da bateria.
      *   **Uso de multimídia e faróis:** Não deixar ligados com o veículo desligado.
      *   **Veículo parado:** Veículos parados por muito tempo podem descarregar totalmente a peça.

      **O que fazer para aumentar a vida útil da bateria?**
      *   Limpe os terminais da bateria (use bicarbonato de sódio com água).
      *   Dê uma carga na bateria se necessário (evite chupeta constante).
      *   Evite bateria recondicionada: Essa opção não é um bom negócio.
    `
  },
  {
    id: 4,
    title: "O que é Zinabre?",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2020/05/bx_shutterstock_1078231586.jpg",
    excerpt: "Aquela crosta verde na bateria pode ser perigosa. Entenda o que é o 'câncer do carro' e como remover.",
    content: `
      Pelo nome você pode até não estar reconhecendo, mas a palavra Zinabre não é sinal de coisa boa e está diretamente ligada à saúde do motor do seu automóvel.

      **O que é Zinabre?**
      Conhecido também como azinhavre, nada mais é do que a camada (crosta) de cor verde resultante da oxidação do cobre ou ligas que contêm cobre, como o latão. Muito comumente encontrado nos terminais das baterias dos automóveis.

      O Zinabre costuma espalhar-se por toda fiação do carro, e é conhecido entre eletricistas mais experientes como “câncer de carro”.

      **Como identificar?**
      *   Dificuldade de carregamento da bateria;
      *   Inutilização dos terminais;
      *   Falhas na partida;
      *   Superaquecimento dos cabos.

      **Como remover o Zinabre do seu automóvel**
      A remoção é simples: misture uma colher de sopa de bicarbonato de sódio em um copo de 200 ml de água. Com um pincel, aplique a solução somente em cima do terminal onde o zinabre está até produzir espuma verde. Limpe com muita água e seque.

      Para que o zinabre não retorne, aplique nos dois terminais da bateria um pouco de graxa ou vaselina.
    `
  },
  {
    id: 5,
    title: "O que é amperagem de bateria?",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2020/05/Cargar-bater%C3%ADa-coche.jpg",
    excerpt: "Entender a amperagem correta evita panes elétricas e garante o funcionamento do som e ar-condicionado.",
    content: `
      Pouquíssimas pessoas entendem para que servem a amperagem de bateria. Mas conhecer esse termo pode ajudar a aumentar a qualidade de vida e funcionamento do veículo.

      **O que é amperagem de bateria?**
      Amperagem de bateria nada mais é que o consumo de bateria em gasto/hora. Ou seja, quão forte a bateria consegue distribuir energia para todos os componentes do veículo.

      É certo afirmar também que, quanto mais dispositivos ou equipamentos eletrônicos o seu carro tiver, maior será o ampere da bateria necessário.

      **Qual a importância da amperagem de bateria?**
      A função da amperagem de bateria é medir se a bateria do seu carro possui energia suficiente para atender às demandas de todos os dispositivos ou equipamentos elétricos. Uma amperagem errada pode gerar problemas de funcionamento no motor do seu carro, som, faróis e muitos outros.

      **Por que é preciso escolher a bateria correta?**
      *   Evitar danificação de peças do veículo;
      *   Evitar vazamentos;
      *   Garantir cobertura da garantia;

      Portanto, se precisar realizar a troca de sua bateria, que seja feita a troca por uma peça equivalente.
    `
  },
  {
    id: 6,
    title: "Como fazer o descarte correto da bateria?",
    image: "https://www.guandabaterias.com.br/wp-content/uploads/2019/11/Hora-de-realizar-a-troca-da-bateria.jpg",
    excerpt: "Baterias contêm chumbo e ácido. Saiba como descartar sem agredir o meio ambiente e cumprir a lei.",
    content: `
      Não é segredo que a bateria de um automóvel é uma das peças fundamentais para o bom funcionamento do seu auto. Entretanto, é necessário que um cuidado especial seja tomado na manutenção da sua bateria e no descarte correto na hora de realizar a troca.

      **A legislação**
      A resolução CONAMA nº401 de 2008 estabelece que todo fabricante no Brasil é obrigado a receber as baterias comercializadas por ele que estejam energeticamente esgotadas.

      **Impactos de um descarte inadequado**
      Uma bateria é composta exclusivamente de chumbo e esse elemento químico não desaparece, o que significa a danificação do habitat natural dos animais e contaminação do solo e lençol freático.

      **Como e onde descartar sua bateria?**
      A Guanda Baterias leva muito a sério a proteção do meio ambiente e por esse motivo, realiza o recolhimento das baterias inservíveis, encaminhando-as para empresas recicladoras devidamente habilitadas.

      Para cada bateria nova que a Guanda Baterias coloca no mercado, uma esgotada é recolhida e encaminhada para reciclagem.
    `
  }
];