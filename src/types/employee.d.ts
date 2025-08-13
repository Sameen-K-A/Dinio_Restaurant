export interface InavbarItems {
  title: string;
  url: string;
  icon: React.ComponentType<{ size?: number }>;
  onClick: () => void;
  isAvailable: boolean;
};