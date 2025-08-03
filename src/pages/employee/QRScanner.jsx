'use client';
import { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './QRScanner.css';

const QRScanner = ({ onScan, onClose }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('qr-reader', {
      qrbox: 250,
      fps: 5,
    });

    scanner.render(
      (decodedText) => {
        onScan(decodedText);
        onClose();
      },
      (error) => {
        console.error('QR Scanner error:', error);
      }
    );

    scannerRef.current = scanner;

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(error => {
          console.error('Failed to clear scanner:', error);
        });
      }
    };
  }, [onScan, onClose]);

  return (
    <div className="qrscanner-overlay">
      <div className="qrscanner-modal">
        <div className="qrscanner-header">
          <h2 className="qrscanner-title">Scan QR to Register Attendance</h2>
          <button
            className="qrscanner-close-btn"
            onClick={onClose}
            aria-label="Close Scanner"
          >
            &times;
          </button>
        </div>
        <div id="qr-reader" className="qrscanner-reader"></div>
      </div>
    </div>
  );
};

export default QRScanner;