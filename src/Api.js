// import React, {useState, useEffect} from 'react'


// const Api = () => {
//     const [data, setData] = useState(null);
        
//         useEffect(() => {
//             const fetchData = async () => {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users');
//             const data = await response.json();
//             setData(data);
//             };
//             fetchData();
//         }, []);

//         if (data === null) {
//             return <p>Loading data...</p>;
//         }
    
//     return (
//         <div>
//             {data.map(item =>
//                 <div key={item.id}>
//                     <li>{item.name}</li>
//                     <li>{item.email}</li>
//                 </div>
//                     )}
//         </div>
//   )
// }

// export default Api;


import React, { useEffect, useState } from 'react';

const Api = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(API_URL, {
        //   headers: {
        //     'Authorization': `Bearer ${API_KEY}`,
        //   },
        // });
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await fetch('https://63b6952d1907f863aafa9342.mockapi.io/menu/')
        const data = await response.json();
        setData(data);
        console.log("data")
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      
      {
        data 
        ? 
            (
            <div>
                <div>
                    {data.map(item =>
                        <div key={item.id}>
                            <li>{item.Name},{item.Category}</li>
                        </div>
                    )}
            </div>
            </div>
            ) 
        : 
            (<div>Loading...</div>)
      }

    </div>
  );
}

export default Api;
