import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download, Share2 } from 'lucide-react';

interface QRCodeGeneratorProps {
  url: string;
  restaurantName: string;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ url, restaurantName }) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateQR = async () => {
      try {
        const dataUrl = await QRCode.toDataURL(url, {
          width: 300,
          margin: 2,
          color: {
            dark: '#1F2937',
            light: '#FFFFFF'
          }
        });
        setQrCodeDataUrl(dataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      } finally {
        setIsLoading(false);
      }
    };

    generateQR();
  }, [url]);

  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = `${restaurantName.replace(/\s+/g, '_')}_menu_qr.png`;
    link.href = qrCodeDataUrl;
    link.click();
  };

  const shareQR = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${restaurantName} Menu`,
          text: `Check out our menu!`,
          url: url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url);
      alert('Menu URL copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <QrCode className="w-6 h-6 text-amber-600" />
        <h2 className="text-xl font-bold text-gray-900">Scan for Menu</h2>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <img 
          src={qrCodeDataUrl} 
          alt={`QR Code for ${restaurantName} menu`}
          className="mx-auto"
        />
      </div>
      
      <p className="text-sm text-gray-600 mb-6">
        Customers can scan this QR code with their phone camera to view your menu instantly
      </p>
      
      <div className="flex gap-3 justify-center">
        <button
          onClick={downloadQR}
          className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        <button
          onClick={shareQR}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Menu URL: <span className="font-mono break-all">{url}</span>
        </p>
      </div>
    </div>
  );
};