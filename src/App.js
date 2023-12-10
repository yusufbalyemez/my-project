import React, { useState } from 'react';

const ModuloResult = () => {
  const [inputValue, setInputValue] = useState('');
  const [moduloResult, setModuloResult] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Girilen değeri sayıya çevirip 19'a bölümünden kalanı hesapla
    const result = parseInt(value) % 19;
    setModuloResult(result);
  };

  return (
    <div className="w-400 h-300 bg-blue-500 rounded-full flex flex-col items-center justify-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="p-4 bg-white rounded-full outline-none mb-4"
        placeholder="Bir sayı girin"
      />
      {moduloResult !== null && (
        <div className="text-white">
          {`Girilen sayının 19'a bölümünden kalan: ${moduloResult}`}
        </div>
      )}
    </div>
  );
};

export default ModuloResult;