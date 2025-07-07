import styles from "./button.module.css";

export default function Button({ children, style = "primary", onClick, type = "button" }) {
  return (
    <button
      type={type} 
      className={`${styles.button} ${styles[style]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
