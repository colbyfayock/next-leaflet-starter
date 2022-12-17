import { forwardRef } from 'react';

import styles from './Section.module.scss';

const Section = forwardRef(function Section(props, ref) {
  const { children, className, backgroundColor, ...rest } = props;

  let sectionClassName = styles.section;

  if (className) {
    sectionClassName = `${sectionClassName} ${className}`;
  }

  return (
    <section ref={ref} className={sectionClassName} data-background-color={backgroundColor} {...rest}>
      {children}
    </section>
  );
});

export default Section;
