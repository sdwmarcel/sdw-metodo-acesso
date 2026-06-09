import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Logo } from '@/components/Logo';
import { SpeakersImage, SpeakersImageLara, SpeakersImageMarcel } from '@/components/SpeakersImage';
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
const secIntro = 'mx-auto mb-17.5 max-w-[680px] text-center';
const h2 = 'mt-3.5 text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em]';

const NUMS = ['01', '02', '03', '04', '05', '06'];

const TRAINER_TAGS = [
  ['Staage', 'Santos Digital Week', 'The Advisory Board'],
  ['Band · Record · SBT', 'Grupo Primo', 'Moving Girls'],
];

export default function Page() {
  return (
    <div className="min-h-dvh bg-[#f6efe6] text-[#241a2e]">
      <JsonLd data={courseJsonLd('/v5', DESC)} />

      <header className="border-line sticky top-0 z-50 border-b bg-[rgba(246,239,230,0.82)] backdrop-blur-md">
        <nav className="mx-auto flex max-w-295 items-center justify-between px-7.5 py-4">
          <a href="#" aria-label="SDW.hub — início">
            <Logo variant="acesso-preto" className="h-16 w-auto" />
          </a>
          <div className="hidden gap-7.5 text-sm font-medium text-[#5f5168] md:flex">
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
          <a href="https://inlead.digital/sdwhub" className={`${btnDark} px-5.5 py-2.75 text-sm`}>
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

      {/* Problema */}
      <section className="bg-[#f1e3cb] py-24">
        <div className="mx-auto grid max-w-295 items-center gap-14 px-7.5 md:grid-cols-2">
          <Reveal>
            <p className="text-[clamp(1.6rem,3.2vw,2.4rem)] leading-[1.2] font-bold tracking-tight">
              O que trouxe sua empresa até aqui pode{' '}
              <em className="text-rose not-italic">não levar para o próximo nível.</em>
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
                  className="before:text-rose relative pl-6.5 text-[1.05rem] leading-[1.45] font-light text-[#5f5168] before:absolute before:left-0 before:font-semibold before:content-['—']"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 6 ativos — alternating rows */}
      <section id="metodo" className="mx-auto max-w-295 px-7.5 py-24">
        <Reveal className={secIntro}>
          <span className={k}>A · C · E · S · S · O</span>
          <h2 className={h2}>Os 6 ativos do Método ACESSO.</h2>
          <p className="mt-3.5 text-[1.1rem] font-light text-[#5f5168]">
            Sair do crescimento por esforço e construir o que torna a empresa mais desejada,
            lucrativa e bem posicionada.
          </p>
        </Reveal>
        <div>
          {ATIVOS.map((a, i) => (
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
                <p className="max-w-155 text-[1.06rem] leading-[1.6] font-light text-[#5f5168]">
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section className="bg-[#f1e3cb] py-24">
        <div className="mx-auto max-w-295 px-7.5">
          <Reveal className={secIntro}>
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
          <Reveal className={secIntro}>
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

      {/* Footer */}
      <footer className="bg-paper py-11.5">
        <div className="mx-auto flex max-w-295 flex-wrap items-center justify-between gap-5 px-7.5 text-[13.5px] text-[#5f5168]">
          <Logo variant="acesso-preto" className="h-16 w-auto" />
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
