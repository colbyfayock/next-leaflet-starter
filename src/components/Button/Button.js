import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({children, href, className, ...rest}) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  const buttonProps = {
    className: buttonClassName,
    ...rest,
  };

  if (href) {
    if ( href.startsWith('/') ) {
      return (
        <Link href={href} {...buttonProps}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} {...buttonProps}>
        {children}
      </a>
    );
  }

  return (
    <button {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
