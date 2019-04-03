import React from "react";

import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { geoPath, geoAlbers } from "d3-geo";
import { feature } from "topojson";

import zipcode from "../zipcode.json";

import MapPath from "./MapPath";

export default class ChoroplethMap extends React.Component {

  render() {
    const width = 1110,
      height = 600;

    const color = scaleOrdinal(schemeCategory10);

    const zipunits = feature(zipcode, zipcode.objects.ZIP_CODE_040114);

    const gprojection = geoAlbers()
      .center([0, 40.7])
      .rotate([74, 0])
      .translate([width / 2, height / 2])
      .scale(75000);

    const gPath = geoPath().projection(gprojection);

    return (
      <svg width={width} height={height}>
        {zipunits.features.map((d, i) => (
          <MapPath key={i} data={d} path={gPath(d)} color={color(i)} />
        ))}
      </svg>
    );
  }
}
