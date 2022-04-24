
exports.testFunction = async (req,res) => {

    let params = req.body.test;

    console.log(test);

    return res.status(200).send({'success':"done deal!!",'status':200});
}
