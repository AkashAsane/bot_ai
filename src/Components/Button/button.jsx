import styles from "./button.module.css"

export default function Button({children,style="primary",onClick})
{
    return(
        <button className={`${styles.button} ${styles[style]}`}  onClick={onClick}>
              {children}
        </button>
    )
}