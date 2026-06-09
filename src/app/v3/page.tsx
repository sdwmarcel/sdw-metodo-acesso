import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { Logo } from '@/components/Logo';
import { SpeakersImage } from '@/components/SpeakersImage';
import { JsonLd } from '@/components/JsonLd';
import { pageMetadata, courseJsonLd } from '@/lib/site';
import { ATIVOS, PARA_QUEM_SIM, PARA_QUEM_NAO } from '@/lib/content';

const DESC =
  'O Método ACESSO para empresários que faturam acima de R$ 300 mil/ano e querem crescer com mais margem, melhor posicionamento e canais estruturados. Santos, SP.';

export const metadata: Metadata = pageMetadata({
  path: '/v3',
  title:
    'Treinamento Gratuito para Empreendedores | Método ACESSO · SDW.hub Santos',
  description: DESC,
  ogTitle: 'Treinamento Gratuito para Empreendedores | Método ACESSO',
  ogDescription:
    'Ajuste modelo, posicione melhor sua empresa e construa canais de aquisição previsíveis. Treinamento gratuito para empresários que já faturam acima de R$ 300 mil/ano.',
});

const btnPrimary =
  'inline-flex items-center gap-2 rounded-[10px] bg-blue px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_26px_rgba(35,109,152,0.28)] transition hover:-translate-y-px hover:bg-[#1d5d83] active:scale-[0.98]';
const btnGhost =
  'inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-line bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition hover:border-blue hover:text-blue';

const STATS = [
  ['R$300mil', 'faturamento mínimo/ano'],
  ['6', 'ativos de crescimento'],
  ['2', 'treinadores'],
  ['100%', 'gratuito'],
];

const FAQ_V3 = [
  {
    q: 'O treinamento é gratuito?',
    a: 'Sim. É gratuito para empresários que querem destravar crescimento com mais margem, posicionamento, canais e relacionamento estratégico.',
  },
  {
    q: 'Para quem é?',
    a: 'Para empresários e donos de negócios que já vendem e sentem que poderiam crescer mais, vender melhor e depender menos de indicação.',
  },
  {
    q: 'O que vou aprender?',
    a: 'Como ajustar o modelo, melhorar posicionamento, usar a autoridade do founder, criar canais de aquisição e acessar melhores ambientes.',
  },
  {
    q: 'Preciso me preparar?',
    a: 'Não. Basta aplicar para o treinamento. O conteúdo é pensado para empresas que já faturam e querem o próximo nível.',
  },
];

const secHead = 'mx-auto mb-14 max-w-[700px] text-center';
const h2 =
  'mt-3.5 text-[clamp(1.9rem,3.8vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em]';
const kicker = 'text-xs font-semibold uppercase tracking-[0.18em] text-blue';

