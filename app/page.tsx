import DialerForm from "@/components/DialerForm";
import Logo from "@/components/Logo";
import Installer from "@/components/Installer";

export default function Home() {

  return (
    <main className="flex flex-1 flex-col overflow-hidden mt-[64px]">
      <div className="flex justify-center h-fit mb-8 md:mb-12 select-none">
        <Logo />
      </div>
      <DialerForm />
      <Installer />
    </main>
  );
}
