import { defineField, defineType } from "sanity";

export const educationType = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dates",
      title: "Dates",
      type: "string",
      description: "Example: 2023 – 2024",
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});