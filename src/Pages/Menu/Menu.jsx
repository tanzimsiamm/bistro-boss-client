import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import soupImage from '../../assets/menu/soup-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import useMenu from "../../hooks/useMenu";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category ==='dessert')
    const soup = menu.filter(item=> item.category ==='soup')
    const salad = menu.filter(item=> item.category ==='salad')
    const pizza = menu.filter(item=> item.category ==='pizza')
    const offered = menu.filter(item=> item.category ==='offered')

    return (
        <div>
            {/* main cover */}
         <Cover img={menuImg} title={'Our menu'}></Cover>
         {/* offered menu items */}
        <Sectiontitle SubHeading={"don't miss"} Heading={'todays offer'}></Sectiontitle>
        <MenuCategory items={offered}></MenuCategory>
        {/* dessert menu items */}
        <MenuCategory
        items={dessert}
        title={'dessert'}
        img={dessertImage}
        ></MenuCategory>
        <MenuCategory
        items={pizza}
        title={'pizza'}
        img={pizzaImage}
        ></MenuCategory>
        <MenuCategory
        items={salad}
        title={'salad'}
        img={saladImage}
        ></MenuCategory>
        <MenuCategory
        items={soup}
        title={'soup'}
        img={soupImage}
        ></MenuCategory>
        </div>
    );
};

export default Menu;