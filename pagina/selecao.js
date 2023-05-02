function enviarRequisicao() {
        const tempo = document.getElementById("Tempo").value;
        const freq = document.getElementById("freq").value;
        console.log(tempo);
        console.log(freq);
        const url = `192.168.4.213?${tempo}&${freq}`;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {
                if (xhr.status === 200) {
                        console.log(xhr.responseText);
                }
        };
        xhr.send();
}