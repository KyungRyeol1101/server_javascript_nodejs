function numberPlus(number, callback){
  setTimeout(function(){
    for(var i = 0; i<10000; i++){
      number++;
    }
    console.log("number :", number);
    callback(number);
    return number;
  }, 10)
}
var numberTest = 0;

var a = function (number) {
  console.log(number);
}

numberTest = numberPlus(numberTest, function(number){
  console.log(number);
});
