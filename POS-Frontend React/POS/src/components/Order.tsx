import { useEffect, useState } from "react";
import Customer from "./Customer";
import axios from "axios";
import Product from "./Product";

interface Cart {
  _id: String | undefined;
  productName: String | undefined;
  unitPrice: number | undefined;
  qty: number | undefined;
  total: number | undefined;
}

const Order: React.FC = () => {
  const styleObj: React.CSSProperties = {
    marginBottom: "20px",
  };

  const bottomContext: React.CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const totalContext: React.CSSProperties = {
    color: "red",
    margin: "0",
  };

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  const [name, setName] = useState("");
  const [qty, setQty] = useState<number>(0);
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState<number>();

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const [pname, setPName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [qtyOnHand, setQtyOnHand] = useState("");

  useEffect(() => {
    findAllCustomers();
    findAllProducts();
  }, []);

  const findAllCustomers = async () => {
    const response = await axios.get(
      "http://localhost:3005/customer/find-all?searchText=&page=1&size=10"
    );
    setCustomers(response.data);
  };

  const findAllProducts = async () => {
    const response = await axios.get(
      "http://localhost:3005/product/find-all?searchText=&page=1&size=10"
    );
    setProducts(response.data);
  };

  const getCustomerById = async (id: any) => {
    const response = await axios.get(
      "http://localhost:3005/customer//find-by-id/" + id
    );
    setSelectedCustomer(response.data)
    setName(response.data.name);
    setAddress(response.data.address);
    setSalary(response.data.sallery);
  };

  const getProductById = async (id: any) => {
    const response = await axios.get(
      "http://localhost:3005/product/find-by-id/" + id
    );
    setPName(response.data.name);
    setDescription(response.data.description);
    setUnitPrice(response.data.unitPrice);
    setQtyOnHand(response.data.qtyOnHand);
    setSelectedProduct(response.data)
  };

  const addToCart = (newItem: Cart) => {
    setCart((prevState) => [...prevState, newItem]);
    setDescription("");
    setUnitPrice("");
    setQtyOnHand('');
    setQty(0)
    
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="customer">Select Customer</label>
              <select
                id="customer"
                className="form-control"
                onChange={(e) => getCustomerById(e.target.value)}
              >
                <option value="">select value</option>
                {customers.map((customer, index) => (
                  <option key={index} value={customer._id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="name">Customer name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                disabled
                value={name}
              />
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
                value={address}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="address">Customer Salary</label>
              <input
                type="text"
                className="form-control"
                id="address"
                disabled
                value={salary}
              />
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
            <div className="form-group">
              <label htmlFor="product">Select Product</label>
              <select
                id="product"
                className="form-control"
                onChange={(e) => {
                  getProductById(e.target.value);
                }}
              >
                {products.map((product, index) => (
                  <option key={index} value={product._id}>
                    {product.name}
                  </option>
                ))}
                <option value="#" disabled>
                  Use Options
                </option>
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
                value={description}
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
                value={unitPrice}
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
                value={qtyOnHand}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2">
            <div className="form-group">
              <label htmlFor="qty">Qty</label>
              <input type="number" className="form-control" id="qty" value={qty} onChange={(e) => setQty(parseFloat(e.target.value))}/>
            </div>
          </div>

          <hr></hr>
        </div>

        <div className="row">
          <div className="col-12">
            <button
              className="btn btn-primary col-12"
              onClick={() => {
                const cartProduct: Cart = {
                  _id: selectedProduct?._id,
                  productName: selectedProduct?.description,
                  unitPrice: selectedProduct?.unitPrice,
                  qty: qty,
                  total: (qty * (selectedProduct?.unitPrice?selectedProduct?.unitPrice:0)),
                };
                addToCart(cartProduct)
              }}
            >
              + Add Product
            </button>
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
                {cart.map((data, index) => (
                  <tr key={index}>
                    <td>#{data._id}</td>
                    <td>{data.productName}</td>
                    <td>{data.unitPrice}</td>
                    <td>{data.qty}</td>
                    <td>{data.total}</td>
                    <td>
                      <button className="btn btn-outline-danger btn-sm">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
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
};

export default Order;
