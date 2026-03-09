// sanity/schemaTypes/article.ts
import { defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "keyMessage",
      title: "Key Message",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "portfolioValue",
      title: "Portfolio Value",
      type: "string",
      description:
        "Example: Flagship insight, Featured article, Foundation article",
    }),
    defineField({
      name: "externalUrl",
      title: "External Article URL",
      type: "url",
      description: "Paste your LinkedIn article link or another public article URL",
    }),
    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});