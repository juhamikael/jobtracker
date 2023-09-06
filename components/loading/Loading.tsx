import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className={styles.wheelAndHamster}
      >
        <div className={styles.wheel}></div>
        <div className={styles.hamster}>
          <div className={`${styles.hamsterBody}`}>
            <div className={styles.hamsterHead}>
              <div className={styles.hamsterEar}></div>
              <div className={styles.hamsterEye}></div>
              <div className={styles.hamsterNose}></div>
            </div>
            <div
              className={`${styles.hamsterLimb} ${styles.hamsterLimbFr}`}
            ></div>
            <div
              className={`${styles.hamsterLimb} ${styles.hamsterLimbFl}`}
            ></div>
            <div
              className={`${styles.hamsterLimb} ${styles.hamsterLimbBr}`}
            ></div>
            <div
              className={`${styles.hamsterLimb} ${styles.hamsterLimbBl}`}
            ></div>
            <div className={styles.hamsterTail}></div>
          </div>
        </div>
        <div className={styles.spoke}></div>
      </div>
      <div className="text-center text-xl">Loading data</div>
    </div>
  );
};

export default Loading;
