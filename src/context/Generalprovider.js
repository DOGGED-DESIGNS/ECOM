import { createContext, useState } from "react";

export const Context = createContext();

const Generalprovider = (prop) => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);

  const [menu, setMenu] = useState(false);

  const changeSearch = () => {
    setSearch(!search);
  };

  const changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Context.Provider
      value={{
        toggle,
        changeToggle,
        search,
        setToggle,
        setSearch,
        changeSearch,
        menu,
        setMenu,
      }}
    >
      {prop.children}
    </Context.Provider>
  );
};

export default Generalprovider;
