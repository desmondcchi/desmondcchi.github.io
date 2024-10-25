import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export interface ExperienceEntryProps {
  title?: string;
  comp?: string;
  desc?: string;
  loc?: string;
  start_date?: string;
  end_date?: string;
  accomps?: string[];
  fa_comp_logo?: string;
}

function StringToFaIcon(str: string): IconDefinition {
  switch (str) {
    case "faGoogle": {
      return faGoogle;
    }
    default: {
      return faCircle;
    }
  }
}

export default function ExperienceEntry({
  props,
}: {
  props: ExperienceEntryProps;
}) {
  const title: string = props.title!;
  const comp: string = props.comp!;
  const desc: string = props.desc!;
  const loc: string = props.loc!;
  const accomps: string[] = props.accomps!;
  const start_date: string = props.start_date!;
  const end_date: string = props.end_date!;
  const fa_comp_logo: string = props.fa_comp_logo!;

  return (
    <div className="flex">
      <div className="relative">
        <div className="absolute z-0 -ml-[7.5rem] mt-[4.5rem] rounded-full w-[7rem] h-[7rem] bg-[#24283b]" />
        <FontAwesomeIcon
          icon={StringToFaIcon(fa_comp_logo)}
          size="6x"
          className="absolute w-20 z-10 -ml-[6.5rem] mt-[5rem]"
        ></FontAwesomeIcon>
      </div>
      <div className="my-[75px]">
        <div className="flex justify-between">
          <div className="text-xl">
            {comp} {title} | <span className="italic font-thin">{desc}</span>
          </div>
          <div className="text-xl">
            <span className="italic font-thin">{loc}</span> | {start_date} -{" "}
            {end_date}
          </div>
        </div>
        <div className="my-5 text-lg">
          {accomps.map((accomp, i) => (
            <p key={i} className="ml-5 font-thin">
              • {accomp}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
