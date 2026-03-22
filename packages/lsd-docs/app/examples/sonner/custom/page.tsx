'use client';

import { Button, Input, Typography } from '@nipsys/shadcn-lsd';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';
import { useSendThemeToIframes } from '@/components/docs/useSendThemeToIframes';

export const CODE = `import { Button, Typography, Input } from '@nipsys/shadcn-lsd';
import { Toaster, toast } from 'sonner';
import { useState } from 'react';

export function Example() {
  const [filename, setFilename] = useState('');
  
  const handleUpload = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve('File uploaded successfully');
        } else {
          reject(new Error('Upload failed'));
        }
      }, 2000);
    });
  };

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Toaster />

      <Typography variant="label1">Rich Content Toast</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          toast(
            <div className="flex items-center gap-(--lsd-spacing-smaller)">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-semibold">Upload Complete</p>
                <p className="text-sm text-gray-600">Your file has been processed</p>
              </div>
            </div>,
            {
              duration: 5000,
              action: {
                label: 'View',
                onClick: () => console.log('View uploaded file'),
              },
            }
          );
        }}
      >
        Show Rich Content Toast
      </Button>

      <Typography variant="label1">Promise Toast</Typography>
      <Input
        placeholder="Enter filename"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        className="mb-(--lsd-spacing-smaller)"
      />
      <Button
        variant="outlined"
        disabled={!filename}
        onClick={() => {
          toast.promise(
            handleUpload(),
            {
              loading: \`Uploading \${filename}...\`,
              success: (data) => \`\${data}: \${filename}\`,
              error: (error) => \`Failed to upload \${filename}: \${error.message}\`,
            }
          );
        }}
      >
        Upload with Promise
      </Button>
    </div>
  );
}`;

export function CustomExample() {
  const [filename, setFilename] = useState('');

  const handleUpload = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve('File uploaded successfully');
        } else {
          reject(new Error('Upload failed'));
        }
      }, 2000);
    });
  };

  useSendThemeToIframes();

  return (
    <div className="flex flex-col gap-(--lsd-spacing-base)">
      <Typography variant="h3">Custom Toast Examples</Typography>
      <Typography variant="body1" className="text-(--lsd-text-secondary)">
        Demonstrates rich content, custom styling, and promise-based toasts.
      </Typography>

      <div className="space-y-(--lsd-spacing-lg)">
        <div>
          <Typography variant="label1">Rich Content Toast with Custom Styling</Typography>
          <Typography
            variant="body2"
            className="text-(--lsd-text-secondary) mb-(--lsd-spacing-base)"
          >
            Custom JSX content with inline styles and action buttons.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              toast(
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Upload Complete</p>
                    <p className="text-sm text-gray-600">
                      Your file has been processed and is ready to view
                    </p>
                  </div>
                </div>,
                {
                  duration: 5000,
                  className: 'border border-green-200',
                  action: {
                    label: 'View',
                    onClick: () => console.log('View uploaded file'),
                  },
                }
              );
            }}
          >
            Show Rich Content Toast
          </Button>
        </div>

        <div>
          <Typography variant="label1">Toast with Custom Icon</Typography>
          <Typography
            variant="body2"
            className="text-(--lsd-text-secondary) mb-(--lsd-spacing-base)"
          >
            Toast with custom visual elements and different styling.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              toast(
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Sent</p>
                    <p className="text-sm text-gray-600">Message delivered to recipient</p>
                  </div>
                </div>,
                {
                  className: 'border border-blue-200 bg-blue-50',
                }
              );
            }}
          >
            Show Custom Icon Toast
          </Button>
        </div>

        <div>
          <Typography variant="label1">Promise-based Toast</Typography>
          <Typography
            variant="body2"
            className="text-(--lsd-text-secondary) mb-(--lsd-spacing-base)"
          >
            Upload simulation with loading, success, and error states.
          </Typography>
          <Input
            placeholder="Enter filename to upload"
            value={filename}
            onChange={e => setFilename(e.target.value)}
            className="mb-(--lsd-spacing-base) max-w-sm"
          />
          <Button
            variant="outlined"
            disabled={!filename}
            onClick={() => {
              toast.promise(handleUpload(), {
                loading: `Uploading ${filename}...`,
                success: data => `${data}: ${filename}`,
                error: error => `Failed to upload ${filename}: ${error.message}`,
              });
            }}
          >
            Upload with Promise
          </Button>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default function Custom() {
  return <CustomExample />;
}
