import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import { ButtonVariant } from "./Button.constants";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = ButtonVariant.Default,
  children,
  ...rest
}: IButton) {
  let buttonClass = styles.buttonBase;

  switch (variant) {
    case ButtonVariant.Default:
      buttonClass += ` ${styles.buttonDefault}`; //cuidado com espaço
      break;
    case ButtonVariant.Disabled:
      buttonClass += ` ${styles.buttonDisabled}`;
      break;
    case ButtonVariant.Outlined:
      buttonClass += ` ${styles.buttonOutlined}`;
      break;
    case ButtonVariant.Text:
      buttonClass += ` ${styles.buttonText}`; //teste
      break;
  }

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}
