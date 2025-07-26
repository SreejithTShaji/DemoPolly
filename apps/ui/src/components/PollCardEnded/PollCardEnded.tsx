import style from "../PollCard/PollCard.module.scss";
import type { Poll } from "../../store/pollStore";

export const PollCardEnded: React.FC<{ poll: Poll }> = ({ poll }) => (
  <div className={style.poll_card}>
    <div className={style.poll_status + " " + style.status_expired}>Ended</div>
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
        <div className={style.option_result} key={i}>
          <div
            className={style.option_result_bar}
            style={{ width: `${opt.percentage ?? 0}%` }}
          ></div>
          <div className={style.option_result_content}>
            <span className={style.option_text}>{opt.label}</span>
            <span className={style.option_percentage}>{opt.percentage}%</span>
          </div>
        </div>
      ))}
    </div>
    {/*<div className={style.poll_actions}>
      <button
        className={style.view_results_btn}
        onClick={() => {
   
        }}
      >
        View Detailed Results
      </button>
    </div>*/}
    <div className={style.poll_stats}>
      {poll.stats.map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  </div>
);