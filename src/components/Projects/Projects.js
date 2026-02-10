import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ubicaribeImage from "../../Assets/Projects/ubicaribeImage.png";
import emotion from "../../Assets/Projects/emotion.png";
import v from "../../Assets/Projects/v.png";
import trancaImage from "../../Assets/Projects/trancaImage.png";
import suicide from "../../Assets/Projects/suicide.png";
import home from "../../Assets/Projects/Home.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis Proyectos <strong className="purple">Recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          
  <ProjectCard
    imgPath={trancaImage} // Aquí pondrías la imagen de tu proyecto
    isBlog={false}
    title="La Tranca Web Site"
    description="Página web para una cafetería en Ciénaga, Magdalena. Cuenta con landing page, menú interactivo, sistema de pedidos con carrito, registro y login de usuarios, pagos en línea y un dashboard de administración para gestionar productos y pedidos."
    ghLink="https://github.com/monocuco01/La-Tranca-website" // Pon tu link real de GitHub
    demoLink="https://la-tranca-website-jmzn.vercel.app/" // Pon tu link de demo si lo tienes
  />


          </Col>

          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={home} // Imagen del proyecto
    isBlog={false}
    title="SISGA SAS"
    description="Página web oficial de SISGA SAS, una compañía privada. El sitio proporciona información corporativa, servicios, noticias y contacto. Proyecto desarrollado con enfoque en diseño profesional, usabilidad y presentación de la información de manera clara. Debido a su carácter privado, el código fuente no está disponible públicamente."
  />
</Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={v} // aquí va una captura o mockup de la plataforma
    isBlog={false}
    title="Devoraya"
    description="Plataforma de domicilios en Ciénaga, desarrollada como proyecto propio desde el plan de negocios hasta la arquitectura y desarrollo web. Incluye diseño de experiencia de usuario, planificación de funcionalidades, desarrollo full stack y gestión integral de la plataforma. Proyecto completo donde se implementaron todas las fases, desde la concepción hasta la entrega."
    demoLink="https://devoraya-pf.vercel.app"
  />
</Col>


          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={ubicaribeImage} // captura o mockup de la web de la universidad
    isBlog={false}
    title="Ubicaribe"
    description="Sitio web oficial de la Universidad del Caribe (Ubicaribe). Proyecto universitario desarrollado para mostrar información institucional, noticias, servicios académicos y recursos para estudiantes y visitantes. Incluye diseño responsivo y navegación intuitiva."
    demoLink="https://www.ubicaribe.edu.co" // si está en línea
  />
</Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
