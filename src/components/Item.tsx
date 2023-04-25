
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

type ItemProps = {
    title : string
    to : string
    icon: React.ReactNode
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
    return (
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
        component={<Link to={to} />}
      >
        {title}
        
      </MenuItem>
    );
  };