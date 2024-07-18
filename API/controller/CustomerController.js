const customerSchema = require("../model/CustomerSchema");

const create = (req, res) => {

  
  const customer = new customerSchema({
    name: req.body.name,
    address: req.body.address,
    sallery: req.body.sallery,
  });

  customer
    .save()
    .then((resp) => {
      return res.status(201).json({ message: "customer saved!" });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};



const findById = (req, res) => {
  customerSchema.findOne({ _id: req.params.id }).then((selectedObj) => {
    if (selectedObj !== null) {
      return res.status(200).json( selectedObj );
    } else {
      return res.status(404).json({ message: "not found!" });
    }
  });
};



const update = async(req, res) => {
  const updateData = await customerSchema.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        address: req.body.address,
        sallery: req.body.sallery,
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
  
    const deleteData =  await customerSchema.findOneAndDelete({'_id': req.params.id});

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
        customerSchema.find(query).limit(pageSize).skip(skip).then(response => {
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
};
