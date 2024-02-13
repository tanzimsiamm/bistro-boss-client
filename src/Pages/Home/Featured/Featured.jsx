import Sectiontitle from "../../Sectiontitle/Sectiontitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featured p-7 mt-32 bg-fixed">
            <Sectiontitle
          SubHeading={'from 11am to 4 pm'}
          Heading={'from our menu'}
          ></Sectiontitle>
          <div className="flex py-20 px-24 space-x-7 justify-center items-center bg-opacity-45 bg-slate-700">
            <img className="w-[500px]" src={featuredImg} alt="" />
            <div className="space-y-2 text-white">
            <h2>March 20, 2023</h2>
            <h3>WHERE CAN I GET SOME?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam veniam cumque quaerat, velit voluptas impedit aspernatur maxime aliquid voluptatum, minus ipsa quae libero! Quae voluptatibus doloribus aliquam quasi! Dolorum sint facilis sunt!</p>
            <button className="btn btn-outline btn-primary uppercase">order now</button>

            </div>
          </div>
        </div>
    );
};

export default Featured;