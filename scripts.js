var toggleButton = document.getElementById('button');
var descriptionDiv = document.getElementById('description');

toggleButton.addEventListener('click', function() {
  if (descriptionDiv.style.display === 'none') {
    descriptionDiv.style.display = 'block';
    toggleButton.style.backgroundColor = '#fff';
    toggleButton.style.color = 'rgb(88, 153, 196)';
    document.getElementById('map').style.height = '80%';
  } else {
    descriptionDiv.style.display = 'none';
    toggleButton.style.backgroundColor = 'rgb(88, 153, 196)';
    toggleButton.style.color = '#fff';
    document.getElementById('map').style.height = '95%';
  }
});

const accessToken = 'pk.eyJ1IjoiaGFvY2gwNDIzIiwiYSI6ImNtNHBibDJsazB4bHYya29yZnVhYmRicGoifQ.HzUzkEhGJf-t2lhHTonusg';

var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:'mapbox/light-v10',
    accessToken: accessToken,
    tileSize: 512,
    zoomOffset: -1,
});

const map = L.map('map', { layers: [light] });
map.setView([26.562853, -81.949533], 13); // Cape Coral, Florida


var schoolIcon = L.divIcon({
  className: 'fa school-icon',
  html: '<i class="fa-sharp fa-solid fa-school"></i>'
});

var ySchools = L.geoJSON(schools, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: schoolIcon });
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name);
  }
});

var fireIcon = L.divIcon({
  className: 'fa fire-icon',
  html: '<i class="fa-solid fa-fire"></i>'
});

var yFire = L.geoJSON(fire, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: fireIcon });
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.NAME_OF_FA);
  }
});

var libraryIcon = L.divIcon({
  className: 'fa-library-icon',
  html: '<i class="fa-solid fa-book"></i>',
});

var yLibraries = L.geoJSON(library, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: libraryIcon });
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
});

var yBoundary = L.geoJSON(boundary, {
    style: {
        fillOpacity: 0,
        color: 'black',
        weight: 0
      },
      interactive: false
});

var ySVI_A = L.geoJSON(SVI, {
  filter: function(feature, layer) {
    return feature.properties.RPL_THEMES >= 0.0443 && feature.properties.RPL_THEMES <= 0.2326;
  },
  style: {
    fillColor: '#6bb955',
    fillOpacity: 0.5,
    color: 'white',
    weight: 0
  },
  onEachFeature: function(feature, layer) {
    var rpl = feature.properties.RPL_THEMES;
    layer.bindPopup("<b>Social Vulnerability: </b>" + (rpl * 100).toFixed(2) + " percentile");
  }
}); //checked

var ySVI_B = L.geoJSON(SVI, {
  filter: function(feature, layer) {
    return feature.properties.RPL_THEMES >= 0.2327 && feature.properties.RPL_THEMES <= 0.5236;
  },
  style: {
    fillColor: '#d2b60d',
    fillOpacity: 0.5,
    color: 'white',
    weight: 0
  },
  onEachFeature: function(feature, layer) {
    var rpl = feature.properties.RPL_THEMES;
    layer.bindPopup("<b>Social Vulnerability: </b>" + (rpl * 100).toFixed(2) + " percentile");
  }
}); //checked

var ySVI_C = L.geoJSON(SVI, {
  filter: function(feature, layer) {
    return feature.properties.RPL_THEMES >= 0.5237 && feature.properties.RPL_THEMES <= 0.7742;
  },
  style: {
    fillColor: '#f1861b',
    fillOpacity: 0.5,
    color: 'white',
    weight: 0
  },
  onEachFeature: function(feature, layer) {
    var rpl = feature.properties.RPL_THEMES;
    layer.bindPopup("<b>Social Vulnerability: </b>" + (rpl * 100).toFixed(2) + " percentile");
  }
}); //checked

var ySVI_D = L.geoJSON(SVI, {
  filter: function(feature, layer) {
    return feature.properties.RPL_THEMES >= 0.7743 && feature.properties.RPL_THEMES <= 0.9303;
  },
  style: {
    fillColor: '#de4917',
    fillOpacity: 0.5,
    color: 'white',
    weight: 0
  },
  onEachFeature: function(feature, layer) {
    var rpl = feature.properties.RPL_THEMES;
    layer.bindPopup("<b>Social Vulnerability: </b>" + (rpl * 100).toFixed(2) + " percentile");
  }
}); //checked

