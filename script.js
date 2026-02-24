function gerarQR(){
    const texto = document.getElementById("site").value;
    const qr = document.getElementById("qrCode");

    qr.innerHTML = "";

    new QRCode(qr, {
        text: texto,
        width: 200,
        height: 200
    });
}