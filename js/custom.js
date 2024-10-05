

var helal = $("#result");
function insertNumber(number){
var existingNumber=helal.val()
helal.val(existingNumber + number)
}


function clearResult(){
    helal.val('')
}


function calculate(){
    var result= eval(helal.val())
    helal.val(result)
}


function deleteNumber(){
  var presentValue =  helal.val();
  if(presentValue!=''){
    helal.val(presentValue.slice(0, -1));
  }
}