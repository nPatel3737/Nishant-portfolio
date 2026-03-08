import { defineField, defineType } from "sanity";

export const achievementType = defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "metric",
      title: "Metric / Highlight",
      type: "string",
      description: "Example: 70-75%, 346 lives, £42B by 2030",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      description: "Example: Research, Leadership, Publication, Award",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});