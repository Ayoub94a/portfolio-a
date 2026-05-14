import { useRef } from "react";
import { SectionTitle } from "../atoms";
import { TimelineItem } from "../molecules";
import { experience } from "../../data";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="experience" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionTitle
          label="// experience"
          title="My Journey"
          subtitle="Where I've worked and learned"
        />

        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-px" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
