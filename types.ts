export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}