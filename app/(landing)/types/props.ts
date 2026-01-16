export type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  color: string;
};

export type ContactUsProps = {
  href: string;
  cardColor: string;
  icon: React.ReactNode;
  title: string;
  description: string[];
};