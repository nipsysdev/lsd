import { Typography } from '@nipsys/lsd';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-small) mb-(--lsd-spacing-large)">
      <Typography variant="h1">{title}</Typography>
      {description && (
        <Typography variant="subtitle1" color="secondary">
          {description}
        </Typography>
      )}
    </div>
  );
}
