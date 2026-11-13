import type { ReactNode } from 'react';

export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="container-page pt-36 pb-12 sm:pt-44 sm:pb-16">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1 className="animate-rise mt-5 max-w-4xl text-4xl leading-[1.05] font-medium [animation-delay:80ms] sm:text-6xl">
        {title}
      </h1>
      {children ? (
        <div className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted [animation-delay:160ms]">
          {children}
        </div>
      ) : null}
    </header>
  );
}
