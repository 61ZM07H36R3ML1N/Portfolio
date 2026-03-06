"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

export default function ContactPage() {
  // state will hold the return value from our Server Action (success or error)
  const [state, formAction, isPending] = useActionState(submitContact, null);

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      {state?.success ? (
        <div className="p-4 bg-green-900/30 text-green-400 rounded-md">
          Message sent successfully! We will get back to you soon.
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded bg-zinc-900 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {state?.error?.name && <p className="text-red-500 text-xs mt-1">{state.error.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded bg-zinc-900 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {state?.error?.email && <p className="text-red-500 text-xs mt-1">{state.error.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full p-2 rounded bg-zinc-900 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {state?.error?.message && <p className="text-red-500 text-xs mt-1">{state.error.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-zinc-200 disabled:opacity-50"
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>

          {typeof state?.error === "string" && (
            <p className="text-red-500 text-sm mt-2">{state.error}</p>
          )}
        </form>
      )}
    </main>
  );
}
