import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import ProductCarousel from "../components/ProductCarousel";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../helpers";
import axios from "axios";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    await axios
      .get("http://localhost:3000/api/v1/products/" + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="ProductPage">
      <Navbar></Navbar>
      <BreadCrumb />
      <section className="container product-detail">
        <div className="row">
          <h3 className="product-name">Tổ yến tinh chế vip 1 </h3>
          <i className="sku">SKU: TC123123</i>
          <p className="mini-description">
            <span className="mini-description-item product-origin">
              <b> Mr. Hà Chuyên bán yến : </b>
            </span>
            <span className="mini-description-item product-status">
              Còn hàng
            </span>
            <span className="mini-description-item product-sell">
              <b>Đã bán </b>: 21 sản phẩm
            </span>
          </p>
        </div>
        {/* rouw 2 */}
        <div className="row">
          <div className="col-5">
            {product?.sources?.length > 0 && (
              <ProductCarousel source={product.sources} />
            )}
          </div>
          <div className="col-4">
            <h5>
              <b
                className={product.sale ? `full-price sale` : "full-price"}
                style={{ display: "flex" }}
              >
                Price:
                {product.price && formatCurrency(product.price)}
              </b>
              <i className="sale-price">
                Sale:
                {product.sale &&
                  formatCurrency(product.price * (1 - product.sale))}
              </i>
              <span
                style={{
                  border: "1px solid red",
                  color: "white",
                  backgroundColor: "red",
                  marginLeft: "20px",
                }}
              >
                -{product.sale * 100}%
              </span>
            </h5>
            <div style={{ display: "flex", margin: " 10px 0px" }}>
              <button className="btntanggiam btn btn-dark" type="button">
                -
              </button>
              <input
                type="text"
                value="1"
                style={{ width: "50px", textAlign: "center" }}
              ></input>
              <button className="btntanggiam btn btn-dark" type="button">
                +
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-dark"
                style={{ marginRight: "10px" }}
              >
                Mua ngay
              </button>
              <button type="button" className="btn btn-dark">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
