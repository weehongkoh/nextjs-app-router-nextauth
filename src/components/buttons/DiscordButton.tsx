"use client";

import { signIn } from "next-auth/react";

export default function DiscordButton() {
  return (
    <button
      className="border border-slate-300 rounded px-5 py-4 flex"
      onClick={() => signIn("discord")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 100 100"
        viewBox="0 0 100 100"
        width="24"
        height="24"
        id="discord"
      >
        <path
          fill="#6665d2"
          d="M85.22,24.958c-11.459-8.575-22.438-8.334-22.438-8.334l-1.122,1.282
  c13.623,4.087,19.954,10.097,19.954,10.097c-19.491-10.731-44.317-10.654-64.59,0c0,0,6.571-6.331,20.996-10.418l-0.801-0.962
  c0,0-10.899-0.24-22.438,8.334c0,0-11.54,20.755-11.54,46.319c0,0,6.732,11.54,24.442,12.101c0,0,2.965-3.526,5.369-6.571
  c-10.177-3.045-14.024-9.376-14.024-9.376c6.394,4.001,12.859,6.505,20.916,8.094c13.108,2.698,29.413-0.076,41.591-8.094
  c0,0-4.007,6.491-14.505,9.456c2.404,2.965,5.289,6.411,5.289,6.411c17.71-0.561,24.441-12.101,24.441-12.02
  C96.759,45.713,85.22,24.958,85.22,24.958z M35.055,63.824c-4.488,0-8.174-3.927-8.174-8.815
  c0.328-11.707,16.102-11.671,16.348,0C43.229,59.897,39.622,63.824,35.055,63.824z M64.304,63.824
  c-4.488,0-8.174-3.927-8.174-8.815c0.36-11.684,15.937-11.689,16.348,0C72.478,59.897,68.872,63.824,64.304,63.824z"
        ></path>
      </svg>
      <div className="px-2"></div>
      <span>Sign In with Discord</span>
    </button>
  );
}
