export interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  version: string;
  engine: string;
  dice_system?: string;
  tags: string[];
}

export interface Architect {
  id: string;
  name: string;
  role: string;
  bio: string;
  github?: string;
  linkedin?: string;
  avatar_url?: string;
}