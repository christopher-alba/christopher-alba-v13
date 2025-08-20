import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import worldData from "./world-110m.json";

const Globe = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!worldData) return;
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 800;
    const height = 600;

    const baseScale = 250;
    const hoverScale = 300;

    const projection = d3
      .geoOrthographic()
      .scale(baseScale)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath(projection);

    const countries = feature(
      worldData as unknown as Topology,
      (worldData as any).objects.countries
    ) as unknown as GeoJSON.FeatureCollection<
      GeoJSON.Geometry,
      GeoJSON.GeoJsonProperties
    >;

    // Sphere
    svg
      .append("path")
      .datum({ type: "Sphere" })
      .attr("d", path as any)
      .attr("fill", "transparent")
      .attr("stroke", "rgba(255,255,255,0.3)");

    // Countries, NZ in green
    svg
      .selectAll("path.country")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", path as any)
      .attr("fill", (d: any) => (d.id === "NZ" ? "green" : "transparent"))
      .attr("stroke", "white")
      .attr("stroke-width", 1);

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
      rotate[0] += 0.2;
      projection.rotate(rotate);
      svg.selectAll("path").attr("d", path as any);

      animationId = requestAnimationFrame(rotateGlobe);
    };
    rotateGlobe();

    // Hover scaling with smooth transition
    svg
      .on("mouseenter", () => {
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

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="earth">
      <svg
        ref={svgRef}
        width={800}
        height={600}
        style={{ cursor: "default" }} // default
        onMouseEnter={(e) => (e.currentTarget.style.cursor = "pointer")}
        onMouseLeave={(e) => (e.currentTarget.style.cursor = "default")}
      ></svg>
    </div>
  );
};

export default Globe;
