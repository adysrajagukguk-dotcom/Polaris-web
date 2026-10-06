export type LifeDomain = 'Academic' | 'Career' | 'Social & Organization' | 'Well-being' | 'Personal Growth';

export interface Goal {
  id: string;
  title: string;
  domain: LifeDomain;
  target: string;
  deadline: string;
  progress: number; // 0 to 100
  status: 'In Progress' | 'On Track' | 'Review Needed' | 'Completed';
  linkedActivitiesCount: number;
  recentActivity: string;
}

export interface Activity {
  id: string;
  title: string;
  domain: LifeDomain;
  duration: string;
  date: string;
  goalTitle: string;
  status: 'Completed' | 'Scheduled';
}

export interface TeamMember {
  name: string;
  role: string;
  domainFocus: string;
  bio: string;
  initials: string;
}

export type AIMode = 'recommendations' | 'consultation' | 'support';

export interface ScreenPreview {
  id: string;
  name: string;
  shortDesc: string;
  screenCategory: string;
  highlight: string;
}
