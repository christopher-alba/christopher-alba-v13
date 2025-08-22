import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import worldData from "./world-110m.json";

const Globe = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!worldData || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const container = svgRef.current.parentElement;
    let width = container?.clientWidth || 800;
    let height = container?.clientHeight || 600;

    const baseScale = Math.min(width, height) / 2.5; // responsive scale
    const hoverScale = baseScale * 1.1;

    const projection = d3
      .geoOrthographic()
      .scale(baseScale)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath(projection);

    const countries = feature(
      worldData as unknown as Topology,
      (worldData as any).objects.countries
    ) as unknown as GeoJSON.FeatureCollection;

    // Sphere
    svg
      .append("path")
      .datum({ type: "Sphere" })
      .attr("d", path as any)
      .attr("fill", "#172c49") // soft blue (Tailwind sky-100)
      .attr("stroke-width", 0.8);

    // Countries
    const colorScale = d3
      .scaleOrdinal<string>()
      .range(["#30684c", "#49614f", "#678a73", "#406357", "#50645f"]); // pastel palette

    svg
      .selectAll("path.country")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", path as any)
      .attr("fill", (d: any) => (d.id === "NZ" ? "#86efac" : colorScale(d.id)))
      .attr("stroke", (d: any) => (d.id === "NZ" ? "#86efac" : colorScale(d.id))) // slate border
      .attr("stroke-width", 0.3)
      .attr("stroke-dasharray", "2,2") // dashed border
      .attr("stroke-opacity", 0.5);

    let rotate: [number, number, number] = [0, 0, 0];

    // Drag behavior
    const drag = d3.drag().on("drag", (event: any) => {
      rotate[0] += event.dx * 0.5;
      rotate[1] -= event.dy * 0.5;
      projection.rotate(rotate);
      svg.selectAll("path").attr("d", path as any);
    });
    (svg as unknown as d3.Selection<Element, unknown, null, undefined>).call(
      drag
    );

    // Rotation animation
    let animationId: number;
    const rotateGlobe = () => {
      rotate[0] += 0.1;
      projection.rotate(rotate);
      svg.selectAll("path").attr("d", path as any);

      animationId = requestAnimationFrame(rotateGlobe);
    };
    rotateGlobe();

    // Hover scaling with smooth transition
    svg
      .on("mouseenter", () => {
        svg
          .selectAll("path.country")
          .transition()
          .duration(500)
          .attr("fill", (d: any) => (d.id === "NZ" ? "#4ade80" : "#5B75A5"));
        d3.transition()
          .duration(500)
          .tween("scale", () => {
            const i = d3.interpolateNumber(projection.scale(), hoverScale);
            return (t) => {
              projection.scale(i(t));
              svg.selectAll("path").attr("d", path as any);
            };
          });
      })
      .on("mouseleave", () => {
        svg
          .selectAll("path.country")
          .transition()
          .duration(500)
          .attr("fill", (d: any) =>
            d.id === "NZ" ? "#86efac" : colorScale(d.id)
          );
        d3.transition()
          .duration(500)
          .tween("scale", () => {
            const i = d3.interpolateNumber(projection.scale(), baseScale);
            return (t) => {
              projection.scale(i(t));
              svg.selectAll("path").attr("d", path as any);
            };
          });
      });

    // Handle window resize
    const handleResize = () => {
      width = container?.clientWidth || 800;
      height = container?.clientHeight || 600;

      projection
        .translate([width / 2, height / 2])
        .scale(Math.min(width, height) / 2.5);

      svg.attr("viewBox", `0 0 ${width} ${height}`);
      svg.selectAll("path").attr("d", path as any);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="earth"
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: "10rem",
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{ cursor: "default", zIndex: 9000, position: "relative" }}
        onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
        onMouseLeave={(e) => (e.currentTarget.style.cursor = "default")}
      ></svg>
    </div>
  );
};

export default Globe;
