import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage, SpeakersImageLara, SpeakersImageMarcel } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import { ATIVOS, PARA_QUEM_SIM, PARA_QUEM_NAO, FAQ } from '@/lib/content';

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

export default function Page() {
  return (
    <div className="bg-paper text-ink min-h-dvh">
      <JsonLd data={courseJsonLd('/v2', DESC)} />

      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-295 items-center justify-between px-7 py-5.5">
          <a href="#" aria-label="SDW.hub — início">
            <Logo variant="acesso-branco" className="h-16 w-auto" />
          </a>
          <div className="hidden gap-7.5 text-sm font-medium text-white/85 md:flex">
            <a href="#ativos" className="hover:text-gold">
              O Método
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
            className={`${btnGold} px-5.5 py-2.75 text-sm`}
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
              <span className="rounded-pill before:bg-gold mb-2 inline-flex items-center gap-2.5 border border-white/20 bg-white/10 px-4.5 py-2.5 text-[13px] font-medium backdrop-blur-[8px] before:size-2 before:rounded-full before:shadow-[0_0_0_4px_rgba(240,198,140,0.3)] md:mb-[26px]">
                Treinamento gratuito · Método ACESSO
              </span>
              <h1 className="text-[clamp(2.4rem,4vw,2.8rem)] leading-none font-extrabold tracking-[-0.035em]">
                O crescimento da sua empresa não travou por falta de{' '}
                <em className="text-gold font-semibold not-italic">esforço</em>.
              </h1>
              <div className="mt-3 mb-4 block border-b border-white/25 md:hidden">
                <SpeakersImage
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
                <a
                  href="https://inlead.digital/sdwhub"
                  className={btnGold}
                >
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

      {/* Problema */}
      <section className="border-line border-y bg-white">
        <div className="mx-auto grid max-w-295 items-center gap-12 px-7 py-22.5 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.12] font-extrabold tracking-tight">
              O que trouxe sua empresa até aqui pode{' '}
              <em className="text-rose not-italic">não levar para o próximo nível.</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-ink-soft mb-4 text-[1.05rem] font-light">
              Muitas empresas boas ficam estagnadas tentando crescer com as mesmas alavancas:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Mais esforço',
                'Mais posts',
                'Mais indicação',
                'Mais reunião',
                'Mais urgência',
                'Mais improviso',
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-pill border-line bg-paper text-ink-soft border px-4.5 py-2.75 text-[0.96rem]"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 ativos cards */}
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
            {ATIVOS.map((a, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 80}
                className="border-line rounded-3xl border bg-white p-[30px] shadow-[0_8px_26px_rgba(27,25,60,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(27,25,60,0.13)]"
              >
                <div className="grad-brand mb-5 flex size-13.5 items-center justify-center rounded-2xl text-[1.5rem] font-extrabold text-white shadow-[0_10px_24px_rgba(73,43,146,0.3)]">
                  {a.letter}
                </div>
                <div className="text-rose text-[11px] font-semibold tracking-[0.14em] uppercase">
                  {a.tag}
                </div>
                <h3 className="my-1.5 text-[1.25rem] font-bold tracking-[-0.02em]">{a.title}</h3>
                <p className="text-ink-soft text-[0.98rem] leading-[1.55] font-light">{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem — split dark */}
      <section id="quem" className="bg-indigo text-white">
        <div className="mx-auto grid max-w-295 gap-6 px-7 py-24 md:grid-cols-2">
          <Reveal className="rounded-[24px] border border-[rgba(240,198,140,0.18)] bg-[linear-gradient(160deg,rgba(73,43,146,0.45),transparent)] p-[34px]">
            <h3 className="text-gold mb-4 text-[1.35rem] font-bold">Para quem é</h3>
            <ul className="flex flex-col gap-3">
              {PARA_QUEM_SIM.map((t) => (
                <li
                  key={t}
                  className="before:text-gold relative pl-7 text-base leading-[1.45] font-light text-white/[0.78] before:absolute before:left-0 before:font-bold before:content-['✓']"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-[24px] border border-[rgba(240,198,140,0.18)] p-[34px]">
            <h3 className="mb-4 text-[1.35rem] font-bold">Para quem não é</h3>
            <ul className="flex flex-col gap-3">
              {PARA_QUEM_NAO.map((t) => (
                <li
                  key={t}
                  className="before:text-rose relative pl-7 text-base leading-[1.45] font-light text-white/[0.78] before:absolute before:left-0 before:font-bold before:content-['✕']"
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
      <section id="faq" className="bg-[#f4e7d2] py-[104px]">
        <div className="mx-auto max-w-295 px-7">
          <Reveal className="mx-auto mb-[60px] max-w-[720px] text-center">
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
        className="grad-brand relative overflow-hidden px-7 py-[104px] text-center text-white"
      >
        <div
          aria-hidden
          className="bg-cyan absolute -top-[120px] -left-[60px] size-[380px] rounded-full opacity-40 blur-[60px]"
        />
        <div
          aria-hidden
          className="bg-gold absolute -right-[40px] -bottom-[140px] size-[320px] rounded-full opacity-25 blur-[60px]"
        />
        <h2 className="relative z-2 mx-auto max-w-[800px] text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.04] font-extrabold tracking-[-0.035em]">
          Inscreva-se gratuitamente no Método ACESSO.
        </h2>
        <p className="relative z-2 mx-auto mt-[22px] max-w-[540px] text-[1.1rem] font-light text-white/85">
          Transforme margem, posicionamento, aquisição e relacionamento em crescimento real.
        </p>
        <a
          href="https://inlead.digital/sdwhub"
          className={`relative z-2 mt-9 ${btnGold}`}
        >
          QUERO APLICAR PARA O TREINAMENTO →
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-indigo py-11.5 text-white/60">
        <div className="mx-auto flex max-w-295 flex-wrap items-center justify-between gap-5 px-7 text-[13.5px]">
          <Logo variant="acesso-branco" className="h-16 w-auto" />
          <div className="flex gap-5.5">
            <a href="#ativos" className="hover:text-gold">
              O Método
            </a>
            <a href="#quem" className="hover:text-gold">
              Para quem
            </a>
            <a href="#treinadores" className="hover:text-gold">
              Treinadores
            </a>
            <a
              href="https://inlead.digital/sdwhub"
              className="hover:text-gold"
            >
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
