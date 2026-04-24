import React from "react";
import WlsIcon from "../components/reunion7/WlsIcon";

const HERO_BG = "https://reloadedwin.neocities.org/wls_folder/4f41def0-c93f-4669-9c4b-06fe2484711a.jpg";
const ICO_HOTMAIL = "https://reloadedwin.neocities.org/wls_folder/a6eba10b-3b10-4df0-a118-12725892fc79.jpg";
const ICO_PHOTOS = "https://reloadedwin.neocities.org/wls_folder/d7da7b20-b18d-4b40-a2a3-3e48aa0f7362.jpg";
const ICO_SKYDRIVE = "https://reloadedwin.neocities.org/wls_folder/1ba4a74a-b91f-4278-9e30-e6707065d290.jpg";
const ICO_PROFILE = "https://reloadedwin.neocities.org/wls_folder/73b7b7bb-6ab0-4bb8-b38f-952eb76ba225.jpg";
const ICO_CALENDAR = "https://reloadedwin.neocities.org/wls_folder/2a329833-6526-4855-8cb3-a317cdfcec6e.jpg";
const ICO_GROUPS = "https://reloadedwin.neocities.org/wls_folder/aa0bd178-177e-462f-afd6-7a2d37667491.jpg";
const ICO_SPACES = "https://reloadedwin.neocities.org/wls_folder/d4338ed7-305c-420e-bf5f-3a1e08414d92.jpg";
const ICO_MESSENGER = "https://reloadedwin.neocities.org/wls_folder/7573ad98-19c7-477c-bb79-8f14c253f828.jpg";
const ICO_MAIL = "https://reloadedwin.neocities.org/wls_folder/a6eba10b-3b10-4df0-a118-12725892fc79.jpg";
const ICO_PHOTOGALLERY = "https://reloadedwin.neocities.org/wls_folder/1792930a-c21d-4f55-a5e3-7407b18f10a4.jpg";
const ICO_MOVIEMAKER = "https://reloadedwin.neocities.org/wls_folder/95675e55-202b-4461-bb15-7c140ad90d9b.jpg";
const ICO_WRITER = "https://reloadedwin.neocities.org/wls_folder/c119ea88-a1cb-4e86-a938-d1f53635c477.jpg";
const ICO_FAMILYSAFETY = "https://reloadedwin.neocities.org/wls_folder/2fc324c6-b994-4bc2-91ef-f7362425b0c5.jpg";
const ICO_TOOLBAR = "https://reloadedwin.neocities.org/wls_folder/bd2dfbb4-40d8-4912-bb9e-5a00b4f4438d.jpg";

export default function Discover() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-6 font-main">
      <h1 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-6">Windows Live</h1>
      <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden mb-8">
        <img src={HERO_BG} alt="Windows Live" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10 max-w-[400px]">
          <h3 className="text-base md:text-lg font-bold text-white drop-shadow-lg leading-tight">
            Where Windows and the web come together
          </h3>
          <p className="text-white/90 text-sm mt-2 drop-shadow">Send mail, chat, or share photos with Windows Live.</p>
          <div className="mt-3">
            <a href="http://web.archive.org/web/20120708085051/http://wl.dlservice.microsoft.com/download/F/1/F/F1FE75CE-C235-4250-9598-AEE5D854A7EA/en/wlsetup-all.exe"
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-4 py-1.5 text-sm text-white border border-white/60 hover:bg-white/20 transition-colors">
              Get it now
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-base font-bold text-[#1a1a1a] mb-2">Windows Live on the web</h2>
          <p className="text-xs text-[#333] leading-relaxed mb-4">
            Now there's one place online where you can check your e-mail, chat with friends, and save and share your photos and files.
          </p>
          <div className="flex flex-wrap gap-3">
            <WlsIcon src={ICO_HOTMAIL} label="Hotmail" />
            <WlsIcon src={ICO_PHOTOS} label="Photos" />
            <WlsIcon src={ICO_SKYDRIVE} label="SkyDrive" />
            <WlsIcon src={ICO_PROFILE} label="Profile" />
            <WlsIcon src={ICO_CALENDAR} label="Calendar" />
            <WlsIcon src={ICO_GROUPS} label="Groups" />
            <WlsIcon src={ICO_SPACES} label="Spaces" />
          </div>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#1a1a1a] mb-2">Windows Live on your PC</h2>
          <p className="text-xs text-[#333] leading-relaxed mb-4">
            Windows Live Essentials is a set of free programs that help you manage just about everything you do online.
          </p>
          <div className="flex flex-wrap gap-3">
            <WlsIcon src={ICO_MESSENGER} label="Messenger" />
            <WlsIcon src={ICO_MAIL} label="Mail" />
            <WlsIcon src={ICO_PHOTOGALLERY} label="Photo Gallery" />
            <WlsIcon src={ICO_MOVIEMAKER} label="Movie Maker" />
            <WlsIcon src={ICO_WRITER} label="Writer" />
            <WlsIcon src={ICO_FAMILYSAFETY} label="Family Safety" />
            <WlsIcon src={ICO_TOOLBAR} label="Toolbar" />
          </div>
        </div>
      </div>
    </div>
  );
}
