import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from "axios";
function Homepage() {
  let [productsYen, setProductsYen] = useState([]);
  let [productsSam, setProductsSam] = useState([]);
  const getDataThuongvyYen = async () => {
    await axios
      .get(`http://localhost:3000/api/v1/products?category=thuong-vy-yen`)
      .then((res) => setProductsYen(res.data))
      .catch((err) => console.log(err));
  };

  const getDataThuongvySam = async () => {
    await axios
      .get(`http://localhost:3000/api/v1/products?category=thuong-vy-sam`)
      .then((res) => setProductsSam(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDataThuongvyYen();
    getDataThuongvySam();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <section className="container section-thuong-vy-yen">
        <div className="row banner">
          <img src={productsYen.length > 0 && productsYen[0].banner} alt="" />
        </div>
        <div className="row category-name">
          <h3>{productsYen.length > 0 && productsYen[0].description}</h3>
        </div>
        <div className="row category-products">
          {productsYen.map((e, i) => (
            <div className="col-4">
              <Product product={e}></Product>
            </div>
          ))}
        </div>
      </section>
      <section className="container section-thuong-vy-sam">
        <div className="row banner">
          <img src={productsSam.length > 0 && productsSam[0].banner} alt="" />
        </div>
        <div className="row category-name">
          <h3>{productsSam.length > 0 && productsSam[0].description}</h3>
        </div>
        <div className="row category-products">
          {productsSam.map((e, i) => (
            <div className="col-4">
              <Product product={e}></Product>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
