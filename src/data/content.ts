export type ProjectStatus = 'live' | 'building' | 'concept'

export type Project = {
  id: string
  title: string
  category: string
  description: string
  problem: string
  proposal: string
  technologies: string[]
  featured: boolean
  status: ProjectStatus
  demoUrl?: string
  githubUrl?: string
  year: string
  tone: string
}

export const site = {
  name: 'Lucas Henrique Campos',
  short: 'LHC',
  age: 19,
  city: 'Fortaleza',
  state: 'Ceará',
  country: 'Brasil',
  email: 'lucashcampos67@gmail.com',
  phoneDisplay: '+55 85 99650-583',
  whatsapp:
    'https://wa.me/558599650583?text=' +
    encodeURIComponent('E aí Lucas! Vi seu portfólio e gostaria de conversar.'),
  github: 'https://github.com/Lucash67',
  school: 'UNIFOR — Business / Negócios, 3º semestre',
  extraSchool: 'Infinity School — programação, design e marketing digital',
}

export const projects: Project[] = [
  {
    id: 'lh-hub',
    title: 'LH Hub',
    category: 'Produto próprio',
    description:
      'Centro operacional que estou construindo para a minha própria operação — com a intenção de, no tempo certo, virar produto para outras pessoas.',
    problem:
      'Operar no feeling não escala. Dados, rotina e decisão ficam espalhados.',
    proposal:
      'Um sistema de gestão completa para a operação de um negócio. Ainda em construção. Private beta.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind'],
    featured: true,
    status: 'building',
    demoUrl: 'https://lh-hub-delta.vercel.app',
    githubUrl: 'https://github.com/Lucash67/LH-HUB',
    year: 'Em curso',
    tone: 'from-[#2a2118] via-[#1a1612] to-[#0c0b0a]',
  },
  {
    id: 'odontology-finance',
    title: 'Odontology Finance',
    category: 'SaaS · Finanças',
    description:
      'Demo de um sistema financeiro para consultório odontológico — pacientes, parcelas e contas em um fluxo limpo.',
    problem:
      'Consultório cresce. O controle financeiro quase nunca acompanha no mesmo ritmo.',
    proposal:
      'Uma interface de operação financeira pensada para o dia a dia da clínica. Dados da demo são fictícios.',
    technologies: ['React', 'TypeScript', 'Vite', 'Vercel'],
    featured: true,
    status: 'live',
    demoUrl: 'https://odontology-finance.vercel.app',
    githubUrl: 'https://github.com/Lucash67/odontology-finance',
    year: '2026',
    tone: 'from-[#1c2422] via-[#121816] to-[#0c0b0a]',
  },
  {
    id: 'evolucao-fisica',
    title: 'Evolução Física',
    category: 'Produto · Saúde',
    description:
      'Aplicação para organizar dieta, treino e acompanhamento pessoal — um dos produtos que estou desenvolvendo.',
    problem:
      'Acompanhamento de rotina costuma viver em planilha, print e memória.',
    proposal:
      'Um produto digital para a pessoa ver o próprio progresso com mais clareza. Em evolução.',
    technologies: ['React', 'TypeScript', 'Vite', 'Vercel'],
    featured: false,
    status: 'building',
    demoUrl: 'https://evolucaofisica-cursor.vercel.app',
    githubUrl: 'https://github.com/Lucash67/evolucaofisica-cursor',
    year: 'Em curso',
    tone: 'from-[#1d2218] via-[#141610] to-[#0c0b0a]',
  },
  {
    id: 'malu-nutri',
    title: 'Malu Nutri',
    category: 'Produto · Nutrição',
    description:
      'Experiência digital para acompanhamento nutricional — da apresentação do serviço à organização da jornada.',
    problem:
      'Nutrição é contínua. A ferramenta precisa acompanhar a rotina, não só a consulta.',
    proposal:
      'Um produto digital focado em clareza e acompanhamento. Versão pública de demonstração.',
    technologies: ['React', 'JavaScript', 'Vercel'],
    featured: false,
    status: 'live',
    demoUrl: 'https://malu-nutri.vercel.app',
    githubUrl: 'https://github.com/Lucash67/malu_nutri',
    year: '2026',
    tone: 'from-[#241c1e] via-[#161214] to-[#0c0b0a]',
  },
  {
    id: 'real-estate-lps',
    title: 'Experiências imobiliárias',
    category: 'Landing pages',
    description:
      'Série de landing pages para empreendimentos e campanhas — da captação visual à conversa no WhatsApp.',
    problem:
      'Imóvel de alto valor precisa de uma página que segure atenção e conduza o próximo passo.',
    proposal:
      'Páginas públicas, independentes, pensadas para conversão. Uma seleção do trabalho recente.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    status: 'live',
    demoUrl: 'https://lucash67.github.io/makani/',
    githubUrl: 'https://github.com/Lucash67/makani',
    year: '2025–2026',
    tone: 'from-[#1a2030] via-[#12151c] to-[#0c0b0a]',
  },
  {
    id: 'mansao-custom',
    title: 'Mansão Guerreiro',
    category: 'Landing page',
    description:
      'Versão custom de uma landing de imóvel de alto padrão — hero, galeria, mapa e chamada para conversa.',
    problem:
      'A página precisa parecer o imóvel: espaço, silêncio, detalhe.',
    proposal:
      'Uma experiência editorial para um único produto. Formulário ainda é demonstração visual.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    status: 'live',
    demoUrl: 'https://lucash67.github.io/mansaoclaude/',
    githubUrl: 'https://github.com/Lucash67/mansaoclaude',
    year: '2025',
    tone: 'from-[#201c18] via-[#141210] to-[#0c0b0a]',
  },
]

