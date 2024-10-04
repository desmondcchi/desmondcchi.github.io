export interface ExperienceEntryProps {
  title?: string;
  comp?: string;
  desc?: string;
  loc?: string;
  start_date?: string;
  end_date?: string;
  accomps?: string[];
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

  return (
    <div className="my-[75px]">
      <div className="flex justify-between">
        <div className="text-xl">
          {comp} {title} | <span className="italic font-thin">{desc}</span>
        </div>
        <div className="text-xl">
          <span className="italic font-thin">{loc}</span> | {start_date} - {end_date}
        </div>
      </div>
      <div className="my-5 text-lg">
        {accomps.map((accomp, i) => (
          <p key={i} className="ml-5 font-thin">• {accomp}</p>
        ))}
      </div>
    </div>
  );
}
