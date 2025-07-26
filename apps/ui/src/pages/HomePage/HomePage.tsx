import { NavBar } from "../../components/NavBar/NavBar";
import { PollSection } from "../../components/PollSection/PollSection";
import { usePollStore, type Poll } from "../../store/pollStore";
import style from "./homepage.module.scss";
import React, { useEffect } from "react";

// --- Components ---

const HomePage: React.FC = () => {
    const { polls,getPolls } = usePollStore();
    useEffect(() => {
        getPolls(); // Ensure polls are fetched on mount
    }, []);
  const activePolls = polls.filter((p) => p.status === "active");
  const votedPolls = polls.filter((p) => p.status === "voted");
  const endedPolls = polls.filter((p) => p.status === "ended");

  return (
    <div className={style.homepage_container}>
      <NavBar />
      <div className={style.container}>
        <PollSection title="Active Polls" icon="🗳️" polls={activePolls} />
        <PollSection
          title="Your Submitted Polls"
          icon="✅"
          polls={votedPolls}
        />
        <PollSection title="Poll Results" icon="📊" polls={endedPolls} />
      </div>
    </div>
  );
};

export default HomePage;
