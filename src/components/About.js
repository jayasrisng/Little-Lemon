import styles from "../styles/About.module.css";


const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        {/* Text */}
        <div className={styles.aboutText}>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            expedita voluptatem asperiores sapiente eveniet excepturi? Dolore
            aperiam doloribus ducimus natus porro, qui quam culpa quae corrupti
            perspiciatis. Illum possimus blanditiis et in accusantium. Placeat,
            hic! Tempore laboriosam dignissimos eum commodi! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Est quibusdam nulla modi
            eveniet voluptatem id. Earum vitae enim quisquam magni? Vero ipsa
            hic quaerat voluptatibus illo laborum fuga alias nemo, deserunt sunt
            voluptatem fugit vel et esse quisquam. Porro ex nihil magni nam
            necessitatibus nemo, reiciendis distinctio ratione dignissimos fugit
            officiis accusamus soluta sequi dolorem vitae, quos dicta cum et!
          </p>
        </div>

        {/* Photos of Adrian & Mario */}
        <div className={styles.aboutPhotos}>
          <img src="mario-and-adrian-1.jpg" alt="" />
          <img src="mario-and-adrian-2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
