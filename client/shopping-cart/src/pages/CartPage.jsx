import React from "react";
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";

function CartPage() {
  return (
    <div>
      <Navbar />
      <BreadCrumb />
      <div className="container">
        <h3
          style={{
            textAlign: "center",
            backgroundColor: "white",
            color: "black",
            padding: "20px 0px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          GIỎ HÀNG CỦA BẠN
        </h3>
        {/* <h5
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "50px 0px",
            borderRadius: "5px",
            marginBottom: "20px",
            paddingLeft: "20px",
          }}
        >
          Giỏ hàng của bạn đang trống
        </h5> */}
        <table className="table">
          <thead>
            <tr style={{ textAlign: "left" }}>
              <th scope="col"></th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Số Lượng</th>
              <th scope="col">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://product.hstatic.net/200000404397/product/cafcfc932eabfdf5a4ba_e89d496d878245dd9652ed37c61523f9_medium.jpg"
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                ></img>
              </td>
              <td>Set 30 hũ Thượng Vy Yến Biển</td>
              <td>1,998,000₫</td>
              <td>
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
              </td>
              <td>1,998,000₫</td>
            </tr>
          </tbody>
        </table>
        <hr></hr>
        <div
          className="row"
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "5px",
            marginBottom: "20px",
            marginTop: "20px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div className="col-7" style={{ marginTop: "20px" }}>
            <h2>Ghi chú đơn hàng</h2>
            <textarea
              placeholder="Ghi Chú"
              style={{
                padding: "10px",
                width: "100%",
                height: "50%",
                backgroundColor: "rgba(128, 128, 128, 0.255)",
                border: "1px solid white",
                borderRadius: "5px",
              }}
            ></textarea>
          </div>
          <div className="col-5" style={{ marginTop: "20px" }}>
            <h2>Thông tin đơn hàng</h2>
            <p style={{ paddingBottom: "10px" }}>
              Tổng tiền: <b style={{ fontSize: "20px" }}>1,998,000₫</b>
            </p>
            <p style={{ paddingBottom: "10px" }}>
              Phí vận chuyển sẽ được tính ở trang thanh toán. <br></br>
              Bạn cũng có thể nhập mã giảm giá ở trang thanh toán
            </p>
            <button
              type="button"
              className="btn btn-success"
              style={{ marginBottom: "10px" }}
            >
              THANH TOÁN
            </button>
            <p>
              <i class="fa-solid fa-reply"></i>&ensp;Tiếp tục mua hàng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
