import React from "react";
import styles from "./JobCard.module.scss";
import type { Job } from "../../types/job";
import teamsLogo from "../../assets/teams.svg";
import Button from "../Button/Button";
import Bookmark from "../../assets/bookmark.svg";
import locationIcon from "../../assets/location.svg";
import clockIcon from "../../assets/clock.svg";
import moment from "moment";

interface JobCardProps {
  job: Job;
  isPromoted?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, isPromoted }) => {
  return (
    <article className={styles.card} aria-labelledby={`job-${job.id}`}>
      <div className={styles.wrapper}>
        {isPromoted && <h1>Promoted</h1>}
        <div className={styles.header}>
          <img
            src={teamsLogo}
            alt={`${job.company} logo`}
            width="56"
            height="56"
            className={styles.logo}
            loading="lazy"
          />
          <div className={styles.info}>
            <h1 id={`job-${job.id}`} className={styles.title}>
              {job.title}
            </h1>
            <p className={styles.company}>{job.company}</p>
          </div>
        </div>

        <div className={styles.content}>
          <div>
            <img
              src={locationIcon}
              alt={`${job.location} location icon`}
              width="16"
              height="16"
            />
            <p>{job.location}</p>
          </div>
          <div>
            <img src={clockIcon} alt={`time`} width="16" height="16" />
            <p>
              {moment(job.postedAt).startOf("day").fromNow()} |{" "}
              {job.applicantsCount} Applicants{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Button className={styles.bookmark} aria-label="Save Job">
          Apply Now
        </Button>
        <img src={Bookmark} alt="Bookmark" style={{ cursor: "pointer" }} />
      </div>
    </article>
  );
};

export default JobCard;
