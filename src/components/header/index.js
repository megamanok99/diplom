import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import s from './Header.module.scss';
const Example = (props) => {
  return (
    <ButtonGroup   className={s.wrap}>
      <Button color="info" size="lg">Модуль 1</Button>
      <Button color="info" size="lg">Модуль 2</Button>
      <Button color="info" size="lg">Модуль 3</Button>
      <Button color="info" size="lg">Модуль 4</Button>
      <Button color="info" size="lg">Модуль 5</Button>
      <Button color="secondary" size="lg">Новости</Button>
      <Button color="secondary" size="lg">Помощь</Button>
      <Button color="secondary" size="lg">Контакты</Button>
    </ButtonGroup>
  );
}

export default Example;