import React, { useState, useEffect } from 'react';


const Menu = () => {

    /*Toggle sidemenu start*/

    const [toggleState, setToggleState] = useState(1);

    const [mainArray, setMainArray] = useState();

    // const toggleTab = (index) =>{
    //     setToggleState(index);
    // }

    const toggleTab = (index, name, item) => {
        let array = item ? item : mainArray;
        setToggleState(index);
        const filteredArray = array.filter((item) => item.Category === name)
        setData(filteredArray);
        };

    /*Toggle sidemenu end*/

    /*Filter Data start*/

    

    /*Filter Data end*/


    /* API Data start */

    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
          try {
            // const response = await fetch(API_URL, {
            //   headers: {
            //     'Authorization': `Bearer ${API_KEY}`,
            //   },
            // });
            // const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const response = await fetch('https://63b040676a74151a1bbcf341.mockapi.io/restaurantmenu')
            const data = await response.json();
            // setData(data);
            toggleTab(1, "Pizza", data);
            setMainArray(data);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
      }, []);

    /* API Data end */

  return (
    
    <div className='main-content'>
        <div className='restaurant-card'>
            <div className='image'>
                <img src='/images/kfc.png'/>
            </div>
            <div className='restaurant-details'>
                <h2>KFC</h2>
                <p>Abids, Hyderabad</p>
                <p><img src='/images/rating.png'/><span>4.5 Rating | 09:00 A.M - 11:00 P.M</span></p>
            </div>
        </div>
        <div className='item-category'>
            <h3>Categories</h3>
            <ul>
                <li className={toggleState === 1 ? "tabs active" : "tabs"} onClick={()=>toggleTab(1, "Pizza")}>Pizza</li>
                <li className={toggleState === 2 ? "tabs active" : "tabs"} onClick={()=>toggleTab(2, "Bread")}>Bread</li>
                <li className={toggleState === 3 ? "tabs active" : "tabs"} onClick={()=>toggleTab(3, "Shakes")}>Shakes</li>
                <li className={toggleState === 4 ? "tabs active" : "tabs"} onClick={()=>toggleTab(4, "Ice-Cream")}>Ice Cream</li>
                <li className={toggleState === 5 ? "tabs active" : "tabs"} onClick={()=>toggleTab(5, "Cakes")}>Cakes</li>
                <li className={toggleState === 6 ? "tabs active" : "tabs"} onClick={()=>toggleTab(6, "Juices")}>Juices</li>
            </ul>
            
        </div>
        <div className='item-list'>
            <div className="box">
                <input type="text" className="search-input" placeholder="Search for dishes"/>
                <img src='/images/search.png'/>
            </div>
            <div className="contents">
                {/* <h2>Pizza's (4 items)</h2>
                <div className='items'>
                    <ul>
                        <li>
                            <div className='non-veg'></div>
                            <h2>Chicken Pizza</h2>
                            <p>₹ 376</p>
                        </li>
                        <div className='hr'></div>
                    </ul>
                </div> */}
                {
                    data 
                    ? 
                        (
                        <div>
                            <div>
                            <h2 className={toggleState === 1 ? "content active-content" : "content"}>Pizza</h2>
                            <h2 className={toggleState === 2 ? "content active-content" : "content"}>Bread</h2>
                            <h2 className={toggleState === 3 ? "content active-content" : "content"}>Shakes</h2>
                            <h2 className={toggleState === 4 ? "content active-content" : "content"}>Ice Creams</h2>
                            <h2 className={toggleState === 5 ? "content active-content" : "content"}>Cakes</h2>
                            <h2 className={toggleState === 6 ? "content active-content" : "content"}>Juices</h2>
                            {/* {filteredData.map(item => */}
                                {data.map(item =>
                                    <div>
                                        {/* <h2>{item.Category}</h2> */}
                                        <div className='items' key={item.id}>
                                            <ul>
                                                <li>{item.Type}</li>
                                                <li>{item.Name}</li>
                                                <li>₹ {item.Price}</li>
                                                <div className='hr'></div>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                        </div>
                        </div>
                        ) 
                    : 
                        (<div>Loading...</div>)
                }
            </div>
        </div> 
    </div>
  )
}

export default Menu;