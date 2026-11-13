import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const stroke = (props: IconProps) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
  ...props,
});

const solid = (props: IconProps, viewBox = '0 0 24 24') => ({
  viewBox,
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false,
  ...props,
});

export const ArrowUpRight = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const SunIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const TrophyIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M8 4h8v6a4 4 0 0 1-8 0V4ZM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 14v4M8 20h8" />
  </svg>
);

export const CopyIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.800 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const GitHubIcon = (p: IconProps) => (
  <svg {...solid(p)}>
    <path d="M12 .5C5.65.5.5 5.82.5 12.29c0 5.2 3.44 9.6 8.2 11.16.6.1.8-.27.8-.6v-2.18c-3.34.75-4.04-1.63-4.04-1.63-.55-1.45-1.35-1.83-1.35-1.83-1.1-.77.08-.76.08-.76 1.22.09 1.86 1.29 1.86 1.29 1.08 1.92 2.83 1.37 3.52 1.05.1-.82.42-1.37.76-1.68-2.67-.32-5.47-1.39-5.47-6.2 0-1.37.47-2.49 1.24-3.37-.12-.32-.54-1.62.12-3.37 0 0 1-.33 3.3 1.26a11.3 11.3 0 0 1 6 0C19.63 5.3 20.63 5.63 20.63 5.63c.66 1.75.24 3.05.12 3.37.77.88 1.24 2 1.24 3.37 0 4.83-2.8 5.87-5.48 6.19.43.39.81 1.16.81 2.34v3.47c0 .33.2.71.8.6 4.76-1.57 8.2-5.96 8.2-11.16C23.5 5.82 18.35.5 12 .5Z" />
  </svg>
);

export const LinkedInIcon = (p: IconProps) => (
  <svg {...solid(p)}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.35V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288ZM5.337 7.433a2.061 2.061 0 1 1 0-4.122 2.061 2.061 0 0 1 0 4.122Zm1.777 13.019H3.56V9h3.554v11.452ZM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.278V1.723C24 .771 23.2 0 22.222 0Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...solid(p)}>
    <path d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm9.250 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 .002 6.002A3 3 0 0 0 12 9Z" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...solid(p)}>
    <path d="M22.675 0H1.325A1.326 1.326 0 0 0 0 1.325v21.35C0 23.407.593 24 1.325 24h11.49v-9.294H9.69v-3.622h3.125V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.764v2.314h3.587l-.467 3.622h-3.12V24h6.116A1.326 1.326 0 0 0 24 22.675V1.325A1.326 1.326 0 0 0 22.675 0Z" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg {...solid(p, '0 0 32 32')}>
    <path d="M27.6 4.4A15.6 15.6 0 0 0 1.7 22.2L0 32l9.9-1.7a15.6 15.6 0 0 0 7.4 1.9h.1A15.6 15.6 0 0 0 32 15.6a15.5 15.5 0 0 0-4.4-11.2ZM17.3 29h-.1a13 13 0 0 1-6.2-1.6l-.4-.2-5.8 1 1.5-5.3-.2-.3a13 13 0 0 1 10.5-19.8h.1a12.900 12.900 0 0 1 9.2 3.8 12.900 12.900 0 0 1 3.8 9.2A12.900 12.900 0 0 1 17.3 29Zm7-11.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.7-.2-1 0-.3.2-.9 1.2-1.1 1.4s-.4.3-.7.1a10.400 10.400 0 0 1-3.1-1.9 11 11 0 0 1-2-2.5c-.2-.3 0-.5.2-.7l.2-.2c.2-.2.2-.3.3-.4s.1-.4 0-.6-.8-2.2-1.2-3-.6-.7-.8-.7h-.7c-.3 0-.6.1-.9.4s-1.2 1-1.2 2.4 1.2 2.8 1.3 3c.1.2 2.3 3.6 5.6 5 .8.3 1.5.5 2 .6.8.2 1.5.1 2 .1.7-.1 2.3-1 2.6-1.8.3-.8.3-1.4.2-1.5-.1-.2-.4-.3-.7-.4Z" />
  </svg>
);

export const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;
