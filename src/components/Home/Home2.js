import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/icono.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy <b className="purple">Desarrollador Full Stack</b> e Ingeniero
              de Sistemas en formación, con{" "}
              <b className="purple">4 años de experiencia</b> participando de
              manera integral en todo el ciclo de vida tecnológico.
              <br />
              <br />
              Cuento con certificación por la{" "}
              <b className="purple">University of Toronto</b> y combino el
              desarrollo de software escalable con una sólida base técnica en{" "}
              <b className="purple">
                soporte, mantenimiento de hardware e infraestructura
              </b>
              tecnológica, incluyendo computadores e impresoras.
              <br />
              <br />
              Trabajo principalmente con
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Node.js y tecnologías web modernas
                </b>
              </i>
              , desarrollando soluciones tanto en frontend como en backend.
              <br />
              <br />
              Además, mi formación en{" "}
              <b className="purple">Marketing Digital</b> me permite crear
              soluciones técnicas alineadas con los{" "}
              <b className="purple">objetivos de negocio</b>, garantizando la
              operatividad y eficiencia de los activos tecnológicos de la
              empresa.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
