import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Logo } from '@/components/Logo';
import { SpeakersImage } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import { PARA_QUEM_SIM, PARA_QUEM_NAO } from '@/lib/content';

const RICH_ATIVOS: Array<{
  letter: string; tag: string; title: string; chip: string;
  paras: string[]; midBold?: string; midText?: string;
  introBold?: boolean; intro?: string; bullets?: string[];
  oLines?: string[]; outroTexts?: string[]; outroBold?: string;
}> = [
  {
    letter: 'A', tag: 'Ajuste do modelo de negócio', title: 'Ajuste do Modelo de Negócio', chip: 'Margem',
    paras: [
      'Antes de atrair mais clientes, você precisa entender se sua empresa está preparada para crescer.',
      'Porque crescer vendendo o produto errado, para o cliente errado, com margem ruim, só acelera o problema.',
    ],
    introBold: true,
    intro: 'Você vai aprender a identificar:',
    bullets: ['quais ofertas dão mais margem', 'quais clientes valem mais a pena', 'quais produtos drenam energia', 'onde sua empresa está perdendo lucro', 'como pensar em crescimento com margem, não apenas faturamento'],
  },
  {
    letter: 'C', tag: 'Clareza de posicionamento', title: 'Clareza de Posicionamento', chip: 'Posicionamento',
    paras: [
      'Empresas genéricas competem por preço.',
      'Se o mercado não entende por que você é diferente, ele compara você com qualquer outra opção.',
    ],
    intro: 'Você vai aprender a construir uma mensagem mais clara sobre:',
    bullets: ['quem você atende', 'que dor resolve', 'qual resultado entrega', 'por que sua empresa é diferente', 'por que o cliente deveria pagar mais por você'],
  },
  {
    letter: 'S', tag: 'Sistema de aquisição', title: 'Sistema de Aquisição', chip: 'Aquisição',
    paras: ['Empresa que depende de um único canal vive em risco.'],
    midBold: 'Indicação é ótima.',
    midText: 'Mas indicação sem estratégia é instável.',
    intro: 'Você vai aprender como pensar em canais de aquisição além do improviso:',
    bullets: ['conteúdo', 'parcerias', 'eventos', 'relacionamento', 'tráfego', 'base própria', 'comunidade', 'indicação estruturada'],
    outroTexts: ['A pergunta não é apenas "como vender mais?".', 'A pergunta é:'],
    outroBold: 'quais canais sua empresa precisa construir para parar de depender da sorte?',
  },
  {
    letter: 'S', tag: 'Social proof e reputação', title: 'Social Proof, Reputação e Confiança', chip: 'Confiança',
    paras: [
      'Quanto maior o ticket, maior a necessidade de confiança.',
      'O cliente precisa de provas para acreditar que sua empresa é a escolha certa.',
    ],
    intro: 'Você vai aprender a organizar e usar melhor:',
    bullets: ['cases', 'depoimentos', 'números', 'histórias de clientes', 'bastidores', 'autoridade', 'reputação', 'provas de entrega'],
    outroTexts: ['Porque quanto menos prova você mostra, mais desconto o cliente pede.'],
  },
  {
    letter: 'O', tag: 'Oportunidades por comunidade e eventos', title: 'Oportunidades por Comunidade e Eventos', chip: 'Conexão',
    paras: ['Nem todo crescimento nasce de campanha.', 'Muito crescimento nasce de uma conversa certa.'],
    oLines: ['Uma indicação.', 'Uma parceria.', 'Um evento.', 'Uma comunidade.', 'Uma mesa.', 'Um relacionamento que abre uma nova porta.'],
    outroTexts: [
      'Você vai entender como ambientes, comunidades e eventos podem se tornar canais estratégicos de crescimento.',
      'Porque a oportunidade que você procura talvez esteja em uma conversa que você ainda não teve.',
    ],
  },
  {
    letter: 'E', tag: 'Exposição estratégica do founder', title: 'Exposição Estratégica do Founder', chip: 'Autoridade',
    paras: [
      'Em empresas pequenas e médias, o fundador é um dos maiores ativos de confiança.',
      'Mas muitos empresários ainda se escondem atrás da marca.',
    ],
    midBold: 'Founder Led Growth não é virar influencer.',
    midText: 'É usar a voz, a visão e a autoridade do fundador para gerar confiança, atrair oportunidades e aumentar a percepção de valor da empresa.',
    outroTexts: ['Você vai aprender como transformar sua presença em um canal de crescimento.'],
  },
];