var ySVI_E = L.geoJSON(SVI, {
  filter: function(feature, layer) {
    return feature.properties.RPL_THEMES >= 0.9304 && feature.properties.RPL_THEMES <= 1;
  },
  style: {
    fillColor: '#8a1a15',
    fillOpacity: 0.5,
    color: 'white',
    weight: 0
  },
  onEachFeature: function(feature, layer) {
    var rpl = feature.properties.RPL_THEMES;
    layer.bindPopup("<b>Social Vulnerability: </b>" + (rpl * 100).toFixed(2) + " percentile");
  }
}); //checked

var yRoads = L.geoJSON(roads, {
    style: {
        color: 'white',
        weight: 1
      },
      interactive: false
}); //checked

var yFloods_A = L.geoJSON(floods, {
  filter: function(feature, layer) {
    return feature.properties.FLD_ZONE === 'A';
  },
  style: {
    fillColor: '#00BDFF',
    fillOpacity: 0.5,
    weight: 0
  },
  interactive: false
}); //checked

var yFloods_AE = L.geoJSON(floods, {
  filter: function(feature, layer) {
    return feature.properties.FLD_ZONE === 'AE' && feature.properties.ZONE_SUBTY === 'null';
  },
  style: {
    fillColor: '#318BFF',
    fillOpacity: 0.5,
    weight: 0
  },
  interactive: false
}); //checked

var yFloods_AE_FLOODWAY = L.geoJSON(floods, {
  filter: function(feature, layer) {
    return feature.properties.FLD_ZONE === 'AE' && feature.properties.ZONE_SUBTY === 'FLOODWAY';
  },
  style: {
    fillColor: '#004DA8',
    fillOpacity: 0.5,
    weight: 0
  },
  interactive: false
}); //checked

var yFloods_D = L.geoJSON(floods, {
  filter: function(feature, layer) {
    return feature.properties.FLD_ZONE === 'D';
  },
  style: {
    fillColor: '#97BFC0',
    fillOpacity: 0.5,
    weight: 0
  },
  interactive: false
}); //checked

var yFloods_X_02PCT = L.geoJSON(floods, {
  filter: function(feature, layer) {
    return feature.properties.FLD_ZONE === 'X' && feature.properties.ZONE_SUBTY === '0.2 PCT ANNUAL CHANCE FLOOD HAZARD';
  },
  style: {
    fillColor: '#1ED5EA',
    fillOpacity: 0.5,
    weight: 0
  },
  interactive: false
}); //checked

var ySurfaceWater = L.geoJSON(surfaceWater, {
    style: {
        opacity: 0.5,
        color: "#002673",
    },
    interactive: false
}); //checked

const boundaryGroup = L.layerGroup([yBoundary], {
}).addTo(map);
const sviGroup = L.layerGroup([ySVI_A,ySVI_B,ySVI_C,ySVI_D,ySVI_E], {
}).addTo(map);
const roadGroup = L.layerGroup([yRoads], {
}).addTo(map);
const floodGroup = L.layerGroup([yFloods_A,yFloods_AE,yFloods_AE_FLOODWAY,yFloods_D,yFloods_X_02PCT, ySurfaceWater], {
}).addTo(map);
const fireGroup = L.layerGroup([yFire], {
}).addTo(map);
const schoolGroup = L.layerGroup([ySchools], {
}).addTo(map);
const libraryGroup = L.layerGroup([yLibraries], {
}).addTo(map);

var overlayMaps = {
    "Flooding Classes": floodGroup,
    "Social Vulnerability Index": sviGroup,
    "Roads Overlay": roadGroup,
    "Fire Stations": fireGroup,
    "Schools": schoolGroup,
    "Libraries": libraryGroup
};
L.control.layers(null, overlayMaps).addTo(map);

sviGroup.eachLayer(function(layer) {
  layer.on('add', function() {
    layer.bringToBack();
  });
});

map.on('overlayadd', function (eventLayer) {
    if (eventLayer.layer === sviGroup) {
        sviGroup.eachLayer(function(layer) {
            layer.bringToBack();
          });
        boundaryGroup.eachLayer(function(layer) {
            layer.bringToBack();
            layer.setStyle({
                fillOpacity: 0});
        });
    } else if (eventLayer.layer === roadGroup) {
        sviGroup.eachLayer(function(layer) {
          layer.setStyle({
              weight: 0
          });
      });
    }
  });
map.on('overlayremove', function (eventLayer) {
    if (eventLayer.layer === sviGroup) {
        boundaryGroup.eachLayer(function(layer) {
            layer.setStyle({
                fillColor: "#decf78",
                fillOpacity: 0.3});
        });
    }
    else if (eventLayer.layer === roadGroup) {
        sviGroup.eachLayer(function(layer) {
            layer.setStyle({
                weight: 2
            });
        });
    }
});

