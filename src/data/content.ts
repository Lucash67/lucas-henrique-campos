export const site = {
  name: 'Lucas Henrique Campos',
  age: 19,
  city: 'Fortaleza',
  state: 'Ceará',
  email: 'lucashcampos67@gmail.com',
  phoneDisplay: '+55 85 99650-583',
  whatsapp:
    'https://wa.me/558599650583?text=' +
    encodeURIComponent('E aí Lucas! Vi seu portfólio e gostaria de conversar.'),
  github: 'https://github.com/Lucash67',
}

/**
 * Three vocabularies for the same person — the original take on the reference's
 * interactive identity block. Same four questions, answered from three angles.
 */
export const lenses = [
  {
    id: 'produto',
    label: 'produto',
    lead: 'Antes da tela, o gargalo.',
    rows: [
      ['O que eu faço', 'Desenho o fluxo antes do componente. Interface é a última decisão, não a primeira.'],
      ['Onde eu aprendo', 'Publicando. Landing no ar ensina mais rápido que protótipo em pasta.'],
      ['O que me move', 'Recorte. Escolher o que fica de fora é a parte difícil e a que define o produto.'],
      ['Para onde vai', 'Produtos próprios que resolvam algo específico muito bem.'],
    ],
  },
  {
    id: 'negócio',
    label: 'negócio',
    lead: 'Interface que não vende é enfeite.',
    rows: [
      ['O que eu faço', 'Ligo aquisição e operação: tráfego, site, follow-up, venda e o que vem depois.'],
      ['Onde eu aprendo', 'UNIFOR em negócios, e o e-commerce da Acal como campo de prova.'],
      ['O que me move', 'Entender por que a conta fecha. Sem isso, produto é hobby.'],
      ['Para onde vai', 'Negócio próprio, construído em cima do que eu já opero.'],
    ],
  },
  {
    id: 'código',
    label: 'código',
    lead: 'Ferramenta, não identidade.',
    rows: [
      ['O que eu faço', 'React e TypeScript no front, Node e Postgres quando o dado precisa morar em algum lugar.'],
      ['Onde eu aprendo', 'Infinity School, depois quebrando coisa em produção.'],
      ['O que me move', 'Escrever o menos possível para o problema sumir.'],
      ['Para onde vai', 'Stack é meio. Continuo trocando conforme o problema pede.'],
    ],
  },
]

export const principles = [
  ['Problema antes de repositório', 'Começo pelo que trava a venda, a rotina ou a decisão.'],
  ['Produto segura o código', 'Prefiro o estreito que resolve ao largo que ninguém abre duas vezes.'],
  ['Design é decisão', 'Hierarquia, silêncio e o próximo clique. Se não conduz, é decoração.'],
  ['A experiência começa antes da tela', 'Tráfego, mensagem, follow-up. A interface é um capítulo.'],
]

export type Project = {
  id: string
  index: string
  name: string
  category: string
  year: string
  description: string
  technologies: string[]
  demoUrl: string
  githubUrl?: string
  featured?: boolean
}

/** Shipped work — things another person can open right now. */
export const projects: Project[] = [
  {
    id: 'odontology-finance',
    index: '01',
    name: 'Odontology Finance',
    category: 'Financeiro',
    year: '2026',
    description:
      'Controle financeiro para consultório odontológico. Pacientes, parcelas, inadimplência e contas a pagar num fluxo de uso diário, não em relatório de fim de mês. A demo pública roda com dados fictícios.',
    technologies: ['React', 'TypeScript', 'Vite', 'Vercel'],
    demoUrl: 'https://odontology-finance.vercel.app',
    githubUrl: 'https://github.com/Lucash67/odontology-finance',
    featured: true,
  },
  {
    id: 'malu-nutri',
    index: '02',
    name: 'Malu Nutri',
    category: 'Presença digital',
    year: '2026',
    description:
      'Página de acompanhamento nutricional para uma profissional. Identidade, apresentação do serviço e um único próximo passo sempre visível — serviço contínuo se sustenta em confiança, não em cartão de visita.',
    technologies: ['React', 'JavaScript', 'Vercel'],
    demoUrl: 'https://malu-nutri.vercel.app',
    githubUrl: 'https://github.com/Lucash67/malu_nutri',
    featured: true,
  },
  {
    id: 'makani',
    index: '03',
    name: 'Makani Beach Residence',
    category: 'Imobiliário',
    year: '2026',
    description:
      'Landing de um empreendimento à beira-mar. Página longa e visual, com plantas, localização e um objetivo só: a próxima mensagem.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://lucash67.github.io/makani/',
    githubUrl: 'https://github.com/Lucash67/makani',
  },
  {
    id: 'mansao',
    index: '04',
    name: 'Mansão Guerreiro',
    category: 'Imobiliário',
    year: '2025',
    description:
      'Versão autoral de uma landing de alto padrão. O material original competia com o imóvel; refiz para que a página tivesse o mesmo silêncio do produto.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://lucash67.github.io/mansaoclaude/',
    githubUrl: 'https://github.com/Lucash67/mansaoclaude',
  },
  {
    id: 'lm-mall',
    index: '05',
    name: 'LM Office & Mall',
    category: 'Imobiliário',
    year: '2025',
    description:
      'Empreendimento comercial apresentado para dois públicos ao mesmo tempo — quem compra para usar e quem compra para investir.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://lucash67.github.io/lm-mall/',
    githubUrl: 'https://github.com/Lucash67/lm-mall',
  },
]

