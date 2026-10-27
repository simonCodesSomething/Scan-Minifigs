export type ApplicationUpdateCategory =
  | "feature"
  | "improvement"
  | "bug_fix"
  | "catalog";

export interface ApplicationUpdate {
  id: string;
  title: string;
  description: string;
  category: ApplicationUpdateCategory;
  app_version: string | null;
  published_at: string;
  link_url: string | null;
  sort_order: number;
}
