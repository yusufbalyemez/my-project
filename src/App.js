import React, { useState } from 'react';
import './style.css'; // Stil dosyasını içe aktar

const ModuloResult = () => {
  const [inputValue, setInputValue] = useState('');
  const [moduloResult, setModuloResult] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);


  function mod(num, a) {
      let res = 0;
      const numStr = num.toString();
  
      for (let i = 0; i < numStr.length; i++) {
          res = (res * 10 + parseInt(numStr[i], 10)) % a;
      }
  
      return res;
  }

  // Girilen değeri sayıya çevirip 19'a bölümünden kalanı hesapla
  const result = mod(value, 19);
  setModuloResult(result);
  };

  return (
    <div className="flex items-center justify-center h-screen" >
      <div className="bg-blue-500 flex flex-col items-center justify-center w-[600px] h-[300px] rounded-md custom-shadow p-10">
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="p-4 bg-white rounded-md outline-none mb-4 w-full"
          placeholder="Modunu Almak İstediğiniz Bir sayı girin"
        />
        {moduloResult !== null && (
          <div className="text-white">
            {`Girilen sayının 19'a bölümünden kalan: ${moduloResult}`}
          </div>
        )}
      </div>
    </div>

  );
};

export default ModuloResult;