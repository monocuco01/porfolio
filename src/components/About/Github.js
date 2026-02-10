import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Días que <strong className="purple">Programo</strong>
      </h1>
      <GitHubCalendar
        username="monocuco01" // tu GitHub
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
        labels={{
          months: [
            "Ene", "Feb", "Mar", "Abr", "May", "Jun",
            "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
          ],
          weekdays: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
          totalCount: "{{count}} contribuciones en {{year}}",
          tooltip: "{{count}} contribuciones el {{date}}",
          legend: {
            less: "Menos",
            more: "Más"
          }
        }}
      />
    </Row>
  );
}

export default Github;
