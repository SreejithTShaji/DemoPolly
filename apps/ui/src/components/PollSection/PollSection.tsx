import type { Poll } from "../../store/pollStore";
import style from "./poll_section.module.scss";
import { PollCard } from "../PollCard/PollCard";

export const PollSection: React.FC<{
  title: string;
  icon: string;
  polls: Poll[];
}> = ({ title, icon, polls }) =>
  polls.length ? (
    <section className={style.pollSection}>
      <h2 className={style.section_title}>
        {icon} {title}
      </h2>
      <div className={style.polls_grid}>
        {polls.map((poll) => (
          <PollCard poll={poll} key={poll.id} />
        ))}
      </div>
    </section>
  ) : null;
