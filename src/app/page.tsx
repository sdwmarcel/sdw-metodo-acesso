import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage, SpeakersImageMarcel, SpeakersImageLara } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import { PARA_QUEM_SIM, PARA_QUEM_NAO, FAQ, TAKEAWAYS } from '@/lib/content';
import { CtaDeadline } from '@/components/CtaDeadline';

const DESC =
  'Desbloqueie o crescimento da sua empresa. Treinamento gratuito com Marcel Roxo e Lara Finochio para empresários que faturam acima de R$ 300 mil/ano. Santos, SP.';

export const metadata: Metadata = pageMetadata({
  path: '/',
  title: 'Método ACESSO — Treinamento Gratuito para Empresários | Santos, SP',
  description: DESC,
  ogTitle: 'Método ACESSO — Treinamento Gratuito para Empresários',
  ogDescription:
    'Destrave o crescimento da sua empresa. Treinamento gratuito com Marcel Roxo e Lara Finochio para empresários que já faturam e querem mais margem, posicionamento e canais de aquisição.',
});

const btnPrimary =
  'inline-flex items-center gap-2 rounded-pill bg-gold px-7 py-3.5 text-[14.5px] font-semibold text-purple-dark shadow-gold transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-gold-soft active:translate-y-0 active:scale-[0.98]';

