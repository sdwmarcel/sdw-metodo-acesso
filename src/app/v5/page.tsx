import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import { ATIVOS, PARA_QUEM_SIM, PARA_QUEM_NAO, FAQ } from '@/lib/content';

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
const btnOutline =
  'inline-flex items-center gap-2 rounded-pill border-[1.5px] border-line bg-transparent px-7 py-3.5 text-[15px] font-semibold text-ink transition hover:border-rose hover:text-rose';

const k = 'text-xs font-semibold uppercase tracking-[0.2em] text-rose';
const secIntro = 'mx-auto mb-[70px] max-w-[680px] text-center';
const h2 =
  'mt-3.5 text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em]';

const NUMS = ['01', '02', '03', '04', '05', '06'];

const TRAINER_TAGS = [
  ['Staage', 'Santos Digital Week', 'The Advisory Board'],
  ['Band · Record · SBT', 'Grupo Primo', 'Moving Girls'],
];

export default function Page() {
  return (
    <div className="min-h-dvh bg-[#f6efe6] text-[#241a2e]">
      <JsonLd data={courseJsonLd('/v5', DESC)} />

      <header className="sticky top-0 z-50 border-b border-line bg-[rgba(246,239,230,0.82)] backdrop-blur-[12px]">
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-[30px] py-4">
          <a href="#" aria-label="SDW.hub — início">
            <Logo variant="purple" className="h-6 w-auto" />
          </a>
          <div className="hidden gap-[30px] text-sm font-medium text-[#5f5168] md:flex">
            <a href="#metodo" className="hover:text-rose">
              O Método
            </a>
            <a href="#treinadores" className="hover:text-rose">
              Treinadores
            </a>
            <a href="#faq" className="hover:text-rose">
              Dúvidas
            </a>
          </div>
          <a
            href="#aplicar"
            className={`${btnDark} px-[22px] py-[11px] text-sm`}
          >
            QUERO APLICAR
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-[30px] pt-4 pb-8 md:pt-[54px] md:pb-20">
        <div className="hidden md:flex mb-7 justify-between border-b border-line pb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#5f5168]">
          <span>Método ACESSO · Treinamento gratuito</span>
          <span>Para empresários</span>
        </div>
        <div className="grid items-center gap-5 md:gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal as="span" className={k}>
              Treinamento gratuito · Método ACESSO
            </Reveal>
            <Reveal
              as="h1"
              className="mt-2 text-[clamp(2.4rem,4vw,2.8rem)] font-extrabold leading-[1.0] tracking-[-0.035em] md:mt-3.5"
            >
              O crescimento da sua empresa não travou por falta de{' '}
              <span className="font-medium text-rose italic">esforço</span>.
            </Reveal>
            <Reveal
              as="p"
              className="mt-2 max-w-[480px] text-[1.18rem] font-light leading-[1.55] text-[#5f5168] line-clamp-2 md:mt-[22px] md:text-[1rem] md:line-clamp-none"
            >
              <strong className="font-semibold text-ink">
                Travou por falta de margem, posicionamento, canais e ambientes
                certos.
              </strong>{' '}
              Um treinamento gratuito para empresários que já faturam, mas
              sentem que poderiam crescer mais, vender melhor e construir uma
              empresa mais desejada pelo mercado.
            </Reveal>
            <Reveal className="mt-4 flex flex-wrap gap-3.5 md:mt-8">
              <a href="#aplicar" className={btnDark}>
                QUERO APLICAR PARA O TREINAMENTO
              </a>
              <a href="#metodo" className={btnOutline}>
                Conheça o método
              </a>
            </Reveal>
            <Reveal
              as="p"
              className="hidden md:block mt-[26px] text-sm text-[#5f5168]"
            >
              Com <b className="text-ink">Marcel Roxo</b> &amp;{' '}
              <b className="text-ink">Lara Finochio</b>
            </Reveal>
          </div>
          <Reveal className="grad-brand relative flex h-[38dvh] items-end justify-center overflow-hidden rounded-[24px] shadow-[0_30px_70px_rgba(36,27,46,0.22)] order-first md:order-none md:h-auto md:min-h-[480px]">
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
      <div className="flex flex-wrap justify-center gap-10 border-y border-line py-[30px] text-[13px] font-medium tracking-[0.04em] text-[#5f5168]">
        <span>
          <b className="font-bold text-ink">6</b> ativos de crescimento
        </span>
        <span>
          <b className="font-bold text-ink">2</b> treinadores construtores
        </span>
        <span>
          <b className="font-bold text-ink">R$300mil+</b> faturamento/ano
        </span>
        <span>
          <b className="font-bold text-ink">100%</b> gratuito
        </span>
      </div>

      {/* Problema */}
      <section className="bg-[#f1e3cb] py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-[30px] md:grid-cols-2">
          <Reveal>
            <p className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-[1.2] tracking-[-0.025em]">
              O que trouxe sua empresa até aqui pode{' '}
              <em className="not-italic text-rose">
                não levar para o próximo nível.
              </em>
            </p>
          </Reveal>
          <Reveal>
            <ul className="flex flex-col gap-3.5">
              {[
                'Você trabalha muito e depende da sua presença',
                'Depende demais de indicação para vender',
                'A comunicação não traduz o valor real da empresa',
                'Falta um canal de aquisição previsível',
                'Mesmo vendendo, poderia ter mais margem e clareza',
              ].map((t) => (
                <li
                  key={t}
                  className="relative pl-[26px] text-[1.05rem] font-light leading-[1.45] text-[#5f5168] before:absolute before:left-0 before:font-semibold before:text-rose before:content-['—']"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 6 ativos — alternating rows */}
      <section id="metodo" className="mx-auto max-w-[1180px] px-[30px] py-24">
        <Reveal className={secIntro}>
          <span className={k}>A · C · E · S · S · O</span>
          <h2 className={h2}>Os 6 ativos do Método ACESSO.</h2>
          <p className="mt-3.5 text-[1.1rem] font-light text-[#5f5168]">
            Sair do crescimento por esforço e construir o que torna a empresa
            mais desejada, lucrativa e bem posicionada.
          </p>
        </Reveal>
        <div>
          {ATIVOS.map((a, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 80}
              className="grid grid-cols-1 items-center gap-10 border-t border-line py-10 last:border-b md:grid-cols-[0.4fr_1fr]"
            >
              <div className="grad-brand bg-clip-text text-[clamp(4rem,9vw,7rem)] font-extrabold leading-[0.8] tracking-[-0.04em] text-transparent">
                {a.letter}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-rose">
                  {NUMS[i]} — {a.tag}
                </div>
                <h3 className="my-3 text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                  {a.title}
                </h3>
                <p className="max-w-[620px] text-[1.06rem] font-light leading-[1.6] text-[#5f5168]">
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section className="bg-[#f1e3cb] py-24">
        <div className="mx-auto max-w-[1180px] px-[30px]">
          <Reveal className={secIntro}>
            <span className={k}>Filtro</span>
            <h2 className={h2}>Para quem é — e para quem não é.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-[20px] border border-line bg-white p-[34px] shadow-[0_14px_36px_rgba(36,27,46,0.07)]">
              <h3 className="mb-4 text-[1.3rem] font-bold text-rose">
                Para quem é
              </h3>
              <ul className="flex flex-col gap-3">
                {PARA_QUEM_SIM.map((t) => (
                  <li
                    key={t}
                    className="relative pl-7 text-base font-light leading-[1.45] text-[#5f5168] before:absolute before:left-0 before:font-bold before:text-cyan before:content-['✓']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="rounded-[20px] border border-line p-[34px]">
              <h3 className="mb-4 text-[1.3rem] font-bold">Para quem não é</h3>
              <ul className="flex flex-col gap-3">
                {PARA_QUEM_NAO.map((t) => (
                  <li
                    key={t}
                    className="relative pl-7 text-base font-light leading-[1.45] text-[#5f5168] before:absolute before:left-0 before:font-bold before:text-rose before:content-['✕']"
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
      <section id="treinadores" className="bg-indigo py-[100px] text-white">
        <div className="mx-auto max-w-[1180px] px-[30px]">
          <Reveal className={secIntro}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Quem vai te treinar
            </span>
            <h2 className={`${h2} text-white`}>
              Dois construtores, uma mesa só.
            </h2>
          </Reveal>
          <Reveal className="mb-12 grid items-center gap-11 md:grid-cols-[0.42fr_1fr]">
            <div className="grad-brand flex min-h-[330px] items-end justify-center overflow-hidden rounded-[20px]">
              <SpeakersImage
                width={500}
                height={625}
                className="block h-auto w-[96%]"
              />
            </div>
            <div>
              <div className="text-[1.8rem] font-extrabold tracking-[-0.025em]">
                Marcel Roxo
              </div>
              <div className="mb-3.5 text-base font-medium text-gold">
                Construtor de negócios, eventos e ecossistemas
              </div>
              <p className="text-[1.04rem] font-light leading-[1.6] text-white/[0.74]">
                Assumiu a Staage do zero e ajudou a torná-la uma das maiores
                plataformas de marketing do Brasil. Fez um dos maiores eventos
                online do país (163mil participantes) e criou o Santos Digital
                Week, com 10mil+ participantes, 150+ marcas e 154 speakers.
                Crescimento por ambiente, acesso e relacionamento.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {TRAINER_TAGS[0].map((t) => (
                  <span
                    key={t}
                    className="rounded-pill border border-[rgba(240,198,140,0.3)] px-3.5 py-1.5 text-[12.5px] text-gold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="grid items-center gap-11 md:grid-cols-[1fr_0.42fr]">
            <div className="md:order-1 md:col-start-1">
              <div className="text-[1.8rem] font-extrabold tracking-[-0.025em]">
                Lara Finochio
              </div>
              <div className="mb-3.5 text-base font-medium text-gold">
                Transforma comunicação em autoridade
              </div>
              <p className="text-[1.04rem] font-light leading-[1.6] text-white/[0.74]">
                Aprendeu comunicação no ambiente mais exigente: ao vivo, sob
                pressão, na TV aberta — Band, Record e SBT. Levou isso para Joel
                Jota, Grupo Primo e Moving Girls, estruturando narrativa,
                posicionamento e autoridade. Traz a camada essencial: comunicar
                melhor o próprio valor.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {TRAINER_TAGS[1].map((t) => (
                  <span
                    key={t}
                    className="rounded-pill border border-[rgba(240,198,140,0.3)] px-3.5 py-1.5 text-[12.5px] text-gold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="grad-brand flex min-h-[330px] items-end justify-center overflow-hidden rounded-[20px] md:order-2">
              <SpeakersImage
                width={500}
                height={625}
                alt="Lara Finochio"
                className="block h-auto w-[96%]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-[1180px] px-[30px] py-24">
        <Reveal className="mb-11 text-center">
          <span className={k}>Dúvidas</span>
          <h2 className={h2}>Perguntas frequentes</h2>
        </Reveal>
        <Faq items={FAQ} variant="dark" accent="rose" />
      </section>

      {/* Final */}
      <section
        id="aplicar"
        className="grad-brand px-[30px] py-24 text-center text-white"
      >
        <h2 className="mx-auto max-w-[760px] text-[clamp(2.1rem,4.8vw,3.6rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
          Inscreva-se gratuitamente no Método ACESSO.
        </h2>
        <p className="mx-auto mt-5 max-w-[500px] text-[1.1rem] font-light text-white/85">
          Transforme margem, posicionamento, aquisição e relacionamento em
          crescimento real.
        </p>
        <a
          href="#aplicar"
          className="mt-[34px] inline-flex items-center gap-2 rounded-pill bg-gold px-7 py-3.5 text-[15px] font-semibold text-purple-dark transition hover:bg-gold-soft"
        >
          QUERO APLICAR PARA O TREINAMENTO →
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-paper py-[46px]">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-[30px] text-[13.5px] text-[#5f5168]">
          <Logo variant="purple" className="h-[22px] w-auto" />
          <div className="flex gap-6">
            <a href="#metodo" className="hover:text-rose">
              O Método
            </a>
            <a href="#treinadores" className="hover:text-rose">
              Treinadores
            </a>
            <a href="#faq" className="hover:text-rose">
              Dúvidas
            </a>
            <a href="#aplicar" className="hover:text-rose">
              Aplicar
            </a>
          </div>
          <div className="mt-1.5 w-full text-[12px] text-[#9b8fa0]">
            © 2026 Método ACESSO · uma iniciativa SDW.hub — Marcel Roxo &amp;
            Lara Finochio.
          </div>
        </div>
      </footer>
    </div>
  );
}
