export default function Order() {
  const styleObj: React.CSSProperties = {
    marginBottom: "20px",
  };

  const bottomContext:React.CSSProperties = {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const totalContext:React.CSSProperties = {
    color : 'red',
    margin : '0'
  }
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="customer">Select Customer</label>
              <select id="customer" className="form-control">
                <option value="#" disabled>
                  Use Options
                </option>
                <option value="#">Customer 1</option>
                <option value="#">Customer 2</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="name">Customer name</label>
              <input type="text" className="form-control" id="name" disabled />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="form-group">
              <label htmlFor="address">Customer Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="address">Customer address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                disabled
              />
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="product">Select Product</label>
              <select id="product" className="form-control">
                <option value="#" disabled>
                  Use Options
                </option>
                <option value="#">Customer 1</option>
                <option value="#">Customer 2</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="description">Product Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <div className="form-group">
              <label htmlFor="price">Unit Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <div className="form-group">
              <label htmlFor="qtyOnHand">Qty On Hand</label>
              <input
                type="number"
                className="form-control"
                id="qtyOnHand"
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <div className="form-group">
              <label htmlFor="qty">Qty</label>
              <input type="number" className="form-control" id="qty" />
            </div>
          </div>

          <hr></hr>
        </div>

        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary col-12">+ Add Product</button>
          </div>
        </div>
        <hr></hr>

        <div className="row">
          <div className="col-12">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>#Id</th>
                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>QTY</th>
                  <th>Total</th>
                  <th>Delete Option</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>  
                  <td>#00001</td>
                  <td>Product 1</td>
                  <td>240.00</td>
                  <td>20</td>
                  <td>4800.00</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      Remove
                    </button>
                  </td>
                </tr>
                
              </tbody>
            </table>
            <div className="bottom-context" style={bottomContext}>

              <div className="total-order">
                <h1 style={totalContext}>Total : 25400.00</h1>
              </div>
              <div className="place-order-button-context">
                <button className="btn btn-primary">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
