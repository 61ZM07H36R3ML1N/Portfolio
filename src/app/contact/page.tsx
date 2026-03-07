"use client"; // Required to handle the response state

import { sendInquiry } from "../actions";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const result = await sendInquiry(formData); 
    
    if (result.success) {
      setStatus("TRANSMISSION_SUCCESSFUL");
    } else {
      setStatus("ERROR_IN_ROUTING");
    }
  }

  return (
    <main className="max-w-2xl mx-auto py-24 px-6">
      <h1 className="text-6xl font-black tracking-tighter mb-4 italic uppercase">Inquiries.</h1>
      
      {status && (
        <p className="mb-6 text-blue-500 font-mono text-xs tracking-widest border border-blue-500/30 p-2 bg-blue-500/5">
          {status}
        </p>
      )}
      
      <form action={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input name="name" type="text" placeholder="NAME" className="bg-zinc-900 border border-zinc-800 p-4 text-xs font-bold outline-none focus:border-blue-500 text-white" required />
          <input name="email" type="email" placeholder="EMAIL" className="bg-zinc-900 border border-zinc-800 p-4 text-xs font-bold outline-none focus:border-blue-500 text-white" required />
        </div>
        <textarea name="message" rows={6} placeholder="MESSAGE_CONTENT" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-xs font-bold outline-none focus:border-blue-500 text-white" required />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 p-4 text-xs font-black tracking-[0.2em] transition-colors text-white">
          SEND_ENCRYPTED_TRANSMISSION
        </button>
      </form>
    </main>
  );
}