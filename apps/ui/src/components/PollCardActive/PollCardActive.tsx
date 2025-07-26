import style from "../PollCard/PollCard.module.scss";
import { useState } from "react";
import type { Poll } from "../../store/pollStore";

export const PollCardActive: React.FC<{ poll: Poll }> = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className={style.poll_card}>
      <div className={style.poll_status + " " + style.status_active}>
        Active
      </div>
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
                selectedOption == opt.id
                  ? style.option_button_selected
                  : style.option_button
              }
              onClick={() => {
                setSelectedOption(opt.id);
              }}
            >
              <span>{opt.label}</span>
              {opt.icon && <span>{opt.icon}</span>}
            </button>
          </div>
        ))}
      </div>
      <div className={style.poll_actions}>
        <button
          className={style.vote_btn}
          onClick={() => {
            /* submitVote */
            if (poll.submitVote) {
              poll.submitVote(selectedOption);
            }
          }}
          disabled={!selectedOption}
        >
          {selectedOption ? "Submit Vote" : "Select an Option"}
        </button>
      </div>
      <div className={style.poll_stats}>
        {poll.stats.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
};
