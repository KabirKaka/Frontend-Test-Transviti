import React from "react";
import styles from "./JobCard.module.scss";
import type { Job } from "../../types/job";

interface Props {
  job: Job;
  onApply?: (id: string) => void;
}

const JobCard: React.FC<Props> = ({ job, onApply }) => {
  return (
    <article className={styles.card} aria-labelledby={`job-${job.id}`}>
      <header className={styles.head}>
        <div className={styles.titleWrap}>
          <h3 id={`job-${job.id}`}>{job.title}</h3>
          {job.promoted && <span className={styles.promoted}>Promoted</span>}
        </div>
        <div className={styles.meta}>
          <span>{job.company}</span> · <span>{job.location}</span>
        </div>
      </header>
      <footer className={styles.actions}>
        <button className={styles.apply} onClick={() => onApply?.(job.id)}>
          Apply Now
        </button>
        <button className={styles.save} aria-label="save job">
          🔖
        </button>
      </footer>
    </article>
  );
};

export default JobCard;
