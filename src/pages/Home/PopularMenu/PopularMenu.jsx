import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <section className="mb-12">
      <SectionTItle heading="From Our Menu" subHeading={"Popular Items"} />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-outline hover:bg-none border-0 border-b-2 mt-4 text-black">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
