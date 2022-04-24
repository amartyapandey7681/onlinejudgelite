
exports.testFunction = async (req,res) => {

    let params = req.body;

    console.log(params);

    return res.status(200).send({'success':"done deal!!",'status':200});
}
