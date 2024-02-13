import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-10 my-16">
            {
                items.map(item=> <MenuItem
                key={item.id}
                item={item}
                ></MenuItem>)
            }
          </div>
          <Link to={`/order/${title}`}>
          <button className="btn btn-outline btn-primary uppercase">view full order menu</button>
          </Link>
        </div>
    );
};

export default MenuCategory;