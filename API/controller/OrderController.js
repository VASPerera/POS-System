const { response } = require("express");
const orderSchema = require("../model/OrderSchema");

const create = (req, res) => {
  const order = new orderSchema({
    date: req.body.date,
    customerDetails: req.body.customerDetails,
    totalCost: req.body.totalCost,
    products: req.body.products,
  });

  order
    .save()
    .then((resp) => {
      return res.status(201).json({ message: "order saved!" });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};


const findById = (req, res) => {
  orderSchema.findOne({ _id: req.params.id }).then((selectedObj) => {
    if (selectedObj !== null) {
      return res.status(200).json({ data: selectedObj });
    } else {
      return res.status(404).json({ message: "not found!" });
    }
  });
};


const update = async(req, res) => {
  const updateData = await orderSchema.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        date: req.body.date,
        customerDetails: req.body.customerDetails,
        totalCost: req.body.totalCost,
        products: req.body.products,
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
    const deleteData =  await orderSchema.findOneAndDelete({'_id': req.params.id});

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
        orderSchema.find(query).limit(pageSize).skip(skip).then(response => {
          return res.status(200).json(response);
        })

    } catch (error) {
        return res.status(500).json({'message': 'internal server error'});
    }
};

const findALLCount = (req, res) => {
  try {
      
      orderSchema.countDocuments().then(response => {
        return res.status(200).json(response)

        
      })
      
  } catch (error) {
      return res.status(500).json({'message': 'internal server error'});
  }
};

const findALLIncome = (req, res) => {
  try {
      
      const result= orderSchema.aggregate([
        {
          $group: {
            _id: null,
            totalCostSum : {$sum: '$totalCost'}
          }
        }
      ])

      const totalCostSum = result.length > 0 ? result[0].totalCostSum : 0;

      return res.status(200).json({totalCostSum})
      
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
  findALLCount,
  findALLIncome
};
