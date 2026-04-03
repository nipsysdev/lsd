'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@nipsys/shadcn-lsd';
import type { IconProps } from '@phosphor-icons/react';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { navItems } from '@/config/navigation';

export function Search() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const searchIndex = useMemo(() => {
    const items: {
      id: string;
      title: string;
      url: string;
      category: string;
      icon?: React.ComponentType<IconProps>;
    }[] = [];

    navItems.forEach(group => {
      group.items.forEach(item => {
        if (item.url) {
          items.push({
            id: item.url,
            title: item.title,
            url: item.url,
            category: group.title,
            icon: item.icon,
          });
        }

        if (item.subItems) {
          item.subItems.forEach(subItem => {
            items.push({
              id: subItem.url,
              title: subItem.title,
              url: subItem.url,
              category: group.title,
            });
          });
        }
      });
    });

    return items;
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: [
        { name: 'title', weight: 2.0 },
        { name: 'category', weight: 1.0 },
      ],
      threshold: 0.4,
      distance: 100,
      includeScore: true,
      shouldSort: true,
      ignoreLocation: true,
    });
  }, [searchIndex]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return searchIndex.slice(0, 10).map(item => ({ item }));
    }
    return fuse.search(query, { limit: 20 }).map(result => ({
      item: result.item,
    }));
  }, [query, fuse, searchIndex]);

  const groupedResults = useMemo(() => {
    const groups: Record<string, { item: (typeof searchIndex)[0] }[]> = {};

    results.forEach(({ item }) => {
      const groupKey = item.category;
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push({ item });
    });

    return groups;
  }, [results]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(prev => !prev);
      }
      if (e.key === '/' && !open) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setQuery('');
    }
  };

  const handleSelect = (url: string) => {
    router.push(url);
    setOpen(false);
    setQuery('');
  };

  return (
    <CommandDialog open={open} onOpenChange={handleOpenChange} showCloseButton={false}>
      <CommandInput placeholder="Search documentation..." value={query} onValueChange={setQuery} />
      <CommandList>
        {Object.keys(groupedResults).length === 0 ? (
          <CommandEmpty>No results found.</CommandEmpty>
        ) : (
          Object.entries(groupedResults).map(([category, items]) => (
            <CommandGroup key={category} heading={category}>
              {items.map(({ item }) => (
                <CommandItem
                  key={item.id}
                  value={item.title}
                  onSelect={() => handleSelect(item.url)}
                >
                  {item.icon && (
                    <span className="mr-(--lsd-spacing-smaller)">
                      <item.icon weight="duotone" />
                    </span>
                  )}
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))
        )}
      </CommandList>
    </CommandDialog>
  );
}
