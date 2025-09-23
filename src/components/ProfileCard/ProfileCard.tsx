import React from "react";
import styles from "./ProfileCard.module.scss";
import { FaChevronDown } from "react-icons/fa";

interface StatItem {
  label: string;
  value: number | string;
}

interface ProfileCardProps {
  name: string;
  title: string;
  location: string;
  avatarSrc: string;
  coverImage: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  location,
  avatarSrc,
  coverImage,
}) => {
  const stats: StatItem[] = [
    { label: "Profile Visitors", value: 140 },
    { label: "Resume Viewers", value: 20 },
    { label: "My Jobs", value: 88 },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <div className={styles.header}>
          <img src={coverImage} alt="Cover" className={styles.cover} />
          <img src={avatarSrc} alt="Albert Flores" className={styles.avatar} />
        </div>

        <div className={styles.info}>
          <h2>{name}</h2>
          <p className={styles.role}>{title}</p>
          <span className={styles.location}>{location}</span>
        </div>
      </div>

      <ul className={styles.stats}>
        {stats.map((stat, idx) => (
          <li key={idx}>
            <span>{stat.label}</span>
            <span className={styles.value}>{stat.value}</span>
          </li>
        ))}
      </ul>

      <div className={styles.calendar}>
        <div>
          <h3>My calendar</h3>
          <span className={styles.subtext}>Upcoming Interviews</span>
        </div>
        <FaChevronDown className={styles.icon} />
      </div>
    </div>
  );
};

export default ProfileCard;
