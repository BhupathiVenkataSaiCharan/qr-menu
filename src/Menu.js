import React, { useState, useEffect } from "react";


/**
 * https://stackoverflow.com/questions/75181830/data-is-not-displayed-from-the-array-on-page-load
 */

/**
 * 
 * https://codesandbox.io/s/qr-menu-forked-khtw6s?fontsize=14&hidenavigation=1&module=/src/App.js&theme=dark&file=/src/App.js:0-5175
 */ 
// solved by Drew Reese

const Menu = () => {

//   const [toggleState, setToggleState] = useState(1);

//   const [mainArray, setMainArray] = useState();
  const [data, setData] = useState([]); //solved from stackoverflow
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(API_URL, {
        //   headers: {
        //     'Authorization': `Bearer ${API_KEY}`,
        //   },
        // });
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await fetch("https://63b6952d1907f863aafa9342.mockapi.io/menu/"
);
        const data = await response.json();
        setData(data);
        // toggleTab(1, "Pizza", data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const [vegOnly, setVegOnly] = useState(false);

  const handleVegInputChange = (e) => {
    const isChecked = e.target.checked;
    setVegOnly(isChecked);
  };

  const filteredData = data
    .filter((item) => {
      return item.Name.toLowerCase().includes(search.toLowerCase());
    })
    .filter((item) => {
      if (vegOnly) {
        return item.Type === "veg";
      }
      return true;
    })
    .filter((item) => {
      if (category !== "All") {
        return item.Category === category;
      }
      return true;
    });

  const allCategory = [
    "All",
    ...new Set(data.map((curElem) => curElem.Category))
  ]; // 3rd step to make it array

  const filterItem = (category) => {
    setCategory(category);
  };

  return (
    <div className="first">
      <nav>
        <label>
          <img src="/images/logo.svg" />
        </label>
        <ul>
          <li>
            <a href="#" className="help">
              Help
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/signin.png" />
              Signin
            </a>
          </li>
        </ul>
      </nav>
      <div className="resinfo">
        <div className="resdata">
          <div className="resimage">
            <img src="/images/kfc.png" />
          </div>
          <ul>
            <li>
              <h3>Shah Ghouse Hotel & Restaurant</h3>
            </li>
            <li>
              <p>Abids,Hyderabad</p>
            </li>
            <li>
              <p>
                <img src="/images/rating.png" />
                <span>4.5 Rating | 09:00 A.M - 11:00 P.M</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="resinfo2">
        <div className="rescategory">
          <ul>
            {allCategory.map((curClem, index) => {
              return (
                <li
                  key={index}
                  className={curClem === category ? "left-menu" : "blue" }
                //   style={{
                //     color: curClem === category ? "lightgreen" : "inherit"
                //   }}
                  onClick={() => filterItem(curClem)}
                >
                  {curClem}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="resitems">
          <div className="box">
            <input
              type="text"
              className="search-input"
              placeholder="Search for dishes"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src="/images/search.png" />
          </div>

          <div className="contents">
            {data ? (
              <div>
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      value={vegOnly}
                      onChange={handleVegInputChange}
                    />
                    Veg Only
                  </label>
                </div>
                <div className="items">
                  {filteredData.map((item) => (
                    <div className="itemslist" key={item.id}>
                      <ul>
                        <li
                          className={item.Type === "veg" ? "veg" : "non-veg"}
                        ></li>
                        <li>{item.Name}</li>
                        <li>₹ {item.Price}</li>
                        <img src="/images/pizza1.jpg" />
                        <div className="hr"></div>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="loading">Loading...</div>
            )}
          </div>
        </div>
        <div className="rescart"></div>
      </div>
    </div>
  );
};

export default Menu;
