function verificaResposta(){
//Acumulator variable - Result scores
  var answerA =0 ;
  var answerB =0 ;
  //Question 1
    var option = document.getElementsByName("op_1");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 1 />");
        return false;
    }
      else if(option[0].checked==true){
        answerA = answerA+1;
      }
      else if(option[1].checked){
        answerB=answerB+1;
      }

 //Question 2
    var option = document.getElementsByName("op_2");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 2 />");
        return false;
    }
      else if(option[0].checked ==true){
        answerA=answerA+1;
      }
      else if(option[1].checked ==true){
        answerB=answerB+1;
      }


//Question 3
    var option = document.getElementsByName("op_3");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 3 />");
        return false;
    }
      else if(option[0].checked==true){
        answerA=answerA+1;
      }
      else if(option[1].checked==true){
        answerB=answerB+1;
      }

//Question 4
    var option = document.getElementsByName("op_4");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 4 />");
        return false;
    }
      else if(option[0].checked==true){
        answerA=answerA+1;
      }
      else if(option[1].checked==true){
        answerB=answerB+1
      }

//Question 5
    var option = document.getElementsByName("op_5");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 5 />");
        return false;
    }
    else if(option[0].checked==true){
      answerA=answerA+1;
    }
    else if(option[1].checked==true){
      answerB = answerB+1;
    }

//Question 6
    var option = document.getElementsByName("op_6");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 6 />");
        return false;
    }
      else if(option[0].checked==true){
        answerA=answerA+1;
      }
      else if(option[1].checked==true){
        answerB=answerB+1;
      }

//Question 7
    var option = document.getElementsByName("op_7");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 7 />");
        return false;
    }
      else if(option[0].checked==true){
        answerA=answerA+1;
      }
      else if(option[1].checked==true){
        answerB=answerB+1;
      }

//Question 8
    var option = document.getElementsByName("op_8");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 8 />");
        return false;
    }
      else if(option[0].checked==true){
        answerA=answerA+1;
      }
      else if(option[1].checked==true){
        answerB=answerB+1;
      }

//Question 9
    var option = document.getElementsByName("op_9");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 9 />");
        return false;
    }
      else if(option[0].checked==true){
        answerA=answerA+1;
      }
      else if(option[1].checked==true){
        answerB=answerB+1;

      }

//Question 10
    var option = document.getElementsByName("op_10");
    if(!option[0].checked && !option[1].checked){
        alert( "<Você esqueceu a questão 10 />");
        return false;
    }
      else if(option[0].checked==true){
        answerA=answerA+1;
      }
      else if(option[1].checked==true){
        answerB=answerB+1;

      }
//Question 11
          var option = document.getElementsByName("op_11");
          if(!option[0].checked && !option[1].checked){
              alert( "<Você esqueceu a questão 11 />");
              return false;
          }
            else if(option[0].checked==true){
              answerA=answerA+1;
            }
            else if(option[1].checked==true){
              answerB=answerB+1;

            }
    if(answerA > answerB){
      window.location = "resposta1.html";
    }
    else if(answerB > answerA){
      window.location = "resposta2.html";
    }


    }
