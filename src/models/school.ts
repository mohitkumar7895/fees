export interface Teacher {
  id: string;
  name: string;
  role: string;
  subjects: string[];
  image: string;
  bio?: string;
  experience?: string;
}

export interface ClassItem {
  id: string;
  title: string;
  description: string;
  image: string;
  ageGroup: string;
  totalSeats: number;
  classTime: string;
  tuitionFee?: string;
  highlights: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "Sports" | "Academic" | "Creative" | "Safety" | "Wellness";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "fun" | "activity" | "achievements" | "videos";
  image: string;
  videoUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  commentsCount: number;
}

export interface Testimonial {
  id: string;
  parentName: string;
  location: string;
  quote: string;
  studentClass?: string;
  avatar?: string;
}

export interface SchoolInfo {
  name: string;
  tagline: string;
  description: string;
  address: {
    line1: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    whatsapp: string;
  };
  social: {
    facebook: string;
    youtube: string;
    instagram: string;
  };
  features: {
    title: string;
    description: string;
  }[];
}
