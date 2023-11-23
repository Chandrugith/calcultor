let total=document.getElementById("total output");
    function display(num){
          total.value +=num;
    }
    function calcultor(){
          try{
                total.value=eval(total.value)
          }
          catch{
                alert("Invalid type")
          }
    }
    function Clear(){
          total.value = "";
    }
    function del(){
          total.value=total.value.slice(0,-1);
    }