const scale = L.control.scale({
  imperial: true,
  maxWidth: 200,
  position: 'bottomright',
  updateWhenIdle: true,
  metric: false,
  subdivisions: 3
}).addTo(map);


// Mapbox GL JS 3D Map Initialization
const map3DContainer = document.createElement("div");
map3DContainer.id = "map3D";
map3DContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: none; /* Initially hidden */
    z-index: 999; /* Ensures it appears above other elements */
    background-color: white;
`;


// Create a legend container for the 3D map
const legend3DContainer = document.createElement("div");
legend3DContainer.id = "legend3D";
legend3DContainer.style.cssText = `
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    font-family: Arial, sans-serif;
    font-size: 12px;
    line-height: 1.5;
    display: none; /* Initially hidden */
`;

// Add the legend content
legend3DContainer.innerHTML = `
  <b>Social Vulnerability Index</b><br>
  <div style="display: flex; align-items: center; margin-bottom: 5px;">
    <div style="width: 20px; height: 20px; background-color: #6bb955; margin-right: 10px;"></div>
    Least Vulnerable
  </div>
  <div style="display: flex; align-items: center; margin-bottom: 5px;">
    <div style="width: 20px; height: 20px; background-color: #d2b60d; margin-right: 10px;"></div>
    Less Vulnerable
  </div>
  <div style="display: flex; align-items: center; margin-bottom: 5px;">
    <div style="width: 20px; height: 20px; background-color: #f1861b; margin-right: 10px;"></div>
    Average Vulnerability
  </div>
  <div style="display: flex; align-items: center; margin-bottom: 5px;">
    <div style="width: 20px; height: 20px; background-color: #de4917; margin-right: 10px;"></div>
    More Vulnerable
  </div>
  <div style="display: flex; align-items: center; margin-bottom: 5px;">
    <div style="width: 20px; height: 20px; background-color: #8a1a15; margin-right: 10px;"></div>
    Most Vulnerable
  </div>
`;

// Append the legend to the body
document.body.appendChild(legend3DContainer);


document.body.appendChild(map3DContainer);

const map3D = new mapboxgl.Map({
  container: "map3D",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-81.949533, 26.562853],
  zoom: 13,
  pitch: 45,
  bearing: 0,
  accessToken: accessToken,
});

map3D.on("load", function () {
  console.log("Mapbox 3D map loaded successfully.");

  // Add SVI GeoJSON as a source
  map3D.addSource("svi-data", {
    type: "geojson",
    data: SVI,
  });

  // Add 3D extrusion layer
  map3D.addLayer({
    id: "svi-extrusion",
    type: "fill-extrusion",
    source: "svi-data",
    paint: {
      "fill-extrusion-color": [
        "step",
        ["get", "RPL_THEMES"],
        "#6bb955", // Least vulnerable
        0.2326,
        "#d2b60d", // Less vulnerable
        0.5236,
        "#f1861b", // Average vulnerability
        0.7742,
        "#de4917", // More vulnerable
        0.9303,
        "#8a1a15", // Most vulnerable
      ],
      "fill-extrusion-height": [
        "interpolate",
        ["linear"],
        ["get", "RPL_THEMES"],
        0,
        0,
        1,
        10000, // Max height for 100 percentile
      ],
      "fill-extrusion-opacity": 0.8,
    },
    layout: {
      visibility: "visible",
    },
  });

  // Add click event for popups
  map3D.on("click", "svi-extrusion", function (e) {
    if (!e.features || e.features.length === 0) {
      console.warn("No feature clicked.");
      return;
    }
    const rplThemes = e.features[0].properties.RPL_THEMES;
    const sviPercentile = (rplThemes * 100).toFixed(2);

    new mapboxgl.Popup({ offset: 25 })
      .setLngLat(e.lngLat)
      .setHTML(
        `<div>
           <b>Social Vulnerability:</b> ${sviPercentile} percentile
         </div>`
      )
      .addTo(map3D);
  });

  // Add zoom and rotate controls to the 3D map
  const navigationControls = new mapboxgl.NavigationControl({
    showCompass: true, // Enables the rotate/compass button
    showZoom: true,    // Enables the zoom in/out buttons
    visualizePitch: true, // Shows the pitch while rotating
  });

  // Add the navigation controls to the top-right corner of the 3D map
  map3D.addControl(navigationControls, 'bottom-right');

  // Style for the controls container
  const controlsContainerStyle = `
    position: absolute;
    top: 80px; /* Adjust to avoid overlapping with Toggle 3D button */
    right: 10px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  // Apply custom styles to navigation controls
  document.querySelector('.mapboxgl-ctrl-top-right').style.cssText = controlsContainerStyle;

  console.log("Zoom and rotate controls added.");
});


  // Change the cursor to a pointer when over the SVI polygons
  map3D.on("mouseenter", "svi-extrusion", function () {
    map3D.getCanvas().style.cursor = "pointer";
  });

  // Reset the cursor to default when leaving the SVI polygons
  map3D.on("mouseleave", "svi-extrusion", function () {
    map3D.getCanvas().style.cursor = "";
  });

  console.log("SVI fill-extrusion layer added.");



