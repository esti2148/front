import React from 'react';
import { PiShirtFolded } from "react-icons/pi";

const Logo = ({ height = 40 }) => {
  // צבעים תואמים לסגנון הקיים של האתר
  const primaryColor = '#3f51b5'; // כחול כהה
  const secondaryColor = '#2196f3'; // כחול בהיר
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      height: height
    }}>
      {/* אייקון חולצה מקופלת בצבעי האתר */}
      <PiShirtFolded 
        size={height} 
        color={secondaryColor} 
        style={{ 
          filter: `drop-shadow(1px 1px 1px ${primaryColor})`,
          marginRight: '10px'
        }} 
      />
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <span style={{
          fontSize: height * 0.25,
          fontWeight: 'bold',
          color: primaryColor,
          lineHeight: '1.2'
        }}>
        </span>
        <span style={{
          fontSize: height * 0.2,
          fontWeight: 'bold',
          color: primaryColor,
          lineHeight: '1.2'
        }}>
        </span>
      </div>
    </div>
  );
};

export default Logo;
