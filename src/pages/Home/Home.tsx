import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import JobCard from "../../components/JobCard/JobCard";
import profileImage from "../../assets/profile.png";
import coverImage from "../../assets/cover.jpg";
import styles from "./Home.module.scss";
import jobsMock from "./jobs.mock";
import SearchBar from "../../components/SearchBar/SearchBar";
import type { Job } from "../../types/job";

const Home: React.FC = () => {
  const promoted = jobsMock.filter((j) => j.promoted);
  const recommended = jobsMock.slice(0, 8);

  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <ProfileCard
          name="Albert Flores"
          title=" Senior Product Designer | UI/UX Designer | Graphic Designer | Web…"
          location="Clinton, Maryland"
          avatarSrc={profileImage}
          coverImage={coverImage}
        />
      </aside>

      <section className={styles.center}>
        <div className={styles.hero}>
          <h1>
            Find your Dream Job, <span>Albert!</span>
          </h1>
          <h2>
            Explore the latest job openings and apply for the best opportunities
            available today!
          </h2>
        </div>
        <SearchBar
          onSearch={(query, location, jobType) => {
            console.log(query, location, jobType);
          }}
        />
        <div>
          <h2>Featured Jobs</h2>
          <div className={styles.grid}>
            {promoted.map((job: Job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
        <div>
          <h2>Recommended Jobs</h2>
          <div className={styles.grid}>
            {recommended.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
        <div>
          <h2>Latest Jobs</h2>
          <div className={styles.grid}>
            {recommended.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
