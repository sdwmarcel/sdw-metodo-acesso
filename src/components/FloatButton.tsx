import Link from 'next/link';

const floatCn =
  'fixed bottom-10 right-10 z-[99999] flex size-[60px] cursor-pointer ' +
  'items-center justify-center rounded-full bg-[#f0c68c] ' +
  'transition-colors duration-1000 hover:bg-[#f7e2c2]';

const iconCn = 'size-12 scale-[0.6] fill-[#3c165d] pointer-events-none';

export function FloatButton() {
  return (
    <Link href="#aplicar" rel="noopener noreferrer" aria-label="Inlead" className={floatCn}>
      <span aria-hidden className="bg-gold animate-ping-ring absolute inset-0 rounded-full" />
      <svg className={iconCn} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
      </svg>
    </Link>
  );
}
