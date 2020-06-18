import React,{Component} from 'react';
import { Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import img from './img.jpg';
import s from './news.module.scss';


class News extends Component {

  render(){
   
    return(
      <Row>
<Col> 
    <div>
      <Card className={s.card}>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody className={s.card}>
          <CardTitle className={s.text}>Модуль сравнения ПЭ и спецификации</CardTitle>
          <CardSubtitle className={s.textlink}>Документация</CardSubtitle>
          <CardText className={s.text}>Узнайте подробнее о работе модуля сравнения спецификации и перечня элементов.</CardText>
          <Button color="info" className={s.button}>Прочитать</Button>
        </CardBody>
      </Card>
    </div>
    </Col>
<Col>
<div>
      <Card className={s.card}>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody className={s.card}>
          <CardTitle className={s.text}>Модуль сравнения ПЭ и спецификации</CardTitle>
          <CardSubtitle className={s.textlink}>Документация</CardSubtitle>
          <CardText className={s.text}>Узнайте подробнее о работе модуля сравнения спецификации и перечня элементов.</CardText>
          <Button color="info" className={s.button}>Прочитать</Button>
        </CardBody>
      </Card>
    </div>
</Col>
<Col>
<div>
      <Card className={s.card}>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody className={s.card}>
          <CardTitle className={s.text}>Модуль сравнения ПЭ и спецификации</CardTitle>
          <CardSubtitle className={s.textlink}>Документация</CardSubtitle>
          <CardText className={s.text}>Узнайте подробнее о работе модуля сравнения спецификации и перечня элементов.</CardText>
          <Button color="info" className={s.button}>Прочитать</Button>
        </CardBody>
      </Card>
    </div>
</Col>
<Col>
<div>
      <Card className={s.card}>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody className={s.card}>
          <CardTitle className={s.text}>Модуль сравнения ПЭ и спецификации</CardTitle>
          <CardSubtitle className={s.textlink}>Документация</CardSubtitle>
          <CardText className={s.text}>Узнайте подробнее о работе модуля сравнения спецификации и перечня элементов.</CardText>
          <Button color="info" className={s.button}>Прочитать</Button>
        </CardBody>
      </Card>
    </div>
</Col>
</Row>
    )
  }
}
  export default News;