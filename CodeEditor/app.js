function compile() {
  var html = document.getElementById("html");
  var code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value
    );
    code.close();
  };
}

function compileOnce(){
  var html = document.getElementById("html");
  var code = document.getElementById("code").contentWindow.document;

  code.open();
  code.writeln(
    html.value
  );
  code.close();
}

var checkBox = document.getElementById("checkbox");
var btn = document.getElementById("run");

// If the checkbox is checked
function check(){
  if (checkBox.checked == true){
    compile();
  }else{
    document.body.onkeyup = function() {};
  }
}

function run(){
  if(checkbox.checked != true){
    compileOnce();
  }
}
