import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage, SpeakersImageLara, SpeakersImageMarcel } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import { PARA_QUEM_SIM, PARA_QUEM_NAO, FAQ } from '@/lib/content';

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
  'Dois construtores, uma metodologia. O Método ACESSO é um treinamento gratuito para empresários prontos para o próximo nível. Santos, São Paulo.';

export const metadata: Metadata = pageMetadata({
  path: '/v5',
  title: 'Método ACESSO com Marcel Roxo & Lara Finochio | SDW.hub Santos',
  description: DESC,
  ogTitle: 'Método ACESSO com Marcel Roxo & Lara Finochio',
  ogDescription:
    'Marcel Roxo e Lara Finochio ensinam como empresários podem crescer com margem, posicionamento e autoridade. Treinamento gratuito do SDW.hub em Santos, SP.',
});

const btnDark =
  'inline-flex items-center gap-2 rounded-pill bg-indigo px-7 py-3.5 text-[15px] font-semibold text-gold shadow-[0_12px_30px_rgba(27,25,60,0.22)] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#2a2750] active:scale-[0.98]';

const k = 'text-xs font-semibold uppercase tracking-[0.2em] text-rose';
const h2 = 'mt-3.5 text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em]';

const NUMS = ['01', '02', '03', '04', '05', '06'];

