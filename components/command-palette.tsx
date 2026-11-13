'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { projects } from '../data/projects';
import { nav, site, socials } from '../data/site';
import { SearchIcon } from './icons';
import { toggleTheme } from './theme-toggle';

type Command = {
  id: string;
  group: 'Pages' | 'Projects' | 'Actions' | 'Links';
  label: string;
  hint?: string;
  run: () => void;
};

export default function CommandPalette() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);

  const close = useCallback(() => dialogRef.current?.close(), []);

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setQuery('');
    setIndex(0);
    dialog.showModal();
    inputRef.current?.focus();
  }, []);

  const commands = useMemo<Command[]>(() => {
    const go = (href: string) => () => router.push(href);
    const external = (href: string) => () => window.open(href, '_blank', 'noopener,noreferrer');
    return [
      ...nav.map((item) => ({ id: `page:${item.href}`, group: 'Pages' as const, label: item.label, run: go(item.href) })),
      ...projects.map((project) => ({
        id: `project:${project.slug}`,
        group: 'Projects' as const,
        label: project.title,
        hint: project.categories[0],
        run: go(`/projects/${project.slug}`),
      })),
      {
        id: 'action:email',
        group: 'Actions' as const,
        label: 'Copy email address',
        hint: site.email,
        run: () => void navigator.clipboard?.writeText(site.email),
      },
      { id: 'action:theme', group: 'Actions' as const, label: 'Toggle light / dark theme', run: toggleTheme },
      ...socials.map((social) => ({
        id: `link:${social.key}`,
        group: 'Links' as const,
        label: `Open ${social.label}`,
        hint: social.handle,
        run: external(social.href),
      })),
    ];
  }, [router]);

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(' ').filter(Boolean);
    if (terms.length === 0) return commands;
    return commands.filter((command) => {
      const haystack = `${command.label} ${command.hint ?? ''} ${command.group}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [commands, query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('palette:open', open);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('palette:open', open);
    };
  }, [open, close]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [index]);

  const run = (command: Command | undefined) => {
    if (!command) return;
    close();
    command.run();
  };

  const onInputKey = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIndex((value) => (results.length ? (value + 1) % results.length : 0));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIndex((value) => (results.length ? (value - 1 + results.length) % results.length : 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      run(results[index]);
    }
  };

  let lastGroup: string | null = null;

  return (
    <dialog
      ref={dialogRef}
      aria-label="Command menu"
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
      className="fixed top-[14vh] left-1/2 m-0 w-[min(36rem,calc(100vw-1.5rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-line-strong bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 border-b border-line px-4">
        <SearchIcon className="h-4 w-4 shrink-0 text-faint" />
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIndex(0);
          }}
          onKeyDown={onInputKey}
          placeholder="Search pages, projects, actions…"
          aria-label="Search commands"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={results[index] ? `cmd-${results[index].id}` : undefined}
          className="h-14 w-full bg-transparent text-base outline-none placeholder:text-faint"
        />
        <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[0.7rem] text-faint">Esc</kbd>
      </div>
      <ul ref={listRef} id="palette-list" role="listbox" className="max-h-[min(24rem,50vh)] overflow-y-auto p-2">
        {results.length === 0 ? (
          <li className="px-3 py-8 text-center text-sm text-muted">Nothing matches “{query}”.</li>
        ) : (
          results.map((command, i) => {
            const heading = command.group !== lastGroup ? command.group : null;
            lastGroup = command.group;
            return (
              <li key={command.id} role="presentation">
                {heading ? <p className="eyebrow px-3 pt-3 pb-1.5">{heading}</p> : null}
                <button
                  type="button"
                  id={`cmd-${command.id}`}
                  role="option"
                  aria-selected={i === index}
                  onClick={() => run(command)}
                  onPointerMove={() => setIndex(i)}
                  className="flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left text-sm aria-selected:bg-surface-2"
                >
                  <span>{command.label}</span>
                  {command.hint ? <span className="truncate font-mono text-xs text-faint">{command.hint}</span> : null}
                </button>
              </li>
            );
          })
        )}
      </ul>
    </dialog>
  );
}
