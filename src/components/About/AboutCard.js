import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! Soy <span className="purple">Hector Solano</span>,{" "}
            <span className="purple">Desarrollador Full Stack</span> e Ingeniero
            de Sistemas en formación.
            <br />
            Cuento con más de <span className="purple">4 años de experiencia</span>{" "}
            participando activamente en el desarrollo de soluciones tecnológicas
            tanto en frontend como en backend.
            <br />
            <br />
            Tengo certificación por la{" "}
            <span className="purple">University of Toronto</span> y una sólida
            base en soporte técnico, mantenimiento de hardware e infraestructura
            tecnológica.
            <br />
            <br />
            Fuera del desarrollo de software, disfruto actividades que potencian
            mi creatividad y aprendizaje continuo:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Desarrollo de proyectos personales 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender nuevas tecnologías 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Optimizar procesos y soluciones técnicas ⚙️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Construir soluciones que generen impacto real.”
          </p>
          <footer className="blockquote-footer">Hector Solano</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
