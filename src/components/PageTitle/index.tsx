import classNames from 'classnames';
import React from 'react';

import s from './index.scss';

interface Props {
  height?: string;
  title?: string;
  desc?: string;
  className?: string;
}

const PageTitle: React.FC<Props> = ({
  height = '440px',
  title,
  desc,
  className,
  children
}) => {
  return (
    <div style={{ height }} className={classNames(s.box, className)}>
      <div className={s.title}>{title}</div>
      {desc && <div className={s.desc}>{desc}</div>}
      {children}
    </div>
  );
};

export default PageTitle;
