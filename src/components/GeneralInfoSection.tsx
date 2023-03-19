import React from 'react';
import { useDropzone } from 'react-dropzone';

import { BsFillTelephoneFill, BsFillGeoAltFill, BsTelegram } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

const GeneralInfoSection = () => {
  const [base64, setBase64] = React.useState('');

  const [name, setName] = React.useState('');
  const [position, setPostion] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');

  const [payment, setPayment] = React.useState('');
  const [assignment, setAssignment] = React.useState('');
  const [busyness, setBusyness] = React.useState('');
  const [workSchedule, setWorkSchedule] = React.useState('');

  const handleDrop = React.useCallback((files: any) => {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      setBase64(e.target.result);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
  });

  return (
    <section className="pb-3 border-b-[2px]">
      <div className="flex gap-6 ">
        <div>
          <div
            {...getRootProps({
              className:
                'w-[250px] h-[250px] text-white text-center border-2 border-dotted rounded-full border-neutral-700 cursor-pointer',
            })}
          >
            <input {...getInputProps()} />
            {base64 ? (
              <div className="flex items-center justify-center w-full h-full">
                <img src={base64} className="object-cover rounded-full w-full h-full" alt="" />
              </div>
            ) : (
              <p className="text-black my-[45%]">Ваша пикча сюда (нажимается)</p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <input
            className="text-3xl font-bold"
            type="text"
            value={name}
            placeholder="Ваше ФИО..."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="text-xl mt-1"
            type="text"
            value={position}
            placeholder="Должность..."
            onChange={(e) => setPostion(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill />
            <input
              className={phone ? '' : 'border-b-[2px] border-black'}
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <BsTelegram />
            <IoLogoWhatsapp />
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMail />
            <input
              className={email ? '' : 'border-b-[2px] border-black'}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <BsFillGeoAltFill />
            <input
              className={address ? '' : 'border-b-[2px] border-black'}
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <div className="flex gap-10 items-center mt-">
          <div className="text-neutral-600 w-[250px]">
            <p>Желаемая зарплата:</p>
            <p>Готовность к коммандировкам:</p>
            <p>Занятость:</p>
            <p>График работы:</p>
          </div>
          <div className="font-semibold flex flex-col">
            <input
              className={payment ? '' : 'border-b-[2px] border-black'}
              type="text"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            />
            <input
              className={assignment ? '' : 'border-b-[2px] border-black'}
              type="text"
              value={assignment}
              onChange={(e) => setAssignment(e.target.value)}
            />
            <input
              className={busyness ? '' : 'border-b-[2px] border-black'}
              type="text"
              value={busyness}
              onChange={(e) => setBusyness(e.target.value)}
            />
            <input
              className={workSchedule ? '' : 'border-b-[2px] border-black'}
              type="text"
              value={workSchedule}
              onChange={(e) => setWorkSchedule(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfoSection;