const DESC =
  'O Método ACESSO para empresários que faturam acima de R$ 300 mil/ano e querem crescer com mais margem, melhor posicionamento e canais estruturados. Santos, SP.';

export const metadata: Metadata = pageMetadata({
  path: '/v3',
  title: 'Treinamento Gratuito para Empreendedores | Método ACESSO · SDW.hub Santos',
  description: DESC,
  ogTitle: 'Treinamento Gratuito para Empreendedores | Método ACESSO',
  ogDescription:
    'Ajuste modelo, posicione melhor sua empresa e construa canais de aquisição previsíveis. Treinamento gratuito para empresários que já faturam acima de R$ 300 mil/ano.',
});

const btnPrimary =
  'inline-flex items-center gap-2 rounded-[10px] bg-blue px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_26px_rgba(35,109,152,0.28)] transition hover:-translate-y-px hover:bg-[#1d5d83] active:scale-[0.98]';

const STATS = [
  ['R$300mil', 'faturamento mínimo/ano'],
  ['6', 'ativos de crescimento'],
  ['2', 'treinadores'],
  ['100%', 'gratuito'],
];

const FAQ_V3 = [
  {
    q: 'O treinamento é gratuito?',
    a: 'Sim. É gratuito para empresários que querem destravar crescimento com mais margem, posicionamento, canais e relacionamento estratégico.',
  },
  {
    q: 'Para quem é?',
    a: 'Para empresários e donos de negócios que já vendem e sentem que poderiam crescer mais, vender melhor e depender menos de indicação.',
  },
  {
    q: 'O que vou aprender?',
    a: 'Como ajustar o modelo, melhorar posicionamento, usar a autoridade do founder, criar canais de aquisição e acessar melhores ambientes.',
  },
  {
    q: 'Preciso me preparar?',
    a: 'Não. Basta aplicar para o treinamento. O conteúdo é pensado para empresas que já faturam e querem o próximo nível.',
  },
];

const secHead = 'mx-auto mb-14 max-w-175 text-center';
const h2 =
  'mt-3.5 text-[clamp(1.9rem,3.8vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em]';