const ink2 = 'text-[rgba(253,251,247,0.66)]';
const ink3 = 'text-[rgba(253,251,247,0.42)]';
const hairline = 'border-[rgba(240,198,140,0.16)]';

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div className="relative min-h-dvh bg-[#0f0e22] text-[#fdfbf7]">
      <JsonLd data={courseJsonLd('/', DESC)} />
      {/* aurora overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(80% 60% at 12% -5%, rgba(73,43,146,.55), transparent 60%), radial-gradient(70% 55% at 100% 8%, rgba(132,53,88,.45), transparent 58%), radial-gradient(60% 50% at 80% 100%, rgba(15,150,171,.18), transparent 60%)',
        }}
      />
      <div className="relative z-2">
        {/* Header */}
        <header
          className={`sticky top-0 z-50 border-b ${hairline} bg-[rgba(15,14,34,0.6)] backdrop-blur-[14px]`}
        >
          <nav className="mx-auto flex max-w-285 items-center justify-between px-7 py-4">
            <a href="#" aria-label="SDW.hub — início">
              <Logo variant="acesso-branco" className="h-16 w-auto" />
            </a>
            <div className={`hidden gap-8 text-sm font-medium ${ink2} md:flex`}>
              <a href="#metodo" className="hover:text-gold">
                O Método
              </a>
              <a href="#ativos" className="hover:text-gold">
                Os 6 ativos
              </a>
              <a href="#treinadores" className="hover:text-gold">
                Treinadores
              </a>
              <a href="#faq" className="hover:text-gold">
                Dúvidas
              </a>
            </div>
            <a href="https://inlead.digital/sdwhub" className={btnPrimary}>
              QUERO APLICAR
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-285 px-7">
          {/* Hero — Seção 1 */}
          <section className="grid items-center gap-3 pt-2 pb-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pt-20 md:pb-17.5">
            <Reveal>
              <div className="text-center md:-mt-20 md:text-left">
                <span
                  className={`rounded-pill mb-2 inline-flex items-center gap-2.5 border md:mb-6.5 ${hairline} text-gold before:bg-gold bg-[rgba(240,198,140,0.12)] px-4 py-2 text-[12.5px] font-semibold before:size-1.75 before:rounded-full`}
                >
                  Treinamento gratuito · Método ACESSO
                </span>
                <h1 className="text-[clamp(2.4rem,4vw,2.8rem)] leading-none font-extrabold tracking-[-0.035em]">
                  O crescimento da sua empresa não travou por falta de{' '}
                  <span className="script">esforço</span>.
                </h1>
                <div className={`mt-3 mb-4 block border-b md:hidden ${hairline}`}>
                  <SpeakersImage
                    priority
                    width={600}
                    height={750}
                    className="h-[36dvh] w-full object-cover object-top"
                  />
                </div>
                <p
                  className={`mt-2 line-clamp-2 max-w-130 text-[1rem] leading-[1.55] font-light md:mt-6 md:line-clamp-none md:text-[1rem] ${ink2}`}
                >
                  <strong className="font-semibold text-[#fdfbf7]">
                    Travou por falta de margem, posicionamento, canais e ambientes certos.
                  </strong>{' '}
                  Um treinamento gratuito para empresários que já faturam, mas sentem que poderiam
                  crescer mais, vender melhor e construir uma empresa mais desejada pelo mercado.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3.5 md:mt-8 md:justify-start">
                  <a href="https://inlead.digital/sdwhub" className={btnPrimary}>
                    QUERO APLICAR PARA O TREINAMENTO
                  </a>
                </div>
                <p className={`mt-3 text-center text-[13px] leading-[1.6] md:text-left ${ink2}`}>
                  <strong className="text-gold font-semibold">26 de junho</strong>
                  {' | '}das 9h às 13h
                  <br />
                  SMART CENTER | Santos | SP
                </p>
                <p className={`mt-5.5 hidden text-[13px] md:block ${ink3}`}>
                  Gratuito · para quem fatura acima de R$ 300 mil/ano
                </p>
              </div>
            </Reveal>
            <Reveal className="relative hidden md:block">
              <div
                aria-hidden
                className="absolute inset-[-6%_-4%_-2%_-4%] blur-[20px]"
                style={{
                  background:
                    'radial-gradient(60% 60% at 50% 40%, rgba(132,53,88,.6), transparent 70%)',
                }}
              />
              <SpeakersImage
                priority
                width={600}
                height={750}
                className="mx-auto block h-[36dvh] w-full object-cover object-top drop-shadow-[0_24px_40px_rgba(0,0,0,0.4)] md:h-auto md:max-w-150"
              />
              <div
                className={`absolute bottom-1.5 left-0 z-3 rounded-[14px] border ${hairline} bg-[rgba(15,14,34,0.7)] px-4 py-3 text-[12.5px] backdrop-blur-sm`}
              >
                Com <b className="text-gold font-semibold">Marcel Roxo</b> &amp;{' '}
                <b className="text-gold font-semibold">Lara Finochio</b>
              </div>
            </Reveal>
          </section>

          <div className={`-mt-18 hidden h-px border-t md:block ${hairline}`} />
        </main>

        {/* Seção 2 — Conquistas */}
        <section className="bg-gold-soft w-full py-24">
          <div className="mx-auto grid max-w-285 items-center gap-12 px-7 md:grid-cols-2">
            <Reveal>
              <h2 className="text-indigo text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight font-bold tracking-[-0.02em]">
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
                  <li
                    key={p}
                    className="text-indigo flex items-start gap-3 text-[1.06rem] font-medium"
                  >
                    <CheckIcon className="text-purple-dark mt-0.5 size-5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Seção 3 — Desafios */}
        <section className="w-full py-24">
          <div className="mx-auto grid max-w-285 items-center gap-12 px-7 md:grid-cols-2">
            <Reveal>
              <p className="text-[clamp(1.6rem,3vw,2.3rem)] leading-tight font-semibold tracking-[-0.02em]">
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
                  <li
                    key={p}
                    className={`flex items-start gap-3 text-[1.06rem] font-light ${ink2}`}
                  >
                    <CheckIcon className="text-gold mt-0.5 size-5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Seção 4 — Transição */}
        <section className={`border-t ${hairline} py-20`}>
          <div className="mx-auto max-w-195 px-7 text-center">
            <Reveal>
              <p className="text-[clamp(1.25rem,2.5vw,1.65rem)] leading-[1.4] font-bold tracking-[-0.02em]">
                E, mesmo vendendo, percebe que poderia ter mais margem, mais clareza e mais força no
                mercado.
              </p>
              <p className={`mt-6 text-[1.08rem] leading-[1.65] font-light ${ink2}`}>
                O problema talvez não seja falta de capacidade.
              </p>
              <p className={`mt-2 text-[1.08rem] leading-[1.65] font-light ${ink2}`}>
                Talvez sua empresa só tenha chegado no limite do crescimento por esforço.
              </p>
              <div className="mt-9 flex justify-center">
                <a href="https://inlead.digital/sdwhub" className={btnPrimary}>
                  QUERO APLICAR PARA O TREINAMENTO
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Seção 5 — Statement */}
        <section className={`border-t ${hairline} py-20`}>
          <div className="mx-auto max-w-285 px-7">
            <Reveal>
              <h2 className="text-center text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
                O que trouxe sua empresa até aqui pode não levar para o próximo nível.
              </h2>
            </Reveal>
          </div>
        </section>

        {/* Seção 6 — Estrutura necessária */}
        <section className="bg-[linear-gradient(165deg,rgba(73,43,146,0.35)_0%,rgba(60,22,93,0.18)_100%)] py-24">
          <div className="mx-auto max-w-285 px-7">
            <Reveal className="mb-11">
              <h2 className="text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.15] font-bold tracking-[-0.02em]">
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
                  delay={(i % 3) * 70}
                  className={`flex items-center gap-4 rounded-2xl border ${hairline} bg-[rgba(255,255,255,0.04)] px-5.5 py-5`}
                >
                  <span className="text-gold shrink-0">{card.icon}</span>
                  <span className={`text-[1.02rem] leading-[1.45] font-medium ${ink2}`}>
                    {card.text}
                  </span>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-11 text-center text-[2.2rem] font-semibold tracking-[-0.01em]">
                É isso que você vai aprender no Método ACESSO.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Seção 7 — O que é o Método */}
        <section id="metodo" className="mx-auto max-w-285 px-7 py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.15] font-bold tracking-[-0.02em]">
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
            <Reveal className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/espaco_evento.jpeg"
                alt="Espaço do evento Método ACESSO"
                width={456}
                height={342}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* Seção 8 — 6 ativos editorial rows */}
        <section
          id="ativos"
          className="bg-[linear-gradient(165deg,rgba(73,43,146,0.30)_0%,rgba(60,22,93,0.14)_100%)] py-24"
        >
          <div className="mx-auto max-w-285 px-7">
            <Reveal className="mb-13.5 max-w-180">
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase">
                A · C · E · S · S · O
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.1] font-bold tracking-tight">
                Os 6 ativos do Método ACESSO
              </h2>
            </Reveal>

            <div>
              {/* A — Ajuste do Modelo de Negócio */}
              <Reveal
                className={`grid grid-cols-1 items-start gap-9 border-t ${hairline} py-11.5 md:grid-cols-[130px_1fr_1fr]`}
              >
                <div className="text-[60px] leading-[0.8] font-extrabold tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_#f0c68c] md:text-[84px]">
                  A
                </div>
                <div>
                  <span className="text-rose mb-2 block text-xs font-semibold tracking-[0.16em] uppercase">
                    Ajuste do modelo de negócio
                  </span>
                  <h3 className="text-[1.55rem] font-semibold tracking-[-0.02em]">
                    Ajuste do Modelo de Negócio
                  </h3>
                </div>
                <div className={`text-[1.02rem] leading-[1.6] font-light ${ink2}`}>
                  <p>
                    Antes de atrair mais clientes, você precisa entender se sua empresa está
                    preparada para crescer.
                  </p>
                  <p className="mt-3">
                    Porque crescer vendendo o produto errado, para o cliente errado, com margem
                    ruim, só acelera o problema.
                  </p>
                  <p className={`mt-4 font-semibold text-[#fdfbf7]`}>
                    Você vai aprender a identificar:
                  </p>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {[
                      'quais ofertas dão mais margem',
                      'quais clientes valem mais a pena',
                      'quais produtos drenam energia',
                      'onde sua empresa está perdendo lucro',
                      'como pensar em crescimento com margem, não apenas faturamento',
                    ].map((b) => (
                      <li
                        key={b}
                        className={`before:text-gold relative pl-4.5 before:absolute before:left-0 before:content-['›']`}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* C — Clareza de Posicionamento */}
              <Reveal
                className={`grid grid-cols-1 items-start gap-9 border-t ${hairline} py-11.5 md:grid-cols-[130px_1fr_1fr]`}
              >
                <div className="text-[60px] leading-[0.8] font-extrabold tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_#f0c68c] md:text-[84px]">
                  C
                </div>
                <div>
                  <span className="text-rose mb-2 block text-xs font-semibold tracking-[0.16em] uppercase">
                    Clareza de posicionamento
                  </span>
                  <h3 className="text-[1.55rem] font-semibold tracking-[-0.02em]">
                    Clareza de Posicionamento
                  </h3>
                </div>
                <div className={`text-[1.02rem] leading-[1.6] font-light ${ink2}`}>
                  <p>Empresas genéricas competem por preço.</p>
                  <p className="mt-3">
                    Se o mercado não entende por que você é diferente, ele compara você com qualquer
                    outra opção.
                  </p>
                  <p className={`mt-4 font-light ${ink2}`}>
                    Você vai aprender a construir uma mensagem mais clara sobre:
                  </p>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {[
                      'quem você atende',
                      'que dor resolve',
                      'qual resultado entrega',
                      'por que sua empresa é diferente',
                      'por que o cliente deveria pagar mais por você',
                    ].map((b) => (
                      <li
                        key={b}
                        className={`before:text-gold relative pl-4.5 before:absolute before:left-0 before:content-['›']`}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* E — Exposição Estratégica do Founder */}
              <Reveal
                className={`grid grid-cols-1 items-start gap-9 border-t border-b ${hairline} py-11.5 md:grid-cols-[130px_1fr_1fr]`}
              >
                <div className="text-[60px] leading-[0.8] font-extrabold tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_#f0c68c] md:text-[84px]">
                  E
                </div>
                <div>
                  <span className="text-rose mb-2 block text-xs font-semibold tracking-[0.16em] uppercase">
                    Exposição estratégica do founder
                  </span>
                  <h3 className="text-[1.55rem] font-semibold tracking-[-0.02em]">
                    Exposição Estratégica do Founder
                  </h3>
                </div>
                <div className={`text-[1.02rem] leading-[1.6] font-light ${ink2}`}>
                  <p>
                    Em empresas pequenas e médias, o fundador é um dos maiores ativos de confiança.
                  </p>
                  <p className="mt-3">Mas muitos empresários ainda se escondem atrás da marca.</p>
                  <p className="mt-4 font-semibold text-[#fdfbf7]">
                    Founder Led Growth não é virar influencer.
                  </p>
                  <p className="mt-2">
                    É usar a voz, a visão e a autoridade do fundador para gerar confiança, atrair
                    oportunidades e aumentar a percepção de valor da empresa.
                  </p>
                  <p className="mt-4">
                    Você vai aprender como transformar sua presença em um canal de crescimento.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* S — Sistema de Aquisição */}
            <Reveal
              className={`grid grid-cols-1 items-start gap-9 border-t ${hairline} py-11.5 md:grid-cols-[130px_1fr_1fr]`}
            >
              <div className="text-[60px] leading-[0.8] font-extrabold tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_#f0c68c] md:text-[84px]">
                S
              </div>
              <div>
                <span className="text-rose mb-2 block text-xs font-semibold tracking-[0.16em] uppercase">
                  Sistema de aquisição
                </span>
                <h3 className="text-[1.55rem] font-semibold tracking-[-0.02em]">
                  Sistema de Aquisição
                </h3>
              </div>
              <div className={`text-[1.02rem] leading-[1.6] font-light ${ink2}`}>
                <p>Empresa que depende de um único canal vive em risco.</p>
                <p className="mt-3 font-semibold text-[#fdfbf7]">Indicação é ótima.</p>
                <p className="mt-2">Mas indicação sem estratégia é instável.</p>
                <p className={`mt-4 font-light ${ink2}`}>
                  Você vai aprender como pensar em canais de aquisição além do improviso:
                </p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {[
                    'conteúdo',
                    'parcerias',
                    'eventos',
                    'relacionamento',
                    'tráfego',
                    'base própria',
                    'comunidade',
                    'indicação estruturada',
                  ].map((b) => (
                    <li
                      key={b}
                      className={`before:text-gold relative pl-4.5 before:absolute before:left-0 before:content-['›']`}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">A pergunta não é apenas "como vender mais?".</p>
                <p className="mt-2">A pergunta é:</p>
                <p className="mt-1 font-semibold text-[#fdfbf7]">
                  quais canais sua empresa precisa construir para parar de depender da sorte?
                </p>
              </div>
            </Reveal>

            {/* S — Social Proof, Reputação e Confiança */}
            <Reveal
              className={`grid grid-cols-1 items-start gap-9 border-t ${hairline} py-11.5 md:grid-cols-[130px_1fr_1fr]`}
            >
              <div className="text-[60px] leading-[0.8] font-extrabold tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_#f0c68c] md:text-[84px]">
                S
              </div>
              <div>
                <span className="text-rose mb-2 block text-xs font-semibold tracking-[0.16em] uppercase">
                  Social proof e reputação
                </span>
                <h3 className="text-[1.55rem] font-semibold tracking-[-0.02em]">
                  Social Proof, Reputação e Confiança
                </h3>
              </div>
              <div className={`text-[1.02rem] leading-[1.6] font-light ${ink2}`}>
                <p>Quanto maior o ticket, maior a necessidade de confiança.</p>
                <p className="mt-3">
                  O cliente precisa de provas para acreditar que sua empresa é a escolha certa.
                </p>
                <p className={`mt-4 font-light ${ink2}`}>
                  Você vai aprender a organizar e usar melhor:
                </p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {[
                    'cases',
                    'depoimentos',
                    'números',
                    'histórias de clientes',
                    'bastidores',
                    'autoridade',
                    'reputação',
                    'provas de entrega',
                  ].map((b) => (
                    <li
                      key={b}
                      className={`before:text-gold relative pl-4.5 before:absolute before:left-0 before:content-['›']`}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Porque quanto menos prova você mostra, mais desconto o cliente pede.
                </p>
              </div>
            </Reveal>

            {/* O — Oportunidades por Comunidade e Eventos */}
            <Reveal
              className={`grid grid-cols-1 items-start gap-9 border-t ${hairline} py-11.5 md:grid-cols-[130px_1fr_1fr]`}
            >
              <div className="text-[60px] leading-[0.8] font-extrabold tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_#f0c68c] md:text-[84px]">
                O
              </div>
              <div>
                <span className="text-rose mb-2 block text-xs font-semibold tracking-[0.16em] uppercase">
                  Oportunidades por comunidade e eventos
                </span>
                <h3 className="text-[1.55rem] font-semibold tracking-[-0.02em]">
                  Oportunidades por Comunidade e Eventos
                </h3>
              </div>
              <div className={`text-[1.02rem] leading-[1.6] font-light ${ink2}`}>
                <p>Nem todo crescimento nasce de campanha.</p>
                <p className="mt-3">Muito crescimento nasce de uma conversa certa.</p>
                <div className={`mt-4 flex flex-col gap-1 ${ink2}`}>
                  {[
                    'Uma indicação.',
                    'Uma parceria.',
                    'Um evento.',
                    'Uma comunidade.',
                    'Uma mesa.',
                    'Um relacionamento que abre uma nova porta.',
                  ].map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <p className="mt-4">
                  Você vai entender como ambientes, comunidades e eventos podem se tornar canais
                  estratégicos de crescimento.
                </p>
                <p className="mt-3">
                  Porque a oportunidade que você procura talvez esteja em uma conversa que você
                  ainda não teve.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-13.5 flex justify-center">
              <a
                href="https://inlead.digital/sdwhub"
                className={`${btnPrimary} px-8.5 text-[16px]`}
              >
                QUERO APLICAR PARA O TREINAMENTO →
              </a>
            </Reveal>
          </div>
        </section>

        {/* Treinadores */}
        <section
          id="treinadores"
          className="bg-[linear-gradient(165deg,rgba(73,43,146,0.30)_0%,rgba(60,22,93,0.14)_100%)] py-24"
        >
          <div className="mx-auto max-w-285 px-7">
            <Reveal className="mb-7.5">
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase">
                Quem vai te treinar
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.1] font-bold tracking-tight">
                Dois construtores. Uma mesa só.
              </h2>
            </Reveal>
            <div className="flex flex-col gap-0">
              <Reveal
                className={`grid items-center gap-8 border-t py-10 first:border-t-0 first:pt-0 md:grid-cols-[0.9fr_1.1fr] ${hairline}`}
              >
                <div className="relative flex items-end justify-center overflow-hidden">
                  <SpeakersImageMarcel
                    width={500}
                    height={625}
                    className="block h-auto w-[60%] self-end rounded-xl object-cover object-top drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
                  />
                </div>
                <div>
                  <div className="text-[1.4rem] font-bold tracking-[-0.02em]">Marcel Roxo</div>
                  <div className="text-gold mb-2.5 text-[0.95rem] font-medium">
                    Construtor de negócios, eventos e ecossistemas
                  </div>
                  <p className={`text-base leading-[1.6] font-light ${ink2}`}>
                    Não ensina sobre crescimento — constrói ecossistemas na prática. Marketing,
                    educação, eventos, comunidades e autoridade. Crescimento acontece por ambiente,
                    acesso e relacionamento.
                  </p>
                </div>
              </Reveal>
              <Reveal
                className={`grid items-center gap-8 border-t py-10 md:grid-cols-[0.9fr_1.1fr] ${hairline}`}
              >
                <div className="relative flex items-end justify-center overflow-hidden">
                  <SpeakersImageLara
                    width={500}
                    height={625}
                    className="block h-auto w-[60%] self-end rounded-xl object-cover object-top drop-shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
                  />
                </div>
                <div>
                  <div className="text-[1.4rem] font-bold tracking-[-0.02em]">Lara Finochio</div>
                  <div className="text-gold mb-2.5 text-[0.95rem] font-medium">
                    Transforma comunicação em autoridade
                  </div>
                  <p className={`text-base leading-[1.6] font-light ${ink2}`}>
                    Comunicação como ferramenta de posicionamento, influência e venda. Carreira em
                    Band, Record e SBT — e depois Joel Jota, Grupo Primo e Moving Girls. Traz a
                    camada que falta: comunicar melhor o próprio valor.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-285 px-7">
          {/* Para quem */}
          <section className="py-24">
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal
                className={`rounded-[22px] border ${hairline} bg-[linear-gradient(160deg,rgba(73,43,146,0.35),rgba(15,14,34,0.2))] p-8.5`}
              >
                <h3 className="text-gold mb-1.5 text-[1.3rem] font-bold">Para quem é</h3>
                <p className={`text-[0.98rem] font-light ${ink2}`}>
                  Empresários e donos de negócio que:
                </p>
                <ul className="mt-4.5 flex flex-col gap-3">
                  {PARA_QUEM_SIM.map((t) => (
                    <li
                      key={t}
                      className={`relative pl-7 text-base leading-[1.45] font-light ${ink2} before:text-gold before:absolute before:left-0 before:font-bold before:content-['✓']`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className={`rounded-[22px] border ${hairline} p-8.5`}>
                <h3 className="mb-1.5 text-[1.3rem] font-bold">Para quem não é</h3>
                <p className={`text-[0.98rem] font-light ${ink2}`}>
                  Este treinamento não é para quem:
                </p>
                <ul className="mt-4.5 flex flex-col gap-3">
                  {PARA_QUEM_NAO.map((t) => (
                    <li
                      key={t}
                      className={`relative pl-7 text-base leading-[1.45] font-light ${ink2} before:text-rose before:absolute before:left-0 before:font-bold before:content-['✕']`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>

          <div className={`h-px border-t ${hairline}`} />
        </div>

        <div className="mx-auto max-w-285 px-7">
          {/* Takeaways */}
          <section className="py-24">
            <Reveal className="mb-7.5">
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase">
                O que você vai levar do treinamento?
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.1] font-bold tracking-tight">
                Mais clareza sobre o seu próximo passo.
              </h2>
            </Reveal>
            <Reveal as="div" className="grid grid-cols-1 gap-x-10 [counter-reset:t] md:grid-cols-2">
              {TAKEAWAYS.map((t) => (
                <div
                  key={t}
                  className={`flex items-start gap-3.5 border-t ${hairline} before:text-gold py-4.5 text-[1.04rem] before:pt-0.5 before:text-[0.9rem] before:font-bold before:content-[counter(t,decimal-leading-zero)] before:[counter-increment:t]`}
                >
                  {t}
                </div>
              ))}
            </Reveal>
            <Reveal className="mt-10 flex justify-center">
              <a href="https://inlead.digital/sdwhub" className={btnPrimary}>
                QUERO APLICAR PARA O TREINAMENTO
              </a>
            </Reveal>
          </section>

          <div className={`h-px border-t ${hairline}`} />
        </div>

        {/* Statement — crescimento não é só trabalhar mais */}
        <section className={`border-t ${hairline}`}>
          <div className="mx-auto max-w-285 px-7 py-20">
            <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
              <p className="text-[clamp(1.4rem,2.8vw,2.1rem)] leading-tight font-bold tracking-[-0.02em]">
                O crescimento da sua empresa pode não estar em trabalhar mais.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'Pode estar em ajustar o modelo.',
                  'Comunicar melhor.',
                  'Criar canais.',
                  'Construir reputação.',
                  'Aparecer com mais autoridade.',
                  'E estar nos ambientes certos.',
                ].map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3.5 text-[1.05rem] leading-[1.45] ${ink2}`}
                  >
                    <CheckIcon className="text-gold size-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="aplicar"
          className="mx-7 my-10 overflow-hidden rounded-[36px] px-8 py-22.5"
          style={{
            background:
              'linear-gradient(115deg,#3c165d 0%,#492b92 30%,#6c2164 60%,#843558 80%,#0f96ab 130%)',
          }}
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.06] font-extrabold tracking-[-0.03em]">
                Inscreva-se gratuitamente no Método ACESSO.
              </h2>
              <p className="mt-5.5 text-[1.1rem] font-light text-white/85">
                Uma imersão para empresários que querem transformar margem, posicionamento,
                aquisição e relacionamento em crescimento real.
              </p>
            </div>
            <CtaDeadline btnClassName={`${btnPrimary} px-8.5 text-[16px]`} />
          </div>
        </section>

        <div className="mx-auto mt-12 max-w-285 px-7">
          {/* FAQ */}
          <section id="faq" className="pb-24 text-center">
            <Reveal className="mx-auto mb-10 max-w-180">
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase">
                Dúvidas
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.1] font-bold tracking-tight">
                Perguntas frequentes
              </h2>
            </Reveal>
            <div className="text-left">
              <Faq items={FAQ} variant="dark" accent="gold" />
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mx-auto max-w-285 px-7 pt-13.5 pb-15">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Logo variant="acesso-branco" className="h-16 w-auto opacity-90" />
            <div className={`flex gap-6 text-[13.5px] ${ink2}`}>
              <a href="#metodo" className="hover:text-gold">
                O Método
              </a>
              <a href="#ativos" className="hover:text-gold">
                Os 6 ativos
              </a>
              <a href="#treinadores" className="hover:text-gold">
                Treinadores
              </a>
              <a href="https://inlead.digital/sdwhub" className="hover:text-gold">
                Aplicar
              </a>
            </div>
            <div className={`mt-2 w-full text-[12.5px] ${ink3}`}>
              © 2026 Método ACESSO · uma iniciativa SDW.hub — Marcel Roxo &amp; Lara Finochio.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
