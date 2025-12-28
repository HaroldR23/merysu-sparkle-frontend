export type Service = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

export type WhyChooseItem = {
  title: string;
  desc: string;
};

export type QuoteRequestFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  captchaToken?: string;
};
