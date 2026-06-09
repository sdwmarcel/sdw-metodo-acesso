// 'use client';

// /**
//  * TYPEBOT_ID: substitua pelo ID do seu fluxo no Typebot.
//  * Encontre em: Typebot dashboard → seu fluxo → Share → Embed → ID do bot.
//  */
// export const TYPEBOT_ID = 'sdwhub';

// import { useEffect } from 'react';
// import { Bubble, Popup, open } from '@typebot.io/react';

// export function TypebotWidgets() {
//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       const link = (e.target as HTMLElement).closest('a[href="#aplicar"]');
//       if (!link) return;
//       e.preventDefault();
//       open({ id: 'typebot-popup' });
//     }
//     document.addEventListener('click', handleClick);
//     return () => document.removeEventListener('click', handleClick);
//   }, []);

//   return (
//     <>
//       {/* id garante que open({ id: 'typebot-popup' }) abre só este Popup,
//           sem afetar o Bubble */}
//       <Popup typebot={TYPEBOT_ID} id="typebot-popup" />
//       <Bubble
//         typebot={TYPEBOT_ID}
//         theme={{ button: { size: 'large', backgroundColor: '#F0C68C' }, placement: 'right' }}
//       />
//     </>
//   );
// }
