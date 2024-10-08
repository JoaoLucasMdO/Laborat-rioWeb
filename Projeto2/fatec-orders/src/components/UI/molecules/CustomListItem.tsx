import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface CustomListItemProps {
  text: string;
  path: string;
  icon: React.ReactNode;
}

const CustomListItem: React.FC<CustomListItemProps> = ({
  text,
  path,
  icon,
}) => {
  const router = useRouter();
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          router.push(path);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
