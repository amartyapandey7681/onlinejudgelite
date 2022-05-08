const questionM = require("../models/questions");
const submission = require("../models/submissions");
const users = require("../models/users");

const fs = require('fs');



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

exports.getAllResults = async (req,res) => {


}



exports.submitSolution = async (req,res) => {
    let params = req.body;

    let submission = params.sub;

    let question_id = params.q_id;
    let user_id     = params.u_id;

    if(!(submission && question_id && user_id)){

        return res.status(404).send({"err":"some data not sent in req body","status":404});

    }

    let questionData;

    try{

        questionData = await questionM.find({_id:question_id});

    }catch(err){
       return res.status(500).send({"err":err,"status":500});

    }

    if(questionData.length == 0){

        return res.status(404).send({"err":"question not in database","status":404});

    }

    let test_cases  = questionData[0].Test_case_input ;
    let Correct_output  = questionData[0].Correct_output ; 
    let Points_for_correct =  questionData[0].Points_for_correct;


    let sub_lang = submission.lang;

    let sub_code = submission.code;

    // now parse the code string to file and the execute 
    // make for cpp first

    let fileName = 'submission_'+question_id+'_'+user_id+'.'+sub_lang;

    fs.appendFile(fileName, '//Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

    try {  
        let codeConversion = sub_code;
        let ini = 0 ;
        let tempSub ;

        for(let x=0;x<codeConversion.length;x++){

           
            if(codeConversion[x] == '\n'){

                tempSub = codeConversion.substring(ini,x);
                ini = x+1 ;
    

                fs.appendFileSync(fileName, tempSub);
            }
        }
        

    } catch(e) {
        console.log('error>>>', e);
    }
}


exports.currentSubmitted = async (req,res) => {


}


