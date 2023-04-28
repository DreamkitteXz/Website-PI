function stopTransmition() {
        // Obter os valores dos campos de entrada
        var stop = "Stop";
      
        // Criar um objeto FormData contendo os dados do formulário
        var formData = new FormData();
        formData.append('stop', stop);
      
        // Criar um objeto XMLHttpRequest
        var xhr = new XMLHttpRequest();
      
        // Configurar a requisição HTTP POST
        var url = "192.168.4.213";// colocar ip do estátio do esp32
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