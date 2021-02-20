import { hardSkills, softSkills } from "../../../personalityData";

interface Skills {
    Title: string,
    mySkills: any,
    workName: string,
}

export const hardAndSoft: Skills[] = [
    {Title: "HardSkills:", mySkills: hardSkills, workName: "softskills"},
    {Title: "SoftSkills:", mySkills: softSkills, workName: "works"}
];
