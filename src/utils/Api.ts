import { Project } from "@/assets/Projects";
import projectsData from "@/assets/ProjectsData";

export default async function getProjects(): Promise<Project[]> {
  // Return the local project data instead of fetching from external API
  return new Promise((resolve) => {
    // Simulate a brief delay to match the expected async behavior
    setTimeout(() => {
      resolve(projectsData);
    }, 100);
  });
}
