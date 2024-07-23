'use client'
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">© {currentYear} TechB. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4" href="/terms">
          Terms of Service
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="/privacy">
          Privacy
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="https://www.instagram.com/dainwi_choudhary/">
          Instagram
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="https://x.com/danwichoudhary">
          Twitter
        </a>
      </nav>
    </footer>
  );
}
