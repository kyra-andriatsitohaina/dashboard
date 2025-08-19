export interface MenuItemProps {
  svg: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}