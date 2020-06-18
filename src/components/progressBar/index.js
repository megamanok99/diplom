import React from 'react';
import { Progress } from 'reactstrap';
import s from './progressBar.module.scss';
const ProgressBar = (props) => {
  return (
    <div>
      
      
      <div className={s.text}>Выполнено жизненного цикла</div>
      <div className={s.text1}>Модуль 1 .....................................................................1/1</div>
      <div className={s.text1}>Модуль 2 .....................................................................0/1</div>
      <div className={s.text1}>Модуль 3 .....................................................................0/1</div>
      <div className={s.text1}>Модуль 4 .....................................................................0/1</div>
      <div className={s.progress}>
      <Progress multi >
        
        <Progress bar animated  value="25">25%</Progress>
        
      </Progress>
      </div>
    </div>
  );
};

export default ProgressBar;