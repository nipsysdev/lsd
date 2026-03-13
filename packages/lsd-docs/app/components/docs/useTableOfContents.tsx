'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo, useRef, ReactNode } from 'react';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsContextValue {
  sections: TocItem[];
  activeId: string | null;
  registerSection: (section: TocItem) => void;
  unregisterSection: (id: string) => void;
  scrollToSection: (id: string) => void;
}

const TableOfContentsContext = createContext<TableOfContentsContextValue | undefined>(
  undefined,
);

export function useTableOfContents() {
  const context = useContext(TableOfContentsContext);
  if (!context) {
    throw new Error('useTableOfContents must be used within TableOfContentsProvider');
  }
  return context;
}

interface TableOfContentsProviderProps {
  children: ReactNode;
}

export function TableOfContentsProvider({ children }: TableOfContentsProviderProps) {
  const [sections, setSections] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIdRef = useRef<string | null>(null);

  const registerSection = useCallback((section: TocItem) => {
    setSections((prev) => {
      if (prev.some((s) => s.id === section.id)) {
        return prev;
      }
      return [...prev, section];
    });
  }, []);

  const unregisterSection = useCallback((id: string) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveId = entry.target.id;
            if (activeIdRef.current !== newActiveId) {
              activeIdRef.current = newActiveId;
              setActiveId(newActiveId);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const value: TableOfContentsContextValue = useMemo(
    () => ({
      sections,
      activeId,
      registerSection,
      unregisterSection,
      scrollToSection,
    }),
    [sections, activeId, registerSection, unregisterSection, scrollToSection],
  );

  return (
    <TableOfContentsContext.Provider value={value}>
      {children}
    </TableOfContentsContext.Provider>
  );
}
