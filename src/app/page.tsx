import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import { ATIVOS, PARA_QUEM_SIM, PARA_QUEM_NAO, PROBLEMAS, FAQ, TAKEAWAYS } from '@/lib/content';

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
      <div className="relative z-2">
        {/* Header */}
        <header
          className={`sticky top-0 z-50 border-b ${hairline} bg-[rgba(15,14,34,0.6)] backdrop-blur-[14px]`}
        >
          <nav className="mx-auto flex max-w-285 items-center justify-between px-7 py-4">
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
            <a href="https://inlead.digital/sdwhub/" className={btnPrimary}>
              QUERO APLICAR
            </a>
          </nav>
        </header>

        <main className="mx-auto max-w-285 px-7">
          {/* Hero */}
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
                  <a href="https://inlead.digital/sdwhub/" className={btnPrimary}>
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

        {/* Problema */}
        <section className="w-full bg-gold-soft py-24">
          <div className="mx-auto grid max-w-285 items-center gap-12 px-7 md:grid-cols-2">
            <Reveal>
              <p className="text-[clamp(1.6rem,3vw,2.3rem)] leading-tight font-semibold tracking-[-0.02em] text-indigo">
                Sua empresa cresceu até aqui. Mas agora existe uma sensação incômoda:{' '}
                <em className="italic text-purple">o crescimento ficou mais pesado.</em>
              </p>
            </Reveal>
            <Reveal>
              <ul className="flex flex-col gap-3.5">
                {PROBLEMAS.map((p) => (
                  <li
                    key={p}
                    className="relative pl-6 text-[1.06rem] font-light text-ink-soft before:absolute before:left-0 before:font-semibold before:text-rose before:content-['—']"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <div className="mx-auto max-w-285 px-7">
          <div className={`h-px border-t ${hairline}`} />

          {/* Método (intro) */}
          <section id="metodo" className="py-24">
            <Reveal className="max-w-180">
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase">
                O que é o Método ACESSO
              </span>
              <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.1] font-bold tracking-tight">
                O que trouxe sua empresa até aqui pode não levar para o próximo nível.
              </h2>
              <p className={`mt-4 text-[1.1rem] font-light ${ink2}`}>
                Uma metodologia para empresários destravarem crescimento construindo os ativos que
                tornam uma empresa mais desejada, lucrativa e bem posicionada — em vez de crescer só
                no esforço.
              </p>
            </Reveal>
          </section>
        </div>

        {/* 6 ativos — editorial rows */}
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
                Os 6 ativos do Método ACESSO.
              </h2>
            </Reveal>
            <div>
              {ATIVOS.map((a, i) => (
                <Reveal
                  key={i}
                  delay={(i % 4) * 70}
                  className={`grid grid-cols-1 items-start gap-9 border-t ${hairline} py-11.5 md:grid-cols-[130px_1fr_1fr] ${i === ATIVOS.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="text-[60px] leading-[0.8] font-extrabold tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_#f0c68c] md:text-[84px]">
                    {a.letter}
                  </div>
                  <div>
                    <span className="text-rose mb-2 block text-xs font-semibold tracking-[0.16em] uppercase">
                      {a.tag}
                    </span>
                    <h3 className="text-[1.55rem] font-semibold tracking-[-0.02em]">{a.title}</h3>
                  </div>
                  <div>
                    <p className={`text-[1.02rem] leading-[1.6] font-light ${ink2}`}>{a.desc}</p>
                    <ul className="mt-3.5 flex flex-col gap-2">
                      {a.bullets.map((b) => (
                        <li
                          key={b}
                          className={`relative pl-4.5 text-[0.96rem] font-light ${ink2} before:text-gold before:absolute before:left-0 before:content-['›']`}
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
            <div className="grid items-center gap-12 md:grid-cols-[0.82fr_1.18fr]">
              <Reveal className="relative">
                <div
                  aria-hidden
                  className="absolute inset-[auto_0_0_0] h-[70%] blur-lg"
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
                <Reveal className={`border-t ${hairline} py-6 first:border-t-0 first:pt-0`}>
                  <div className="text-[1.4rem] font-bold tracking-[-0.02em]">Marcel Roxo</div>
                  <div className="text-gold mb-2.5 text-[0.95rem] font-medium">
                    Construtor de negócios, eventos e ecossistemas
                  </div>
                  <p className={`text-base leading-[1.6] font-light ${ink2}`}>
                    Não ensina sobre crescimento — constrói ecossistemas na prática. Marketing,
                    educação, eventos, comunidades e autoridade. Crescimento acontece por ambiente,
                    acesso e relacionamento.
                  </p>
                  <div className="mt-3.5 flex flex-wrap gap-7">
                    {[
                      ['163mil', 'num evento online'],
                      ['10mil+', 'participantes no SDW'],
                      ['154', 'speakers reunidos'],
                    ].map(([n, l]) => (
                      <div key={l}>
                        <b className="text-gold block text-[1.4rem] font-extrabold tracking-[-0.02em]">
                          {n}
                        </b>
                        <span className={`text-xs ${ink3}`}>{l}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal className={`border-t ${hairline} py-6`}>
                  <div className="text-[1.4rem] font-bold tracking-[-0.02em]">Lara Finochio</div>
                  <div className="text-gold mb-2.5 text-[0.95rem] font-medium">
                    Transforma comunicação em autoridade
                  </div>
                  <p className={`text-base leading-[1.6] font-light ${ink2}`}>
                    Comunicação como ferramenta de posicionamento, influência e venda. Carreira em
                    Band, Record e SBT — e depois Joel Jota, Grupo Primo e Moving Girls. Traz a
                    camada que falta: comunicar melhor o próprio valor.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-285 px-7">
          <div className={`h-px border-t ${hairline}`} />

          {/* Takeaways */}
          <section className="py-24">
            <Reveal className="mb-7.5">
              <span className="text-gold text-xs font-semibold tracking-[0.22em] uppercase">
                O que você vai levar
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
          </section>

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

        {/* Final CTA */}
        <section
          id="aplicar"
          className="mx-7 my-10 overflow-hidden rounded-[36px] px-8 py-22.5 text-center"
          style={{
            background:
              'linear-gradient(115deg,#3c165d 0%,#492b92 30%,#6c2164 60%,#843558 80%,#0f96ab 130%)',
          }}
        >
          <h2 className="mx-auto max-w-195 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.06] font-extrabold tracking-[-0.03em]">
            Inscreva-se gratuitamente no Método ACESSO.
          </h2>
          <p className="mx-auto mt-5.5 max-w-140 text-[1.1rem] font-light text-white/85">
            Uma imersão para empresários que querem transformar margem, posicionamento, aquisição e
            relacionamento em crescimento real.
          </p>
          <a
            href="https://inlead.digital/sdwhub/"
            className={`mt-9 ${btnPrimary} px-8.5 text-[16px]`}
          >
            QUERO APLICAR PARA O TREINAMENTO →
          </a>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-285 px-7 pt-13.5 pb-15">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Logo variant="gold" className="h-5.5 w-auto opacity-90" />
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
              <a href="https://inlead.digital/sdwhub/" className="hover:text-gold">
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
