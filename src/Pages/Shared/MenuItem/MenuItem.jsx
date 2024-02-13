
const MenuItem = ({item}) => {
    const {recipe, name, image, price} = item;
    return (
        <div className="flex space-x-4">
            <img className="w-[118px]" src={image} alt="" />
            <div className="text-center">
            <h1 className="uppercase">{name}</h1>
            <h3 >{recipe}</h3>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;