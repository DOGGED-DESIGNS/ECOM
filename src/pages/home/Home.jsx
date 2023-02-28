import { useContext } from "react";
import Card from "../../components/Card/Card";
import Category from "../../components/category/Category";
import Slider from "../../components/slider/Slider";
import Smallnav from "../../components/Smallnav/Smallnav";
import Touch from "../../components/Touch/Touch";
import Wish from "../../components/wish/Wish";

import { Context } from "../../context/Generalprovider";

const Home = () => {
  const test = useContext(Context);

  console.log(test);
  return (
    <>
      {/* <Wish /> */}

      {/* <Smallnav /> */}

      <Slider />
      <Card
        title="Featured product"
        write="this is just for a test and i want to see if it would between so so
            successful after i have tried and seen that it is a matter of time
            and i will want tos hsow how itlsj"
      />
      <Card
        title="Trending product"
        write="this is just for a test and i want to see if it would between so so
            successful after i have tried and seen that it is a matter of time
            and i will want tos hsow how itlsj"
      />
      <Category />
      <Touch />
    </>
  );
};

export default Home;
