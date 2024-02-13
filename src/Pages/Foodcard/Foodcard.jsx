
const Foodcard = ({item}) => {
    const {recipe, name, image, price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="absolute right-0 bg-black text-white mr-12 mt-12">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-primary uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;