export default function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <JsonLd data={courseJsonLd('/v3', DESC)} />

      <header className="sticky top-0 z-50 border-b border-line bg-[rgba(251,248,243,0.82)] backdrop-blur-[12px]">
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-[30px] py-4">
          <a href="#" aria-label="SDW.hub — início">
            <Logo variant="purple" className="h-6 w-auto" />
          </a>
          <div className="hidden gap-[30px] text-sm font-medium text-ink-soft md:flex">
            <a href="#ativos" className="hover:text-blue">
              O Método
            </a>
            <a href="#quem" className="hover:text-blue">
              Para quem é
            </a>
            <a href="#faq" className="hover:text-blue">
              Dúvidas
            </a>
          </div>
          <a href="https://inlead.digital/sdwhub/" className={`${btnPrimary} px-5 py-[11px] text-sm`}>
            QUERO APLICAR
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-[30px] pt-[72px] pb-[84px]">
        <div className="grid items-center gap-5 md:gap-[52px] md:grid-cols-[1fr_1fr]">
          <div className="text-center md:text-left">
            <Reveal as="span" className={kicker}>
              Treinamento gratuito · Método ACESSO
            </Reveal>
            <Reveal
              as="h1"
              className="mt-2 text-[clamp(2.4rem,4vw,3.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] md:mt-4"
            >
              O crescimento da sua empresa não travou por falta de{' '}
              <em className="not-italic text-blue">esforço</em>.
            </Reveal>
            <div className="block md:hidden mt-3 mb-4 border-b border-line">
              <SpeakersImage
                width={600}
                height={750}
                className="h-[36dvh] w-full object-cover object-top"
              />
            </div>
            <Reveal
              as="p"
              className="mt-2 max-w-[520px] text-[1rem] font-light leading-[1.55] text-ink-soft line-clamp-2 md:mt-[22px] md:text-[1rem] md:line-clamp-none"
            >
              <strong className="font-semibold text-ink">
                Travou por falta de margem, posicionamento, canais e ambientes
                certos.
              </strong>{' '}
              Um treinamento gratuito para empresários que já faturam, mas
              sentem que poderiam crescer mais, vender melhor e construir uma
              empresa mais desejada pelo mercado.
            </Reveal>
            <Reveal className="mt-4 flex flex-wrap justify-center gap-3.5 md:mt-8 md:justify-start">
              <a href="https://inlead.digital/sdwhub/" className={btnPrimary}>
                QUERO APLICAR PARA O TREINAMENTO
              </a>
            </Reveal>
            <p className="mt-3 text-center md:text-left text-[13px] leading-[1.6] text-ink-soft">
              <strong className="font-semibold text-blue">26 de junho</strong>
              {' | '}das 9h às 13h
              <br />
              SMART CENTER | Santos | SP
            </p>
            <Reveal
              as="div"
              className="hidden md:flex mt-7 items-center gap-2.5 text-[13px] text-ink-soft"
            >
              <span className="size-2 rounded-full bg-[#2bb673] shadow-[0_0_0_4px_rgba(43,182,115,0.18)]" />{' '}
              Gratuito · para empresas que faturam acima de R$ 300 mil/ano
            </Reveal>
          </div>
          <Reveal className="hidden md:block">
            <div className="relative h-[36dvh] overflow-hidden md:flex md:h-auto md:min-h-[300px] md:items-end md:justify-end md:overflow-visible">
              <SpeakersImage
                priority
                width={600}
                height={750}
                className="block h-full w-full object-cover object-top md:ml-auto md:h-auto md:w-full md:max-w-[500px] md:object-contain"
              />
            </div>
            <div className="hidden md:block mt-0 rounded-[18px] bg-[#f4e7d2] px-6 py-[22px] text-center">
              <div className="text-[1.05rem] font-semibold text-ink">
                Com <span className="text-blue">Marcel Roxo</span> &amp;{' '}
                <span className="text-blue">Lara Finochio</span>
              </div>
              <div className="mt-1 text-[13px] text-ink">
                Negócios &amp; ecossistemas · Comunicação &amp; autoridade
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <div className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 px-[30px] py-[42px] md:grid-cols-4">
          {STATS.map(([n, l], i) => (
            <Reveal
              key={l}
              delay={(i % 4) * 70}
              className={`px-4 text-center ${i < STATS.length - 1 ? 'md:border-r md:border-line' : ''}`}
            >
              <b className="block text-[2.4rem] font-extrabold leading-none tracking-[-0.03em] text-blue">
                {n}
              </b>
              <span className="mt-2 block text-[13px] font-medium text-ink-soft">
                {l}
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Problema */}
      <section className="bg-[#f4e7d2] py-[100px]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-[30px] md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-extrabold leading-[1.14] tracking-[-0.025em]">
              O que trouxe sua empresa até aqui pode{' '}
              <em className="not-italic text-rose">
                não levar para o próximo nível.
              </em>
            </h2>
            <p className="mt-4 text-[1.05rem] font-light text-ink-soft">
              O problema talvez não seja falta de capacidade — e sim ter chegado
              no limite do crescimento por esforço.
            </p>
          </Reveal>
          <Reveal>
            <ul className="flex flex-col gap-3.5">
              {[
                'Trabalha muito e depende demais da sua presença',
                'Depende demais de indicação para vender',
                'A comunicação não traduz o valor real da empresa',
                'Falta um canal de aquisição previsível',
                'Mesmo vendendo, poderia ter mais margem',
              ].map((t) => (
                <li
                  key={t}
                  className="relative pl-[30px] text-[1.05rem] font-light leading-[1.45] text-ink-soft before:absolute before:top-1.5 before:left-0 before:flex before:size-4 before:items-center before:justify-center before:rounded-[5px] before:bg-[rgba(132,53,88,0.14)] before:text-[11px] before:font-bold before:text-rose before:content-['!']"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 6 ativos — 2col horizontais */}
      <section
        id="ativos"
        className="mx-auto max-w-[1180px] px-[30px] py-[100px]"
      >
        <Reveal className={secHead}>
          <span className={kicker}>A · C · E · S · S · O</span>
          <h2 className={h2}>Os 6 ativos do Método ACESSO.</h2>
          <p className="mt-3.5 text-[1.1rem] font-light text-ink-soft">
            Construa o que torna a empresa mais desejada, lucrativa e bem
            posicionada.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {ATIVOS.map((a, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 70}
              className="flex gap-5 rounded-[18px] border border-line bg-white p-7 transition duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(27,25,60,0.1)]"
            >
              <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[14px] bg-[rgba(35,109,152,0.1)] text-[1.4rem] font-extrabold text-blue">
                {a.letter}
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-rose">
                  {a.tag}
                </div>
                <h3 className="my-1.5 text-[1.2rem] font-bold tracking-[-0.02em]">
                  {a.title}
                </h3>
                <p className="text-[0.96rem] font-light leading-[1.55] text-ink-soft">
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section id="quem" className="border-y border-line bg-white py-[100px]">
        <div className="mx-auto max-w-[1180px] px-[30px]">
          <Reveal className={secHead}>
            <span className={kicker}>Qualificação</span>
            <h2 className={h2}>Este treinamento é para você?</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-[20px] border border-line bg-white p-[34px] shadow-[0_12px_32px_rgba(27,25,60,0.07)]">
              <h3 className="mb-4 text-[1.3rem] font-bold text-blue">
                É para você se…
              </h3>
              <ul className="flex flex-col gap-3">
                {PARA_QUEM_SIM.map((t) => (
                  <li
                    key={t}
                    className="relative pl-7 text-base font-light leading-[1.45] text-ink-soft before:absolute before:left-0 before:font-bold before:text-[#2bb673] before:content-['✓']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="rounded-[20px] border border-line p-[34px]">
              <h3 className="mb-4 text-[1.3rem] font-bold">
                Não é para você se…
              </h3>
              <ul className="flex flex-col gap-3">
                {PARA_QUEM_NAO.map((t) => (
                  <li
                    key={t}
                    className="relative pl-7 text-base font-light leading-[1.45] text-ink-soft before:absolute before:left-0 before:font-bold before:text-rose before:content-['✕']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Treinadores — dark band */}
      <section
        id="treinadores"
        className="bg-[linear-gradient(160deg,#1b193c_0%,#2a1a4a_100%)] py-[100px] text-white"
      >
        <div className="mx-auto max-w-[1180px] px-[30px]">
          <Reveal className={secHead}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Quem vai te treinar
            </span>
            <h2 className={`${h2} text-white`}>
              Dois construtores de verdade.
            </h2>
          </Reveal>
          <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="relative flex min-h-[420px] items-end justify-center overflow-hidden rounded-[24px] bg-[linear-gradient(140deg,#3c165d,#236d98)] shadow-[0_20px_50px_rgba(27,25,60,0.18)]">
              <SpeakersImage
                width={500}
                height={625}
                className="block h-auto w-[90%]"
              />
            </Reveal>
            <div>
              <Reveal className="border-b border-[rgba(240,198,140,0.16)] py-[22px] first:pt-0">
                <div className="text-[1.3rem] font-bold tracking-[-0.02em] text-white">
                  Marcel Roxo
                </div>
                <div className="mb-2.5 text-[0.92rem] font-semibold text-gold">
                  Construtor de negócios, eventos e ecossistemas
                </div>
                <p className="text-[0.98rem] font-light leading-[1.55] text-white/[0.74]">
                  Ajudou a transformar a Staage numa das maiores plataformas de
                  marketing do Brasil, criou o Santos Digital Week (10mil+
                  participantes, 150+ marcas, 154 speakers) e atuou com Joel
                  Jota, Flávio Augusto e Caio Carneiro.
                </p>
              </Reveal>
              <Reveal className="py-[22px]">
                <div className="text-[1.3rem] font-bold tracking-[-0.02em] text-white">
                  Lara Finochio
                </div>
                <div className="mb-2.5 text-[0.92rem] font-semibold text-gold">
                  Transforma comunicação em autoridade
                </div>
                <p className="text-[0.98rem] font-light leading-[1.55] text-white/[0.74]">
                  Carreira em Band, Record e SBT, depois Joel Jota, Grupo Primo
                  e Moving Girls. Estrutura narrativa, posicionamento e
                  autoridade — a capacidade de comunicar melhor o próprio valor.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — 2col estático */}
      <section id="faq" className="bg-[#f4e7d2] py-[100px]">
        <div className="mx-auto max-w-[1180px] px-[30px]">
          <Reveal className={secHead}>
            <span className={kicker}>Dúvidas</span>
            <h2 className={h2}>Perguntas frequentes</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-14 md:grid-cols-2">
            {FAQ_V3.map((f) => (
              <Reveal key={f.q} className="border-t border-line py-[26px]">
                <h3 className="mb-2 text-[1.12rem] font-semibold tracking-[-0.01em]">
                  {f.q}
                </h3>
                <p className="text-base font-light leading-[1.6] text-ink-soft">
                  {f.a}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final */}
      <section
        id="aplicar"
        className="bg-[linear-gradient(120deg,#1b193c_0%,#3c165d_55%,#492b92_100%)] px-[30px] py-24 text-center text-white"
      >
        <h2 className="mx-auto max-w-[740px] text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
          Inscreva-se gratuitamente no Método ACESSO.
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[1.1rem] font-light text-white/80">
          Transforme margem, posicionamento, aquisição e relacionamento em
          crescimento real.
        </p>
        <a
          href="https://inlead.digital/sdwhub/"
          className="mt-[34px] inline-flex items-center gap-2 rounded-[10px] bg-gold px-7 py-3.5 text-[15px] font-semibold text-purple-dark transition hover:bg-gold-soft"
        >
          QUERO APLICAR PARA O TREINAMENTO →
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-paper py-[44px]">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-[30px] text-[13.5px] text-ink-soft">
          <Logo variant="purple" className="h-[22px] w-auto" />
          <div className="flex gap-6">
            <a href="#ativos" className="hover:text-blue">
              O Método
            </a>
            <a href="#quem" className="hover:text-blue">
              Para quem
            </a>
            <a href="#treinadores" className="hover:text-blue">
              Treinadores
            </a>
            <a href="https://inlead.digital/sdwhub/" className="hover:text-blue">
              Aplicar
            </a>
          </div>
          <div className="mt-1.5 w-full text-[12px] text-[#9b95a8]">
            © 2026 Método ACESSO · uma iniciativa SDW.hub — Marcel Roxo &amp;
            Lara Finochio.
          </div>
        </div>
      </footer>
    </div>
  );
}
