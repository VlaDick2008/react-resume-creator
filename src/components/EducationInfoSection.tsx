import React from 'react';

import { RiBook2Fill } from 'react-icons/ri';

const EducationInfoSection = () => {
  const [organization, setOrganization] = React.useState('');
  const [year, setYear] = React.useState('');
  const [education, setEducation] = React.useState('');
  const [educationType, setEducationType] = React.useState('');

  return (
    <section className="py-3 border-b-[2px]">
      <div className="flex gap-2 items-center">
        <RiBook2Fill size={24} />
        <h1 className="text-2xl uppercase font-bold">образование</h1>
      </div>
      <div className="flex gap-10 items-center">
        <div className="text-neutral-600  w-[250px]">
          <p>Учебное заведение:</p>
          <p>Год окончания:</p>
          <p>Специальность:</p>
          <p>Форма обучения:</p>
        </div>
        <div className="font-semibold flex flex-col">
          <input
            className={organization ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
          <input
            className={year ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            className={education ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
          <input
            className={educationType ? '' : 'border-b-[2px] border-black'}
            type="text"
            value={educationType}
            onChange={(e) => setEducationType(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default EducationInfoSection;
