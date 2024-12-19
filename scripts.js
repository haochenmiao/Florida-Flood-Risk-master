console.log("Library Data: ", library);

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
    layer.bindPopup(feature.properties.SchoolName);
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
    layer.bindPopup(feature.properties.Branch);
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
    layer.bindPopup("<b>" + "Social Vulnerability: " + "</b>"  + (rpl*100).toFixed(2) + " percentile" + "<br>" + "Coordinates: " + JSON.stringify(feature.geometry.coordinates));
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
    layer.bindPopup("<b>" + "Social Vulnerability: " + "</b>"  + (rpl*100).toFixed(2) + " percentile" + "<br>" + "Coordinates: " + JSON.stringify(feature.geometry.coordinates));
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
    layer.bindPopup("<b>" + "Social Vulnerability: " + "</b>"  + (rpl*100).toFixed(2) + " percentile" + "<br>" + "Coordinates: " + JSON.stringify(feature.geometry.coordinates));
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
    layer.bindPopup("<b>" + "Social Vulnerability: " + "</b>"  + (rpl*100).toFixed(2) + " percentile" + "<br>" + "Coordinates: " + JSON.stringify(feature.geometry.coordinates));
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
    layer.bindPopup("<b>" + "Social Vulnerability: " + "</b>"  + (rpl*100).toFixed(2) + " percentile" + "<br>" + "Coordinates: " + JSON.stringify(feature.geometry.coordinates));
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

var legend = L.control.Legend({
  position: "bottomleft",
  title: "Flood Classification",
  opacity: 0.8,
  legends: [
    {
      label: "Surface Water",
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