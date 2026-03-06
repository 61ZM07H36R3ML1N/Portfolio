"use client";

import { useState, useTransition } from "react";
import { submitContact } from "@/app/actions/contact";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: boolean; error?: any } | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Convert state to FormData for the Server Action
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    startTransition(async () => {
      // 2. Save to Firestore first (for your records)
      const result = await submitContact(null, data);
      setStatus(result);

      if (result.success) {
        // 3. Trigger Gmail for both devs
        const devEmails = "your-gmail@gmail.com,partner-gmail@gmail.com";
        const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${devEmails}&su=${subject}&body=${body}`;
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto space-y-12">
        <section className="border-l-4 border-brand-blue pl-6">
          <h1 className="text-6xl font-black tracking-tighter uppercase italic text-white">Contact</h1>
          <p className="text-zinc-500 font-mono text-sm mt-2 uppercase tracking-widest">
            [ Direct Transmission Protocol ]
          </p>
        </section>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-900 p-4 focus:border-brand-blue outline-none transition-colors text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Return Address (Email)</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-900 p-4 focus:border-brand-blue outline-none transition-colors text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Message Payload</label>
            <textarea
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-900 p-4 focus:border-brand-blue outline-none transition-colors text-white"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-4 bg-brand-blue text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all disabled:opacity-50"
          >
            {isPending ? "Logging Inquiry..." : "Initialize Gmail Send"}
          </button>

          {status?.success && (
            <p className="text-brand-blue font-mono text-xs animate-pulse">
              SUCCESS: Inquiry logged. Opening Gmail...
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
