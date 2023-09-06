export type TDataType = {
  id: number;
  href: string;
  title: string;
  company: string;
  publishedAt: Date;
  endsAt: Date;
  applyStatus: boolean;
};

export type TUpdateData = TDataType & {
  target:
    | "applyStatus"
    | "title"
    | "company"
    | "publishedAt"
    | "endsAt"
    | "href";
};
