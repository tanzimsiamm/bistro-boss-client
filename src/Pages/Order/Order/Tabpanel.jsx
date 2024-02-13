// import useMenu from "../../../hooks/useMenu";
import Foodcard from "../../Foodcard/Foodcard";

const Tabpanel = ({items}) => {
    // const [menu] = useMenu();
    // const dessert = menu.filter(item=> item.category ==='dessert')
    // const soup = menu.filter(item=> item.category ==='soup')
    // const salad = menu.filter(item=> item.category ==='salad')
    // const pizza = menu.filter(item=> item.category ==='pizza')
    // const offered = menu.filter(item=> item.category ==='offered')
    return (
        <div className='grid md:grid-cols-3'>
            {
                items.map(item=> <Foodcard
                key={item.id}
                item={item}
                ></Foodcard>)
            }
        </div>
    );
};

export default Tabpanel;