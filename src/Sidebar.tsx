import type { Component } from "solid-js";

const Sidebar: Component = () => {
  return (
    <div class="sticky top-0 hidden h-screen overflow-auto bg-slate-700 px-5 pt-10 pr-10 text-gray-300 lg:flex">
      <div class="mb-20 flex flex-col">
        <div class="min-h-[120px]"></div>
        <div class="mx-4 mr-8 rounded-full bg-slate-500 px-[18px] py-3.5 text-xs text-gray-800">
          1
        </div>
        <div class="ml-9 h-10 w-0.5 shrink-0 bg-slate-900"></div>
        <div class="mx-4 mr-8 rounded-full bg-slate-900 px-[18px] py-3.5 text-xs text-gray-400">
          2
        </div>
        <div class="ml-9 h-10 w-0.5 shrink-0 bg-slate-900"></div>
        <div class="mx-4 mr-8 rounded-full bg-slate-900 px-[18px] py-3.5 text-xs text-gray-400">
          3
        </div>
        <div class="ml-9 h-10 w-0.5 shrink-0 bg-slate-900"></div>
        <div class="mx-4 mr-8 rounded-full bg-slate-900 px-[18px] py-3.5 text-xs text-gray-400">
          4
        </div>
        <div class="ml-9 h-10 w-0.5 shrink-0 bg-slate-900"></div>
        <div class="mx-4 mr-8 rounded-full bg-slate-900 px-[18px] py-3.5 text-xs text-gray-400">
          5
        </div>
        <div class="ml-9 h-10 w-0.5 shrink-0 bg-slate-900"></div>
        <div class="mx-4 mr-8 rounded-full bg-slate-900 px-[18px] py-3.5 text-xs text-gray-400">
          6
        </div>
        <div class="ml-9 h-10 w-0.5 shrink-0 bg-slate-900"></div>
        <div class="mx-4 mr-8 rounded-full bg-slate-900 px-[18px] py-3.5 text-xs text-gray-400">
          7
        </div>
      </div>
      <div>
        <div class="-ml-20">Übersicht</div>
        <div class="-ml-20 border-b border-gray-600 text-sm text-gray-400">
          Ablaufplan des Kurses
        </div>
        <div class="h-10 w-0.5"></div>
        <div class="-ml-20 mb-3 text-sm text-gray-400">Stationen</div>
        <div>Poster</div>
        <div class="text-sm text-gray-400">Eröffnung des Außengeländes</div>
        <div class="h-10 w-0.5"></div>
        <div>Präsentation</div>
        <div class="text-sm text-gray-400">Präsentation der Bibliothek</div>
        <div class="h-10 w-0.5"></div>
        <div>Umfrage</div>
        <div class="text-sm text-gray-400">Umfrage zum Betreuungsbedarf</div>
        <div class="h-10 w-0.5"></div>
        <div>DIN5008</div>
        <div class="text-sm text-gray-400">
          Elternbrief zu neuer Öffnungszeiten
        </div>
        <div class="h-10 w-0.5"></div>
        <div>Kalkulation</div>
        <div class="text-sm text-gray-400">Planung des Jahresbudgets</div>
        <div class="h-10 w-0.5"></div>
        <div>Serienbrief</div>
        <div class="text-sm text-gray-400">Essensgeldabrechnung</div>
        <div class="h-10 w-0.5"></div>
        <div>Flyer</div>
        <div class="pb-20 text-sm text-gray-400">
          Konzeptflyer für neue Eltern
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
