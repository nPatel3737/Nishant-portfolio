// sanity/lib/queries.ts
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
    "slug": slug.current,
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
    "slug": slug.current,
    publishedAt,
    summary,
    keyMessage,
    portfolioValue,
    externalUrl,
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

export const articleSlugsQuery = groq`
  *[_type == "article" && defined(slug.current)][]{
    "slug": slug.current
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][]{
    "slug": slug.current
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    publishedAt,
    summary,
    keyMessage,
    portfolioValue,
    externalUrl
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    subtitle,
    summary,
    context,
    bullets,
    featured,
    order
  }
`;