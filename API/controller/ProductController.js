const productSchema = require("../model/ProductSchema");

const create = (req, res) => {
  const product = new productSchema({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    unitPrice: req.body.unitPrice,
    qtyOnHand: req.body.qtyOnHand,
  });

  product
    .save()
    .then((resp) => {
      return res.status(201).json({ message: "product saved!" });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};
const findById = (req, res) => {
  productSchema.findOne({ _id: req.params.id }).then((selectedObj) => {
    if (selectedObj !== null) {
      return res.status(200).json( selectedObj );
    } else {
      return res.status(404).json({ message: "not found!" });
    }
  });
};
const update = async(req, res) => {
  const updateData = await productSchema.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        unitPrice: req.body.unitPrice,
        qtyOnHand: req.body.qtyOnHand,
      },
    },
    { new: true }
  );
  if (updateData) {
    return res.status(200).json({ data: "updated" });
  } else {
    return res.status(500).json({ message: "internal server error" });
  }
};
const deleteById = async(req, res) => {
    const deleteData =  await productSchema.findOneAndDelete({'_id': req.params.id});

    if(deleteData){
        return res.status(204).json({'message': 'deleted!'})
    }else{
        return res.status(500).json({'message': 'internal server error'});
    }
};
const findALL = (req, res) => {
    try {
        const {searchText, page = 1, size = 10} = req.query;

        const pageNumber = parseInt(page);
        const pageSize = parseInt (size);

        const query = {};
        if(searchText){
            query.$text = {$search : searchText}
        }
        const skip = (pageNumber-1) * pageSize
        productSchema.find(query).limit(pageSize).skip(skip).then(response => {
          return res.status(200).json(response)
        })
    } catch (error) {
        return res.status(500).json({'message': 'internal server error'});
    }
};

const findALLMin = (req, res) => {
  try {
      
      productSchema.find({qtyOnHand: {$lt:10}}).then(response => {
        return res.status(200).json(response)

        
      })
      
  } catch (error) {
      return res.status(500).json({'message': 'internal server error'});
  }
};

const findALLCount = (req, res) => {
  try {
      
      productSchema.countDocuments().then(response => {
        return res.status(200).json(response)

        
      })
      
  } catch (error) {
      return res.status(500).json({'message': 'internal server error'});
  }
};

module.exports = {
  create,
  findById,
  update,
  deleteById,
  findALL,
  findALLMin,
  findALLCount
};
