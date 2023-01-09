 
  
 
function funcaoGerar(){
  
      const textoCitacao = document.querySelector("body > textarea").value
      const valorInputLink = document.querySelectorAll('.input')[0].value
      const textoAutor = document.querySelectorAll('.input')[1].value
      
  
      
      document.querySelector('#elementoCitacao').textContent = textoCitacao;
    document.querySelector('#elementoAutor').textContent  = textoAutor;
    document.querySelector("#imagemCitacao").src = valorInputLink
  
  }

 

function funcaoDownload() {
  


  var node = document.getElementById('capture');
 
  html2canvas(node).then(function(canvas) {
    document.body.appendChild(canvas);
});

  }



 






