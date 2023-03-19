import React from 'react';
import { useReactToPrint } from 'react-to-print';

import EducationInfoSection from './components/EducationInfoSection';
import GeneralInfoSection from './components/GeneralInfoSection';
import PersonalInfoSection from './components/PersonalInfoSection';
import WorkExpirienceSection from './components/WorkExpirienceSection';

const App = () => {
  const fileRef: any = React.useRef();

  const [organization, setOrganization] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [workPeriod, setWorkPeriod] = React.useState('');

  const [workItems, setWorkItems]: any = React.useState([]);

  const addWorkItem = (organization: string, position: string, workPeriod: string) => {
    if (organization && position && workPeriod) {
      const newWorkItem = {
        id: Math.random().toString(20).substring(2, 9),
        organization,
        position,
        workPeriod,
      };
      setWorkItems([...workItems, newWorkItem]);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    addWorkItem(organization, position, workPeriod);
    setOrganization('');
    setPosition('');
    setWorkPeriod('');
  };

  const handlePrint = useReactToPrint({
    content: () => fileRef.current,
    documentTitle: 'abiba-data',
  });

  return (
    <div className="flex">
      <div ref={fileRef} className="m-12">
        <GeneralInfoSection />
        <PersonalInfoSection />
        <EducationInfoSection />
        <WorkExpirienceSection workItems={workItems} />
      </div>
      <div className="flex flex-col">
        <button
          onClick={handlePrint}
          className="mt-3 p-3 border-red-500 border-[2px] rounded-xl h-[50px] bg-red-300 hover:bg-red-500 transition"
        >
          Сделать пдф, ёкарный бабайчик)
        </button>
        <div>
          <p className="font-semibold mt-4 text-lg">Создать элемент &quot;Опыт работы&quot;</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border-2 rounded-lg border-red-500 p-3"
          >
            <label>Организация:</label>
            <input
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="border border-black rounded-lg p-1"
              type="text"
            />
            <label>Должность:</label>
            <input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border border-black rounded-lg p-1"
              type="text"
            />
            <label>Период работы:</label>
            <input
              value={workPeriod}
              onChange={(e) => setWorkPeriod(e.target.value)}
              className="border border-black rounded-lg p-1"
              type="text"
            />
            <button className="border-red-500 border-[2px] rounded-xl h-[50px] bg-red-300 hover:bg-red-500 transition mt-2">
              Создать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
