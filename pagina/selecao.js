function enviarRequisicao() {
        const canal = document.getElementById("Fontes de áudio").value;
        const frequencia = document.getElementById("freq").value;
        const url = `192.168.4.?${canal}&${frequencia}`;

        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error("Ocorreu um erro ao enviar a requisição.");
            }
            return response.text();
          })
      }