export const moreDemos = [
  { label: 'LM Office & Mall', href: 'https://lucash67.github.io/lm-mall/' },
  { label: 'Gamboa do Morro', href: 'https://lucash67.github.io/gamboa/' },
  { label: 'Paradiso Icaraí', href: 'https://lucash67.github.io/paradisoicarai/' },
  { label: 'Residência Vittoria', href: 'https://lucash67.github.io/residenciavitoria/' },
  { label: 'Programa Indica a Seu', href: 'https://lucash67.github.io/programaindicaseu/' },
]

export const building = [
  {
    title: 'LH Hub',
    status: 'Private beta · em desenvolvimento',
    text: 'Sistema de gestão para a minha operação. Construção de longo prazo — não é produto pronto.',
  },
  {
    title: 'App de dieta e treino',
    status: 'Em desenvolvimento / conceito',
    text: 'Organização de dieta, treino e acompanhamento pessoal. Ainda definindo o recorte.',
  },
  {
    title: 'Aplicativo financeiro',
    status: 'Em desenvolvimento / conceito',
    text: 'Ajudar pessoas a organizar, visualizar e decidir melhor a própria situação financeira.',
  },
]

export const path = [
  {
    phase: 'Learning',
    title: 'Infinity School',
    text: 'Programação, design e marketing digital. O ponto em que ferramenta e comunicação começaram a se cruzar.',
  },
  {
    phase: 'Building',
    title: 'Primeiros projetos',
    text: 'Landings, sites, experimentos. Aprender fazendo — e mostrar o que já dava para entregar.',
  },
  {
    phase: 'Professional',
    title: 'KA Home Center',
    text: 'E-commerce, tráfego, follow-up, presença digital. O funil deixou de ser teoria.',
  },
  {
    phase: 'Professional',
    title: 'Ateros',
    text: 'Empresa de tecnologia para o varejo. SaaS, operação digital, produto e análise no mesmo ambiente.',
  },
  {
    phase: 'Products',
    title: 'Projetos próprios',
    text: 'LH Hub, finanças, saúde, experiências para clientes. O portfólio virou operação.',
  },
  {
    phase: 'Next',
    title: 'Negócio próprio',
    text: 'Continuar estudando, trabalhando e construindo produtos até isso ser a carreira — não um plano paralelo.',
  },
]

export const experience = [
  {
    org: 'Ateros',
    context: 'Atual',
    field: 'Tecnologia para varejo',
    text: 'Empresa de tecnologia com soluções SaaS para operação, gestão, dashboards e acompanhamento. Minha atuação passa por e-commerce, operação digital, produto e estratégias digitais.',
  },
  {
    org: 'KA Home Center',
    context: 'E-commerce',
    field: 'Aquisição e presença digital',
    text: 'Trabalho com o e-commerce da operação: site, tráfego pago, follow-ups, marketing e estratégias de venda. Experiência prática de aquisição, não só de interface.',
  },
]

export const stack = [
  { area: 'Interface', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Vite'] },
  { area: 'Produto', items: ['UX/UI', 'Landing pages', 'Dashboards', 'E-commerce'] },
  { area: 'Backend & dados', items: ['Node.js', 'APIs', 'PostgreSQL', 'Supabase', 'FastAPI'] },
  { area: 'Operação', items: ['Git', 'GitHub', 'Vercel', 'Docker', 'Automação'] },
  { area: 'Negócio', items: ['Marketing digital', 'Tráfego', 'BI', 'IA aplicada'] },
]

export const principles = [
  {
    n: '01',
    title: 'O problema tem nome antes do repositório',
    text: 'Não começo pelo componente. Começo pelo gargalo — o que trava a venda, a rotina ou a decisão.',
  },
  {
    n: '02',
    title: 'Produto segura o código',
    text: 'Tecnologia sem recorte vira vitrine. Prefiro uma experiência estreita que resolve a um sistema largo que ninguém usa.',
  },
  {
    n: '03',
    title: 'Design é decisão, não enfeite',
    text: 'Hierarquia, silêncio e o próximo clique. Se o visual não conduz, é decoração.',
  },
  {
    n: '04',
    title: 'A experiência começa antes da tela',
    text: 'Tráfego, mensagem, follow-up, operação. A interface é um capítulo — não o livro inteiro.',
  },
]
