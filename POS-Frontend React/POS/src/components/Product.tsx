import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import {storage} from "../config/firebase"


interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  unitPrice: string;
  qtyOnHand: string;
}

const Product:React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [modalview, setModalview] = useState<boolean>(false);
  


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [qtyOnHand, setQtyOnHand] = useState("");

  const [SelectedProductId, setSelectedProductId] = useState("")
  const [SelectedProductName, setSelectedProductName] = useState("")
  const [updateDescription, setupdateDescription] = useState("");
  const [updateUnitPrice, setupdateUnitPrice] = useState("");
  const [updateQtyOnHand, setupdateQtyOnHand] = useState("");


  const handleImageChange = (e:ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files && e.target.files[0]){
      setImage(e.target.files[0])
    }
  }

  useEffect(() => {
    findAllProducts();
  }, []);

  // const updateProduct = async () => {
  //   try {

      
  //     const response = await axios.put(
  //       "http://localhost:3005/customer/update/"+SelectedCustomerId,
  //       {
  //         name: updateName,
  //         address: updateAddress,
  //         sallery: updateSalary,
  //       }
  //     );

  //     setModalview(false)
  //     findAllCustomers();

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const findAllProducts = async () => {
    const response = await axios.get(
      "http://localhost:3005/product/find-all?searchText=&page=1&size=10"
    );
    setProducts(response.data);
    
  };

  const deleteProduct = async (id: any) => {
    const response = await axios.delete(
      "http://localhost:3005/product/delete-by-id/" + id
    );
    console.log(response);
    findAllProducts();
  };

  const saveProduct = async() => {
    const imgURL = 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg'


    try {
      const response = await axios.post(
        "http://localhost:3005/product/create",
        {
          name: name,
          description: description,
          image: imgURL,
          unitPrice: unitPrice,
          qtyOnHand: qtyOnHand,
        }
      );

      setName("");
      setDescription("");
      setImage(null)
      setUnitPrice('');
      setQtyOnHand('');

      findAllProducts()

    } catch (error) {
      console.log(error);
    }
    // if(image){
    //   const storageRef = storage.ref(`images/${Math.random() + '-' +image.name}`);
    //   storageRef.put(image).then(() => {
    //     storageRef.getDownloadURL().then((url)=>{
    //       console.log(url)
    //     })
    //   })
    // }
  }

  const loadModel = async (id: any) => {
    
    const response = await axios.get(
      "http://localhost:3005/product/find-by-id/" + id
    );
    console.log(response.data);
    setModalview(true);

    setSelectedProductId(response.data._id)
    setSelectedProductName(response.data.name)
    setupdateDescription(response.data.description)
    setupdateQtyOnHand(response.data.qtyOnHand)
    setupdateUnitPrice(response.data.unitPrice)
  };


  const updateCustomer = async () => {
    try {

      const imgURL = 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg'

      
      const response = await axios.put(
        "http://localhost:3005/product/update/"+SelectedProductId,
        {
          name: SelectedProductName,
          description: updateDescription,
          image: imgURL,
          unitPrice: updateUnitPrice,
          qtyOnHand: updateQtyOnHand,
        }
      );

      setModalview(false)
      findAllProducts();

    } catch (error) {
      console.log(error);
    }
  }


  


  const styleObj:React.CSSProperties={
      marginBottom : '20px'
  }
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input type="text" className="form-control" id="productName" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="form-group">
              <label htmlFor="price">Unit Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                onChange={(e) => setUnitPrice(e.target.value) }
                value={unitPrice}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="form-group">
              <label htmlFor="qty">QTY on Hand</label>
              <input
                type="text"
                className="form-control"
                id="qty"
                onChange={(e) => setQtyOnHand(e.target.value)}
                value={qtyOnHand}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
            <div className="form-group">
              <label htmlFor="image">Product Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="col-12 ">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                rows={5}
                className="form-control"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary col-12" onClick={saveProduct}>Save Product</button>
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
                  <th>Product Name</th>
                  <th>QTY on Hand</th>
                  <th>Unit Price</th>
                  <th>Delete Option</th>
                  <th>Update Option</th>
                  <th>See More</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr>
                  <td>#{index}</td>
                  <td>{product.name}</td>
                  <td>{product.qtyOnHand}</td>
                  <td>{product.unitPrice}</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => {if(confirm('Are you sure ?')){
                      deleteProduct(product._id)
                    }}}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-success btn-sm" onClick={() => loadModel(product._id)}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline-info btn-sm">
                      View
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
            <Form.Control type="text" placeholder="name@example.com" value={SelectedProductName} onChange={(e) => {setSelectedProductName(e.target.value)}}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
            <Form.Label>description</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={updateDescription} onChange={(e) => {setupdateDescription(e.target.value)}} />
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
            <Form.Label>unitPrice</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={updateUnitPrice} onChange={(e) => setupdateUnitPrice(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Body>
          <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
            <Form.Label>QTY on Hand</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={updateQtyOnHand} onChange={(e) => setupdateQtyOnHand(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setModalview(false)}}>Close</Button>
          <Button variant="primary" onClick={() => updateCustomer()}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Product;
