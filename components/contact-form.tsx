'use client';

import { useState, type FormEvent } from 'react';
import { site } from '../data/site';
import { ArrowUpRight, WhatsAppIcon } from './icons';

const topics = ['Internship or role', 'Freelance project', 'Collaboration', 'Just saying hi'] as const;

/**
 * There is no backend behind this form on purpose: it composes the message and hands it to the
 * visitor's own mail client or WhatsApp, so nothing is ever silently dropped.
 */
export default function ContactForm() {
  const [topic, setTopic] = useState<(typeof topics)[number]>(topics[0]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const body = `${message.trim()}\n\n${name.trim()}`;
  const subject = `${topic}${name.trim() ? ` · ${name.trim()}` : ''}`;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const whatsapp = `${site.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailto;
  };

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <fieldset>
        <legend className="eyebrow">What is this about?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((option) => (
            <label
              key={option}
              className="cursor-pointer rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors has-checked:border-accent has-checked:bg-accent-soft has-checked:text-fg has-focus-visible:outline-2 has-focus-visible:outline-accent"
            >
              <input
                type="radio"
                name="topic"
                value={option}
                checked={topic === option}
                onChange={() => setTopic(option)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="contact-name" className="eyebrow">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Jane Perera"
          className="field mt-2"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="contact-message" className="eyebrow">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="A little context about the project, timeline or role."
          className="field mt-2 resize-y"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary">
          Send by email
          <ArrowUpRight className="h-4 w-4" />
        </button>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <WhatsAppIcon className="h-4 w-4" />
          Send on WhatsApp
        </a>
      </div>
      <p className="mt-4 text-sm text-faint">
        Opens your mail app or WhatsApp with the message filled in. I reply within 48 hours.
      </p>
    </form>
  );
}
