// qr.js
function generateQRcode() {
    var urlInput = document.querySelector(".url");
    var url = urlInput.value;
    var qrcodeDiv = document.querySelector(".qrcode");

    
        var qrcode = new QRCode(qrcodeDiv, {
            text: url,
            width: 128,
            height: 128,
        });

}
