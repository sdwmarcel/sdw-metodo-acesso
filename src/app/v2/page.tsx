import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage, SpeakersImageLara, SpeakersImageMarcel } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import { PARA_QUEM_SIM, PARA_QUEM_NAO, FAQ } from '@/lib/content';

const RICH_ATIVOS: Array<{
  letter: string;
  tag: string;
  title: string;
  chip: string;
  paras: string[];
  midBold?: string;
  midText?: string;
  introBold?: boolean;
  intro?: string;
  bullets?: string[];
  oLines?: string[];
  outroTexts?: string[];
  outroBold?: string;
}> = [
  {
    letter: 'A',
    tag: 'Ajuste do modelo de negócio',
    title: 'Ajuste do Modelo de Negócio',
    chip: 'Margem',
    paras: [
      'Antes de atrair mais clientes, você precisa entender se sua empresa está preparada para crescer.',
      'Porque crescer vendendo o produto errado, para o cliente errado, com margem ruim, só acelera o problema.',
    ],
    introBold: true,
    intro: 'Você vai aprender a identificar:',
    bullets: [
      'quais ofertas dão mais margem',
      'quais clientes valem mais a pena',
      'quais produtos drenam energia',
      'onde sua empresa está perdendo lucro',
      'como pensar em crescimento com margem, não apenas faturamento',
    ],
  },
  {
    letter: 'C',
    tag: 'Clareza de posicionamento',
    title: 'Clareza de Posicionamento',
    chip: 'Posicionamento',
    paras: [
      'Empresas genéricas competem por preço.',
      'Se o mercado não entende por que você é diferente, ele compara você com qualquer outra opção.',
    ],
    intro: 'Você vai aprender a construir uma mensagem mais clara sobre:',
    bullets: [
      'quem você atende',
      'que dor resolve',
      'qual resultado entrega',
      'por que sua empresa é diferente',
      'por que o cliente deveria pagar mais por você',
    ],
  },
  {
    letter: 'S',
    tag: 'Sistema de aquisição',
    title: 'Sistema de Aquisição',
    chip: 'Aquisição',
    paras: ['Empresa que depende de um único canal vive em risco.'],
    midBold: 'Indicação é ótima.',
    midText: 'Mas indicação sem estratégia é instável.',
    intro: 'Você vai aprender como pensar em canais de aquisição além do improviso:',
    bullets: [
      'conteúdo',
      'parcerias',
      'eventos',
      'relacionamento',
      'tráfego',
      'base própria',
      'comunidade',
      'indicação estruturada',
    ],
    outroTexts: ['A pergunta não é apenas "como vender mais?".', 'A pergunta é:'],
    outroBold: 'quais canais sua empresa precisa construir para parar de depender da sorte?',
  },
  {
    letter: 'S',
    tag: 'Social proof e reputação',
    title: 'Social Proof, Reputação e Confiança',
    chip: 'Confiança',
    paras: [
      'Quanto maior o ticket, maior a necessidade de confiança.',
      'O cliente precisa de provas para acreditar que sua empresa é a escolha certa.',
    ],
    intro: 'Você vai aprender a organizar e usar melhor:',
    bullets: [
      'cases',
      'depoimentos',
      'números',
      'histórias de clientes',
      'bastidores',
      'autoridade',
      'reputação',
      'provas de entrega',
    ],
    outroTexts: ['Porque quanto menos prova você mostra, mais desconto o cliente pede.'],
  },
  {
    letter: 'O',
    tag: 'Oportunidades por comunidade e eventos',
    title: 'Oportunidades por Comunidade e Eventos',
    chip: 'Conexão',
    paras: [
      'Nem todo crescimento nasce de campanha.',
      'Muito crescimento nasce de uma conversa certa.',
    ],
    oLines: [
      'Uma indicação.',
      'Uma parceria.',
      'Um evento.',
      'Uma comunidade.',
      'Uma mesa.',
      'Um relacionamento que abre uma nova porta.',
    ],
    outroTexts: [
      'Você vai entender como ambientes, comunidades e eventos podem se tornar canais estratégicos de crescimento.',
      'Porque a oportunidade que você procura talvez esteja em uma conversa que você ainda não teve.',
    ],
  },
  {
    letter: 'E',
    tag: 'Exposição estratégica do founder',
    title: 'Exposição Estratégica do Founder',
    chip: 'Autoridade',
    paras: [
      'Em empresas pequenas e médias, o fundador é um dos maiores ativos de confiança.',
      'Mas muitos empresários ainda se escondem atrás da marca.',
    ],
    midBold: 'Founder Led Growth não é virar influencer.',
    midText:
      'É usar a voz, a visão e a autoridade do fundador para gerar confiança, atrair oportunidades e aumentar a percepção de valor da empresa.',
    outroTexts: ['Você vai aprender como transformar sua presença em um canal de crescimento.'],
  },
];

