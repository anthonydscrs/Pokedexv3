import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <>
      <div className="loading-page">
        <div className="dummy-header" />
        <div className={styles.loadingContent}>
          <h3 className={styles.loadingTitle}>Loading...</h3>
          <p className={styles.loadingText}>Please wait !</p>
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3pmanFoNjF3eHgzemFrbDdpdGt4aGplcHAzbzZ2NDcxOGxodjR6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/oaCM98FQcTl5qbs4kb/giphy.gif"
            alt="Please wait"
            className={styles.waitImg}
          />
        </div>
      </div>
    </>
  );
}
