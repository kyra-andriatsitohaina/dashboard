import type { MenuItemProps } from "../../types/types";

const MenuItem = ({ svg, title, children, isOpen, onToggle }: MenuItemProps) => {
  return (
    <div className="menu-item" >
      <div className={`menu-title ${isOpen ? 'active' : ''}`}  onClick={onToggle}>
        <div className="menu-content" >
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
