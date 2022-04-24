
exports.testFunction = async (req,res) => {

    let params = req.body;

    console.log(params);

    return res.status(200).send({'success':"done deal!!",'status':200});
}

exports.getAllQuestions = async (req,res) => {


}

exports.addQuestion = async (req,res) => {
    let params = req.body;

    let Question_paragraph = params.Question_paragraph ;
    let Test_case_input    = params.Question_paragraph ;
    let Correct_output     = params.Question_paragraph ;
    let Points_for_correct = params.Points_for_correct ;

    
}