import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tabpanel from './Tabpanel';
import useMenu from '../../../hooks/useMenu';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category);
    // 
    const dessert = menu.filter(item=> item.category ==='dessert')
    const soup = menu.filter(item=> item.category ==='soup')
    const salad = menu.filter(item=> item.category ==='salad')
    const pizza = menu.filter(item=> item.category ==='pizza')
    const drinks = menu.filter(item=> item.category ==='drinks')
    return (
        <div>
            <Cover img={orderCoverImg} title={'our shop'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    {/* <div className='grid md:grid-cols-3'>
                        {
                            salad.map(item => <Foodcard
                                key={item.id}
                                item={item}
                            ></Foodcard>)
                        }
                    </div> */}
                    <Tabpanel items={salad}></Tabpanel>
                </TabPanel>
                <TabPanel><Tabpanel items={pizza}></Tabpanel></TabPanel>
                <TabPanel><Tabpanel items={soup}></Tabpanel></TabPanel>
                <TabPanel><Tabpanel items={dessert}></Tabpanel></TabPanel>
                <TabPanel><Tabpanel items={drinks}></Tabpanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;