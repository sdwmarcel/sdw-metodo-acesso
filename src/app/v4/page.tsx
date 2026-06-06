import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import { ATIVOS, PARA_QUEM_SIM, PARA_QUEM_NAO, FAQ } from '@/lib/content';

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
const TAGS = [
  'Margem',
  'Posicionamento',
  'Autoridade',
  'Aquisição',
  'Confiança',
  'Conexão',
];

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
        className={`sticky top-0 z-50 border-b ${line} bg-[rgba(37,10,22,0.7)] backdrop-blur-[12px]`}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-7 py-4">
          <a href="#" aria-label="SDW.hub — início">
            <Logo variant="gold" className="h-6 w-auto" />
          </a>
          <div className="flex items-center gap-[22px]">
            <span
              className={`hidden items-center gap-2 text-[13px] font-medium ${ink2} before:size-2 before:animate-pulse before:rounded-full before:bg-gold sm:flex`}
            >
              Inscrições gratuitas abertas
            </span>
            <a
              href="#aplicar"
              className={`${btnGold} rounded-pill px-5 py-2.5 text-sm`}
            >
              QUERO APLICAR
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-7 pt-6 pb-3 md:pt-14 md:pb-[30px]">
        <div
          className={`flex flex-wrap items-start justify-between gap-4 border-b ${line} pb-[18px] text-[13px] font-semibold uppercase tracking-[0.16em] text-gold`}
        >
          <span>Método ACESSO</span>
          <span>Treinamento gratuito</span>
          <span>Para empresários</span>
        </div>
        <div className="mt-3 grid items-center gap-4 md:mt-[30px] md:gap-[30px] md:grid-cols-[1fr_1fr]">
          <div>
            <Reveal
              as="h1"
              className="text-[clamp(2.4rem,4vw,2.8rem)] font-extrabold leading-[1.0] tracking-[-0.035em]"
            >
              O crescimento da sua empresa não travou por falta de{' '}
              <em className="font-semibold normal-case tracking-[-0.02em] text-gold italic">
                esforço
              </em>
              .
            </Reveal>
            <Reveal
              as="div"
              className={`mt-3 max-w-[480px] text-[1.12rem] md:mt-[26px] md:text-[1rem] ${ink2}`}
            >
              <p className="line-clamp-3 md:line-clamp-none">
                <strong className="text-[16px] font-bold text-[#fdeede]">
                  Travou por falta de margem, posicionamento, canais e ambientes
                  certos.
                </strong>{' '}
                Um treinamento gratuito para empresários que já faturam, mas
                querem crescer mais, vender melhor e construir uma empresa mais
                desejada pelo mercado.
              </p>
              <div className="mt-3 md:mt-[22px]">
                <a href="#aplicar" className={`${btnGold} rounded-pill`}>
                  QUERO APLICAR PARA O TREINAMENTO
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal
            className={`relative order-first md:order-none border-b md:border-b-0 ${line}`}
          >
            <span className="absolute top-2 right-0 z-[2] rotate-[4deg] rounded-[8px] bg-gold px-4 py-2.5 text-[13px] font-extrabold tracking-[0.04em] text-purple-dark shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
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
        className={`mt-[-0px] sm:mt-[-30px] overflow-hidden border-y-[1.5px] ${line} py-4 whitespace-nowrap`}
      >
        <div className="inline-flex animate-marquee gap-[34px] text-[1.4rem] font-bold uppercase text-gold">
          <span className="inline-flex items-center gap-[34px] after:text-base after:content-['✦']">
            Margem · Posicionamento · Founder · Aquisição · Reputação ·
            Comunidade
          </span>
          <span className="inline-flex items-center gap-[34px] after:text-base after:content-['✦']">
            Margem · Posicionamento · Founder · Aquisição · Reputação ·
            Comunidade
          </span>
        </div>
      </div>

      {/* Problema */}
      <section className="mx-auto max-w-[1200px] px-7 py-[90px]">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold leading-[1.18] tracking-[-0.025em]">
              O que trouxe sua empresa até aqui pode{' '}
              <em className="not-italic text-gold">
                não levar para o próximo nível.
              </em>
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Mais esforço',
                'Mais posts',
                'Mais indicação',
                'Mais reunião',
                'Mais urgência',
                'Mais improviso',
              ].map((w) => (
                <span
                  key={w}
                  className={`rounded-pill border ${line} px-[18px] py-2.5 text-[0.98rem] ${ink2}`}
                >
                  {w}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 ativos — setlist */}
      <section className="bg-[linear-gradient(160deg,rgba(60,15,46,0.55)_0%,rgba(105,41,41,0.22)_100%)] py-[90px]">
        <div className="mx-auto max-w-[1200px] px-7">
          <Reveal className="mb-[46px]">
            <div className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
              O método · A C E S S O
            </div>
            <h2 className="mt-3.5 text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Os 6 ativos que destravam crescimento.
            </h2>
          </Reveal>
          <div>
            {ATIVOS.map((a, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 80}
                className={`grid grid-cols-[54px_1fr] items-center gap-7 border-t ${line} py-7 transition-[padding] duration-300 hover:pl-3.5 last:border-b md:grid-cols-[90px_1fr_auto]`}
              >
                <div className="text-[2.6rem] font-extrabold leading-none text-gold">
                  {a.letter}
                </div>
                <div>
                  <h3 className="text-[clamp(1.3rem,2.6vw,1.9rem)] font-bold tracking-[-0.02em]">
                    {a.tag}
                  </h3>
                  <p className={`mt-1 max-w-[620px] text-base ${ink2}`}>
                    {a.title} {a.desc}
                  </p>
                </div>
                <span
                  className={`hidden whitespace-nowrap rounded-pill border ${line} px-[15px] py-[7px] text-xs font-semibold text-gold md:inline`}
                >
                  {TAGS[i]}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="mx-auto max-w-[1200px] px-7 py-[90px]">
        <Reveal className="mb-[46px]">
          <div className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
            Filtro
          </div>
          <h2 className="mt-3.5 text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
            Para quem é — e para quem não é.
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal
            className={`rounded-[18px] border ${line} bg-[rgba(240,198,140,0.07)] p-8`}
          >
            <h3 className="mb-4 text-[1.3rem] font-bold text-gold">
              Para quem é
            </h3>
            <ul className="flex flex-col gap-2.5">
              {PARA_QUEM_SIM.map((t) => (
                <li
                  key={t}
                  className={`relative pl-[26px] text-[0.99rem] ${ink2} before:absolute before:left-0 before:font-bold before:text-gold before:content-['✓']`}
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
                  className={`relative pl-[26px] text-[0.99rem] ${ink2} before:absolute before:left-0 before:font-bold before:text-[#e0708f] before:content-['✕']`}
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Treinadores */}
      <section className="bg-[linear-gradient(160deg,rgba(60,15,46,0.55)_0%,rgba(105,41,41,0.22)_100%)] py-[90px]">
        <div className="mx-auto max-w-[1200px] px-7">
          <Reveal className="mb-[46px]">
            <div className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
              Headliners
            </div>
            <h2 className="mt-3.5 text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Quem vai te treinar.
            </h2>
          </Reveal>
          <div className="grid items-center gap-11 md:grid-cols-[0.78fr_1.22fr]">
            <Reveal
              className={`relative flex min-h-[420px] items-end justify-center overflow-hidden rounded-[18px] border ${line} bg-[linear-gradient(160deg,#3c0f2e,#250a16)]`}
            >
              <SpeakersImage
                width={500}
                height={625}
                className="block h-auto w-[94%]"
              />
            </Reveal>
            <div>
              <Reveal
                className={`border-t ${line} py-[22px] first:border-t-0 first:pt-0`}
              >
                <div className="text-[1.5rem] font-extrabold tracking-[-0.02em]">
                  Marcel Roxo
                </div>
                <div className="mb-2.5 text-[0.95rem] font-semibold text-gold">
                  Construtor de negócios, eventos e ecossistemas
                </div>
                <p className={`text-base ${ink2}`}>
                  Transformou a Staage numa das maiores plataformas de marketing
                  do Brasil, fez um evento online com 163mil participantes e
                  criou o Santos Digital Week — 10mil+ pessoas, 150+ marcas, 154
                  speakers.
                </p>
              </Reveal>
              <Reveal className={`border-t ${line} py-[22px]`}>
                <div className="text-[1.5rem] font-extrabold tracking-[-0.02em]">
                  Lara Finochio
                </div>
                <div className="mb-2.5 text-[0.95rem] font-semibold text-gold">
                  Transforma comunicação em autoridade
                </div>
                <p className={`text-base ${ink2}`}>
                  Band, Record e SBT — comunicação ao vivo, sob pressão. Depois
                  Joel Jota, Grupo Primo e Moving Girls. Traz a camada que
                  falta: comunicar melhor o próprio valor.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1200px] px-7 py-[90px]">
        <Reveal className="mb-[46px] text-center">
          <div className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
            Dúvidas
          </div>
          <h2 className="mt-3.5 text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
            Ficou alguma dúvida?
          </h2>
        </Reveal>
        <Faq items={FAQ} variant="dark" accent="gold" />
      </section>

      {/* Final ticket */}
      <section id="aplicar" className="px-7 pt-10 pb-[84px]">
        <Reveal className="relative mx-auto max-w-[980px] rounded-[26px] bg-gold px-[50px] py-16 text-center text-purple-dark shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
          <span
            aria-hidden
            className="absolute top-1/2 -left-5 size-10 -translate-y-1/2 rounded-full bg-[#250a16]"
          />
          <span
            aria-hidden
            className="absolute top-1/2 -right-5 size-10 -translate-y-1/2 rounded-full bg-[#250a16]"
          />
          <div className="text-[13px] font-bold uppercase tracking-[0.2em] opacity-65">
            Vagas gratuitas · aplicação
          </div>
          <h2 className="mt-3.5 text-[clamp(2.1rem,5.4vw,3.8rem)] font-extrabold uppercase leading-none tracking-[-0.035em]">
            Aplique agora.
          </h2>
          <p className="mx-auto mt-[18px] max-w-[480px] text-[1.05rem] font-medium opacity-[0.78]">
            Inscreva-se gratuitamente no Método ACESSO e destrave o próximo
            nível da sua empresa.
          </p>
          <a
            href="#aplicar"
            className="mt-7 inline-flex items-center gap-2 rounded-pill bg-purple-dark px-[38px] py-[17px] text-[16px] font-bold text-gold transition hover:bg-[#2a0f44]"
          >
            QUERO APLICAR PARA O TREINAMENTO →
          </a>
        </Reveal>
      </section>

      {/* Footer */}
      <footer
        className={`mx-auto max-w-[1200px] border-t ${line} px-7 pt-[42px] pb-14`}
      >
        <div
          className={`flex flex-wrap items-center justify-between gap-5 text-[13px] ${ink2}`}
        >
          <Logo variant="gold" className="h-[22px] w-auto" />
          <div className="flex gap-[22px]">
            <a href="#" className="hover:text-gold">
              O Método
            </a>
            <a href="#aplicar" className="hover:text-gold">
              Aplicar
            </a>
            <a href="#" className="hover:text-gold">
              Treinadores
            </a>
          </div>
          <div className="mt-1.5 w-full text-[12px] text-[rgba(253,238,222,0.4)]">
            © 2026 Método ACESSO · uma iniciativa SDW.hub — Marcel Roxo &amp;
            Lara Finochio.
          </div>
        </div>
      </footer>
    </div>
  );
}
