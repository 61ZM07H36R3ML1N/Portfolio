import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Project } from "@/types";

export async function getJBLabsProjects(): Promise<Project[]> {
  const projectsRef = collection(db, "projects");
  const querySnapshot = await getDocs(projectsRef);
  
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, "id">),
  }));
}