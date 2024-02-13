import Sectiontitle from "../../Sectiontitle/Sectiontitle";


const ChefRcommends = () => {
    return (
        <section>
             <Sectiontitle
          SubHeading={'from 11am to 4 pm'}
          Heading={'CHEF RECOMMENDS'}
          ></Sectiontitle>
            <div className="grid grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ChefRcommends;