import Image from 'next/image';

// format of data - get it from table
const data = [
  {
    name: 'Girls',
    count: 400,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 100,
    fill: '#C3EBFA',
  },
  {
    name: 'Teacher',
    count: 10,
    fill: '#C3EBFA',
  },
  {
    name: 'Staff',
    count: 40,
    fill: '#C3EBFA',
  },
];

const UserCard = ({ type }: { type: string }) => {
  const getCount = () => {
    if (type === '참가자') return data[0].count + data[1].count;
    if (type === '강사') return data[2].count;
    if (type === '스텝') return data[3].count;
    return 0; // Default case
  };
  return (
    <div className='rounded-2xl odd:bg-customPurple even:bg-customYellow p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>
          {/* could be dynamic from database */}
          2024/25
        </span>
        <Image src='/more.png' alt='' width={20} height={20} />
      </div>
      <h1 className='text-2xl font-semibold my-4'>{getCount()}</h1>
      <h2 className='capitalize text-sm font-medium text-gray-500'>{type}</h2>
    </div>
  );
};

export default UserCard;
