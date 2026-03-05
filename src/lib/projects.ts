import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export async function getProjects() {
  const q = query(collection(db, "projects"), orderBy("updatedAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}