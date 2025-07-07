import styles from "./button.module.css"

export default function Button({children,style="primary",onClick})
{
    return(
        <button type="submit" className={`${styles.button} ${styles[style]}`}  onClick={onClick}>
              {children}
        </button>
    )
}