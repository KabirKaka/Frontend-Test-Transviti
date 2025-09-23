export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  remote?: boolean;
  postedAt: string; // ISO date
  applicantsCount?: number;
  promoted?: boolean;
}
