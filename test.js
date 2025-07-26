db.products.aggregate([
    {
        $group : {
            _id : "$company",
            totalProducts : { $sum : '$price' }
        },
    },
]);


db.products.aggregate([
    {
        $match : {
            _id : "64c23350e32f4a51b19b923e",
        },
    },
]);


db.products.aggregate([
    {
        $match : {price : {$gt : 900}}
    },
    {
        $group : {
            _id : "$company",
            totalProducts : { $sum : '$price' }
        },
    },
]);



db.products.aggregate([
    {
        $match : {quantity : 5}
    },
    {
        $group : {
            _id : "$quantity",
            PriceTotal : { $sum : '$price' },
            PriceAvg : { $avg : '$price' },
        },
    },
]);





db.products.aggregate([
    {
        $match : {price : {$gt : 1200}}
    },
    {
        $group : {
            _id : "$category",
            totalPrice : { $sum : '$price' }
        },
    },

    {
        $sort : {$totalPrice : 1},
    },
]);


db.products.aggregate([
    {
        $match : {price : {$gt : 1200}}
    },
    {
        $project: {
            price : 1,
            discountPrice: {$multiply: ['$price', 0.8]}
        }
    }
])



db.products.aggregate([
    {
        $match : {price : {$eq : 699}}
    },
    {
       $group: {
        _id: '$price',
        allColors: { $push : '$colors' }
       }
    }
])


db.products.aggregate([
    { $unwind : '$colors' },
    {
        $match : {price : {$eq : 699}}
    },
    {
       $group: {
        _id: '$price',
        allColors: { $push : '$colors' }
       }
    }
])


db.products.aggregate([
    { $unwind : '$colors' },
    {
        $match : {price : {$gt : 699}},
    },
    {
       $group: {
        _id: { priceFroup : '$price'},
        colors: { $addToSet : '$colors' },
       },
    },
       {
        $project: {
            _id : 1,
            colors : 1,
            colorLength: {$size : "$colors"},
       },
    },
    {
        $limit : 1
    }
])



db.products.aggregate([
    { $unwind : '$colors' },
    {
        $match : {price : {$gt : 699}},
    },
    {
       $group: {
        _id: { priceFroup : '$price'},
        colors: { $addToSet : '$colors' },
       },
    },
       {
        $project: {
            _id : 1,
            colors : 1,
            colorLength: {$size : "$colors"},
       },
    },
    {
        $skip : 1
    }
])



db.col.insertMany([
    {
    _id: "64c23350e32f4a51b19b9201",
    name: "Document 1",
    values: [10,20,30,40,50],
},
{
    _id: "64c23350e32f4a51b19b9202",
    name: "Document 2",
    values: [15,25,35,45,55],
},
{
    _id: "64c23350e32f4a51b19b9203",
    name: "Document 3",
    values: [5,15,25,35,45],
},
{
    _id: "64c23350e32f4a51b19b9204",
    name: "Document 4",
    values: [30,40,50,60,70],
},
{
    _id: "64c23350e32f4a51b19b9205",
    name: "Document 5",
    values: [25,35,45,55,65],
},

])



db.col.aggregate([{
    $project:{
        name:1,
        Val: {
            $filter:{
                input : '$values',
                as: 'kimmat',
                cond: {$gt : ['$$kimmat', 30]}
            }
        }
    }
}])


db.col.aggregate([{
    $project:{
        name:1,
        Val: {
            $filter:{
                input : '$values',
                as: 'kimmat',
                cond: {$eq : ['$$kimmat', 30]}
            }
        }
    }
}])