const DESC =
  'Um treinamento gratuito para empresários que já faturam e querem mais margem, posicionamento e canais de aquisição. Com Marcel Roxo e Lara Finochio. Santos, SP.';

export const metadata: Metadata = pageMetadata({
  path: '/v2',
  title: 'Destrave o Crescimento da Sua Empresa | Método ACESSO — SDW.hub',
  description: DESC,
  ogTitle: 'Destrave o Crescimento da Sua Empresa | Método ACESSO',
  ogDescription:
    'Treinamento gratuito para empresários que querem crescer com margem real, posicionamento claro e canais de aquisição previsíveis. Com Marcel Roxo e Lara Finochio.',
});

const btnGold =
  'inline-flex items-center gap-2 rounded-pill bg-gold px-7 py-[15px] text-[15px] font-semibold text-purple-dark shadow-gold transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-gold-soft active:scale-[0.98]';

const STATS = [
  ['25mil', 'alunos em 7 meses'],
  ['163mil', 'num evento online'],
  ['10mil+', 'participantes no SDW'],
  ['154', 'speakers reunidos'],
  ['150+', 'marcas'],
];

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
      <JsonLd data={courseJsonLd('/v2', DESC)} />

      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-295 items-center justify-between px-7 py-3 md:py-5.5">
          <a href="#" aria-label="SDW.hub — início">
            <Logo variant="acesso-branco" className="h-9 w-auto md:h-16" />
          </a>
          <div className="hidden gap-7.5 text-sm font-medium text-white/85 md:flex">
            <a href="#metodo" className="hover:text-gold">
              O Método
            </a>
            <a href="#ativos" className="hover:text-gold">
              Os 6 ativos
            </a>
            <a href="#quem" className="hover:text-gold">
              Para quem
            </a>
            <a href="#treinadores" className="hover:text-gold">
              Treinadores
            </a>
          </div>
          <a
            href="https://inlead.digital/sdwhub"
            className="inline-flex items-center gap-2 rounded-pill bg-gold px-4 py-2 text-[12px] font-semibold text-purple-dark shadow-gold transition duration-300 ease-brand hover:-translate-y-0.5 hover:bg-gold-soft active:scale-[0.98] md:px-5.5 md:py-2.75 md:text-sm"
          >
            QUERO APLICAR
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="grad-brand relative overflow-hidden pt-22 text-white md:pt-32.5">
        <div
          aria-hidden
          className="bg-cyan absolute -top-30 -right-15 size-105 rounded-full opacity-50 blur-[60px]"
        />
        <div
          aria-hidden
          className="bg-gold absolute bottom-15 -left-30 size-90 rounded-full opacity-[0.28] blur-[60px]"
        />
        <div className="relative z-2 mx-auto grid max-w-295 items-end gap-4 px-7 md:grid-cols-[0.85fr_1.15fr] md:gap-7.5">
          <div className="pb-4 text-center md:pb-24 md:text-left">
            <Reveal>
              <span className="rounded-pill before:bg-gold mb-2 inline-flex items-center gap-2.5 border border-white/20 bg-white/10 px-4.5 py-2.5 text-[13px] font-medium backdrop-blur-sm before:size-2 before:rounded-full before:shadow-[0_0_0_4px_rgba(240,198,140,0.3)] md:mb-6.5">
                Treinamento gratuito · Método ACESSO
              </span>
              <h1 className="text-[clamp(2.4rem,4vw,2.8rem)] leading-none font-extrabold tracking-[-0.035em]">
                O crescimento da sua empresa não travou por falta de{' '}
                <em className="text-gold font-semibold not-italic">esforço</em>.
              </h1>
              <div className="mt-3 mb-4 block border-b border-white/25 md:hidden">
                <SpeakersImage
                  priority
                  width={600}
                  height={750}
                  className="h-[36dvh] w-full object-cover object-top"
                />
              </div>
              <p className="mt-2 line-clamp-2 max-w-125 text-[1rem] font-light text-white/85 md:mt-6 md:line-clamp-none">
                <strong className="font-semibold text-white">
                  Travou por falta de margem, posicionamento, canais e ambientes certos.
                </strong>{' '}
                Um treinamento gratuito para empresários que já faturam, mas sentem que poderiam
                crescer mais, vender melhor e construir uma empresa mais desejada pelo mercado.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3.5 md:mt-8 md:justify-start">
                <a href="https://inlead.digital/sdwhub" className={btnGold}>
                  QUERO APLICAR PARA O TREINAMENTO
                </a>
              </div>
              <p className="mt-3 text-center text-[13px] leading-[1.6] text-white/65 md:text-left">
                <strong className="text-gold font-semibold">26 de junho</strong>
                {' | '}das 9h às 13h
                <br />
                SMART CENTER | Santos | SP
              </p>
            </Reveal>
          </div>
          <Reveal className="relative hidden self-end md:block">
            <SpeakersImage
              priority
              width={600}
              height={750}
              className="mx-auto block h-[36dvh] w-full object-cover object-top drop-shadow-[0_24px_40px_rgba(0,0,0,0.4)] md:h-auto md:max-w-150"
            />
          </Reveal>
        </div>
      </section>

      {/* Stat strip */}
      <div className="bg-indigo py-7.5 text-white">
        <div className="mx-auto flex max-w-295 flex-wrap justify-around gap-5 px-7 text-center">
          {STATS.map(([n, l]) => (
            <Reveal key={l} className="">
              <b className="text-gold block text-[2.1rem] leading-none font-extrabold tracking-[-0.02em]">
                {n}
              </b>
              <span className="text-[12.5px] font-medium text-white/65">{l}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Seção 2 — Conquistas */}
      <section className="border-line border-y bg-white">
        <div className="mx-auto grid max-w-295 items-center gap-12 px-7 py-22.5 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.12] font-extrabold tracking-tight">
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
                <li key={p} className="text-ink flex items-start gap-3 text-[1.06rem] font-medium">
                  <CheckIcon className="text-indigo mt-0.5 size-5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Seção 3 — Desafios */}
      <section className="border-line border-b bg-[#f4e7d2]">
        <div className="mx-auto grid max-w-295 items-center gap-12 px-7 py-22.5 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.12] font-extrabold tracking-tight">
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
                <li
                  key={p}
                  className="text-ink-soft flex items-start gap-3 text-[1.06rem] font-light"
                >
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
        <div className="mx-auto max-w-160 px-7 text-center">
          <Reveal>
            <p className="text-[clamp(1.2rem,2.4vw,1.6rem)] leading-[1.45] font-bold tracking-[-0.02em]">
              E, mesmo vendendo, percebe que poderia ter mais margem, mais clareza e mais força no
              mercado.
            </p>
            <p className="text-ink-soft mt-5 text-[1.05rem] leading-[1.65] font-light">
              O problema talvez não seja falta de capacidade.
            </p>
            <p className="text-ink-soft mt-2 text-[1.05rem] leading-[1.65] font-light">
              Talvez sua empresa só tenha chegado no limite do crescimento por esforço.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="https://inlead.digital/sdwhub" className={btnGold}>
                QUERO APLICAR PARA O TREINAMENTO
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Seção 5 — Statement */}
      <section className="border-line border-b bg-[#f4e7d2] py-20">
        <div className="mx-auto max-w-295 px-7">
          <Reveal>
            <h2 className="text-center text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
              O que trouxe sua empresa até aqui pode não levar para o próximo nível.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Seção 6 — Estrutura necessária */}
      <section className="border-line border-b bg-white py-22.5">
        <div className="mx-auto max-w-295 px-7">
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
                    <rect
                      x="2"
                      y="14"
                      width="4"
                      height="8"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="9"
                      y="9"
                      width="4"
                      height="13"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="16"
                      y="4"
                      width="4"
                      height="18"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
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
                    <path
                      d="M8 9h8M8 13h5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
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
                <span className="text-rose shrink-0">{card.icon}</span>
                <span className="text-ink-soft text-[1.02rem] leading-[1.45] font-medium">
                  {card.text}
                </span>
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
      <section id="metodo" className="border-line border-b bg-[#f4e7d2] py-22.5">
        <div className="mx-auto grid max-w-295 items-center gap-12 px-7 md:grid-cols-2">
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

      {/* Seção 8 — 6 ativos cards */}
      <section id="ativos" className="bg-[#f4e7d2] py-26">
        <div className="mx-auto max-w-295 px-7">
          <Reveal className="mx-auto mb-15 max-w-180 text-center">
            <span className="text-rose text-xs font-semibold tracking-[0.2em] uppercase">
              A · C · E · S · S · O
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.06] font-extrabold tracking-[-0.03em]">
              Os 6 ativos que destravam crescimento.
            </h2>
            <p className="text-ink-soft mt-4 text-[1.1rem] font-light">
              Em vez de crescer só no esforço, você constrói os ativos que tornam a empresa mais
              desejada, lucrativa e bem posicionada.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {RICH_ATIVOS.map((a, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 80}
                className="border-line rounded-3xl border bg-white p-7.5 shadow-[0_8px_26px_rgba(27,25,60,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(27,25,60,0.13)]"
              >
                <div className="grad-brand mb-5 flex size-13.5 items-center justify-center rounded-2xl text-[1.5rem] font-extrabold text-white shadow-[0_10px_24px_rgba(73,43,146,0.3)]">
                  {a.letter}
                </div>
                <div className="text-rose text-[11px] font-semibold tracking-[0.14em] uppercase">
                  {a.tag}
                </div>
                <h3 className="my-1.5 text-[1.25rem] font-bold tracking-[-0.02em]">{a.title}</h3>
                <div className="text-ink-soft text-[0.98rem] leading-[1.55] font-light">
                  {a.paras.map((p, j) => (
                    <p key={j} className={j > 0 ? 'mt-2' : undefined}>
                      {p}
                    </p>
                  ))}
                  {a.midBold && <p className="text-ink mt-3 font-semibold">{a.midBold}</p>}
                  {a.midText && <p className="mt-1">{a.midText}</p>}
                  {a.intro && (
                    <p className={`mt-3 ${a.introBold ? 'text-ink font-semibold' : ''}`}>
                      {a.intro}
                    </p>
                  )}
                  {a.bullets && (
                    <ul className="mt-1.5 flex flex-col gap-1">
                      {a.bullets.map((b) => (
                        <li
                          key={b}
                          className="before:text-rose relative pl-4 before:absolute before:left-0 before:content-['›']"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {a.oLines && (
                    <div className="mt-3 flex flex-col gap-0.5">
                      {a.oLines.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  )}
                  {a.outroTexts?.map((t, j) => (
                    <p key={j} className="mt-3">
                      {t}
                    </p>
                  ))}
                  {a.outroBold && <p className="text-ink mt-1 font-semibold">{a.outroBold}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem — split dark */}
      <section id="quem" className="bg-indigo text-white">
        <div className="mx-auto grid max-w-295 gap-6 px-7 py-24 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-[rgba(240,198,140,0.18)] bg-[linear-gradient(160deg,rgba(73,43,146,0.45),transparent)] p-8.5">
            <h3 className="text-gold mb-4 text-[1.35rem] font-bold">Para quem é</h3>
            <ul className="flex flex-col gap-3">
              {PARA_QUEM_SIM.map((t) => (
                <li
                  key={t}
                  className="before:text-gold relative pl-7 text-base leading-[1.45] font-light text-white/78 before:absolute before:left-0 before:font-bold before:content-['✓']"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(240,198,140,0.18)] p-8.5">
            <h3 className="mb-4 text-[1.35rem] font-bold">Para quem não é</h3>
            <ul className="flex flex-col gap-3">
              {PARA_QUEM_NAO.map((t) => (
                <li
                  key={t}
                  className="before:text-rose relative pl-7 text-base leading-[1.45] font-light text-white/78 before:absolute before:left-0 before:font-bold before:content-['✕']"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Treinadores */}
      <section id="treinadores" className="mx-auto max-w-295 px-7 py-26">
        <Reveal className="mx-auto mb-15 max-w-180 text-center">
          <span className="text-rose text-xs font-semibold tracking-[0.2em] uppercase">
            Quem vai te treinar
          </span>
          <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.06] font-extrabold tracking-[-0.03em]">
            Marcel Roxo &amp; Lara Finochio.
          </h2>
        </Reveal>
        <div className="flex flex-col gap-8">
          <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="relative flex items-end justify-center overflow-hidden">
              <SpeakersImageMarcel
                width={500}
                height={625}
                className="block h-auto w-[60%] self-end rounded-xl object-cover object-top drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
              />
            </Reveal>
            <Reveal className="border-line rounded-[20px] border bg-white p-6.5 shadow-[0_8px_24px_rgba(27,25,60,0.07)]">
              <div className="text-[1.3rem] font-bold tracking-[-0.02em]">Marcel Roxo</div>
              <div className="text-rose mb-2.5 text-[0.92rem] font-semibold">
                Construtor de negócios, eventos e ecossistemas
              </div>
              <p className="text-ink-soft text-[0.98rem] leading-[1.55] font-light">
                Assumiu a Staage do zero e ajudou a torná-la uma das maiores plataformas de
                marketing do Brasil. Criou o Santos Digital Week e atuou em projetos com Joel Jota,
                Flávio Augusto e Caio Carneiro. Crescimento por ambiente, acesso e relacionamento.
              </p>
            </Reveal>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="relative flex items-end justify-center overflow-hidden">
              <SpeakersImageLara
                width={500}
                height={625}
                className="block h-auto w-[60%] self-end rounded-xl object-cover object-top drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
              />
            </Reveal>
            <Reveal className="border-line rounded-[20px] border bg-white p-6.5 shadow-[0_8px_24px_rgba(27,25,60,0.07)]">
              <div className="text-[1.3rem] font-bold tracking-[-0.02em]">Lara Finochio</div>
              <div className="text-rose mb-2.5 text-[0.92rem] font-semibold">
                Transforma comunicação em autoridade
              </div>
              <p className="text-ink-soft text-[0.98rem] leading-[1.55] font-light">
                Carreira em Band, Record e SBT — comunicação ao vivo, sob pressão. Levou isso para
                Joel Jota, Grupo Primo e Moving Girls, estruturando narrativa, posicionamento e
                autoridade. Traz a capacidade de comunicar melhor o próprio valor.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#f4e7d2] py-26">
        <div className="mx-auto max-w-295 px-7">
          <Reveal className="mx-auto mb-15 max-w-180 text-center">
            <span className="text-rose text-xs font-semibold tracking-[0.2em] uppercase">
              Dúvidas
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.06] font-extrabold tracking-[-0.03em]">
              Perguntas frequentes
            </h2>
          </Reveal>
          <Faq items={FAQ} variant="card" accent="rose" />
        </div>
      </section>

      {/* Final */}
      <section
        id="aplicar"
        className="grad-brand relative overflow-hidden px-7 py-26 text-center text-white"
      >
        <div
          aria-hidden
          className="bg-cyan absolute -top-30 -left-15 size-95 rounded-full opacity-40 blur-[60px]"
        />
        <div
          aria-hidden
          className="bg-gold absolute -right-10 -bottom-35 size-80 rounded-full opacity-25 blur-[60px]"
        />
        <span className="relative z-2 mb-4 inline-flex items-center rounded-lg bg-white/15 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white uppercase">
          Oportunidade única
        </span>
        <h2 className="relative z-2 mx-auto max-w-200 text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.04] font-extrabold tracking-[-0.035em]">
          Inscreva-se gratuitamente no Método ACESSO.
        </h2>
        <p className="relative z-2 mx-auto mt-5.5 max-w-135 text-[1.1rem] font-light text-white/85">
          Transforme margem, posicionamento, aquisição e relacionamento em crescimento real.
        </p>
        <a href="https://inlead.digital/sdwhub" className={`relative z-2 mt-9 ${btnGold}`}>
          QUERO APLICAR PARA O TREINAMENTO →
        </a>
      </section>

      {/* Local do evento */}
      <section className="w-full bg-[#f4e7d2] py-20">
        <div className="mx-auto max-w-285 px-7">
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
      <footer className="bg-indigo py-11.5 text-white/60">
        <div className="mx-auto flex max-w-295 flex-wrap items-center justify-between gap-5 px-7 text-[13.5px]">
          <Logo variant="acesso-branco" className="h-16 w-auto" />
          <div className="flex gap-5.5">
            <a href="#metodo" className="hover:text-gold">
              O Método
            </a>
            <a href="#ativos" className="hover:text-gold">
              Os 6 ativos
            </a>
            <a href="#quem" className="hover:text-gold">
              Para quem
            </a>
            <a href="#treinadores" className="hover:text-gold">
              Treinadores
            </a>
            <a href="https://inlead.digital/sdwhub" className="hover:text-gold">
              Aplicar
            </a>
          </div>
          <div className="mt-1.5 w-full text-[12px] text-white/40">
            © 2026 Método ACESSO · uma iniciativa SDW.hub — Marcel Roxo &amp; Lara Finochio.
          </div>
        </div>
      </footer>
    </div>
  );
}
