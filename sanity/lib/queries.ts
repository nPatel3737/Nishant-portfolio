import { groq } from "next-sanity";

export const profileQuery = groq`
  *[_type == "profile"][0]{
    fullName,
    headline,
    shortBio,
    location,
    email,
    linkedinUrl,
    resumeUrl,
    heroTagline
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project"] | order(order asc){
    title,
    subtitle,
    summary,
    context,
    bullets,
    featured,
    order
  }
`;

export const articlesQuery = groq`
  *[_type == "article"] | order(order asc){
    title,
    publishedAt,
    summary,
    keyMessage,
    portfolioValue,
    featured,
    order
  }
`;

export const experienceQuery = groq`
  *[_type == "experience"] | order(order asc){
    role,
    company,
    location,
    dates,
    bullets,
    order
  }
`;

export const skillsQuery = groq`
  *[_type == "skill"] | order(order asc){
    category,
    items,
    order
  }
`;

export const educationQuery = groq`
  *[_type == "education"] | order(order asc){
    institution,
    degree,
    dates,
    details,
    order
  }
`;

export const achievementsQuery = groq`
  *[_type == "achievement"] | order(order asc){
    title,
    description,
    metric,
    type,
    order
  }
`;