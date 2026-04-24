import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
  Typography,
} from '@nipsys/lsd';

export default function SocialUIPreview() {
  return (
    <div className="w-fit mx-auto">
      <div className="flex gap-x-(--lsd-spacing-largest)">
        <Avatar className="size-30!">
          <AvatarImage src="/nipsysdev-nft_2.webp" alt="@nipsys" />
          <AvatarFallback>nipsys</AvatarFallback>
        </Avatar>

        <div className="flex flex-col justify-between py-(--lsd-spacing-smallest)">
          <Typography variant="h5" className="font-bold">
            Xav {'<nipsys.eth>'}
          </Typography>

          <div className="flex flex-col gap-y-(--lsd-spacing-smaller)">
            <Typography variant="body1">I enjoy building open-source things</Typography>

            <div className="space-x-(--lsd-spacing-smaller)">
              <Badge variant="outlined">142 posts</Badge>
              <Badge variant="outlined">89 following</Badge>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-(--lsd-spacing-large)" />

      <div className="flex items-center justify-between">
        <Typography>Notifications</Typography>
        <Switch size="lg" />
      </div>

      <Separator className="mt-(--lsd-spacing-large) mb-(--lsd-spacing-base)" />

      <div className="flex items-center justify-between">
        <Typography>Visibility</Typography>
        <Select defaultValue="public">
          <SelectTrigger className="w-full max-w-xs">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">Public</SelectItem>
            <SelectItem value="private">Private</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator className="mt-(--lsd-spacing-base) mb-(--lsd-spacing-large)" />

      <div className="text-center space-x-(--lsd-spacing-base)">
        <Button variant="filled">Message</Button>
        <Button variant="outlined">Follow</Button>
      </div>
    </div>
  );
}
