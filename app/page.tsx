import Image from "next/image";
import HomeFooter from "./HomeFooter";
import AuthProvider from "./(components)/Auth/page";
export default async function Home() {
  return (
    <main className="w-full h-screen fccc p-[10px] ">
      <Image
        className="w-[50px] 350:w-[90px]"
        src="/Messenger.svg"
        width={50}
        height={50}
        alt="Messenger"
      />
      <span className=" text-[20px] 350:text-[30px] my-[40px] text-center ">
        Connect with your favourite people
      </span>
      {/* @ts-expect-error Server Component */}
      <AuthProvider />
      <HomeFooter />
    </main>
  );
}
