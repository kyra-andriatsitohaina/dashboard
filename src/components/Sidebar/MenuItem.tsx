
interface MenuItemProps {
  svg: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}


const MenuItem = ({ svg, title, children, isOpen, onToggle }: MenuItemProps) => {
  return (
    <div className="menu-item">
      <div className="menu-title" onClick={onToggle}>
        <div className="menu-content">
          <span className="svg-icon">{svg}</span>
          <span className="title">{title}</span>
        </div>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="submenu">{children}</div>}
    </div>
  );
};

export default MenuItem;