// Adjust the button style and position to be below the overlay maps icon on the right
const toggle3DButton = document.createElement("button");
toggle3DButton.innerHTML = "Toggle 3D";
toggle3DButton.style.cssText = `
    position: absolute;
    top: 300px; /* Positioned below the overlay maps icon */
    right: 10px;
    z-index: 1000;
    background: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
`;
document.body.appendChild(toggle3DButton);

let is3D = false;

// Update the Toggle Button Logic to Handle 3D Legend Visibility
toggle3DButton.addEventListener("click", function () {
  is3D = !is3D;

  if (is3D) {
    // Switch to 3D map realm
    document.getElementById("map").style.display = "none";
    map3DContainer.style.display = "block";
    legend3DContainer.style.display = "block"; // Show 3D legend
    map3D.resize(); // Resize the Mapbox 3D map
    toggle3DButton.innerHTML = "Toggle 2D"; // Change text to "Toggle 2D"
    console.log("3D mode activated.");
  } else {
    // Switch back to 2D map realm
    map3DContainer.style.display = "none";
    document.getElementById("map").style.display = "block";
    legend3DContainer.style.display = "none"; // Hide 3D legend
    toggle3DButton.innerHTML = "Toggle 3D"; // Change text back to "Toggle 3D"
    console.log("2D mode activated.");
  }
});



var legend = L.control.Legend({
  position: "bottomleft",
  title: "Flood Classification",
  opacity: 0.8,
  legends: [
    {
      label: "Water Areas",
      type: "polyline",
      layers: ySurfaceWater,
      color: "#002673",
      fill: true,
      fillOpacity: "0.5"
    },
    {
      label: "Floodway",
      type: "rectangle",
      layers: yFloods_AE_FLOODWAY,
      color: "#004DA8",
      fill: true,
      fillOpacity: "0.5"
    },
    {
      label: "Floodway Fringe",
      type: "rectangle",
      layers: yFloods_AE,
      color: "#318BFF",
      fill: true,
      fillOpacity: "0.5"
    },
    {
      label: "1% Annual Flood Chance",
      type: "rectangle",
      layers: yFloods_A,
      color: "#00BDFF",
      fill: true,
      fillOpacity: "0.5"
    },
    {
      label: "0.2% Annual Flood Chance",
      type: "rectangle",
      layers: yFloods_X_02PCT,
      color: "#1ED5EA",
      fill: true,
      fillOpacity: "0.5"
    },
    {
      label: "Flood Hazard Unknown",
      type: "rectangle",
      layers: yFloods_D,
      color: "#97BFC0",
      fill: true,
      fillOpacity: "0.5"
    }
]
}).addTo(map);

var legend2 = L.control.Legend({
  position: "bottomright",
  title: "Social Vulnerability Index",
  opacity: 0.8,
  legends: [
    {
      label: "Least Vulnerable",
      type: "rectangle",
      layers: ySVI_A,
      color: "#6bb955",
      fill: true,
      fillOpacity: "0.5"
    },
    {
      label: "Less Vulnerable",
      type: "rectangle",
      layers: ySVI_B,
      color: "#d2b60d",
      fill: true,
      fillOpacity: "0.5"
    },
    {
      label: "Average Vulnerability",
      type: "rectangle",
      layers: ySVI_C,
      color: "#f1861b",
      fill: true,
      fillOpacity: "0.5"
    },
    {
      label: "More Vulnerable",
      type: "rectangle",
      layers: ySVI_D,
      color: "#de4917",
      fill: true,
      fillOpacity: "0.5"
    },
    {
      label: "Most Vulnerable",
      type: "rectangle",
      layers: ySVI_E,
      color: "#8a1a15",
      fill: true,
      fillOpacity: "0.5"
    }
  ]
}).addTo(map);