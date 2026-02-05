import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    headerTitle: z.string().optional(),
    headerSubtitle: z.string().optional(),
  }),
});

const runs = defineCollection({
  type: "content",
  schema: z.discriminatedUnion("sectionType", [
    z.object({
      sectionType: z.literal("run"),
      order: z.number(),
      name: z.string(),
      schedule: z.string(),
      time: z.string(),
      distance: z.string(),
      pace: z.string(),
      meetingPoint: z.string(),
      whatToBring: z.string(),
      whoFor: z.string(),
    }),
    z.object({
      sectionType: z.literal("cta"),
      order: z.number(),
      title: z.string(),
      primaryLabel: z.string(),
      primaryHref: z.string(),
      secondaryLabel: z.string(),
      secondaryHref: z.string(),
    }),
  ]),
});

const membersMerch = defineCollection({
  type: "content",
  schema: z.discriminatedUnion("sectionType", [
    z.object({
      sectionType: z.literal("access"),
      order: z.number(),
      title: z.string(),
      merchUrl: z.string().url(),
      password: z.string(),
      buttonLabel: z.string(),
      buttonHref: z.string(),
    }),
    z.object({
      sectionType: z.literal("notes"),
      order: z.number(),
      title: z.string(),
    }),
  ]),
});

const races = defineCollection({
  type: "content",
  schema: z.object({
    group: z.enum(["upcoming", "past"]),
    order: z.number(),
    name: z.string(),
    date: z.date(),
    location: z.string(),
    distance: z.string(),
    signupUrl: z.string().url().optional(),
  }),
});

export const collections = { blog, pages, runs, membersMerch, races };
