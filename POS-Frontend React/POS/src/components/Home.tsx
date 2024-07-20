import DefaultCard from "./cards/DefaultCard";
import DefaultChart from "./cards/DefaultChart";
import MinQtyCard from "./cards/MinQtyCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

const Home:React.FC = () => {
  
  const [products, setProducts] = useState<Product[]>([]);
  const [productCount, setProductCount] = useState<number>(0);
  const [customerCount, setCustomerCount] = useState<number>(0);
  const [orderCount, setOrderCount] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);

  useEffect(() => {
    findAllProducts();

    findAllCounts();
  }, []);

  const findAllProducts = async () => {
    const response = await axios.get(
      "http://localhost:3005/product/find-all-min"
    );
    setProducts(response.data);
    
  };

  const findAllCounts = async () => {
    const productCounts = await axios.get(
      "http://localhost:3005/product/find-all-count"
    );
    setProductCount(productCounts.data)

    const customerCounts = await axios.get(
      "http://localhost:3005/customer/find-all-count"
    );
    setCustomerCount(customerCounts.data)

    const orderCounts = await axios.get(
      "http://localhost:3005/order/find-all-count"
    );
    setOrderCount(orderCounts.data)

    const income = await axios.get(
      "http://localhost:3005/order/find-all-income"
    );
    setIncome(income.data.totalCostSum)
    
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <DefaultCard
            tumbnail='https://img.freepik.com/free-photo/businesspeople-having-discussion-office_107420-84849.jpg?t=st=1718880076~exp=1718883676~hmac=ce18e8bfeb30cfbb831a5b710f18e8c1c024e184a7e6163a46afd3d3202fd369&w=996'
            title = 'Customers'
            description=''
            value={customerCount}
            key={1}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <DefaultCard
            tumbnail='https://img.freepik.com/free-photo/flat-lay-photo-spa-still-life-skin-care-items_169016-5050.jpg?t=st=1718880164~exp=1718883764~hmac=87ae77f3c09ad0d6eaafd083ef7ec03f1cb69d44365641452c3ffe65de4517ed&w=1060'
            title = 'Products'
            description=''
            value={productCount}
            key={2}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <DefaultCard
            tumbnail='https://img.freepik.com/premium-photo/woman-standing-front-laptop-computer-suitable-technology-businessrelated-projects_153912-184253.jpg?w=996'
            title = 'Oders'
            description='Sdd'
            value={orderCount}
            key={3}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <DefaultCard
            tumbnail='https://img.freepik.com/premium-photo/growth-money-arrow-success-financial-business-coin-concept-investment-earnings-background-with-profit-graph-finance-development-increase-economic-market-chart-digital-stock-currency-strategy_79161-2472.jpg?w=1380'
            title = 'Income'
            description='Sdd'
            value={income}
            key={4}
          />
        </div>
        
      </div>
      <br></br>
      <div className="row">
        <div className="col-12 col-md-9">
            <div className="context">
                <DefaultChart></DefaultChart>
            </div>
        </div>
        <div className="col-12 col-md-3">

          {products.map((product, index) => (
              <MinQtyCard name={product.name} description={product.description} image={product.image} key={index}/>
          ))}
            
            
        </div>
      </div>
    </div>
  );
}

export default Home;