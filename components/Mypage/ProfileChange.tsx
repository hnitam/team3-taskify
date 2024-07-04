import PlusBtn from "@/public/images/icon/ic-plus-purple.svg"
import Image from 'next/image';
import { useState } from 'react';

const ProfileChange = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="flex max-w-480 flex-col px-20 pb-20 md:max-w-620 md:px-28 md:pb-28">
      <div className="pt-48 md:pt-57">
        <h1 className="text-20 font-bold md:text-24">프로필</h1>
      </div>
      <div className="pt-24 md:flex md:pt-32">
        <label htmlFor='file' className="flex-center h-100 w-100 shrink-0 rounded-6 bg-gray-10 md:h-182 md:w-182">
          {selectedImage ? (
            <Image width={100} height={100} className='w-100 h-100 md:w-182 md:h-182 object-cover rounded-6' src={selectedImage} alt='Profile' />
          ) : (
            <Image width={20} height={20} className='w-20 h-20 md:w-30 md:h-30' src={PlusBtn} alt='plusbtn' />
          )}
        </label>
        <input className='hidden' id='file' type="file" onChange={handleImageChange} />
        <div className="flex w-full flex-col gap-16 pt-24 md:gap-20 md:pl-16 md:pt-0">
          <div className="flex flex-col gap-10">
            <h2 className="text-18 leading-6">이메일</h2>
            <input
              className="h-42 w-full rounded-6 border border-gray-30 pl-16 text-14 outline-none md:h-48 md:text-16"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-10">
            <h2 className="text-18 leading-6">닉네임</h2>
            <input
              className="h-42 w-full rounded-6 border border-gray-30 pl-16 text-14 outline-none md:h-48 md:text-16"
              type="text"
            />
          </div>
          <div className="flex justify-end">
            <button className="h-28 whitespace-nowrap text-12 btn_desktop_purple md:text-14">
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChange;
