import DialerForm from "@/components/DialerForm";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-y-hidden mt-[64px]">
      <div className="flex justify-center h-fit mb-8 md:mb-12">
        <Logo />
      </div>
      <DialerForm />
    </main>
  );
}
