import { useState } from "react";
import axios from "axios";

interface Customer {
  id: string;
  name: string;
  address: string;
  salary: string;
}

const Customer: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState<number>();

  const saveCustomer = async() => {
    try {
      const response = await axios.post('http://localhost:3005/customer/create',{
        name : name,
        address : address,
        sallery : salary
      })

      setName('');
      setAddress('');
      setSalary(0);

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="customerName"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="form-group">
              <label htmlFor="customerAddress">Customer Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="form-control"
                id="customerAddress"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="form-group">
              <label htmlFor="customerSallery">Sallery</label>
              <input
                value={salary}
                onChange={(e) => {setSalary(parseFloat(e.target.value))}}
                type="number"
                className="form-control"
                id="customerSallery"
              />
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary col-12" onClick={saveCustomer}>Save Customer</button>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-12">
            <form className="col-12">
              <input
                type="search"
                className="form-control"
                placeholder="Search Customers Here"
              />
            </form>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-12">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>#Id</th>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Salary</th>
                  <th>Delete Option</th>
                  <th>Update Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#00001</td>
                  <td>Nimal Bandara</td>
                  <td>Colombo</td>
                  <td>25000</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-success btn-sm">
                      Update
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#00001</td>
                  <td>Nimal Bandara</td>
                  <td>Colombo</td>
                  <td>25000</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-success btn-sm">
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
