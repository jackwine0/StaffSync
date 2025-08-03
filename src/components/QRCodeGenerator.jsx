import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./QRCodeGenerator.css";

const QRCodeGenerator = ({ visible, onClose }) => {
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setQrValue(`attendance|${today}`);
  }, []);

  if (!visible) return null;

  return (
    <div className="qr-modal-overlay">
      <div className="qr-modal-content">
        <button className="qr-modal-close" onClick={onClose}>
          &times;
        </button>
        <h4 className="qr-modal-title">Today's QR Code</h4>
        <div className="qr-code-box">
          <QRCodeCanvas value={qrValue} size={180} fgColor="#000" bgColor="#fff" />
        </div>
        <p className="qr-instruction">
          Scan to register presence for <strong>{qrValue.split("|")[1]}</strong>
        </p>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