const TRAINER_TAGS = [
  ['Staage', 'Santos Digital Week', 'The Advisory Board'],
  ['Band · Record · SBT', 'Grupo Primo', 'Moving Girls'],
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
    <div className="min-h-dvh bg-[#f6efe6] text-[#241a2e]">
      <JsonLd data={courseJsonLd('/v5', DESC)} />

      <header className="border-line sticky top-0 z-50 border-b bg-[rgba(246,239,230,0.82)] backdrop-blur-md">
        <nav className="mx-auto flex max-w-295 items-center justify-between px-7.5 py-3 md:py-4">
          <a href="#" aria-label="SDW.hub — início">
            <Logo variant="acesso-preto" className="h-9 w-auto md:h-16" />
          </a>
          <div className="hidden gap-7.5 text-sm font-medium text-[#5f5168] md:flex">
            <a href="#metodo" className="hover:text-rose">
              O Método
            </a>
            <a href="#ativos" className="hover:text-rose">
              Os Ativos
            </a>
            <a href="#treinadores" className="hover:text-rose">
              Treinadores
            </a>
            <a href="#faq" className="hover:text-rose">
              Dúvidas
            </a>
          </div>
          <a
            href="https://inlead.digital/sdwhub"
            className="inline-flex items-center gap-2 rounded-pill bg-indigo px-4 py-2 text-[12px] font-semibold text-gold shadow-[0_12px_30px_rgba(27,25,60,0.22)] transition duration-300 ease-brand hover:-translate-y-0.5 hover:bg-[#2a2750] active:scale-[0.98] md:px-5.5 md:py-2.75 md:text-sm"
          >
            QUERO APLICAR
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-295 px-7.5 pt-4 pb-8 md:pt-13.5 md:pb-20">
        <div className="border-line mb-7 hidden justify-between border-b pb-5 text-xs font-semibold tracking-[0.2em] text-[#5f5168] uppercase md:flex">
          <span>Método ACESSO · Treinamento gratuito</span>
          <span>Para empresários</span>
        </div>
        <div className="grid items-center gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <div className="text-center md:text-left">
            <Reveal as="span" className={k}>
              Treinamento gratuito · Método ACESSO
            </Reveal>
            <Reveal
              as="h1"
              className="mt-2 text-[clamp(2.4rem,4vw,2.8rem)] leading-none font-extrabold tracking-[-0.035em] md:mt-3.5"
            >
              O crescimento da sua empresa não travou por falta de{' '}
              <span className="text-rose font-medium italic">esforço</span>.
            </Reveal>
            <div className="grad-brand mt-3 mb-4 block h-[38dvh] overflow-hidden rounded-3xl md:hidden">
              <SpeakersImage
                priority
                width={600}
                height={750}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <Reveal
              as="p"
              className="mt-2 line-clamp-2 max-w-120 text-[1.18rem] leading-[1.55] font-light text-[#5f5168] md:mt-5.5 md:line-clamp-none md:text-[1rem]"
            >
              <strong className="text-ink font-semibold">
                Travou por falta de margem, posicionamento, canais e ambientes certos.
              </strong>{' '}
              Um treinamento gratuito para empresários que já faturam, mas sentem que poderiam
              crescer mais, vender melhor e construir uma empresa mais desejada pelo mercado.
            </Reveal>
            <Reveal className="mt-4 flex flex-wrap justify-center gap-3.5 md:mt-8 md:justify-start">
              <a href="https://inlead.digital/sdwhub" className={btnDark}>
                QUERO APLICAR PARA O TREINAMENTO
              </a>
            </Reveal>
            <p className="mt-3 text-center text-[13px] leading-[1.6] text-[#5f5168] md:text-left">
              <strong className="text-rose font-semibold">26 de junho</strong>
              {' | '}das 9h às 13h
              <br />
              SMART CENTER | Santos | SP
            </p>
            <Reveal as="p" className="mt-6.5 hidden text-sm text-[#5f5168] md:block">
              Com <b className="text-ink">Marcel Roxo</b> &amp;{' '}
              <b className="text-ink">Lara Finochio</b>
            </Reveal>
          </div>
          <Reveal className="grad-brand relative hidden items-end justify-center overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(36,27,46,0.22)] md:flex md:h-auto md:min-h-120">
            <SpeakersImage
              priority
              width={600}
              height={750}
              className="block h-full w-full object-cover object-top md:h-auto md:w-[94%] md:self-end"
            />
          </Reveal>
        </div>
      </section>

      {/* Strip */}
      <div className="border-line flex flex-wrap justify-center gap-10 border-y py-7.5 text-[13px] font-medium tracking-[0.04em] text-[#5f5168]">
        <span>
          <b className="text-ink font-bold">6</b> ativos de crescimento
        </span>
        <span>
          <b className="text-ink font-bold">2</b> treinadores construtores
        </span>
        <span>
          <b className="text-ink font-bold">R$300mil+</b> faturamento/ano
        </span>
        <span>
          <b className="text-ink font-bold">100%</b> gratuito
        </span>
      </div>

      {/* Seção 2 — Conquistas */}
      <section className="mx-auto max-w-295 px-7.5 pt-22.5 pb-0">
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
                <li key={p} className="flex items-start gap-3 text-[#241a2e] text-[1.05rem] font-medium">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-rose" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Seção 3 — Desafios */}
      <section className="border-line mx-auto max-w-295 border-t px-7.5 py-22.5">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.18] font-bold tracking-tight">
              Mas agora existe uma sensação incômoda:{' '}
              <em className="text-rose not-italic">o crescimento ficou mais pesado.</em>
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
                <li key={p} className="flex items-start gap-3 text-[1.05rem] font-light text-[#5f5168]">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-rose" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Seção 4 — Transição */}
      <section className="border-line border-t bg-[#f1e3cb] py-20">
        <div className="mx-auto max-w-160 px-7.5 text-center">
          <Reveal>
            <p className="text-[clamp(1.2rem,2.4vw,1.6rem)] leading-[1.45] font-bold tracking-[-0.02em]">
              E, mesmo vendendo, percebe que poderia ter mais margem, mais clareza e mais força no
              mercado.
            </p>
            <p className="mt-5 text-[1.05rem] font-light leading-[1.65] text-[#5f5168]">
              O problema talvez não seja falta de capacidade.
            </p>
            <p className="mt-2 text-[1.05rem] font-light leading-[1.65] text-[#5f5168]">
              Talvez sua empresa só tenha chegado no limite do crescimento por esforço.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="https://inlead.digital/sdwhub" className={btnDark}>
                QUERO APLICAR PARA O TREINAMENTO
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Seção 5 — Statement */}
      <section className="border-line border-t py-20">
        <div className="mx-auto max-w-295 px-7.5">
          <Reveal>
            <h2 className="text-center text-[clamp(1.9rem,4.6vw,3.4rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
              O que trouxe sua empresa até aqui pode não levar para o próximo nível.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Seção 6 — Estrutura necessária */}
      <section className="border-line border-t bg-[#f1e3cb] py-22.5">
        <div className="mx-auto max-w-295 px-7.5">
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
                delay={(i % 3) * 80}
                className="border-line flex items-center gap-4 rounded-[18px] border bg-white px-5 py-5 shadow-[0_8px_24px_rgba(36,27,46,0.06)]"
              >
                <span className="text-rose shrink-0">{card.icon}</span>
                <span className="text-[1.02rem] font-medium leading-[1.45] text-[#5f5168]">{card.text}</span>
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
      <section id="metodo" className="border-line border-t py-22.5">
        <div className="mx-auto grid max-w-295 items-center gap-12 px-7.5 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
              O que é o Método A.C.E.S.S.O.
            </h2>
            <p className="mt-5 text-[1.05rem] leading-[1.65] font-light text-[#5f5168]">
              O Método ACESSO é uma metodologia criada para ajudar empresários a destravarem
              crescimento construindo os ativos que tornam uma empresa mais desejada, lucrativa e
              bem posicionada.
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.65] font-light text-[#5f5168]">
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

      {/* Seção 8 — 6 ativos */}
      <section id="ativos" className="mx-auto max-w-295 px-7.5 py-24">
        <Reveal className="mx-auto mb-17.5 max-w-170 text-center">
          <span className={k}>A · C · E · S · S · O</span>
          <h2 className={h2}>Os 6 ativos do Método ACESSO.</h2>
          <p className="mt-3.5 text-[1.1rem] font-light text-[#5f5168]">
            Sair do crescimento por esforço e construir o que torna a empresa mais desejada,
            lucrativa e bem posicionada.
          </p>
        </Reveal>
        <div>
          {RICH_ATIVOS.map((a, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 80}
              className="border-line grid grid-cols-1 items-center gap-10 border-t py-10 last:border-b md:grid-cols-[0.4fr_1fr]"
            >
              <div className="grad-brand bg-clip-text text-[clamp(4rem,9vw,7rem)] leading-[0.8] font-extrabold tracking-[-0.04em] text-transparent">
                {a.letter}
              </div>
              <div>
                <div className="text-rose text-xs font-bold tracking-[0.2em] uppercase">
                  {NUMS[i]} — {a.tag}
                </div>
                <h3 className="my-3 text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.1] font-bold tracking-tight">
                  {a.title}
                </h3>
                <div className="max-w-155 text-[1.06rem] leading-[1.6] font-light text-[#5f5168]">
                  {a.paras.map((p, j) => <p key={j} className={j > 0 ? 'mt-2' : undefined}>{p}</p>)}
                  {a.midBold && <p className="mt-3 font-semibold text-[#241a2e]">{a.midBold}</p>}
                  {a.midText && <p className="mt-1">{a.midText}</p>}
                  {a.intro && <p className={`mt-3 ${a.introBold ? 'font-semibold text-[#241a2e]' : ''}`}>{a.intro}</p>}
                  {a.bullets && (
                    <ul className="mt-1.5 flex flex-col gap-1">
                      {a.bullets.map((b) => <li key={b} className="before:text-rose relative pl-4 before:absolute before:left-0 before:content-['›']">{b}</li>)}
                    </ul>
                  )}
                  {a.oLines && <div className="mt-3 flex flex-col gap-0.5">{a.oLines.map((l) => <p key={l}>{l}</p>)}</div>}
                  {a.outroTexts?.map((t, j) => <p key={j} className="mt-3">{t}</p>)}
                  {a.outroBold && <p className="mt-1 font-semibold text-[#241a2e]">{a.outroBold}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-11.5 flex justify-center">
          <a href="https://inlead.digital/sdwhub" className={btnDark}>
            QUERO APLICAR PARA O TREINAMENTO →
          </a>
        </Reveal>
      </section>

      {/* Para quem */}
      <section className="bg-[#f1e3cb] py-24">
        <div className="mx-auto max-w-295 px-7.5">
          <Reveal className="mx-auto mb-17.5 max-w-170 text-center">
            <span className={k}>Filtro</span>
            <h2 className={h2}>Para quem é — e para quem não é.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="border-line rounded-[20px] border bg-white p-8.5 shadow-[0_14px_36px_rgba(36,27,46,0.07)]">
              <h3 className="text-rose mb-4 text-[1.3rem] font-bold">Para quem é</h3>
              <ul className="flex flex-col gap-3">
                {PARA_QUEM_SIM.map((t) => (
                  <li
                    key={t}
                    className="before:text-cyan relative pl-7 text-base leading-[1.45] font-light text-[#5f5168] before:absolute before:left-0 before:font-bold before:content-['✓']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="border-line rounded-[20px] border p-8.5">
              <h3 className="mb-4 text-[1.3rem] font-bold">Para quem não é</h3>
              <ul className="flex flex-col gap-3">
                {PARA_QUEM_NAO.map((t) => (
                  <li
                    key={t}
                    className="before:text-rose relative pl-7 text-base leading-[1.45] font-light text-[#5f5168] before:absolute before:left-0 before:font-bold before:content-['✕']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Treinadores — editorial */}
      <section id="treinadores" className="bg-indigo py-25 text-white">
        <div className="mx-auto max-w-295 px-7.5">
          <Reveal className="mx-auto mb-17.5 max-w-170 text-center">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Quem vai te treinar
            </span>
            <h2 className={`${h2} text-white`}>Dois construtores, uma mesa só.</h2>
          </Reveal>
          <Reveal className="mb-12 grid items-center gap-11 md:grid-cols-[0.42fr_1fr]">
            <div className="grad-brand flex min-h-82.5 items-end justify-center overflow-hidden rounded-[20px]">
              <SpeakersImageMarcel width={500} height={625} className="block h-auto w-full" />
            </div>
            <div>
              <div className="text-[1.8rem] font-extrabold tracking-tight">Marcel Roxo</div>
              <div className="text-gold mb-3.5 text-base font-medium">
                Construtor de negócios, eventos e ecossistemas
              </div>
              <p className="text-[1.04rem] leading-[1.6] font-light text-white/74">
                Assumiu a Staage do zero e ajudou a torná-la uma das maiores plataformas de
                marketing do Brasil. Fez um dos maiores eventos online do país (163mil
                participantes) e criou o Santos Digital Week, com 10mil+ participantes, 150+ marcas
                e 154 speakers. Crescimento por ambiente, acesso e relacionamento.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {TRAINER_TAGS[0].map((t) => (
                  <span
                    key={t}
                    className="rounded-pill text-gold border border-[rgba(240,198,140,0.3)] px-3.5 py-1.5 text-[12.5px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="grid items-center gap-11 md:grid-cols-[1fr_0.42fr]">
            <div className="md:order-1 md:col-start-1">
              <div className="text-[1.8rem] font-extrabold tracking-tight">Lara Finochio</div>
              <div className="text-gold mb-3.5 text-base font-medium">
                Transforma comunicação em autoridade
              </div>
              <p className="text-[1.04rem] leading-[1.6] font-light text-white/74">
                Aprendeu comunicação no ambiente mais exigente: ao vivo, sob pressão, na TV aberta —
                Band, Record e SBT. Levou isso para Joel Jota, Grupo Primo e Moving Girls,
                estruturando narrativa, posicionamento e autoridade. Traz a camada essencial:
                comunicar melhor o próprio valor.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {TRAINER_TAGS[1].map((t) => (
                  <span
                    key={t}
                    className="rounded-pill text-gold border border-[rgba(240,198,140,0.3)] px-3.5 py-1.5 text-[12.5px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="grad-brand flex min-h-82.5 items-end justify-center overflow-hidden rounded-[20px] md:order-2">
              <SpeakersImageLara
                width={500}
                height={625}
                alt="Lara Finochio"
                className="block h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-295 px-7.5 py-24">
        <Reveal className="mb-11 text-center">
          <span className={k}>Dúvidas</span>
          <h2 className={h2}>Perguntas frequentes</h2>
        </Reveal>
        <Faq items={FAQ} variant="dark" accent="rose" />
      </section>

      {/* Final */}
      <section id="aplicar" className="grad-brand px-7.5 py-24 text-center text-white">
        <span className="mb-4 inline-flex items-center rounded-lg bg-white/15 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white uppercase">
          Oportunidade única
        </span>
        <h2 className="mx-auto max-w-190 text-[clamp(2.1rem,4.8vw,3.6rem)] leading-[1.04] font-extrabold tracking-[-0.03em]">
          Inscreva-se gratuitamente no Método ACESSO.
        </h2>
        <p className="mx-auto mt-5 max-w-125 text-[1.1rem] font-light text-white/85">
          Transforme margem, posicionamento, aquisição e relacionamento em crescimento real.
        </p>
        <a
          href="https://inlead.digital/sdwhub"
          className="rounded-pill bg-gold text-purple-dark hover:bg-gold-soft mt-8.5 inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold transition"
        >
          QUERO APLICAR PARA O TREINAMENTO →
        </a>
      </section>

      {/* Local do evento */}
      <section className="w-full bg-[#f4e7d2] py-20">
        <div className="mx-auto max-w-285 px-7.5">
          <Reveal className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] leading-tight font-extrabold tracking-[-0.03em] text-[#2d1f36]">
                Onde será o treinamento?
              </h2>
              <div className="mt-6 flex flex-col gap-2 text-[1.02rem] leading-[1.6] text-[#5f5168]">
                <p className="font-semibold text-[#2d1f36]">26 de junho | das 9h às 13h</p>
                <p className="font-semibold text-[#2d1f36]">SMART Center</p>
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
      <footer className="bg-paper py-11.5">
        <div className="mx-auto flex max-w-295 flex-wrap items-center justify-between gap-5 px-7.5 text-[13.5px] text-[#5f5168]">
          <Logo variant="acesso-preto" className="h-16 w-auto" />
          <div className="flex gap-6">
            <a href="#metodo" className="hover:text-rose">
              O Método
            </a>
            <a href="#ativos" className="hover:text-rose">
              Os Ativos
            </a>
            <a href="#treinadores" className="hover:text-rose">
              Treinadores
            </a>
            <a href="#faq" className="hover:text-rose">
              Dúvidas
            </a>
            <a href="https://inlead.digital/sdwhub" className="hover:text-rose">
              Aplicar
            </a>
          </div>
          <div className="mt-1.5 w-full text-[12px] text-[#9b8fa0]">
            © 2026 Método ACESSO · uma iniciativa SDW.hub — Marcel Roxo &amp; Lara Finochio.
          </div>
        </div>
      </footer>
    </div>
  );
}
