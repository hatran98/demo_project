import { formatCurrency } from "../helpers/index";
function Product({ product }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="sale-icon">SALE</div>
      <img
        src="https://product.hstatic.net/200000404397/product/72e199dc550b8755de1a_fc3288ef97ec4d47b5b8574402b2f7c4_large.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{product.product_name}</h5>
        <p className="card-text">Phận Loại: {product.description}</p>
        <b
          className={product.sale ? `full-price sale` : "full-price"}
          style={{ display: "flex" }}
        >
          Price:
          {formatCurrency(product.price)}
        </b>
        <i className="sale-price">
          Sale:
          {product.sale && formatCurrency(product.price * (1 - product.sale))}
        </i>
        <p className="card-text">
          Số lượng :
          {product.number === 0
            ? "Hết Hàng"
            : ` ${product.number} ${
                product.number <= 10 ? "(Sắp Hết Hàng)" : ""
              }`}
        </p>
        <a href="#" className="btn btn-primary">
          Chi tiết
        </a>
      </div>
    </div>
  );
}

export default Product;
