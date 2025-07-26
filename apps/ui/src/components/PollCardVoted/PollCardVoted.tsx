import style from "../PollCard/PollCard.module.scss";
import type { Poll } from "../../store/pollStore";

export const PollCardVoted: React.FC<{ poll: Poll }> = ({ poll }) => (
  <div className={style.poll_card}>
    <div className={style.poll_status + " " + style.status_submitted}>Voted</div>
    <div className={style.poll_header}>
      <h3 className={style.poll_title}>{poll.title}</h3>
      <div className={style.poll_meta}>
        <div className={style.poll_author}>
          <div className={style.author_avatar}>{poll.author.initials}</div>
          <span>{poll.author.name}</span>
        </div>
        <span>{poll.timeInfo}</span>
      </div>
    </div>
    <p className={style.poll_question}>{poll.question}</p>
    <div className={style.poll_options}>
      {poll.options.map((opt, i) => (
        <div className={style.option} key={i}>
          <button
            className={
              opt.selected
                ? `${style.option_button} ${style.selected}`
                : style.option_button
            }
          >
            <span>{opt.label}</span>
            {opt.icon && <span>{opt.icon}</span>}
          </button>
        </div>
      ))}
    </div>
    <div className={style.poll_actions}>
      {/* <button className={style.vote_btn} disabled>
        Vote Submitted
      </button> */}
    </div>
    <div className={style.poll_stats}>
      {poll.stats.map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  </div>
);
