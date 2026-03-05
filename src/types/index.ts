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