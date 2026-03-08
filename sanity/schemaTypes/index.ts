import type { SchemaTypeDefinition } from "sanity";
import { profileType } from "./profile";
import { experienceType } from "./experience";
import { projectType } from "./project";
import { articleType } from "./article";
import { skillType } from "./skill";
import { educationType } from "./education";
import { achievementType } from "./achievement";

export const schemaTypes: SchemaTypeDefinition[] = [
  profileType,
  experienceType,
  projectType,
  articleType,
  skillType,
  educationType,
  achievementType,
];