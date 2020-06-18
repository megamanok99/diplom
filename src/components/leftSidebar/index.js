import React from 'react';
import s from './leftSidebar.module.scss';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

export const LeftSidebar=()=>(
    <div className="feature text-right">
      <p className={s.text}>Повышение уровня автоматизированного проектирования печатных плат при формировании вариантов установок электронных компонентов на печатные платы.</p>
      <div  className={s.text} ><p>Список последних обновлений</p></div>
      <Button color="primary" id="toggler" style={{ marginTop: '1rem'  }}>
        Обновление 1.0.0
      </Button>
     
        <Card>
          <CardBody className={s.cardBody}>
            Добавлен модуль сравнения спецификации и Перечня элементов
          </CardBody>
        </Card>
      
    </div>
    
  );
export default LeftSidebar;