interface ProductProps {
  image : string,
  description : string,
  name : string
}




export default function MinQtyCard(props : ProductProps) {


  

  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
