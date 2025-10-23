import React, { useState } from 'react';
import { FaRegCopy } from "react-icons/fa";

interface CopyableTextProps {
  text: string;
}

const CopyableText: React.FC<CopyableTextProps> = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); // Hide after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err);
      // Optionally, show an error message
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      <p style={{ margin: 0 }}>{text}</p>
      <button
        onClick={handleCopy}
        aria-label="Copy to clipboard"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'inherit',
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
      >
      <FaRegCopy /> 
      </button>
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            left: '100%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          Copied!
          <div
            style={{
              content: '""',
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
              borderWidth: '5px',
              borderStyle: 'solid',
              borderColor: 'rgba(0, 0, 0, 0.8) transparent transparent transparent',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CopyableText;