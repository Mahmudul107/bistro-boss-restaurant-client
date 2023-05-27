import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu//dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu//pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      {/* Main cover */}
      <SectionTItle subHeading="Don't Miss" heading="Toady's Offers" />
      {/* Offered cover */}
      <MenuCategory items={offered} />
      {/* Desserts Items */}
      <MenuCategory items={desserts} title={'desserts'} img={dessertImg}/>
      <MenuCategory items={pizza} img={pizzaImg} title={'pizza'}/>
      <MenuCategory items={salad} img={saladImg} title={'salads'}/>
      <MenuCategory items={soup} img={soupImg} title={'soups'}/>
    </div>
  );
};

export default Menu;