const kicker = 'text-xs font-semibold uppercase tracking-[0.18em] text-blue';

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 10l2.5 2.5 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="bg-paper text-ink min-h-dvh">
      <JsonLd data={courseJsonLd('/v3', DESC)} />

      <header className="border-line sticky top-0 z-50 border-b bg-[rgba(251,248,243,0.82)] backdrop-blur-md">
        <nav className="mx-auto flex max-w-295 items-center justify-between px-7.5 py-3 md:py-4">
          <a href="#" aria-label="SDW.hub — início">
            <Logo variant="acesso-preto" className="h-9 w-auto md:h-16" />
          </a>
          <div className="text-ink-soft hidden gap-7.5 text-sm font-medium md:flex">
            <a href="#metodo" className="hover:text-blue">
              O Método
            </a>
            <a href="#ativos" className="hover:text-blue">
              Os 6 ativos
            </a>
            <a href="#quem" className="hover:text-blue">
              Para quem é
            </a>
            <a href="#faq" className="hover:text-blue">
              Dúvidas
            </a>
          </div>
          <a
            href="https://inlead.digital/sdwhub"
            className="inline-flex items-center gap-2 rounded-pill bg-gold px-4 py-2 text-[12px] font-semibold text-purple-dark shadow-gold transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-gold-soft active:translate-y-0 active:scale-[0.98] md:px-5 md:py-2.75 md:text-sm"
          >
            QUERO APLICAR
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-295 px-7.5 pt-18 pb-21">
        <div className="grid items-center gap-5 md:grid-cols-[1fr_1fr] md:gap-13">
          <div className="text-center md:text-left">
            <Reveal as="span" className={kicker}>
              Treinamento gratuito · Método ACESSO
            </Reveal>
            <Reveal
              as="h1"
              className="mt-2 text-[clamp(2.4rem,4vw,3.4rem)] leading-[1.03] font-extrabold tracking-[-0.035em] md:mt-4"
            >
              O crescimento da sua empresa não travou por falta de{' '}
              <em className="text-blue not-italic">esforço</em>.
            </Reveal>
            <div className="border-line mt-3 mb-4 block border-b md:hidden">
              <SpeakersImage
                priority
                width={600}
                height={750}
                className="h-[36dvh] w-full object-cover object-top"
              />
            </div>
            <Reveal
              as="p"
              className="text-ink-soft mt-2 line-clamp-2 max-w-130 text-[1rem] leading-[1.55] font-light md:mt-5.5 md:line-clamp-none md:text-[1rem]"
            >
              <strong className="text-ink font-semibold">
                Travou por falta de margem, posicionamento, canais e ambientes certos.
              </strong>{' '}
              Um treinamento gratuito para empresários que já faturam, mas sentem que poderiam
              crescer mais, vender melhor e construir uma empresa mais desejada pelo mercado.
            </Reveal>
            <Reveal className="mt-4 flex flex-wrap justify-center gap-3.5 md:mt-8 md:justify-start">
              <a
                href="https://inlead.digital/sdwhub"
                className={btnPrimary}
              >
                QUERO APLICAR PARA O TREINAMENTO
              </a>
            </Reveal>
            <p className="text-ink-soft mt-3 text-center text-[13px] leading-[1.6] md:text-left">
              <strong className="text-blue font-semibold">26 de junho</strong>
              {' | '}das 9h às 13h
              <br />
              SMART CENTER | Santos | SP
            </p>
            <Reveal
              as="div"
              className="text-ink-soft mt-7 hidden items-center gap-2.5 text-[13px] md:flex"
            >
              <span className="size-2 rounded-full bg-[#2bb673] shadow-[0_0_0_4px_rgba(43,182,115,0.18)]" />{' '}
              Gratuito · para empresas que faturam acima de R$ 300 mil/ano
            </Reveal>
          </div>
          <Reveal className="hidden md:block">
            <div className="relative h-[36dvh] overflow-hidden md:flex md:h-auto md:min-h-75 md:items-end md:justify-end md:overflow-visible">
              <SpeakersImage
                priority
                width={600}
                height={750}
                className="block h-full w-full object-cover object-top md:ml-auto md:h-auto md:w-full md:max-w-125 md:object-contain"
              />
            </div>
            <div className="mt-0 hidden rounded-[18px] bg-[#f4e7d2] px-6 py-5.5 text-center md:block">
              <div className="text-ink text-[1.05rem] font-semibold">
                Com <span className="text-blue">Marcel Roxo</span> &amp;{' '}
                <span className="text-blue">Lara Finochio</span>
              </div>
              <div className="text-ink mt-1 text-[13px]">
                Negócios &amp; ecossistemas · Comunicação &amp; autoridade
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <div className="border-line border-y bg-white">
        <div className="mx-auto grid max-w-295 grid-cols-2 px-7.5 py-10.5 md:grid-cols-4">
          {STATS.map(([n, l], i) => (
            <Reveal
              key={l}
              delay={(i % 4) * 70}
              className={`px-4 text-center ${i < STATS.length - 1 ? 'md:border-line md:border-r' : ''}`}
            >
              <b className="text-blue block text-[2.4rem] leading-none font-extrabold tracking-[-0.03em]">
                {n}
              </b>
              <span className="text-ink-soft mt-2 block text-[13px] font-medium">{l}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Seção 2 — Conquistas */}
      <section className="border-line border-b bg-white">
        <div className="mx-auto grid max-w-295 items-center gap-12 px-7.5 py-25 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.14] font-extrabold tracking-tight">
              Sua empresa cresceu até aqui
            </h2>
          </Reveal>
          <Reveal>
            <ul className="flex flex-col gap-3.5">
              {[
                'Você conquistou clientes.',
                'Validou seu produto.',
                'Criou reputação.',
                'Gerou faturamento.',
                'Sobreviveu a fases difíceis.',
                'Aprendeu na prática.',
              ].map((p) => (
                <li key={p} className="text-ink flex items-start gap-3 text-[1.05rem] font-medium">
                  <CheckIcon className="text-blue mt-0.5 size-5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Seção 3 — Desafios */}
      <section className="border-line border-b bg-[#f4e7d2]">
        <div className="mx-auto grid max-w-295 items-center gap-12 px-7.5 py-25 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.14] font-extrabold tracking-tight">
              Mas agora existe uma sensação incômoda:{' '}
              <em className="text-rose not-italic">o crescimento ficou mais pesado.</em>
            </h2>
          </Reveal>
          <Reveal>
            <ul className="flex flex-col gap-3.5">
              {[
                'Você trabalha muito.',
                'Depende demais de indicação.',
                'Depende demais da sua presença.',
                'Sente que sua comunicação ainda não traduz o valor real da sua empresa.',
                'Tem dificuldade em criar canais de aquisição previsíveis.',
              ].map((p) => (
                <li key={p} className="text-ink-soft flex items-start gap-3 text-[1.05rem] font-light">
                  <CheckIcon className="text-rose mt-0.5 size-5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Seção 4 — Transição */}
      <section className="border-line border-b bg-white py-20">
        <div className="mx-auto max-w-160 px-7.5 text-center">
          <Reveal>
            <p className="text-[clamp(1.2rem,2.4vw,1.6rem)] leading-[1.45] font-bold tracking-[-0.02em]">
              E, mesmo vendendo, percebe que poderia ter mais margem, mais clareza e mais força no
              mercado.
            </p>
            <p className="text-ink-soft mt-5 text-[1.05rem] font-light leading-[1.65]">
              O problema talvez não seja falta de capacidade.
            </p>
            <p className="text-ink-soft mt-2 text-[1.05rem] font-light leading-[1.65]">
              Talvez sua empresa só tenha chegado no limite do crescimento por esforço.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="https://inlead.digital/sdwhub" className={btnPrimary}>
                QUERO APLICAR PARA O TREINAMENTO
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Seção 5 — Statement */}
      <section className="border-line border-b bg-[#f4e7d2] py-20">
        <div className="mx-auto max-w-295 px-7.5">
          <Reveal>
            <h2 className={`text-center ${h2}`}>
              O que trouxe sua empresa até aqui pode não levar para o próximo nível.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Seção 6 — Estrutura necessária */}
      <section className="border-line border-b bg-white py-25">
        <div className="mx-auto max-w-295 px-7.5">
          <Reveal className="mb-10">
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.15] font-bold tracking-[-0.02em]">
              Chega uma hora em que crescer exige outra estrutura.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="size-6">
                    <rect x="2" y="14" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="9" y="9" width="4" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="16" y="4" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ),
                text: 'Exige modelo de negócio mais lucrativo.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="size-6">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                ),
                text: 'Exige posicionamento mais claro.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="size-6">
                    <path
                      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                text: 'Exige comunicação mais forte do fundador.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="size-6">
                    <path
                      d="M22 12H2M2 12l5-5M2 12l5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                ),
                text: 'Exige canais de aquisição mais consistentes.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="size-6">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                text: 'Exige prova, reputação e confiança.',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="size-6">
                    <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M2 20c0-3.31 3.13-6 7-6s7 2.69 7 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17 14.5c2.21 0 4 1.79 4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                text: 'Exige estar nas mesas certas.',
              },
            ].map((card, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 70}
                className="border-line flex items-center gap-4 rounded-2xl border bg-[#f4e7d2] px-5 py-5"
              >
                <span className="text-blue shrink-0">{card.icon}</span>
                <span className="text-ink-soft text-[1.02rem] font-medium leading-[1.45]">{card.text}</span>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 text-center text-[1.2rem] font-bold tracking-[-0.01em]">
              É isso que você vai aprender no Método ACESSO.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Seção 7 — O que é o Método */}
      <section id="metodo" className="border-line border-b bg-[#f4e7d2] py-25">
        <div className="mx-auto grid max-w-295 items-center gap-12 px-7.5 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.15] font-bold tracking-[-0.02em]">
              O que é o Método A.C.E.S.S.O.
            </h2>
            <p className="text-ink-soft mt-5 text-[1.05rem] leading-[1.65] font-light">
              O Método ACESSO é uma metodologia criada para ajudar empresários a destravarem
              crescimento construindo os ativos que tornam uma empresa mais desejada, lucrativa e
              bem posicionada.
            </p>
            <p className="text-ink-soft mt-4 text-[1.05rem] leading-[1.65] font-light">
              Durante o treinamento, você vai entender como sair do crescimento baseado apenas em
              esforço e começar a construir uma empresa com mais clareza, margem, aquisição e
              relacionamento estratégico.
            </p>
          </Reveal>
          <Reveal className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/espaco_evento.webp"
              alt="Espaço do evento Método ACESSO"
              width={456}
              height={342}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Seção 8 — 6 ativos 2col horizontais */}
      <section id="ativos" className="mx-auto max-w-295 px-7.5 py-25">
        <Reveal className={secHead}>
          <span className={kicker}>A · C · E · S · S · O</span>
          <h2 className={h2}>Os 6 ativos do Método ACESSO.</h2>
          <p className="text-ink-soft mt-3.5 text-[1.1rem] font-light">
            Construa o que torna a empresa mais desejada, lucrativa e bem posicionada.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4.5 md:grid-cols-2">
          {RICH_ATIVOS.map((a, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 70}
              className="border-line flex gap-5 rounded-[18px] border bg-white p-7 transition duration-300 hover:-translate-y-0.75 hover:shadow-[0_16px_40px_rgba(27,25,60,0.1)]"
            >
              <div className="text-blue flex size-13 shrink-0 items-center justify-center rounded-[14px] bg-[rgba(35,109,152,0.1)] text-[1.4rem] font-extrabold">
                {a.letter}
              </div>
              <div>
                <div className="text-rose text-[11px] font-semibold tracking-[0.14em] uppercase">
                  {a.tag}
                </div>
                <h3 className="my-1.5 text-[1.2rem] font-bold tracking-[-0.02em]">{a.title}</h3>
                <div className="text-ink-soft text-[0.96rem] leading-[1.55] font-light">
                  {a.paras.map((p, j) => <p key={j} className={j > 0 ? 'mt-2' : undefined}>{p}</p>)}
                  {a.midBold && <p className="mt-3 font-semibold text-ink">{a.midBold}</p>}
                  {a.midText && <p className="mt-1">{a.midText}</p>}
                  {a.intro && <p className={`mt-3 ${a.introBold ? 'font-semibold text-ink' : ''}`}>{a.intro}</p>}
                  {a.bullets && (
                    <ul className="mt-1.5 flex flex-col gap-1">
                      {a.bullets.map((b) => <li key={b} className="before:text-rose relative pl-4 before:absolute before:left-0 before:content-['›']">{b}</li>)}
                    </ul>
                  )}
                  {a.oLines && <div className="mt-3 flex flex-col gap-0.5">{a.oLines.map((l) => <p key={l}>{l}</p>)}</div>}
                  {a.outroTexts?.map((t, j) => <p key={j} className="mt-3">{t}</p>)}
                  {a.outroBold && <p className="mt-1 font-semibold text-ink">{a.outroBold}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section id="quem" className="border-line border-y bg-white py-25">
        <div className="mx-auto max-w-295 px-7.5">
          <Reveal className={secHead}>
            <span className={kicker}>Qualificação</span>
            <h2 className={h2}>Este treinamento é para você?</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="border-line rounded-[20px] border bg-white p-8.5 shadow-[0_12px_32px_rgba(27,25,60,0.07)]">
              <h3 className="text-blue mb-4 text-[1.3rem] font-bold">É para você se…</h3>
              <ul className="flex flex-col gap-3">
                {PARA_QUEM_SIM.map((t) => (
                  <li
                    key={t}
                    className="text-ink-soft relative pl-7 text-base leading-[1.45] font-light before:absolute before:left-0 before:font-bold before:text-[#2bb673] before:content-['✓']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="border-line rounded-[20px] border p-8.5">
              <h3 className="mb-4 text-[1.3rem] font-bold">Não é para você se…</h3>
              <ul className="flex flex-col gap-3">
                {PARA_QUEM_NAO.map((t) => (
                  <li
                    key={t}
                    className="text-ink-soft before:text-rose relative pl-7 text-base leading-[1.45] font-light before:absolute before:left-0 before:font-bold before:content-['✕']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Treinadores — dark band */}
      <section
        id="treinadores"
        className="bg-[linear-gradient(160deg,#1b193c_0%,#2a1a4a_100%)] py-25 text-white"
      >
        <div className="mx-auto max-w-295 px-7.5">
          <Reveal className={secHead}>
            <span className="text-gold text-xs font-semibold tracking-[0.18em] uppercase">
              Quem vai te treinar
            </span>
            <h2 className={`${h2} text-white`}>Dois construtores de verdade.</h2>
          </Reveal>
          <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="relative flex min-h-105 items-end justify-center overflow-hidden rounded-3xl bg-[linear-gradient(140deg,#3c165d,#236d98)] shadow-[0_20px_50px_rgba(27,25,60,0.18)]">
              <SpeakersImage width={500} height={625} className="block h-auto w-[90%]" />
            </Reveal>
            <div>
              <Reveal className="border-b border-[rgba(240,198,140,0.16)] py-5.5 first:pt-0">
                <div className="text-[1.3rem] font-bold tracking-[-0.02em] text-white">
                  Marcel Roxo
                </div>
                <div className="text-gold mb-2.5 text-[0.92rem] font-semibold">
                  Construtor de negócios, eventos e ecossistemas
                </div>
                <p className="text-[0.98rem] leading-[1.55] font-light text-white/74">
                  Ajudou a transformar a Staage numa das maiores plataformas de marketing do Brasil,
                  criou o Santos Digital Week (10mil+ participantes, 150+ marcas, 154 speakers) e
                  atuou com Joel Jota, Flávio Augusto e Caio Carneiro.
                </p>
              </Reveal>
              <Reveal className="py-5.5">
                <div className="text-[1.3rem] font-bold tracking-[-0.02em] text-white">
                  Lara Finochio
                </div>
                <div className="text-gold mb-2.5 text-[0.92rem] font-semibold">
                  Transforma comunicação em autoridade
                </div>
                <p className="text-[0.98rem] leading-[1.55] font-light text-white/74">
                  Carreira em Band, Record e SBT, depois Joel Jota, Grupo Primo e Moving Girls.
                  Estrutura narrativa, posicionamento e autoridade — a capacidade de comunicar
                  melhor o próprio valor.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — 2col estático */}
      <section id="faq" className="bg-[#f4e7d2] py-25">
        <div className="mx-auto max-w-295 px-7.5">
          <Reveal className={secHead}>
            <span className={kicker}>Dúvidas</span>
            <h2 className={h2}>Perguntas frequentes</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-14 md:grid-cols-2">
            {FAQ_V3.map((f) => (
              <Reveal key={f.q} className="border-line border-t py-6.5">
                <h3 className="mb-2 text-[1.12rem] font-semibold tracking-[-0.01em]">{f.q}</h3>
                <p className="text-ink-soft text-base leading-[1.6] font-light">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final */}
      <section
        id="aplicar"
        className="bg-[linear-gradient(120deg,#1b193c_0%,#3c165d_55%,#492b92_100%)] px-7.5 py-24 text-center text-white"
      >
        <span className="mb-4 inline-flex items-center rounded-lg bg-white/15 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white uppercase">
          Oportunidade única
        </span>
        <h2 className="mx-auto max-w-185 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">
          Inscreva-se gratuitamente no Método ACESSO.
        </h2>
        <p className="mx-auto mt-5 max-w-130 text-[1.1rem] font-light text-white/80">
          Transforme margem, posicionamento, aquisição e relacionamento em crescimento real.
        </p>
        <a
          href="https://inlead.digital/sdwhub"
          className="bg-gold text-purple-dark hover:bg-gold-soft mt-8.5 inline-flex items-center gap-2 rounded-[10px] px-7 py-3.5 text-[15px] font-semibold transition"
        >
          QUERO APLICAR PARA O TREINAMENTO →
        </a>
      </section>

      {/* Local do evento */}
      <section className="w-full bg-[#f4e7d2] py-20">
        <div className="mx-auto max-w-285 px-7.5">
          <Reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-indigo text-[clamp(1.8rem,3.6vw,2.8rem)] leading-tight font-extrabold tracking-[-0.03em]">
                Onde será o treinamento?
              </h2>
              <div className="mt-6 flex flex-col gap-2 text-[1.02rem] leading-[1.6] text-indigo/70">
                <p className="font-semibold text-indigo">26 de junho | das 9h às 13h</p>
                <p className="font-semibold text-indigo">SMART Center</p>
                <p>R. José Caballero, 15 – Gonzaga, Santos – SP</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/espaco_evento.webp"
                alt="SMART Center — local do evento Método ACESSO"
                width={456}
                height={342}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-line bg-paper border-t py-11">
        <div className="text-ink-soft mx-auto flex max-w-295 flex-wrap items-center justify-between gap-5 px-7.5 text-[13.5px]">
          <Logo variant="acesso-preto" className="h-16 w-auto" />
          <div className="flex gap-6">
            <a href="#metodo" className="hover:text-blue">
              O Método
            </a>
            <a href="#ativos" className="hover:text-blue">
              Os 6 ativos
            </a>
            <a href="#quem" className="hover:text-blue">
              Para quem
            </a>
            <a href="#treinadores" className="hover:text-blue">
              Treinadores
            </a>
            <a
              href="https://inlead.digital/sdwhub"
              className="hover:text-blue"
            >
              Aplicar
            </a>
          </div>
          <div className="mt-1.5 w-full text-[12px] text-[#9b95a8]">
            © 2026 Método ACESSO · uma iniciativa SDW.hub — Marcel Roxo &amp; Lara Finochio.
          </div>
        </div>
      </footer>
    </div>
  );
}
