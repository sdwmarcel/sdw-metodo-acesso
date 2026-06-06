import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import {
  ATIVOS,
  PARA_QUEM_SIM,
  PARA_QUEM_NAO,
  PROBLEMAS,
  FAQ,
  TAKEAWAYS,
} from '@/lib/content';

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
const btnGhost =
  'inline-flex items-center gap-2 rounded-pill border-[1.5px] border-[rgba(240,198,140,0.16)] px-7 py-3.5 text-[14.5px] font-semibold transition hover:border-gold hover:text-gold';

const ink2 = 'text-[rgba(253,251,247,0.66)]';
const ink3 = 'text-[rgba(253,251,247,0.42)]';
const hairline = 'border-[rgba(240,198,140,0.16)]';

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
      <div className="relative z-[2]">
        {/* Header */}
        <header
          className={`sticky top-0 z-50 border-b ${hairline} bg-[rgba(15,14,34,0.6)] backdrop-blur-[14px]`}
        >
          <nav className="mx-auto flex max-w-[1140px] items-center justify-between px-7 py-4">
            <a href="#" aria-label="SDW.hub — início">
              <Logo variant="gold" className="h-6 w-auto" />
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
            <a href="#aplicar" className={btnPrimary}>
              QUERO APLICAR
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-[1140px] px-7">
          {/* Hero */}
          <section className="grid items-center gap-3 pt-2 pb-6 md:gap-12 md:pt-20 md:pb-[70px] md:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="md:-mt-20">
                <span
                  className={`mb-2 md:mb-[26px] inline-flex items-center gap-2.5 rounded-pill border ${hairline} bg-[rgba(240,198,140,0.12)] px-4 py-2 text-[12.5px] font-semibold text-gold before:size-[7px] before:rounded-full before:bg-gold`}
                >
                  Treinamento gratuito · Método ACESSO
                </span>
                <h1 className="text-[clamp(2.4rem,4vw,2.8rem)] font-extrabold leading-[1.0] tracking-[-0.035em]">
                  O crescimento da sua empresa não travou por falta de{' '}
                  <span className="script">esforço</span>.
                </h1>
                <p
                  className={`mt-2 max-w-[520px] text-[1rem] font-light leading-[1.55] line-clamp-2 md:mt-6 md:text-[1rem] md:line-clamp-none ${ink2}`}
                >
                  <strong className="font-semibold text-[#fdfbf7]">
                    Travou por falta de margem, posicionamento, canais e
                    ambientes certos.
                  </strong>{' '}
                  Um treinamento gratuito para empresários que já faturam, mas
                  sentem que poderiam crescer mais, vender melhor e construir
                  uma empresa mais desejada pelo mercado.
                </p>
                <div className="mt-4 flex flex-wrap gap-3.5 md:mt-8">
                  <a href="#aplicar" className={btnPrimary}>
                    QUERO APLICAR PARA O TREINAMENTO
                  </a>
                  <a href="#ativos" className={btnGhost}>
                    VER OS 6 ATIVOS
                  </a>
                </div>
                <p className={`hidden md:block mt-[22px] text-[13px] ${ink3}`}>
                  Gratuito · para quem fatura acima de R$ 300 mil/ano
                </p>
              </div>
            </Reveal>
            <Reveal
              className={`relative order-first md:order-none border-b md:border-b-0 ${hairline}`}
            >
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
                className="mx-auto block h-[36dvh] w-full object-cover object-top drop-shadow-[0_24px_40px_rgba(0,0,0,0.4)] md:h-auto md:max-w-[600px]"
              />
              <div
                className={`absolute bottom-1.5 left-0 z-[3] rounded-[14px] border ${hairline} bg-[rgba(15,14,34,0.7)] px-4 py-3 text-[12.5px] backdrop-blur-[8px]`}
              >
                Com <b className="font-semibold text-gold">Marcel Roxo</b> &amp;{' '}
                <b className="font-semibold text-gold">Lara Finochio</b>
              </div>
            </Reveal>
          </section>

          <div className={`hidden md:block -mt-18 h-px border-t ${hairline}`} />

          {/* Problema */}
          <section className="grid items-center gap-12 py-24 md:grid-cols-2">
            <Reveal>
              <p className="text-[clamp(1.6rem,3vw,2.3rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
                Sua empresa cresceu até aqui. Mas agora existe uma sensação
                incômoda:{' '}
                <em className="not-italic text-gold">
                  o crescimento ficou mais pesado.
                </em>
              </p>
            </Reveal>
            <Reveal>
              <ul className="flex flex-col gap-3.5">
                {PROBLEMAS.map((p) => (
                  <li
                    key={p}
                    className={`relative pl-6 text-[1.06rem] font-light ${ink2} before:absolute before:left-0 before:font-semibold before:text-rose before:content-['—']`}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <div className={`h-px border-t ${hairline}`} />

          {/* Método (intro) */}
          <section id="metodo" className="py-24">
            <Reveal className="max-w-[720px]">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                O que é o Método ACESSO
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                O que trouxe sua empresa até aqui pode não levar para o próximo
                nível.
              </h2>
              <p className={`mt-4 text-[1.1rem] font-light ${ink2}`}>
                Uma metodologia para empresários destravarem crescimento
                construindo os ativos que tornam uma empresa mais desejada,
                lucrativa e bem posicionada — em vez de crescer só no esforço.
              </p>
            </Reveal>
          </section>
        </main>

        {/* 6 ativos — editorial rows */}
        <section
          id="ativos"
          className="bg-[linear-gradient(165deg,rgba(73,43,146,0.30)_0%,rgba(60,22,93,0.14)_100%)] py-24"
        >
          <div className="mx-auto max-w-[1140px] px-7">
            <Reveal className="mb-[54px] max-w-[720px]">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                A · C · E · S · S · O
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                Os 6 ativos do Método ACESSO.
              </h2>
            </Reveal>
            <div>
              {ATIVOS.map((a, i) => (
                <Reveal
                  key={i}
                  delay={(i % 4) * 70}
                  className={`grid grid-cols-1 items-start gap-9 border-t ${hairline} py-[46px] md:grid-cols-[130px_1fr_1fr] ${i === ATIVOS.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="text-[60px] font-extrabold leading-[0.8] tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_#f0c68c] md:text-[84px]">
                    {a.letter}
                  </div>
                  <div>
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-rose">
                      {a.tag}
                    </span>
                    <h3 className="text-[1.55rem] font-semibold tracking-[-0.02em]">
                      {a.title}
                    </h3>
                  </div>
                  <div>
                    <p
                      className={`text-[1.02rem] font-light leading-[1.6] ${ink2}`}
                    >
                      {a.desc}
                    </p>
                    <ul className="mt-3.5 flex flex-col gap-2">
                      {a.bullets.map((b) => (
                        <li
                          key={b}
                          className={`relative pl-[18px] text-[0.96rem] font-light ${ink2} before:absolute before:left-0 before:text-gold before:content-['›']`}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1140px] px-7">
          {/* Para quem */}
          <section className="py-24">
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal
                className={`rounded-[22px] border ${hairline} bg-[linear-gradient(160deg,rgba(73,43,146,0.35),rgba(15,14,34,0.2))] p-[34px]`}
              >
                <h3 className="mb-1.5 text-[1.3rem] font-bold text-gold">
                  Para quem é
                </h3>
                <p className={`text-[0.98rem] font-light ${ink2}`}>
                  Empresários e donos de negócio que:
                </p>
                <ul className="mt-[18px] flex flex-col gap-3">
                  {PARA_QUEM_SIM.map((t) => (
                    <li
                      key={t}
                      className={`relative pl-7 text-base font-light leading-[1.45] ${ink2} before:absolute before:left-0 before:font-bold before:text-gold before:content-['✓']`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className={`rounded-[22px] border ${hairline} p-[34px]`}>
                <h3 className="mb-1.5 text-[1.3rem] font-bold">
                  Para quem não é
                </h3>
                <p className={`text-[0.98rem] font-light ${ink2}`}>
                  Este treinamento não é para quem:
                </p>
                <ul className="mt-[18px] flex flex-col gap-3">
                  {PARA_QUEM_NAO.map((t) => (
                    <li
                      key={t}
                      className={`relative pl-7 text-base font-light leading-[1.45] ${ink2} before:absolute before:left-0 before:font-bold before:text-rose before:content-['✕']`}
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

        {/* Treinadores */}
        <section
          id="treinadores"
          className="bg-[linear-gradient(165deg,rgba(73,43,146,0.30)_0%,rgba(60,22,93,0.14)_100%)] py-24"
        >
          <div className="mx-auto max-w-[1140px] px-7">
            <Reveal className="mb-[30px]">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Quem vai te treinar
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                Dois construtores. Uma mesa só.
              </h2>
            </Reveal>
            <div className="grid items-center gap-12 md:grid-cols-[0.82fr_1.18fr]">
              <Reveal className="relative">
                <div
                  aria-hidden
                  className="absolute inset-[auto_0_0_0] h-[70%] blur-[16px]"
                  style={{
                    background:
                      'radial-gradient(70% 80% at 50% 100%, rgba(73,43,146,.5), transparent 75%)',
                  }}
                />
                <SpeakersImage
                  width={500}
                  height={625}
                  className="relative block h-auto w-full drop-shadow-[0_24px_44px_rgba(0,0,0,0.5)]"
                />
              </Reveal>
              <div>
                <Reveal
                  className={`border-t ${hairline} py-6 first:border-t-0 first:pt-0`}
                >
                  <div className="text-[1.4rem] font-bold tracking-[-0.02em]">
                    Marcel Roxo
                  </div>
                  <div className="mb-2.5 text-[0.95rem] font-medium text-gold">
                    Construtor de negócios, eventos e ecossistemas
                  </div>
                  <p className={`text-base font-light leading-[1.6] ${ink2}`}>
                    Não ensina sobre crescimento — constrói ecossistemas na
                    prática. Marketing, educação, eventos, comunidades e
                    autoridade. Crescimento acontece por ambiente, acesso e
                    relacionamento.
                  </p>
                  <div className="mt-3.5 flex flex-wrap gap-7">
                    {[
                      ['163mil', 'num evento online'],
                      ['10mil+', 'participantes no SDW'],
                      ['154', 'speakers reunidos'],
                    ].map(([n, l]) => (
                      <div key={l}>
                        <b className="block text-[1.4rem] font-extrabold tracking-[-0.02em] text-gold">
                          {n}
                        </b>
                        <span className={`text-xs ${ink3}`}>{l}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal className={`border-t ${hairline} py-6`}>
                  <div className="text-[1.4rem] font-bold tracking-[-0.02em]">
                    Lara Finochio
                  </div>
                  <div className="mb-2.5 text-[0.95rem] font-medium text-gold">
                    Transforma comunicação em autoridade
                  </div>
                  <p className={`text-base font-light leading-[1.6] ${ink2}`}>
                    Comunicação como ferramenta de posicionamento, influência e
                    venda. Carreira em Band, Record e SBT — e depois Joel Jota,
                    Grupo Primo e Moving Girls. Traz a camada que falta:
                    comunicar melhor o próprio valor.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1140px] px-7">
          <div className={`h-px border-t ${hairline}`} />

          {/* Takeaways */}
          <section className="py-24">
            <Reveal className="mb-[30px]">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                O que você vai levar
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                Mais clareza sobre o seu próximo passo.
              </h2>
            </Reveal>
            <Reveal
              as="div"
              className="grid grid-cols-1 gap-x-10 [counter-reset:t] md:grid-cols-2"
            >
              {TAKEAWAYS.map((t) => (
                <div
                  key={t}
                  className={`flex items-start gap-3.5 border-t ${hairline} py-[18px] text-[1.04rem] before:pt-0.5 before:text-[0.9rem] before:font-bold before:text-gold before:[counter-increment:t] before:content-[counter(t,decimal-leading-zero)]`}
                >
                  {t}
                </div>
              ))}
            </Reveal>
          </section>

          {/* FAQ */}
          <section id="faq" className="pb-24 text-center">
            <Reveal className="mx-auto mb-10 max-w-[720px]">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Dúvidas
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                Perguntas frequentes
              </h2>
            </Reveal>
            <div className="text-left">
              <Faq items={FAQ} variant="dark" accent="gold" />
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <section
          id="aplicar"
          className="mx-7 my-10 overflow-hidden rounded-[36px] px-8 py-[90px] text-center"
          style={{
            background:
              'linear-gradient(115deg,#3c165d 0%,#492b92 30%,#6c2164 60%,#843558 80%,#0f96ab 130%)',
          }}
        >
          <h2 className="mx-auto max-w-[780px] text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
            Inscreva-se gratuitamente no Método ACESSO.
          </h2>
          <p className="mx-auto mt-[22px] max-w-[560px] text-[1.1rem] font-light text-white/85">
            Uma imersão para empresários que querem transformar margem,
            posicionamento, aquisição e relacionamento em crescimento real.
          </p>
          <a
            href="#aplicar"
            className={`mt-9 ${btnPrimary} px-[34px] text-[16px]`}
          >
            QUERO APLICAR PARA O TREINAMENTO →
          </a>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-[1140px] px-7 pt-[54px] pb-[60px]">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Logo variant="gold" className="h-[22px] w-auto opacity-90" />
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
              <a href="#aplicar" className="hover:text-gold">
                Aplicar
              </a>
            </div>
            <div className={`mt-2 w-full text-[12.5px] ${ink3}`}>
              © 2026 Método ACESSO · uma iniciativa SDW.hub — Marcel Roxo &amp;
              Lara Finochio.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
