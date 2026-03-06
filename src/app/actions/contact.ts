"use server";

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContact(prevState: any, formData: FormData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return { 
      error: validatedFields.error.flatten().fieldErrors 
    };
  }

  try {
    await addDoc(collection(db, "inquiries"), {
      ...validatedFields.data,
      createdAt: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Firestore submission error:", error);
    return { error: "Failed to send message. Please try again." };
  }
}
