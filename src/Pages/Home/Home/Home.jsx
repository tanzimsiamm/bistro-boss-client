import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRcommends from "../ChefRcommends/ChefRcommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ChefRcommends></ChefRcommends>
            <Featured></Featured>
        </div>
    );
};

export default Home;