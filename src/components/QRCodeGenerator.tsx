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
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg shadow-lg border border-gray-700/50 p-8 text-center max-w-md mx-auto backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 mb-4">
        <QrCode className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-bold text-white">Scan for Menu</h2>
      </div>
      
      <div className="bg-white rounded-lg p-4 mb-6">
        <img 
          src={qrCodeDataUrl} 
          alt={`QR Code for ${restaurantName} menu`}
          className="mx-auto"
        />
      </div>
      
      <p className="text-sm text-gray-300 mb-6">
        Customers can scan this QR code with their phone camera to view your menu instantly
      </p>
      
      <div className="flex gap-3 justify-center">
        <button
          onClick={downloadQR}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/30"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        <button
          onClick={shareQR}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors border border-gray-600"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-700/50">
        <p className="text-xs text-gray-400">
          Menu URL: <span className="font-mono break-all text-gray-300">{url}</span>
        </p>
      </div>
    </div>
  );
};