export const moreDemos = [
  { label: 'Gamboa do Morro', href: 'https://lucash67.github.io/gamboa/' },
  { label: 'Paradiso Icaraí', href: 'https://lucash67.github.io/paradisoicarai/' },
  { label: 'Residência Vittoria', href: 'https://lucash67.github.io/residenciavitoria/' },
  { label: 'Programa Indica a Seu', href: 'https://lucash67.github.io/programaindicaseu/' },
]

export type BuildingItem = {
  index: string
  name: string
  status: string
  access: string
  description: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

/** Own products. Status is literal — nothing is called beta that isn't. */
export const building: BuildingItem[] = [
  {
    index: '01',
    name: 'LH Hub',
    status: 'Em desenvolvimento',
    access: 'Demo pública',
    description:
      'O centro operacional que uso para tocar a minha própria operação: gestão, finanças, metas e acompanhamento num painel só. A intenção é abrir como produto quando estiver de pé — não está.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase'],
    demoUrl: 'https://lh-hub-delta.vercel.app',
    githubUrl: 'https://github.com/Lucash67/LH-HUB',
    featured: true,
  },
  {
    index: '02',
    name: 'Dieta & Treino',
    status: 'Em desenvolvimento',
    access: 'Demo pública',
    description:
      'Organização de dieta, treino e acompanhamento pessoal. Rotina costuma morar em três apps e um caderno; quero um lugar só para registrar e comparar ao longo do tempo.',
    technologies: ['React', 'TypeScript', 'Vite'],
    demoUrl: 'https://evolucaofisica-cursor.vercel.app',
    githubUrl: 'https://github.com/Lucash67/evolucaofisica-cursor',
  },
  {
    index: '03',
    name: 'App financeiro',
    status: 'Conceito',
    access: 'Sem demo',
    description:
      'Produto para organizar a vida financeira pessoal — visualizar, acompanhar e decidir. Ainda é conceito: o recorte não está fechado e não existe nada publicado.',
    technologies: ['A definir'],
  },
]

/** No invented dates — labels describe the stage, not a timeline I can't confirm. */
export const path = [
  {
    period: 'Atual',
    org: 'Terus',
    role: 'Tecnologia para varejo',
    text: 'Empresa de tecnologia com soluções SaaS para operação, gestão, dashboards e acompanhamento. Minha atuação passa por e-commerce, operação digital, produto e estratégias digitais.',
  },
  {
    period: 'Experiência',
    org: 'Acal',
    role: 'E-commerce e aquisição',
    text: 'Operação digital do e-commerce: site, tráfego pago, follow-ups, marketing e estratégias de venda. Aquisição na prática, não só interface.',
  },
  {
    period: 'Em curso',
    org: 'UNIFOR',
    role: 'Negócios — 3º semestre',
    text: 'A parte que explica por que o produto precisa fechar a conta antes de ficar bonito.',
  },
  {
    period: 'Formação',
    org: 'Infinity School',
    role: 'Programação, design e marketing digital',
    text: 'As três disciplinas no mesmo caderno — que é mais ou menos como eu continuo trabalhando.',
  },
]

export const toolkit = [
  {
    label: 'Meu foco',
    name: 'Produto & interface',
    items: 'React · TypeScript · Tailwind · Vite · UX/UI',
  },
  {
    label: 'Dados',
    name: 'Node.js',
    items: 'APIs REST · PostgreSQL · Supabase · FastAPI',
  },
  {
    label: 'Operação',
    name: 'Deploy & versionamento',
    items: 'Git · GitHub · Vercel · Docker · Automação',
  },
  {
    label: 'Negócio',
    name: 'Aquisição & análise',
    items: 'E-commerce · Tráfego pago · Dashboards · BI · IA aplicada',
  },
]
