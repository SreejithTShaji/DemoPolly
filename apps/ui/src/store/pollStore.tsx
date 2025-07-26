import { useState } from "react";

export type PollStatus = "active" | "voted" | "ended";

export type PollOption = {
  id: string;
  label: string;
  icon?: string;
  percentage?: number;
  selected?: boolean;
};

export type Poll = {
  id: string;
  status: PollStatus;
  title: string;
  question: string;
  author: {
    name: string;
    initials: string;
  };
  timeInfo: string;
  options: PollOption[];
  stats: string[];
  userVotedOption?: string;
  winner?: string;
  submitVote?: (optionId: string) => void;
};

export function usePollStore() {
  const [polls, setPolls] = useState<Poll[]>([]);

  const getPolls = async () => {
    const polls_api: Poll[] = [
      // Active Polls
      {
        id: "1",
        status: "active",
        title: "What's your favorite programming language for web development?",
        question:
          "Help us understand the current trends in web development by sharing your preferred programming language.",
        author: { name: "John Doe", initials: "JD" },
        timeInfo: "2 days left",
        options: [
          { id: "1-1", label: "JavaScript", icon: "🚀" },
          { id: "1-2", label: "Python", icon: "🐍" },
          { id: "1-3", label: "PHP", icon: "🐘" },
          { id: "1-4", label: "Java", icon: "☕" },
        ],
        stats: ["1,234 votes", "Expires: Dec 30, 2024"],
      },
      {
        id: "2",
        status: "active",
        title: "Best time for team meetings?",
        question:
          "When is the most convenient time for you to attend team meetings?",
        author: { name: "Sarah Miller", initials: "SM" },
        timeInfo: "5 days left",
        options: [
          { id: "2-1", label: "Morning (9-11 AM)", icon: "🌅" },
          { id: "2-2", label: "Afternoon (2-4 PM)", icon: "☀️" },
          { id: "2-3", label: "Evening (5-7 PM)", icon: "🌆" },
        ],
        stats: ["89 votes", "Expires: Jan 2, 2025"],
      },
      // Voted Polls
      {
        id: "3",
        status: "voted",
        title: "Favorite coffee type for office?",
        question: "Help us choose the best coffee for our office break room!",
        author: { name: "Alex Lee", initials: "AL" },
        timeInfo: "1 day left",
        options: [
          { id: "3-1", label: "Espresso", icon: "✓", selected: true },
          { id: "3-2", label: "Cappuccino", icon: "☕" },
          { id: "3-3", label: "Latte", icon: "🥛" },
          { id: "3-4", label: "American", icon: "🇺🇸" },
        ],
        stats: ["456 votes", "You voted: Espresso"],
        userVotedOption: "Espresso",
      },
      // Ended Polls
      {
        id: "4",
        status: "ended",
        title: "Most popular social media platform",
        question: "Which social media platform do you use most frequently?",
        author: { name: "Mike Johnson", initials: "MJ" },
        timeInfo: "Ended 3 days ago",
        options: [
          { id: "4-1", label: "Instagram 📸", percentage: 45 },
          { id: "4-2", label: "Twitter 🐦", percentage: 30 },
          { id: "4-3", label: "Facebook 👥", percentage: 15 },
          { id: "4-4", label: "LinkedIn 💼", percentage: 10 },
        ],
        stats: ["2,847 total votes", "Winner: Instagram"],
        winner: "Instagram",
      },
      {
        id: "5",
        status: "ended",
        title: "Preferred work schedule",
        question: "What type of work schedule do you prefer?",
        author: { name: "Rachel White", initials: "RW" },
        timeInfo: "Ended 1 week ago",
        options: [
          { id: "5-1", label: "Flexible hours 🕐", percentage: 55 },
          { id: "5-2", label: "9-5 traditional 🏢", percentage: 25 },
          { id: "5-3", label: "4-day work week 📅", percentage: 20 },
        ],
        stats: ["1,156 total votes", "Winner: Flexible hours"],
        winner: "Flexible hours",
      },
    ];
    const polls_api_action: Poll[] = polls_api.map((poll) => ({
      ...poll,
      submitVote: (optionId: string) => {
        submitVote(poll.id, optionId);
      },
    }));
    setPolls(polls_api_action);
  };
  
  const submitVote = (pollId: string, optionId: string) => {
    setPolls((data) =>
      data.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              options: poll.options.map((opt) =>
                opt.id === optionId
                  ? { ...opt, selected: true }
                  : { ...opt, selected: false }
              ),
              status: "voted",
            }
          : poll
      )
    );
  };

  return { polls, getPolls };
}
