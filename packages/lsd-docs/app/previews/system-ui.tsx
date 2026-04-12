import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Typography,
} from '@nipsys/shadcn-lsd';
import { WarningIcon } from '@phosphor-icons/react';
import { useState } from 'react';

export default function SystemUIPreview() {
  const [inputValue, setInputValue] = useState('');
  const [eventLog, setEventLog] = useState<string[]>([]);

  const handleExecute = () => {
    if (inputValue.trim()) {
      const timestamp = new Date().toLocaleTimeString();
      const logEntry = `[${timestamp}] ${inputValue}`;
      setEventLog(prev => [...prev, logEntry]);
      setInputValue('');
    }
  };
  return (
    <div className="flex flex-col gap-y-(--lsd-spacing-base)">
      <Typography variant="h5" className="font-bold">
        System Status
      </Typography>

      <Alert variant="warning">
        <AlertTitle className="flex">
          <div className="flex items-center gap-x-(--lsd-spacing-smaller) font-bold">
            <WarningIcon weight="duotone" /> Node sync delayed
          </div>
        </AlertTitle>
        <AlertDescription>
          The node synchronisation has been delayed. 3 peers are currently unresponsive.
        </AlertDescription>
      </Alert>

      <div className="flex gap-x-(--lsd-spacing-base) items-end">
        <Input
          className="flex-auto"
          placeholder="Run a command..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && inputValue.trim()) {
              handleExecute();
            }
          }}
        />
        <Button onClick={handleExecute} disabled={!inputValue.trim()}>
          Execute
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Uptime</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Consensus</TableCell>
            <TableCell>
              <Badge>active</Badge>
            </TableCell>
            <TableCell>99.97%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Relay</TableCell>
            <TableCell>
              <Badge>active</Badge>
            </TableCell>
            <TableCell>99.82%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Discovery</TableCell>
            <TableCell>
              <Badge variant="outlined">degraded</Badge>
            </TableCell>
            <TableCell>94.1%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Storage</TableCell>
            <TableCell>
              <Badge>active</Badge>
            </TableCell>
            <TableCell>99.99%</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full">
              <span>Event Log</span>
              <Typography variant="label2">
                {eventLog.length} {eventLog.length === 1 ? 'log' : 'logs'}
              </Typography>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-y-(--lsd-spacing-smaller)">
              {eventLog.length === 0 ? (
                <Typography variant="body2" className="text-muted-foreground">
                  No events logged yet. Execute a command to see it here.
                </Typography>
              ) : (
                eventLog.map(event => (
                  <Typography key={event} variant="body2" className="font-mono text-sm">
                    {event}
                  </Typography>
                ))
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
