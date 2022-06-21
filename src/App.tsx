import type { Component } from "solid-js";
import Sidebar from "./Sidebar";

import data from "./content.json";

const App: Component = () => {
  console.log(data["din5008"].title);
  return (
    <div class="flex bg-neutral-50">
      <Sidebar />
      <div class="relative mx-auto max-w-6xl flex-1 p-20">
        <div class="text-6xl text-gray-900">{data["din5008"].title}</div>
        <div class="pb-20 text-4xl text-gray-600">Grundlagen Word</div>
        <div class="mb-20 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-full"
            data-name="Layer 1"
            viewBox="0 0 712 380"
          >
            <path
              fill="#f2f2f2"
              d="M712 225c0-31-26-106-57-106s-57 75-57 106a57 57 0 0 0 114 0Z"
            />
            <path
              fill="#ccc"
              d="M655 352a1 1 0 0 1-1-1V218a1 1 0 1 1 1 0v133a1 1 0 0 1 0 1Z"
            />
            <path
              fill="#ccc"
              d="M655 243a1 1 0 0 1-1-1l-33-38a1 1 0 0 1 1 0l33 38a1 1 0 0 1 0 1Zm0 22a1 1 0 0 1-1-2l19-18a1 1 0 0 1 1 1l-19 18a1 1 0 0 1 0 1Z"
            />
            <path
              fill="#f2f2f2"
              d="M81 281c0-18-14-60-32-60s-32 42-32 60a32 32 0 0 0 64 0Z"
            />
            <path fill="#ccc" d="M49 352h-1v-76h1v76Z" />
            <path
              fill="#ccc"
              d="m49 290-19-21 1-1 18 22Zm0 13v-1l10-10h1l-11 11Z"
            />
            <path fill="#f2f2f2" d="M14 351a13 13 0 1 1 27 0" />
            <path fill="#ccc" d="M27 351v-7h1v7h-1Z" />
            <path fill="#ccc" d="m27 349-4-4 5 3-1 1Z" />
            <path fill="#f2f2f2" d="M55 351a13 13 0 0 1 27 0" />
            <path fill="#ccc" d="M69 351h-1v-7h1v7Z" />
            <path
              fill="#ccc"
              d="m69 349-5-4h1l4 3v1Zm236-51a149 149 0 1 1 0-298 149 149 0 0 1 0 298Zm0-296a147 147 0 1 0 0 294 147 147 0 0 0 0-294Z"
            />
            <path
              fill="#ccc"
              d="M305 138a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v136a1 1 0 0 1-1 1Zm148 12H317a1 1 0 0 1 0-2h136a1 1 0 0 1 0 2Zm-160 0H157a1 1 0 0 1 0-2h136a1 1 0 0 1 0 2Zm12 148a1 1 0 0 1-1-1V161a1 1 0 0 1 2 0v136a1 1 0 0 1-1 1Zm9-156a1 1 0 0 1-1-2l96-96a1 1 0 1 1 1 2l-96 96Zm-18 0a1 1 0 0 1-1 0l-95-96a1 1 0 1 1 1-2l96 96a1 1 0 0 1-1 2Zm113 112-96-96a1 1 0 0 1 1-2l96 96a1 1 0 0 1-1 2Zm-209 0a1 1 0 0 1 0-2l95-96a1 1 0 0 1 2 2l-96 96a1 1 0 0 1-1 0Z"
            />
            <path
              fill="#ccc"
              d="M305 252a103 103 0 1 1 102-103 103 103 0 0 1-102 103Zm0-203a101 101 0 1 0 100 100A101 101 0 0 0 305 49Z"
            />
            <circle cx="304.8" cy="149" r="12" fill="#3f3d56" />
            <path fill="#3f3d56" d="M258 352h-10l51-208 10 3-51 205z" />
            <path fill="#3f3d56" d="M351 352h11l-52-208-9 3 50 205z" />
            <path fill="#ccc" d="M288 31h33v18h-33z" />
            <path fill="#fff" d="M290 35h13v14h-13zm16 0h13v14h-13z" />
            <path
              fill="#ccc"
              d="M304 69a19 19 0 0 1-19-19v-1a5 5 0 0 1 5-4h29a5 5 0 0 1 4 4v1a19 19 0 0 1-19 19Z"
            />
            <path
              fill="#334155"
              d="M320 36h-31a2 2 0 0 1-2-4l6-12a2 2 0 0 1 2-1h19a2 2 0 0 1 2 1l6 12a2 2 0 0 1-2 4Z"
            />
            <path fill="#ccc" d="M377 71h33v18h-33z" />
            <path fill="#fff" d="M379 75h13v14h-13zm16 0h13v14h-13z" />
            <path
              fill="#ccc"
              d="M393 109a19 19 0 0 1-19-19v-1a5 5 0 0 1 5-4h29a5 5 0 0 1 4 4v1a19 19 0 0 1-19 19Z"
            />
            <path
              fill="#334155"
              d="M384 60a1 1 0 0 0-1 0l-6 12a1 1 0 0 0 1 3h31a1 1 0 0 0 1-3l-6-12a1 1 0 0 0-1 0Z"
            />
            <path fill="#ccc" d="M412 161h33v18h-33z" />
            <path fill="#fff" d="M414 165h13v14h-13zm16 0h13v14h-13z" />
            <path
              fill="#ccc"
              d="M428 199a19 19 0 0 1-19-19v-1a5 5 0 0 1 5-4h29a5 5 0 0 1 4 4v1a19 19 0 0 1-19 19Z"
            />
            <path
              fill="#334155"
              d="M444 166h-31a2 2 0 0 1-2-4l6-12a2 2 0 0 1 2-1h19a2 2 0 0 1 2 1l6 12a2 2 0 0 1-2 4Z"
            />
            <path fill="#ccc" d="M375 245h33v18h-33z" />
            <path fill="#fff" d="M377 249h13v14h-13zm16 0h13v14h-13z" />
            <path
              fill="#ccc"
              d="M391 283a19 19 0 0 1-19-19v-1a5 5 0 0 1 5-4h29a5 5 0 0 1 4 4v1a19 19 0 0 1-19 19Z"
            />
            <path
              fill="#334155"
              d="M407 250h-31a2 2 0 0 1-2-4l6-12a2 2 0 0 1 2-1h19a2 2 0 0 1 2 1l6 12a2 2 0 0 1-2 4Z"
            />
            <path fill="#ccc" d="M233 89h-33V71h33z" />
            <path fill="#fff" d="M231 89h-13V75h13zm-16 0h-13V75h13z" />
            <path
              fill="#ccc"
              d="M216 109a19 19 0 0 1-19-19v-1a5 5 0 0 1 5-4h29a5 5 0 0 1 4 4v1a19 19 0 0 1-19 19Z"
            />
            <path
              fill="#334155"
              d="M232 76h-31a2 2 0 0 1-2-4l6-12a2 2 0 0 1 2-2l19 1a2 2 0 0 1 2 1l6 12a2 2 0 0 1-2 3Z"
            />
            <path fill="#ccc" d="M198 179h-33v-18h33z" />
            <path fill="#fff" d="M196 179h-13v-14h13zm-16 0h-13v-14h13z" />
            <path
              fill="#ccc"
              d="M181 199a19 19 0 0 1-19-19v-1a5 5 0 0 1 5-4h29a5 5 0 0 1 4 4v1a19 19 0 0 1-19 19Z"
            />
            <path
              fill="#334155"
              d="M197 166h-31a2 2 0 0 1-2-4l6-12a2 2 0 0 1 2-1h19a2 2 0 0 1 2 1l6 12a2 2 0 0 1-2 4Z"
            />
            <path fill="#ccc" d="M235 263h-33v-18h33z" />
            <path fill="#fff" d="M233 263h-13v-14h13zm-16 0h-13v-14h13z" />
            <path
              fill="#ccc"
              d="M218 283a19 19 0 0 1-19-19v-1a5 5 0 0 1 5-4h29a5 5 0 0 1 4 4v1a19 19 0 0 1-19 19Z"
            />
            <path
              fill="#334155"
              d="M234 250h-31a2 2 0 0 1-2-4l6-12a2 2 0 0 1 2-1h19a2 2 0 0 1 2 1l6 12a2 2 0 0 1-2 4Z"
            />
            <path fill="#ccc" d="M288 283h33v18h-33z" />
            <path fill="#fff" d="M290 287h13v14h-13zm16 0h13v14h-13z" />
            <path
              fill="#ccc"
              d="M290 298a4 4 0 0 0-4 3v1a18 18 0 0 0 36 0v-1a4 4 0 0 0-3-3Z"
            />
            <path
              fill="#334155"
              d="M295 272a1 1 0 0 0-1 0l-6 12a1 1 0 0 0 1 3h31a1 1 0 0 0 1-3l-6-12a1 1 0 0 0-1 0Z"
            />
            <path
              fill="#3f3d56"
              d="M529 322a1 1 0 0 0 0-2h-9v-4h9a1 1 0 0 0 0-2h-81a1 1 0 1 0 0 2h10v4h-10a1 1 0 1 0 0 2h10v4h-10a1 1 0 1 0 0 2h10v4h-9a2 2 0 1 0 0 4h8a1 1 0 0 0 0 1v14a2 2 0 0 0 3 0v-14a1 1 0 0 0 0-1h57a1 1 0 0 0 0 1v14a2 2 0 0 0 3 0v-14a1 1 0 0 0 0-1h8a2 2 0 0 0 0-4h-8v-4h9a1 1 0 0 0 0-2h-9v-4Zm-69-6h58v4h-58Zm58 16h-58v-4h58Zm0-6h-58v-4h58Zm-329-4a1 1 0 0 0 0-2h-9v-4h9a1 1 0 0 0 0-2h-81a1 1 0 0 0 0 2h10v4h-10a1 1 0 0 0 0 2h10v4h-10a1 1 0 0 0 0 2h10v4h-9a2 2 0 0 0 0 4h8a1 1 0 0 0 0 1v14a2 2 0 0 0 3 0v-14a1 1 0 0 0 0-1h57a1 1 0 0 0 0 1v14a2 2 0 0 0 3 0v-14a1 1 0 0 0 0-1h8a2 2 0 0 0 0-4h-8v-4h9a1 1 0 0 0 0-2h-9v-4Zm-69-6h58v4h-58Zm58 16h-58v-4h58Zm0-6h-58v-4h58Z"
            />
            <path
              fill="#ccc"
              d="M504 317h-3a2 2 0 0 1-1-2v-3a2 2 0 0 1 1-1h3a2 2 0 0 1 2 1v3a2 2 0 0 1-2 2Z"
            />
            <path
              fill="#ccc"
              d="M503 313a1 1 0 0 1-1 0 1 1 0 0 1 0-1l10-58a1 1 0 0 1 1 1l-9 57a1 1 0 0 1-1 1Z"
            />
            <path
              fill="#ccc"
              d="M503 313a1 1 0 0 1-1-1l-10-57a1 1 0 0 1 2-1l10 58a1 1 0 0 1-1 1Z"
            />
            <path
              fill="#ff6584"
              d="M524 245c1-7-3-13-8-14s-11 4-12 11c-1 6 2 11 6 13v1l5 1v-1c4-1 8-6 9-11Z"
            />
            <path
              fill="#ccc"
              d="M501 242c-1-7-7-12-12-11s-9 7-8 14c1 6 5 10 10 11v1l5-1v-1c4-2 6-8 5-13Zm2 70a1 1 0 0 1-1-1v-59a1 1 0 1 1 2 0v59a1 1 0 0 1-1 1Z"
            />
            <path
              fill="#334155"
              d="M512 240c0-6-5-12-10-12s-10 6-10 12 3 11 7 13v1h5v-1c5-2 8-7 8-13Z"
            />
            <path fill="#ccc" d="M710 354H1a1 1 0 1 1 0-3h709a1 1 0 1 1 0 3Z" />
            <path fill="#a0616a" d="M553 351h-2l-1-8h3v8z" />
            <path fill="#2f2e41" d="M549 351h5v3h-7v-1a2 2 0 0 1 2-2Z" />
            <path fill="#a0616a" d="m570 349-2 1-5-8 3-1 4 8z" />
            <path
              fill="#2f2e41"
              d="m566 350 4-2 1 3-6 3v-1a2 2 0 0 1 1-3Zm-13-1h-2a1 1 0 0 1-1-1l-1-31a1 1 0 0 1 1-1l13 1a1 1 0 0 1 0 1l1 14 5 13a1 1 0 0 1-1 2h-2a1 1 0 0 1-1 0l-6-12a1 1 0 0 1 0-1l-1-5a1 1 0 0 0-2 0l-2 19a1 1 0 0 1-1 1Z"
            />
            <circle cx="554.4" cy="287.4" r="4.6" fill="#a0616a" />
            <path
              fill="#334155"
              d="M558 320a16 16 0 0 1-9-3 1 1 0 0 1 0-1l1-15a7 7 0 0 1 3-6 7 7 0 0 1 6 0 5 5 0 0 1 1 0 8 8 0 0 1 3 8l1 15a14 14 0 0 1-6 2Z"
            />
            <path
              fill="#a0616a"
              d="M563 322a2 2 0 0 0 1-3l2-6h-3l-2 6a2 2 0 0 0 2 3Z"
            />
            <path
              fill="#334155"
              d="M564 318a1 1 0 0 1-1 0l-1-1a1 1 0 0 1 0-1l2-8-3-7a2 2 0 0 1 0-1 2 2 0 0 1 2 0l5 7a2 2 0 0 1 0 2l-4 9Z"
            />
            <path
              fill="#2f2e41"
              d="m558 291-1-1a8 8 0 0 1 0-1 1 1 0 0 0 0-1h-2l-1-2-1-1h-2a3 3 0 0 1-2-3 1 1 0 0 0 0-1l1 1a1 1 0 0 1 1-1 3 3 0 0 1 1 0c2 0 5 0 6 2a8 8 0 0 1 2 4 13 13 0 0 1-2 4Z"
            />
            <path
              fill="#a0616a"
              d="M534 299a2 2 0 0 1 3 1h6l-2 3h-6a2 2 0 0 1-1-4Z"
            />
            <path
              fill="#334155"
              d="M537 302a1 1 0 0 1 1 0v-2a1 1 0 0 1 1 0h8l7-4a2 2 0 0 1 1 0 2 2 0 0 1 1 2l-7 6a2 2 0 0 1-2 1l-9-2a1 1 0 0 1-1-1Z"
            />
            <path
              fill="#ffb8b8"
              d="M423 348a2 2 0 0 0-1-3l-1-7-3 3 2 6a2 2 0 0 0 3 1Z"
            />
            <path
              fill="#334155"
              d="m422 344-3 1-5-16-1-5a2 2 0 0 1 2-3 2 2 0 0 1 2 2l4 12 1 9Z"
            />
            <circle cx="412.4" cy="313.8" r="4.7" fill="#ffb8b8" />
            <path fill="#ffb8b8" d="m399 378-3-1 2-9 3 1-2 9z" />
            <path fill="#2f2e41" d="m399 380-8-2a3 3 0 0 1 4-2l4 1Z" />
            <path fill="#ffb8b8" d="M423 378h-2l-1-9h2l1 9z" />
            <path
              fill="#2f2e41"
              d="M424 380h-8a3 3 0 0 1 3-3h5Zm-25-5h-2a1 1 0 0 1-1-1c-1 0 7-39 9-38h9c5 9 7 23 10 38a1 1 0 0 1-1 1h-2a1 1 0 0 1-1 0l-10-26h-1l-9 26a1 1 0 0 1-1 0Z"
            />
            <path
              fill="#334155"
              d="m415 337-11-1 2-11a6 6 0 0 1 5-5 6 6 0 0 1 6 2 6 6 0 0 1 1 6Z"
            />
            <path
              fill="#2f2e41"
              d="M422 319c-4 2-8 1-13 0l1-5a4 4 0 0 1-1-3 6 6 0 0 1 6-4 6 6 0 0 1 7 6Z"
            />
            <path fill="#2f2e41" d="M411 307h4v5h-9a5 5 0 0 1 5-5Z" />
            <path
              fill="#ffb8b8"
              d="M404 349a2 2 0 0 0 0-3l2-7-3 1-2 6a2 2 0 0 0 3 3Z"
            />
            <path
              fill="#334155"
              d="m404 345-2-1h-1l4-17v-4a2 2 0 0 1 4-1 2 2 0 0 1 1 2l-2 13-3 8h-1Z"
            />
            <path
              fill="#ffb8b8"
              d="m483 309-8-5v-2h-3l-1 4a1 1 0 0 0 1 1l10 4a2 2 0 1 0 1-2Z"
            />
            <path
              fill="#3f3d56"
              d="M475 304h-4a1 1 0 0 1-1-1l1-4a2 2 0 0 1 5 0v5a1 1 0 0 1-1 0Z"
            />
            <path
              fill="#ffb8b8"
              d="m489 294-8 5-2-2-2 3 3 2a1 1 0 0 0 2 0l8-6a2 2 0 1 0-1-2Z"
            />
            <path
              fill="#ccc"
              d="m481 299-3 3a1 1 0 0 1-1 0l-3-3a2 2 0 0 1 3-4l4 2a1 1 0 0 1 0 2Z"
            />
            <circle cx="470.5" cy="286.3" r="4.5" fill="#ffb8b8" />
            <path fill="#ffb8b8" d="M475 351h2l1-9h-3v9z" />
            <path fill="#2f2e41" d="M474 350h5a3 3 0 0 1 2 3h-7Z" />
            <path fill="#ffb8b8" d="M467 351h2l1-9h-3v9z" />
            <path
              fill="#2f2e41"
              d="M466 350h5a3 3 0 0 1 3 3h-8Zm8-2-2-18-1 18a1 1 0 0 1-1 0h-3l-1-30h12v30a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z"
            />
            <path
              fill="#ccc"
              d="M466 319a1 1 0 0 1-1-1v-16c-1-3-1-7 2-9l1-1h6v1h1a9 9 0 0 1 4 9v3l-1 13a1 1 0 0 1 0 1 11 11 0 0 1-5 1 20 20 0 0 1-7-1Z"
            />
            <path
              fill="#2f2e41"
              d="M470 291a5 5 0 1 1 1-10 6 6 0 0 1 4-1 3 3 0 0 1 2 2 2 2 0 0 1-1 3 4 4 0 0 1-2 0 3 3 0 0 0-2 1l-1 1a2 2 0 0 1 1 3 2 2 0 0 1-2 1Z"
            />
            <path fill="#ffb8b8" d="M208 378h2l1-9h-3v9z" />
            <path fill="#2f2e41" d="M207 380v-3h4a3 3 0 0 1 4 3Z" />
            <path fill="#ffb8b8" d="M196 378h2l1-9h-3v9z" />
            <path fill="#2f2e41" d="M195 380v-3h5a3 3 0 0 1 3 3Z" />
            <circle cx="202.2" cy="312.6" r="4.7" fill="#ffb8b8" />
            <path
              fill="#ffb8b8"
              d="M218 343a2 2 0 0 0-2-1l-3-3-2 1 4 4a2 2 0 0 0 3-1Zm-22 4a2 2 0 0 0-2-3v-4h-3l1 6a2 2 0 0 0 4 1Z"
            />
            <path
              fill="#ccc"
              d="M198 322a2 2 0 0 0-4 0l-4 10a6 6 0 0 0 0 3l1 8a1 1 0 0 0 1 1h2a1 1 0 0 0 0-1 28 28 0 0 1 3-15l2-4a2 2 0 0 0-1-2Z"
            />
            <path
              fill="#2f2e41"
              d="M201 317a5 5 0 1 1 1-10 6 6 0 0 1 3-1 3 3 0 0 1 3 2 2 2 0 0 1-1 3 4 4 0 0 1-2 0 3 3 0 0 0-2 1l-1 2a2 2 0 0 1 1 2 2 2 0 0 1-2 1Zm-6 26-1 32a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1l3-21h1l4 20a1 1 0 0 0 1 1h3a1 1 0 0 0 0-1l-2-31Z"
            />
            <path
              fill="#ccc"
              d="M194 328a9 9 0 0 1 8-9c2-1 5-1 6 2 3 8-2 8 0 15s3 8 1 8-15 4-14-1l-1-15Z"
            />
            <path
              fill="#ccc"
              d="M208 320a2 2 0 0 0-4 3l2 9a9 9 0 0 0 2 5l5 6a1 1 0 0 0 1 0l1-2a1 1 0 0 0 0-1 26 26 0 0 1-5-13l-1-5a2 2 0 0 0-1-2Z"
            />
            <path
              fill="#a0616a"
              d="M219 346a2 2 0 0 0 0-3l2-14h-3l-1 14a2 2 0 0 0 2 3Z"
            />
            <circle cx="221.4" cy="317.6" r="4.2" fill="#a0616a" />
            <path
              fill="#334155"
              d="M222 337a1 1 0 0 1-1 0 43 43 0 0 0-2-7 5 5 0 0 1 3-7 5 5 0 0 1 6 4 25 25 0 0 1 1 8 1 1 0 0 1 0 1l-7 1Z"
            />
            <path fill="#a0616a" d="M228 378h2l1-9h-3v9z" />
            <path fill="#2f2e41" d="M235 380h-8v-4h5a3 3 0 0 1 3 4Z" />
            <path fill="#a0616a" d="m207 375 2 1 5-7-3-1-4 7z" />
            <path
              fill="#2f2e41"
              d="m212 380-7-3 2-4 4 3a3 3 0 0 1 1 4Zm16-7a1 1 0 0 1-1-1l-2-20h-1l-11 20a1 1 0 0 1-1 0l-2-1a1 1 0 0 1-1-1l8-19c1-8 4-12 4-13v-1a1 1 0 0 1 0-1c3-3 8-1 8-1 6 8 4 32 3 37a1 1 0 0 1 0 1h-4Z"
            />
            <path
              fill="#a0616a"
              d="m238 323-8 4-1-1-2 3 3 2a1 1 0 0 0 1 0l8-6a2 2 0 1 0-1-2Z"
            />
            <path
              fill="#334155"
              d="m230 327-2 3a1 1 0 0 1-1 0l-3-2a2 2 0 0 1 3-4l3 2a1 1 0 0 1 0 1Zm-9 6-4-1a1 1 0 0 1-1-1l2-4a2 2 0 0 1 4 1v4a1 1 0 0 1-1 1Z"
            />
            <path
              fill="#2f2e41"
              d="M222 317h4a2 2 0 0 0 0-2c0-2-2-2-3-3a10 10 0 0 0-6 0c-2 0-3 2-3 4l2 4c-1 2-2 3-4 3l-4 1c-2 2-1 4 0 6a10 10 0 0 0 5 2h8c2-1 4-3 4-6a9 9 0 0 0-2-3 8 8 0 0 1-2-3 3 3 0 0 1 1-2 1 1 0 0 0 0-1Z"
            />
          </svg>
        </div>
        <div class="mb-4 inline-block border-b border-slate-700 pb-1 text-xl text-gray-600">
          Situation
        </div>
        <div class="max-w-4xl pb-20 text-lg leading-relaxed text-gray-900">
          Im Rahmen durchgeführter Umbauarbeiten wurde in den letzten Monaten
          der komplette Außenbereich der Kita erneuert. Es kamen neue
          Spielgeräte, ein Gemüsegarten und ein Trampolinen neu hinzu. Um den
          Eltern eine Einblick in die durchgeführten Arbeiten und die neu
          gestaltete Außenfläche zu geben erstellen Sie einen DIN A4 großen
          Flyer in dem sie die Ergebnisse dokumentieren und adresatengerecht
          darstellen.
        </div>
        <div class="mb-4 inline-block border-b border-slate-700 pb-1 text-xl text-gray-600">
          Anleitung
        </div>
        <div>
          <iframe
            class="aspect-video w-full"
            src="https://www.youtube-nocookie.com/embed/nblkBv_Trd0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="mb-4 inline-block border-b border-slate-700 pb-1 text-xl text-gray-600">
          Anleitung
        </div>
        <div class="max-w-4xl pb-8 text-lg text-gray-900">
          Erstellen eines Flyers
        </div>
      </div>
    </div>
  );
};

export default App;
