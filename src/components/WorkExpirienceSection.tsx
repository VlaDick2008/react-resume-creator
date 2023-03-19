import React from 'react';

import { BsFillBriefcaseFill } from 'react-icons/bs';
import WorkExpierenceItem from './WorkExpierenceItem';

const WorkExpirienceSection = ({ workItems }: any) => {
  return (
    <section className="py-3">
      <div className="flex gap-2 items-center">
        <BsFillBriefcaseFill size={24} />
        <h1 className="text-2xl uppercase font-bold">опыт работы</h1>
      </div>
      <div className="gap-10">
        {workItems.map((item: any) => (
          <WorkExpierenceItem
            organization={item.organization}
            position={item.position}
            workPeriod={item.workPeriod}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExpirienceSection;
