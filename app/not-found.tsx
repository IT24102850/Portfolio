import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[70vh] place-items-center pt-36 text-center">
      <div>
        <p className="font-serif text-[clamp(6rem,22vw,14rem)] leading-none text-accent italic">404</p>
        <h1 className="mt-4 text-3xl font-medium sm:text-4xl">This page isn&apos;t wired up.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The link is broken or the page has moved. The projects are still where you left them.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            Browse projects
          </Link>
        </div>
      </div>
    </section>
  );
}
