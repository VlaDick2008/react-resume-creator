import React from 'react';

import { FaUserCircle } from 'react-icons/fa';

const PersonalInfoSection = () => {
  const [removal, setRemoval] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [family, setFamily] = React.useState('');
  const [kids, setKids] = React.useState('');

  return (
    <section className="py-3 border-b-[2px]">
      <div className="flex gap-2 items-center">
        <FaUserCircle size={24} />
        <h1 className="text-2xl uppercase font-bold">Личная информация</h1>
      </div>
      <div className="flex gap-10 items-center">
        <div className="text-neutral-600 w-[250px]">
          <p>Переезд:</p>
          <p>Гражданство:</p>
          <p>Дата рождения:</p>
          <p>Пол:</p>
          <p>Семейное положение:</p>
          <p>Есть дети:</p>
        </div>
        <div className="font-semibold flex flex-col">
          <input
            className={removal ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={removal}
            onChange={(e) => setRemoval(e.target.value)}
          />
          <input
            className={nationality ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
          <input
            className={birthDate ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <input
            className={gender ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            className={family ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
          />
          <input
            className={kids ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={kids}
            onChange={(e) => setKids(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
