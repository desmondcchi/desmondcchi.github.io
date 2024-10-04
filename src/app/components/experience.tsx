import ExperienceEntry from "./experience_entry";
import { ExperienceEntryProps } from "./experience_entry";
import experiences_json from "../../../public/data/experiences.json";

function GetExperiences(): ExperienceEntryProps[] {
  return experiences_json.experiences.map((exp: ExperienceEntryProps) => exp);
}

export default function Experience() {
  const experiences: ExperienceEntryProps[] = GetExperiences();

  return (
    <div className="my-[500px] flex items-center justify-center text-left">
      <div className="w-[1000px]">
        <b className="heading_text text-7xl leading-[10rem]">Experience</b>
        {experiences.map((experience, i) => (
          <ExperienceEntry key={i} props={experience} />
        ))}
      </div>
    </div>
  );
}
