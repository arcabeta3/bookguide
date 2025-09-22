export interface Choice {
  text: string;
  nextSceneId: number;
}

export interface Scene {
  id: number;
  title: string;
  paragraphs: string[];
  choices?: Choice[];
  illustration?: string;
}