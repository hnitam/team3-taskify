import { Dispatch, SetStateAction } from 'react';

const Dropdown = ({
  kebabButtonVisible,
  setIsInEdit,
  // handleEditSelect,
}: {
  kebabButtonVisible: boolean;
  setIsInEdit: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleEditButton = () => {
    setIsInEdit(true);
  };

  return (
    <div>
      {kebabButtonVisible ? (
        <div className="absolute right-4 top-20 z-10 h-74 w-86 rounded-6 border border-solid border-gray-30 bg-white md:right-8 md:top-28 md:h-82 md:w-93">
          <div
            onClick={handleEditButton}
            className="m-6 h-28 w-72 cursor-pointer text-12 font-normal leading-[14px] flex-center hover:rounded-4 hover:bg-violet-10 hover:text-violet-20 md:h-32 md:w-81 md:text-14 md:leading-[24px]"
          >
            수정하기
          </div>
          <div
            // onClick={handleDeleteButton}
            className="m-6 h-28 w-72 cursor-pointer text-12 font-normal leading-[14px] flex-center hover:rounded-4 hover:bg-violet-10 hover:text-violet-20 md:h-32 md:w-81 md:text-14 md:leading-[24px]"
          >
            삭제하기
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Dropdown;
