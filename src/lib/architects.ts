import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { Architect } from "@/types";

export async function getJBLabsArchitects(): Promise<Architect[]> {
  const architectsRef = collection(db, "architects");
  // Optional: Add an orderBy if you have a specific display sequence in mind
  const querySnapshot = await getDocs(architectsRef);
  
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Architect, "id">),
  }));
}