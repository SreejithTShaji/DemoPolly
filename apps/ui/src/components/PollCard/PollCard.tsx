import React from "react";
import type { Poll } from "../../store/pollStore";
import { PollCardActive } from "../PollCardActive/PollCardActive";
import { PollCardVoted } from "../PollCardVoted/PollCardVoted";
import { PollCardEnded } from "../PollCardEnded/PollCardEnded";

export const PollCard: React.FC<{ poll: Poll }> = ({ poll }) => {
  if (poll.status === "active") return <PollCardActive poll={poll} />;
  if (poll.status === "voted") return <PollCardVoted poll={poll} />;
  return <PollCardEnded poll={poll} />;
};
