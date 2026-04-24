import {
  Badge,
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Typography,
  useForm,
} from '@nipsys/lsd';
import { useState } from 'react';

interface Item {
  id: number;
  name: string;
  severity: 'low' | 'medium' | 'high';
  date: string;
}

const severities = ['low', 'medium', 'high'];
const initialChecked: number[] = [1, 2];
const initialItems: Item[] = [
  { id: 1, name: 'Design system audit', severity: 'high', date: 'Jan 12' },
  { id: 2, name: 'Write component docs', severity: 'medium', date: 'Jan 12' },
  { id: 3, name: 'Review pull requests', severity: 'high', date: 'Jan 12' },
  { id: 4, name: 'Update changelog', severity: 'low', date: 'Jan 12' },
  { id: 5, name: 'Deploy to staging', severity: 'medium', date: 'Jan 12' },
];

export default function WorkUIPreview() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [checkedIds, setCheckedIds] = useState<number[]>(initialChecked);

  const form = useForm({
    defaultValues: {
      taskName: '',
      severity: 'medium' as 'low' | 'medium' | 'high',
    },
  });

  function onSubmit(data: { taskName: string; severity: 'low' | 'medium' | 'high' }) {
    const newItem: Item = {
      id: Math.max(...items.map(item => item.id)) + 1,
      name: data.taskName,
      severity: data.severity,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    };

    setItems([...items, newItem]);
    form.reset();
  }

  return (
    <div>
      <Typography variant="h5" className="font-bold mb-(--lsd-spacing-small)">
        Project Tasks
      </Typography>

      <div className="flex gap-x-(--lsd-spacing-largest) items-center">
        <Typography variant="body1" className="shrink-0">
          {items.filter(i => checkedIds.includes(i.id)).length}/{items.length} complete
        </Typography>
        <Progress
          size="lg"
          value={(items.filter(i => checkedIds.includes(i.id)).length / items.length) * 100}
        />
      </div>

      <div className="flex flex-col py-(--lsd-spacing-base) gap-(--lsd-spacing-smallest)">
        {items.map(item => (
          <div
            key={item.id}
            className="flex items-center p-(--lsd-spacing-small) gap-(--lsd-spacing-small) border-b"
          >
            <Checkbox
              id={`${item.id}`}
              checked={checkedIds.includes(item.id)}
              onCheckedChange={checked =>
                setCheckedIds(
                  checked ? [...checkedIds, item.id] : checkedIds.filter(id => id !== item.id)
                )
              }
            />
            <Label htmlFor={`${item.id}`}>{item.name}</Label>
            <Badge variant="outlined" size="sm" className="rounded-0!">
              {item.severity}
            </Badge>
            <Typography className="flex-1 text-right" variant="label1">
              {item.date}
            </Typography>
          </div>
        ))}
      </div>

      <div className="mt-(--lsd-spacing-largest)">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-x-(--lsd-spacing-large) items-end relative mb-3"
          >
            <FormField
              control={form.control}
              name="severity"
              rules={{
                required: 'Severity is required',
              }}
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-fit">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {severities.map(severity => (
                        <SelectItem key={severity} value={severity}>
                          {severity}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="taskName"
              rules={{
                required: 'Task name is required',
                minLength: { value: 3, message: 'Task name must be at least 3 characters' },
                maxLength: { value: 50, message: 'Task name must be at most 50 characters' },
              }}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input variant="underlined" placeholder="Add a task..." {...field} />
                  </FormControl>

                  <div className="bottom-[-20] absolute">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" variant="filled">
              Add
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
