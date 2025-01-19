"use client";
import { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";


const Card = ({ onSave = () => { }, onClose = () => { }, onRefuse = () => { } }) => {
  return (
    <div className="max-w-[320px] flex items-start justify-between rounded-lg bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/56 p-4 text-gray-500 shadow-[0px_87px_78px_-39px_rgba(0,0,0,0.4)]">
      <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#66cc8a] text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#ffffff" d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"></path>
          </g>
        </svg>
      </div>
      <div className="ml-3 text-sm leading-5 font-normal">
        <span className="block text-white text-sm font-semibold mb-1">Baixe agora!</span>
        <div className="text-gray-300 text-sm leading-5 font-normal mb-2">O discador já está disponível para <span className="font-bold">download.</span></div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <a onClick={onRefuse} href="#" className="w-full inline-flex justify-center rounded-lg py-1 px-2 text-xs border border-opacity-40 border-white bg-base-900 text-neutral-400 font-medium">Agora não</a>
          </div>
          <div>
            <a onClick={onSave} href="#" className="w-full inline-flex justify-center rounded-lg py-1 px-2 text-xs text-black border border-opacity-40 border-white bg-[#66cc8a] font-bold hover:bg-[#74db98]">Baixar grátis</a>
          </div>
        </div>
      </div>
      <button onClick={onClose} type="button" className="mt-[-0.375rem] mr-[-0.375rem] mb-[-0.375rem] auto h-8 w-8 inline-flex items-center justify-center rounded-lg bg-base-800 p-2 text-white border-none hover:bg-[#454545]">
        <RiCloseLine size="24" />
      </button>
    </div>
  )
}

const Installer = () => {
  const [prompt, setPrompt] = useState<any>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setPrompt(e);

      if (!window?.matchMedia("display-mode: standalone)").matches) {
        setShow(true);
      }
    }

    window?.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window?.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }
  }, [])

  const handleClose = () => {
    setShow(show => !show)
  }

  const handleInstall = () => {
    if (prompt) {
      prompt?.prompt();
      handleClose();
    }
  }

  return (
    <div className="m-auto mt-[140px]">
      {show ? (
        <Card onSave={handleInstall} onClose={handleClose} onRefuse={handleClose}></Card>
      ) : null}
    </div>
  )
}

export default Installer