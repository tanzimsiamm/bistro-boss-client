import Sectiontitle from "../../Sectiontitle/Sectiontitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=> item.category ==='popular')
    
    return (
        <section>
            <Sectiontitle
          SubHeading={'from 11am to 4 pm'}
          Heading={'from our menu'}
          ></Sectiontitle>
          <div className="grid grid-cols-2 gap-4">
            {
                popular.map(item=> <MenuItem
                key={item.id}
                item={item}
                ></MenuItem>)
            }
          </div>
          <button className="btn btn-outline btn-primary mt-5 uppercase">view full menu</button>
        </section>
    );
};

export default PopularMenu;