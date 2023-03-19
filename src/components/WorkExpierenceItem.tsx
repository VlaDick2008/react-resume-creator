import React from 'react';

const WorkExpierenceItem = ({ organization, position, workPeriod }: any) => {
  return (
    <div className="border-b-[2px] flex items-center py-3">
      <div className="text-neutral-600 w-[290px]">
        <p>Организация:</p>
        <p>Должность:</p>
        <p>Период работы:</p>
      </div>
      <div className="font-semibold flex flex-col">
        <p>{organization}</p>
        <p>{position}</p>
        <p>{workPeriod}</p>
      </div>
    </div>
  );
};

export default WorkExpierenceItem;
