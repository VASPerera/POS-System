import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

interface Customer {
  _id: string;
  name: string;
  address: string;
  sallery: string;
}

const Customer: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [modalview, setModalview] = useState<boolean>(false);


  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState<number>();

  const [SelectedCustomerId, setSelectedCustomerId] = useState("")
  const [updateName, setupdateName] = useState("");
  const [updateAddress, setupdateAddress] = useState("");
  const [updateSalary, setupdateSalary] = useState<number>();

  useEffect(() => {
    findAllCustomers();
  }, []);

  const updateCustomer = async () => {
    try {

      
      const response = await axios.put(
        "http://localhost:3005/customer/update/"+SelectedCustomerId,
        {
          name: updateName,
          address: updateAddress,
          sallery: updateSalary,
        }
      );

      setModalview(false)
      findAllCustomers();

    } catch (error) {
      console.log(error);
    }
  }

  const findAllCustomers = async () => {
    const response = await axios.get(
      "http://localhost:3005/customer/find-all?searchText=&page=1&size=10"
    );
    setCustomers(response.data);
    
  };

  const deleteCustomer = async (id: any) => {
    const response = await axios.delete(
      "http://localhost:3005/customer/delete-by-id/" + id
    );
    console.log(response);
    findAllCustomers();
  };

  const loadModel = async (id: any) => {
    const response = await axios.get(
      "http://localhost:3005/customer//find-by-id/" + id
    );
    console.log(response.data);
    setModalview(true);

    setSelectedCustomerId(response.data._id)
    setupdateName(response.data.name)
    setupdateAddress(response.data.address)
    setupdateSalary(response.data.sallery)
  };

  const saveCustomer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/customer/create",
        {
          name: name,
          address: address,
          sallery: salary,
        }
      );

      setName("");
      setAddress("");
      setSalary(0);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
                onChange={(e) => {
                  setSalary(parseFloat(e.target.value));
                }}
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
            <button className="btn btn-primary col-12" onClick={saveCustomer}>
              Save Customer
            </button>
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
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td>#{index}</td>
                    <td>{customer.name}</td>
                    <td>{customer.address}</td>
                    <td>{customer.sallery}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={(e) => {
                          if (confirm("are you sure ?")) {
                            deleteCustomer(customer._id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => loadModel(customer._id)}
                        className="btn btn-outline-success btn-sm"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal show={modalview}>
        <Modal.Header closeButton onClick={() => {setModalview(false)}}>
          <Modal.Title>Update Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={updateName} onChange={(e) => {setupdateName(e.target.value)}}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={updateAddress} onChange={(e) => {setupdateAddress(e.target.value)}} />
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
            <Form.Label>Salary</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={updateSalary} onChange={(e) => setupdateSalary(parseFloat(e.target.value))}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setModalview(false)}}>Close</Button>
          <Button variant="primary" onClick={() => updateCustomer()}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Customer;
