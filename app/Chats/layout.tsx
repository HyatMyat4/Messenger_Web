import SideBarComponents from "./SideBarComponents";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(Response, "_data?");
  return (
    <main className=" frcb ">
      <SideBarComponents />
      <div className="w-full h-screen">{children}</div>
    </main>
  );
}
