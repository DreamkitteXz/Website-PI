function enviarDados() {
        // Obter os valores dos campos de entrada
        var ssid = document.getElementById(input1).value;
        var password = document.getElementById("input2").value;
      
        // Criar um objeto FormData contendo os dados do formulário
        var formData = new FormData();
        formData.append('ssid', ssid);
        formData.append('password', password);
      
        // Criar um objeto XMLHttpRequest
        var xhr = new XMLHttpRequest();
      
        // Configurar a requisição HTTP POST
        var url = "";
        xhr.open("get", url, true);
      
        // Adicionar um listener para tratar a resposta da requisição
        xhr.onreadystatechange = function() {
          if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
          }
        };
      
        // Enviar a requisição com os dados do formulário
        xhr.send(formData);
      }