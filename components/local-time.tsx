'use client';

import { useEffect, useState } from 'react';
import { site } from '../data/site';

const format = () =>
  new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: site.timeZone }).format(new Date());

/** Live clock for the site owner's time zone. Renders a placeholder on the server to avoid hydration drift. */
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="tabular-nums">
      {time ?? '--:--'} <span className="text-faint">GMT+5:30</span>
    </span>
  );
}
