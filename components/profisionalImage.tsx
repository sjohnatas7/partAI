import React, { useState } from 'react';
import Image from 'next/image';
import styles from './profissionalImage.module.css';

interface ProfessionalImageProps {
  src: string;
  alt: string;
  name: string;
  history: string;
}

const ProfessionalImage = ({ src, alt, name, history }: ProfessionalImageProps) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div
      className="relative m-5 md:w-1/2 lg:w-1/3"
      onMouseEnter={() => setShowHistory(true)}
      onMouseLeave={() => setShowHistory(false)}
    >
      <Image src={src} alt={alt} width={30} height={30} className="size-full rounded-lg bg-cover bg-center" />
      {showHistory && (
        <div className={`absolute inset-x-0 bottom-0 rounded-b-lg ${styles.history}`}>
          <div className={`p-2 text-white ${styles.historyContent}`}>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm">{history}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalImage;
