import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import axios from "axios";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/products");
//         setProducts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className="product">
//       <div class="prod-container">
//         <div id="data-output">
//           <div class="prod-box">
//             {products.map((product) => (
//               <div class="prod-box">
//                 <div class="prod-image">
//                   <img src={product.icon} alt="" />
//                 </div>
//                 <div class="prod-info">
//                   <h3 class="prod-title">{product.item}</h3>
//                   <div class="prod-desc">
//                     <div class="description">{product.description}</div>
//                   </div>
//                   <div class="subInfo">
//                     <div class="price">{product.price}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* <div>
//           {items.map((item) => (
//             <div key={item.id}>
//               <h1>{item.name}</h1>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default Products;

class Productas extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("http://localhost:8800/products").then((res) => {
      const products = res.data;
      this.setState({ products: products });
    });
  }
  render() {
    return (
      <>
        <div className="prod-container">
          <div id="data-output">
            {this.state.products.map((product) => {
              return (
                <div class="prod-box">
                  <div class="prod-image">
                    <img src={product.icon} alt="" />
                  </div>
                  <div class="prod-info">
                    <h3 class="prod-title">{product.item}</h3>
                    <div class="prod-desc">
                      <div class="description">{product.description}</div>
                    </div>
                    <div class="subInfo">
                      <div class="price">{product.price}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Productas;
