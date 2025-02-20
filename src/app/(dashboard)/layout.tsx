import Image from 'next/image';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen flex'>
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200'>
        <Link href='/'></Link>
        <Image src='/yp_logo_clr.png' alt='logo' width={60} height={60} />
      </div>
      {children}
    </div>
  );
}
