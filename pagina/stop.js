function stopTransmition() {
  // 42 VAI SER O NUMERO QUE INDICA PARA PARAR A TRANSMISSÃO
  var stop = 42;
  console.log(stop);

  const url = `192.168.4.213?${stop}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send();
}