javascript
// Generate QR code
function generateQRCode() {
  const qrInput = document.getElementById("qr-input").value;
  const qrCodeDiv = document.getElementById("qr-code");
  qrCodeDiv.innerHTML = "";
  if (qrInput.trim()) {
    new QRCode(qrCodeDiv, {
      text: qrInput,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }
}

// Initialize QR scanner
function onScanSuccess(decodedText, decodedResult) {
  document.getElementById("scan-result").textContent = decodedText;
}
function onScanError(errorMessage) {
  // Optionally handle scan errors here
}
const html5QrCode = new Html5Qrcode("qr-reader");
html5QrCode.start(
  { facingMode: "environment" },
  {
    fps: 10,
    qrbox: 250
  },
  onScanSuccess,
  onScanError
);


