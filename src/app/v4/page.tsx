import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage } from '@/components/SpeakersImage';
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
  'Inscreva-se gratuitamente no Método ACESSO com Marcel Roxo e Lara Finochio. Para empresários da Baixada Santista e Brasil que faturam acima de R$ 300 mil/ano.';

export const metadata: Metadata = pageMetadata({
  path: '/v4',
  title: 'Aplique Agora — Método ACESSO | Treinamento Gratuito SDW.hub Santos',
  description: DESC,
  ogTitle: 'Aplique Agora — Método ACESSO | Treinamento Gratuito',
  ogDescription:
    'Inscrições abertas. Treinamento gratuito para empresários que querem crescer com margem, posicionamento e canais certos. Com Marcel Roxo e Lara Finochio.',
});

const btnGold =
  'inline-flex items-center gap-2 rounded-[8px] bg-gold px-7 py-[15px] text-[15px] font-bold text-purple-dark shadow-[0_14px_38px_rgba(240,198,140,0.3)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-gold-soft active:scale-[0.98]';

const ink2 = 'text-[rgba(253,238,222,0.66)]';
const line = 'border-[rgba(240,198,140,0.2)]';

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
    <div
      className="min-h-dvh text-[#fdeede]"
      style={{
        background:
          'radial-gradient(90% 70% at 85% 0%, rgba(132,53,88,.7), transparent 60%), radial-gradient(80% 60% at 0% 30%, rgba(105,41,41,.6), transparent 55%), linear-gradient(165deg,#250a16 0%,#3c0f2e 45%,#250a16 100%)',
      }}
    >
      <JsonLd data={courseJsonLd('/v4', DESC)} />

      <header
        className={`sticky top-0 z-50 border-b ${line} bg-[rgba(37,10,22,0.7)] backdrop-blur-md`}
      >
        <nav className="mx-auto flex max-w-300 items-center justify-between px-7 py-3 md:py-4">
          <a href="#" aria-label="SDW.hub — início">
            <Logo variant="acesso-branco" className="h-9 w-auto md:h-16" />
          </a>
          <div className="flex items-center gap-5.5">
            <span
              className={`hidden items-center gap-2 text-[13px] font-medium ${ink2} before:bg-gold before:size-2 before:animate-pulse before:rounded-full sm:flex`}
            >
              Inscrições gratuitas abertas
            </span>
            <a
              href="https://inlead.digital/sdwhub"
              className="inline-flex items-center gap-2 rounded-pill bg-gold px-4 py-2 text-[12px] font-semibold text-purple-dark shadow-gold transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-gold-soft active:scale-[0.98] md:px-5 md:py-2.5 md:text-sm"
            >
              QUERO APLICAR
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-300 px-7 pt-6 pb-3 md:pt-14 md:pb-7.5">
        <div
          className={`flex flex-wrap items-start justify-between gap-4 border-b ${line} text-gold pb-4.5 text-[13px] font-semibold tracking-[0.16em] uppercase`}
        >
          <span>Método ACESSO</span>
          <span>Treinamento gratuito</span>
          <span>Para empresários</span>
        </div>
        <div className="mt-3 grid items-center gap-4 md:mt-7.5 md:grid-cols-[1fr_1fr] md:gap-7.5">
          <div className="text-center md:text-left">
            <Reveal
              as="h1"
              className="text-[clamp(2.4rem,4vw,2.8rem)] leading-none font-extrabold tracking-[-0.035em]"
            >
              O crescimento da sua empresa não travou por falta de{' '}
              <em className="text-gold font-semibold tracking-[-0.02em] normal-case italic">
                esforço
              </em>
              .
            </Reveal>
            <div className={`mt-3 mb-4 block border-b md:hidden ${line}`}>
              <SpeakersImage
                priority
                width={600}
                height={750}
                className="h-[36dvh] w-full object-cover object-top"
              />
            </div>
            <Reveal
              as="div"
              className={`mt-3 max-w-120 text-[1.12rem] md:mt-6.5 md:text-[1rem] ${ink2}`}
            >
              <p className="line-clamp-3 md:line-clamp-none">
                <strong className="text-[16px] font-bold text-[#fdeede]">
                  Travou por falta de margem, posicionamento, canais e ambientes certos.
                </strong>{' '}
                Um treinamento gratuito para empresários que já faturam, mas querem crescer mais,
                vender melhor e construir uma empresa mais desejada pelo mercado.
              </p>
              <div className="mt-3 flex justify-center md:mt-5.5 md:justify-start">
                <a href="https://inlead.digital/sdwhub" className={`${btnGold} rounded-pill`}>
                  QUERO APLICAR PARA O TREINAMENTO
                </a>
              </div>
              <p className={`mt-3 text-center text-[13px] leading-[1.6] md:text-left ${ink2}`}>
                <strong className="text-gold font-semibold">26 de junho</strong>
                {' | '}das 9h às 13h
                <br />
                SMART CENTER | Santos | SP
              </p>
            </Reveal>
          </div>
          <Reveal className="relative hidden md:block">
            <span className="bg-gold text-purple-dark absolute top-2 right-0 z-2 rotate-[4deg] rounded-lg px-4 py-2.5 text-[13px] font-extrabold tracking-[0.04em] shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
              100% GRÁTIS
            </span>
            <SpeakersImage
              priority
              width={600}
              height={750}
              className="block h-[36dvh] w-full object-cover object-top drop-shadow-[0_24px_44px_rgba(0,0,0,0.5)] md:h-auto"
            />
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <div
        className={`mt-0 overflow-hidden border-y-[1.5px] sm:-mt-7.5 ${line} py-4 whitespace-nowrap`}
      >
        <div className="animate-marquee text-gold inline-flex gap-8.5 text-[1.4rem] font-bold uppercase">
          <span className="inline-flex items-center gap-8.5 after:text-base after:content-['✦']">
            Margem · Posicionamento · Founder · Aquisição · Reputação · Comunidade
          </span>
          <span className="inline-flex items-center gap-8.5 after:text-base after:content-['✦']">
            Margem · Posicionamento · Founder · Aquisição · Reputação · Comunidade
          </span>
        </div>
      </div>

      {/* Seção 2 — Conquistas */}
      <section className="mx-auto max-w-300 px-7 pt-22.5 pb-0">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.18] font-bold tracking-tight">
              Sua empresa cresceu até aqui
            </p>
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
                <li
                  key={p}
                  className="flex items-start gap-3 text-[1.05rem] font-medium text-[#fdeede]"
                >
                  <CheckIcon className="text-gold mt-0.5 size-5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Seção 3 — Desafios */}
      <section className={`mx-auto max-w-300 border-t ${line} px-7 py-22.5`}>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.18] font-bold tracking-tight">
              Mas agora existe uma sensação incômoda:{' '}
              <em className="text-gold not-italic">o crescimento ficou mais pesado.</em>
            </p>
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
                <li key={p} className={`flex items-start gap-3 text-[1.05rem] font-light ${ink2}`}>
                  <CheckIcon className="text-gold mt-0.5 size-5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Seção 4 — Transição */}
      <section className={`border-t ${line} py-20`}>
        <div className="mx-auto max-w-160 px-7 text-center">
          <Reveal>
            <p className="text-[clamp(1.2rem,2.4vw,1.6rem)] leading-[1.45] font-bold tracking-[-0.02em]">
              E, mesmo vendendo, percebe que poderia ter mais margem, mais clareza e mais força no
              mercado.
            </p>
            <p className={`mt-5 text-[1.05rem] leading-[1.65] font-light ${ink2}`}>
              O problema talvez não seja falta de capacidade.
            </p>
            <p className={`mt-2 text-[1.05rem] leading-[1.65] font-light ${ink2}`}>
              Talvez sua empresa só tenha chegado no limite do crescimento por esforço.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="https://inlead.digital/sdwhub" className={`${btnGold} rounded-pill`}>
                QUERO APLICAR PARA O TREINAMENTO
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Seção 5 — Statement */}
      <section className={`border-t ${line} py-20`}>
        <div className="mx-auto max-w-300 px-7">
          <Reveal>
            <h2 className="text-center text-[clamp(1.9rem,4.6vw,3.4rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
              O que trouxe sua empresa até aqui pode não levar para o próximo nível.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Seção 6 — Estrutura necessária */}
      <section className={`border-t ${line} py-22.5`}>
        <div className="mx-auto max-w-300 px-7">
          <Reveal className="mb-11.5">
            <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
              Chega uma hora em que crescer exige outra estrutura.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
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
                delay={(i % 3) * 80}
                className={`flex items-center gap-4 rounded-[18px] border ${line} bg-[rgba(240,198,140,0.06)] px-5 py-5`}
              >
                <span className="text-gold shrink-0">{card.icon}</span>
                <span className={`text-[1.02rem] leading-[1.45] font-medium ${ink2}`}>
                  {card.text}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-11 text-center text-[1.2rem] font-bold tracking-[-0.01em]">
              É isso que você vai aprender no Método ACESSO.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Seção 7 — O que é o Método */}
      <section id="metodo" className={`border-t ${line} py-22.5`}>
        <div className="mx-auto grid max-w-300 items-center gap-12 px-7 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
              O que é o Método A.C.E.S.S.O.
            </h2>
            <p className={`mt-5 text-[1.05rem] leading-[1.65] font-light ${ink2}`}>
              O Método ACESSO é uma metodologia criada para ajudar empresários a destravarem
              crescimento construindo os ativos que tornam uma empresa mais desejada, lucrativa e
              bem posicionada.
            </p>
            <p className={`mt-4 text-[1.05rem] leading-[1.65] font-light ${ink2}`}>
              Durante o treinamento, você vai entender como sair do crescimento baseado apenas em
              esforço e começar a construir uma empresa com mais clareza, margem, aquisição e
              relacionamento estratégico.
            </p>
          </Reveal>
          <Reveal className="overflow-hidden rounded-[18px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/espaco_evento.webp"
              alt="Espaço do evento Método ACESSO"
              width={456}
              height={342}
              className="h-auto w-full rounded-[18px] object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Seção 8 — 6 ativos setlist */}
      <section className={`border-t ${line} py-22.5`}>
        <div className="mx-auto max-w-300 px-7">
          <Reveal className="mb-11.5">
            <div className="text-gold text-[13px] font-semibold tracking-[0.2em] uppercase">
              O método · A C E S S O
            </div>
            <h2 className="mt-3.5 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
              Os 6 ativos que destravam crescimento.
            </h2>
          </Reveal>
          <div>
            {RICH_ATIVOS.map((a, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 80}
                className={`grid grid-cols-[54px_1fr] items-center gap-7 border-t ${line} py-7 transition-[padding] duration-300 hover:pl-3.5 md:grid-cols-[90px_1fr_auto]`}
              >
                <div className="text-gold text-[2.6rem] leading-none font-extrabold">
                  {a.letter}
                </div>
                <div>
                  <h3 className="text-[clamp(1.3rem,2.6vw,1.9rem)] font-bold tracking-[-0.02em]">
                    {a.tag}
                  </h3>
                  <div className={`mt-1 max-w-155 text-base ${ink2}`}>
                    {a.paras.map((p, j) => (
                      <p key={j} className={j > 0 ? 'mt-2' : undefined}>
                        {p}
                      </p>
                    ))}
                    {a.midBold && <p className="mt-3 font-semibold text-[#fdeede]">{a.midBold}</p>}
                    {a.midText && <p className="mt-1">{a.midText}</p>}
                    {a.intro && (
                      <p className={`mt-3 ${a.introBold ? 'font-semibold text-[#fdeede]' : ''}`}>
                        {a.intro}
                      </p>
                    )}
                    {a.bullets && (
                      <ul className="mt-1.5 flex flex-col gap-1">
                        {a.bullets.map((b) => (
                          <li
                            key={b}
                            className="before:text-gold relative pl-4 before:absolute before:left-0 before:content-['›']"
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
                    {a.outroBold && (
                      <p className="mt-1 font-semibold text-[#fdeede]">{a.outroBold}</p>
                    )}
                  </div>
                </div>
                <span
                  className={`rounded-pill hidden border whitespace-nowrap ${line} text-gold px-3.75 py-1.75 text-xs font-semibold md:inline`}
                >
                  {a.chip}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-11.5 flex justify-center">
            <a href="https://inlead.digital/sdwhub" className={`${btnGold} rounded-pill`}>
              QUERO APLICAR PARA O TREINAMENTO →
            </a>
          </Reveal>
        </div>
      </section>

      {/* Para quem */}
      <section className={`border-t ${line} mx-auto max-w-300 px-7 py-22.5`}>
        <Reveal className="mb-11.5">
          <div className="text-gold text-[13px] font-semibold tracking-[0.2em] uppercase">
            Filtro
          </div>
          <h2 className="mt-3.5 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
            Para quem é — e para quem não é.
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className={`rounded-[18px] border ${line} bg-[rgba(240,198,140,0.07)] p-8`}>
            <h3 className="text-gold mb-4 text-[1.3rem] font-bold">Para quem é</h3>
            <ul className="flex flex-col gap-2.5">
              {PARA_QUEM_SIM.map((t) => (
                <li
                  key={t}
                  className={`relative pl-6.5 text-[0.99rem] ${ink2} before:text-gold before:absolute before:left-0 before:font-bold before:content-['✓']`}
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className={`rounded-[18px] border ${line} p-8`}>
            <h3 className="mb-4 text-[1.3rem] font-bold">Para quem não é</h3>
            <ul className="flex flex-col gap-2.5">
              {PARA_QUEM_NAO.map((t) => (
                <li
                  key={t}
                  className={`relative pl-6.5 text-[0.99rem] ${ink2} before:absolute before:left-0 before:font-bold before:text-[#e0708f] before:content-['✕']`}
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Treinadores */}
      <section
        className={`border-t ${line} bg-[linear-gradient(160deg,rgba(60,15,46,0.55)_0%,rgba(105,41,41,0.22)_100%)] py-22.5`}
      >
        <div className="mx-auto max-w-300 px-7">
          <Reveal className="mb-11.5">
            <div className="text-gold text-[13px] font-semibold tracking-[0.2em] uppercase">
              Headliners
            </div>
            <h2 className="mt-3.5 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
              Quem vai te treinar.
            </h2>
          </Reveal>
          <div className="grid items-center gap-11 md:grid-cols-[0.78fr_1.22fr]">
            <Reveal
              className={`relative flex min-h-105 items-end justify-center overflow-hidden rounded-[18px] border ${line} bg-[linear-gradient(160deg,#3c0f2e,#250a16)]`}
            >
              <SpeakersImage width={500} height={625} className="block h-auto w-[94%]" />
            </Reveal>
            <div>
              <Reveal className={`border-t ${line} py-5.5 first:border-t-0 first:pt-0`}>
                <div className="text-[1.5rem] font-extrabold tracking-[-0.02em]">Marcel Roxo</div>
                <div className="text-gold mb-2.5 text-[0.95rem] font-semibold">
                  Construtor de negócios, eventos e ecossistemas
                </div>
                <p className={`text-base ${ink2}`}>
                  Transformou a Staage numa das maiores plataformas de marketing do Brasil, fez um
                  evento online com 163mil participantes e criou o Santos Digital Week — 10mil+
                  pessoas, 150+ marcas, 154 speakers.
                </p>
              </Reveal>
              <Reveal className={`border-t ${line} py-5.5`}>
                <div className="text-[1.5rem] font-extrabold tracking-[-0.02em]">Lara Finochio</div>
                <div className="text-gold mb-2.5 text-[0.95rem] font-semibold">
                  Transforma comunicação em autoridade
                </div>
                <p className={`text-base ${ink2}`}>
                  Band, Record e SBT — comunicação ao vivo, sob pressão. Depois Joel Jota, Grupo
                  Primo e Moving Girls. Traz a camada que falta: comunicar melhor o próprio valor.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`border-t ${line} mx-auto max-w-300 px-7 py-22.5`}>
        <Reveal className="mb-11.5 text-center">
          <div className="text-gold text-[13px] font-semibold tracking-[0.2em] uppercase">
            Dúvidas
          </div>
          <h2 className="mt-3.5 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
            Ficou alguma dúvida?
          </h2>
        </Reveal>
        <Faq items={FAQ} variant="dark" accent="gold" />
      </section>

      {/* Final ticket */}
      <section id="aplicar" className="px-7 pt-10 pb-21">
        <Reveal className="bg-gold text-purple-dark relative mx-auto max-w-245 rounded-[26px] px-12.5 py-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
          <span
            aria-hidden
            className="absolute top-1/2 -left-5 size-10 -translate-y-1/2 rounded-full bg-[#250a16]"
          />
          <span
            aria-hidden
            className="absolute top-1/2 -right-5 size-10 -translate-y-1/2 rounded-full bg-[#250a16]"
          />
          <span className="mb-3 inline-flex items-center rounded-lg bg-purple-dark/10 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.2em] text-purple-dark uppercase">
            Oportunidade única
          </span>
          <div className="text-[13px] font-bold tracking-[0.2em] uppercase opacity-65">
            Vagas gratuitas · aplicação
          </div>
          <h2 className="mt-3.5 text-[clamp(2.1rem,5.4vw,3.8rem)] leading-none font-extrabold tracking-[-0.035em] uppercase">
            Aplique agora.
          </h2>
          <p className="mx-auto mt-4.5 max-w-120 text-[1.05rem] font-medium opacity-[0.78]">
            Inscreva-se gratuitamente no Método ACESSO e destrave o próximo nível da sua empresa.
          </p>
          <a
            href="https://inlead.digital/sdwhub"
            className="rounded-pill bg-purple-dark text-gold mt-7 inline-flex items-center gap-2 px-9.5 py-4.25 text-[16px] font-bold transition hover:bg-[#2a0f44]"
          >
            QUERO APLICAR PARA O TREINAMENTO →
          </a>
        </Reveal>
      </section>

      {/* Local do evento */}
      <section className="w-full bg-[#f4e7d2] py-20">
        <div className="mx-auto max-w-285 px-7">
          <Reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] leading-tight font-extrabold tracking-[-0.03em] text-[#1b193c]">
                Onde será o treinamento?
              </h2>
              <div className="mt-6 flex flex-col gap-2 text-[1.02rem] leading-[1.6] text-[#1b193c]/70">
                <p className="font-semibold text-[#1b193c]">26 de junho | das 9h às 13h</p>
                <p className="font-semibold text-[#1b193c]">SMART Center</p>
                <p>R. José Caballero, 15 – Gonzaga, Santos – SP</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[18px]">
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
      <footer className={`mx-auto max-w-300 border-t ${line} px-7 pt-10.5 pb-14`}>
        <div className={`flex flex-wrap items-center justify-between gap-5 text-[13px] ${ink2}`}>
          <Logo variant="acesso-branco" className="h-16 w-auto" />
          <div className="flex gap-5.5">
            <a href="#metodo" className="hover:text-gold">
              O Método
            </a>
            <a href="#" className="hover:text-gold">
              Treinadores
            </a>
            <a href="https://inlead.digital/sdwhub" className="hover:text-gold">
              Aplicar
            </a>
          </div>
          <div className="mt-1.5 w-full text-[12px] text-[rgba(253,238,222,0.4)]">
            © 2026 Método ACESSO · uma iniciativa SDW.hub — Marcel Roxo &amp; Lara Finochio.
          </div>
        </div>
      </footer>
    </div>
  );
}
