export interface Contact {
  email: string;
  mobile: string;
}

export interface Profile {
  linkedin: { title: string, link: string };
  leetcode: { title: string, link: string };
  hackerank: { title: string, link: string };
}

export interface ProfessionalExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  project: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  college: string;
  period: string;
}

export interface Skill {
  category: string;
  detail: string;
}

export interface Certification {
  name: string;
  credentialId: string;
  link: string;
}

export interface Resume {
  name: string;
  title: string;
  contact: Contact;
  profile: Profile;
  summary: string;
  professionalExperience: ProfessionalExperience[];
  awardsAndAchievements: string[];
  education: Education;
  certifications: Certification[];
  skills: Skill[];
}
