import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export async function getDynamicProjects() {
  try {
    const projectsRef = collection(db, "projects");
    const q = query(projectsRef, orderBy("title", "asc"));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Firestore Fetch Error:", error);
    return []; // Fallback to empty array if DB is down
  }
}