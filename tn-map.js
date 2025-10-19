// // ----- Firebase Setup -----
// const firebaseConfig = {
//   apiKey: "AIzaSyD6mwudmKbqTlpktEuQJygovz8HuBDz03A",
//   authDomain: "leads-cb634.firebaseapp.com",
//   databaseURL: "https://leads-cb634-default-rtdb.firebaseio.com/",
//   projectId: "leads-cb634",
//   storageBucket: "leads-cb634.appspot.com",
//   messagingSenderId: "481988754005",
//   appId: "1:481988754005:web:617706890dfea43efc72dc",
//   measurementId: "G-K86T7XYQYD"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();
// const dbRef = db.ref("countyAssignments");

// //PIN code logic
// const EDIT_PIN = "5689"; // Change "1234" to your secret PIN
// let pinAuthorized = false;

// function requestPin() {
//     if (pinAuthorized) return;
//     let tries = 0;
//     while (tries < 3) {
//         const entered = prompt("Enter PIN to edit county assignments:");
//         if (entered === EDIT_PIN) {
//             pinAuthorized = true;
//             alert("Access granted.");
//             return;
//         } else {
//             tries++;
//             alert("Incorrect PIN.");
//         }
//     }
//     alert("Access denied. You can view the map but cannot edit assignments.");
//     pinAuthorized = false;
// }

// requestPin();
// // ----- Map Data -----
// const states = [
//   {
//     id: "TN",
//     name: "Tennessee",
//     geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json",
//     stateFips: "47",
//     counties: [
//       {name:"Anderson",fips:"001"},{name:"Bedford",fips:"003"},{name:"Benton",fips:"005"},{name:"Bledsoe",fips:"007"},
//       {name:"Blount",fips:"009"},{name:"Bradley",fips:"011"},{name:"Campbell",fips:"013"},{name:"Cannon",fips:"015"},
//       {name:"Carroll",fips:"017"},{name:"Carter",fips:"019"},{name:"Cheatham",fips:"021"},{name:"Chester",fips:"023"},
//       {name:"Claiborne",fips:"025"},{name:"Clay",fips:"027"},{name:"Cocke",fips:"029"},{name:"Coffee",fips:"031"},
//       {name:"Crockett",fips:"033"},{name:"Cumberland",fips:"035"},{name:"Davidson",fips:"037"},{name:"Decatur",fips:"039"},
//       {name:"DeKalb",fips:"041"},{name:"Dickson",fips:"043"},{name:"Dyer",fips:"045"},{name:"Fayette",fips:"047"},
//       {name:"Fentress",fips:"049"},{name:"Franklin",fips:"051"},{name:"Gibson",fips:"053"},{name:"Giles",fips:"055"},
//       {name:"Grainger",fips:"057"},{name:"Greene",fips:"059"},{name:"Grundy",fips:"061"},{name:"Hamblen",fips:"063"},
//       {name:"Hamilton",fips:"065"},{name:"Hancock",fips:"067"},{name:"Hardeman",fips:"069"},{name:"Hardin",fips:"071"},
//       {name:"Hawkins",fips:"073"},{name:"Haywood",fips:"075"},{name:"Henderson",fips:"077"},{name:"Henry",fips:"079"},
//       {name:"Hickman",fips:"081"},{name:"Houston",fips:"083"},{name:"Humphreys",fips:"085"},{name:"Jackson",fips:"087"},
//       {name:"Jefferson",fips:"089"},{name:"Johnson",fips:"091"},{name:"Knox",fips:"093"},{name:"Lake",fips:"095"},
//       {name:"Lauderdale",fips:"097"},{name:"Lawrence",fips:"099"},{name:"Lewis",fips:"101"},{name:"Lincoln",fips:"103"},
//       {name:"Loudon",fips:"105"},{name:"McMinn",fips:"107"},{name:"McNairy",fips:"109"},{name:"Macon",fips:"111"},
//       {name:"Madison",fips:"113"},{name:"Marion",fips:"115"},{name:"Marshall",fips:"117"},{name:"Maury",fips:"119"},
//       {name:"Meigs",fips:"121"},{name:"Monroe",fips:"123"},{name:"Montgomery",fips:"125"},{name:"Moore",fips:"127"},
//       {name:"Morgan",fips:"129"},{name:"Obion",fips:"131"},{name:"Overton",fips:"133"},{name:"Perry",fips:"135"},
//       {name:"Pickett",fips:"137"},{name:"Polk",fips:"139"},{name:"Putnam",fips:"141"},{name:"Rhea",fips:"143"},
//       {name:"Roane",fips:"145"},{name:"Robertson",fips:"147"},{name:"Rutherford",fips:"149"},{name:"Scott",fips:"151"},
//       {name:"Sequatchie",fips:"153"},{name:"Sevier",fips:"155"},{name:"Shelby",fips:"157"},{name:"Smith",fips:"159"},
//       {name:"Stewart",fips:"161"},{name:"Sullivan",fips:"163"},{name:"Sumner",fips:"165"},{name:"Tipton",fips:"167"},
//       {name:"Trousdale",fips:"169"},{name:"Unicoi",fips:"171"},{name:"Union",fips:"173"},{name:"Van Buren",fips:"175"},
//       {name:"Warren",fips:"177"},{name:"Washington",fips:"179"},{name:"Wayne",fips:"181"},{name:"Weakley",fips:"183"},
//       {name:"White",fips:"185"},{name:"Williamson",fips:"187"},{name:"Wilson",fips:"189"}
//     ]
//   },
//   {
//     id: "KY",
//     name: "Kentucky",
//     geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json",
//     stateFips: "21",
//     counties: [
//       {name:"Adair",fips:"001"},{name:"Allen",fips:"003"},{name:"Anderson",fips:"005"},{name:"Ballard",fips:"007"},
//       {name:"Barren",fips:"009"},{name:"Bath",fips:"011"},{name:"Bell",fips:"013"},{name:"Boone",fips:"015"},
//       {name:"Bourbon",fips:"017"},{name:"Boyd",fips:"019"},{name:"Boyle",fips:"021"},{name:"Bracken",fips:"023"},
//       {name:"Breathitt",fips:"025"},{name:"Breckinridge",fips:"027"},{name:"Bullitt",fips:"029"},{name:"Butler",fips:"031"},
//       {name:"Caldwell",fips:"033"},{name:"Calloway",fips:"035"},{name:"Campbell",fips:"037"},{name:"Carlisle",fips:"039"},
//       {name:"Carroll",fips:"041"},{name:"Carter",fips:"043"},{name:"Casey",fips:"045"},{name:"Christian",fips:"047"},
//       {name:"Clark",fips:"049"},{name:"Clay",fips:"051"},{name:"Clinton",fips:"053"},{name:"Crittenden",fips:"055"},
//       {name:"Cumberland",fips:"057"},{name:"Daviess",fips:"059"},{name:"Edmonson",fips:"061"},{name:"Elliott",fips:"063"},
//       {name:"Estill",fips:"065"},{name:"Fayette",fips:"067"},{name:"Fleming",fips:"069"},{name:"Floyd",fips:"071"},
//       {name:"Franklin",fips:"073"},{name:"Fulton",fips:"075"},{name:"Gallatin",fips:"077"},{name:"Garrard",fips:"079"},
//       {name:"Grant",fips:"081"},{name:"Graves",fips:"083"},{name:"Grayson",fips:"085"},{name:"Green",fips:"087"},
//       {name:"Greenup",fips:"089"},{name:"Hancock",fips:"091"},{name:"Hardin",fips:"093"},{name:"Harlan",fips:"095"},
//       {name:"Harrison",fips:"097"},{name:"Hart",fips:"099"},{name:"Henderson",fips:"101"},{name:"Henry",fips:"103"},
//       {name:"Hickman",fips:"105"},{name:"Hopkins",fips:"107"},{name:"Jackson",fips:"109"},{name:"Jefferson",fips:"111"},
//       {name:"Jessamine",fips:"113"},{name:"Johnson",fips:"115"},{name:"Kenton",fips:"117"},{name:"Knott",fips:"119"},
//       {name:"Knox",fips:"121"},{name:"Larue",fips:"123"},{name:"Laurel",fips:"125"},{name:"Lawrence",fips:"127"},
//       {name:"Lee",fips:"129"},{name:"Leslie",fips:"131"},{name:"Letcher",fips:"133"},{name:"Lewis",fips:"135"},
//       {name:"Lincoln",fips:"137"},{name:"Livingston",fips:"139"},{name:"Logan",fips:"141"},{name:"Lyon",fips:"143"},
//       {name:"McCracken",fips:"145"},{name:"McCreary",fips:"147"},{name:"McLean",fips:"149"},{name:"Madison",fips:"151"},
//       {name:"Magoffin",fips:"153"},{name:"Marion",fips:"155"},{name:"Marshall",fips:"157"},{name:"Martin",fips:"159"},
//       {name:"Mason",fips:"161"},{name:"Meade",fips:"163"},{name:"Menifee",fips:"165"},{name:"Mercer",fips:"167"},
//       {name:"Metcalfe",fips:"169"},{name:"Monroe",fips:"171"},{name:"Montgomery",fips:"173"},{name:"Morgan",fips:"175"},
//       {name:"Muhlenberg",fips:"177"},{name:"Nelson",fips:"179"},{name:"Nicholas",fips:"181"},{name:"Ohio",fips:"183"},
//       {name:"Oldham",fips:"185"},{name:"Owen",fips:"187"},{name:"Owsley",fips:"189"},{name:"Pendleton",fips:"191"},
//       {name:"Perry",fips:"193"},{name:"Pike",fips:"195"},{name:"Powell",fips:"197"},{name:"Pulaski",fips:"199"},
//       {name:"Robertson",fips:"201"},{name:"Rockcastle",fips:"203"},{name:"Rowan",fips:"205"},{name:"Russell",fips:"207"},
//       {name:"Scott",fips:"209"},{name:"Shelby",fips:"211"},{name:"Simpson",fips:"213"},{name:"Spencer",fips:"215"},
//       {name:"Taylor",fips:"217"},{name:"Todd",fips:"219"},{name:"Trigg",fips:"221"},{name:"Trimble",fips:"223"},
//       {name:"Union",fips:"225"},{name:"Warren",fips:"227"},{name:"Washington",fips:"229"},{name:"Wayne",fips:"231"},
//       {name:"Webster",fips:"233"},{name:"Whitley",fips:"235"},{name:"Wolfe",fips:"237"},{name:"Woodford",fips:"239"}
//     ]
//   },
//   {
//     id: "MO",
//     name: "Missouri",
//     geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json",
//     stateFips: "29",
//     counties: [
//       {name:"Adair",fips:"001"},{name:"Andrew",fips:"003"},{name:"Atchison",fips:"005"},{name:"Audrain",fips:"007"},
//       {name:"Barry",fips:"009"},{name:"Barton",fips:"011"},{name:"Bates",fips:"013"},{name:"Benton",fips:"015"},
//       {name:"Bollinger",fips:"017"},{name:"Boone",fips:"019"},{name:"Buchanan",fips:"021"},{name:"Butler",fips:"023"},
//       {name:"Caldwell",fips:"025"},{name:"Callaway",fips:"027"},{name:"Camden",fips:"029"},{name:"Cape Girardeau",fips:"031"},
//       {name:"Carroll",fips:"033"},{name:"Carter",fips:"035"},{name:"Cass",fips:"037"},{name:"Cedar",fips:"039"},
//       {name:"Chariton",fips:"041"},{name:"Christian",fips:"043"},{name:"Clark",fips:"045"},{name:"Clay",fips:"047"},
//       {name:"Clinton",fips:"049"},{name:"Cole",fips:"051"},{name:"Cooper",fips:"053"},{name:"Crawford",fips:"055"},
//       {name:"Dade",fips:"057"},{name:"Dallas",fips:"059"},{name:"Daviess",fips:"061"},{name:"DeKalb",fips:"063"},
//       {name:"Dent",fips:"065"},{name:"Douglas",fips:"067"},{name:"Dunklin",fips:"069"},{name:"Franklin",fips:"071"},
//       {name:"Gasconade",fips:"073"},{name:"Gentry",fips:"075"},{name:"Greene",fips:"077"},{name:"Grundy",fips:"079"},
//       {name:"Harrison",fips:"081"},{name:"Henry",fips:"083"},{name:"Hickory",fips:"085"},{name:"Holt",fips:"087"},
//       {name:"Howard",fips:"089"},{name:"Howell",fips:"091"},{name:"Iron",fips:"093"},{name:"Jackson",fips:"095"},
//       {name:"Jasper",fips:"097"},{name:"Jefferson",fips:"099"},{name:"Johnson",fips:"101"},{name:"Knox",fips:"103"},
//       {name:"Laclede",fips:"105"},{name:"Lafayette",fips:"107"},{name:"Lawrence",fips:"109"},{name:"Lewis",fips:"111"},
//       {name:"Lincoln",fips:"113"},{name:"Linn",fips:"115"},{name:"Livingston",fips:"117"},{name:"McDonald",fips:"119"},
//       {name:"Macon",fips:"121"},{name:"Madison",fips:"123"},{name:"Maries",fips:"125"},{name:"Marion",fips:"127"},
//       {name:"Mercer",fips:"129"},{name:"Miller",fips:"131"},{name:"Mississippi",fips:"133"},{name:"Moniteau",fips:"135"},
//       {name:"Monroe",fips:"137"},{name:"Montgomery",fips:"139"},{name:"Morgan",fips:"141"},{name:"New Madrid",fips:"143"},
//       {name:"Newton",fips:"145"},{name:"Nodaway",fips:"147"},{name:"Oregon",fips:"149"},{name:"Osage",fips:"151"},
//       {name:"Ozark",fips:"153"},{name:"Pemiscot",fips:"155"},{name:"Perry",fips:"157"},{name:"Pettis",fips:"159"},
//       {name:"Phelps",fips:"161"},{name:"Pike",fips:"163"},{name:"Platte",fips:"165"},{name:"Polk",fips:"167"},
//       {name:"Pulaski",fips:"169"},{name:"Putnam",fips:"171"},{name:"Ralls",fips:"173"},{name:"Randolph",fips:"175"},
//       {name:"Ray",fips:"177"},{name:"Reynolds",fips:"179"},{name:"Ripley",fips:"181"},{name:"Saline",fips:"195"},
//       {name:"Schuyler",fips:"197"},{name:"Scotland",fips:"199"},{name:"Scott",fips:"201"},{name:"Shannon",fips:"203"},
//       {name:"Shelby",fips:"205"},{name:"St. Charles",fips:"183"},{name:"St. Clair",fips:"185"},{name:"St. Francois",fips:"187"},
//       {name:"St. Louis",fips:"189"},{name:"Ste. Genevieve",fips:"186"},{name:"Stoddard",fips:"207"},{name:"Stone",fips:"209"},
//       {name:"Sullivan",fips:"211"},{name:"Taney",fips:"213"},{name:"Texas",fips:"215"},{name:"Vernon",fips:"217"},
//       {name:"Warren",fips:"219"},{name:"Washington",fips:"221"},{name:"Wayne",fips:"223"},{name:"Webster",fips:"225"},
//       {name:"Worth",fips:"227"},{name:"Wright",fips:"229"}
//     ]
//   }
// ];

// // ----- State Tracking -----
// let currentStateIndex = 0;
// let assignedInfo = {};

// // Precompute county name lookups
// states.forEach(state => {
//   state.countyNamesById = {};
//   state.counties.forEach(c => {
//     state.countyNamesById[state.stateFips + c.fips] = c.name;
//   });
//   assignedInfo[state.id] = {};
// });

// // ----- DOM Elements -----
// const stateTitle = document.getElementById('state-title');
// const stateLabel = document.getElementById('state-label');
// const prevBtn = document.getElementById('prev-state');
// const nextBtn = document.getElementById('next-state');
// const mapDiv = document.getElementById('map');
// const assignedList = document.getElementById('assigned-list');

// // ----- Utility -----
// function truncateLabel(label, maxLen) {
//   if (label.length <= maxLen) return label;
//   return label.slice(0, maxLen - 1) + "…";
// }
// function getBoxSize(countyWidth) {
//   const minWidth = 30, maxWidth = 60;
//   const minHeight = 18, maxHeight = 28;
//   const width = Math.max(minWidth, Math.min(maxWidth, countyWidth * 0.7));
//   const height = Math.max(minHeight, Math.min(maxHeight, countyWidth * 0.35));
//   return { width, height };
// }

// // ----- Main Map Rendering -----
// function showState(idx) {
//   const state = states[idx];
//   stateTitle.textContent = `${state.name} County Name Map`;
//   stateLabel.textContent = state.name;

//   d3.select("#map svg").remove();

//   fetch(state.geoJsonUrl)
//     .then(response => response.json())
//     .then(usCounties => {
//       const stateFeatures = usCounties.features.filter(
//         f => f.properties.STATE === state.stateFips
//       );
//       const width = 1300, height = 520;
//       const projection = d3.geoMercator()
//         .fitSize([width, height], {type: "FeatureCollection", features: stateFeatures});
//       const path = d3.geoPath().projection(projection);

//       // Responsive SVG with viewBox
//       const svg = d3.select("#map").append("svg")
//         .attr("viewBox", `0 0 ${width} ${height}`)
//         .attr("preserveAspectRatio", "xMidYMid meet")
//         .style("width", "100%")
//         .style("height", "auto")
//         .style("touch-action", "none"); // for mobile zoom/pan

//       // Add zoom/pan support
//       const mapContent = svg.append("g").attr("class", "map-content");

//       const zoom = d3.zoom()
//         .scaleExtent([1, 8])
//         .on("zoom", (event) => {
//           mapContent.attr("transform", event.transform);
//         });
//       svg.call(zoom);

//       // Draw counties
//       mapContent.selectAll("path")
//         .data(stateFeatures)
//         .join("path")
//         .attr("class", "county")
//         .attr("d", path)
//         .attr("data-fips", d => d.properties.STATE + d.properties.COUNTY)
//         .on("click", function(event, d) {
//           // Prevent zoom on click
//           event.stopPropagation();
//           const fips = d.properties.STATE + d.properties.COUNTY;
//           const countyName = state.countyNamesById[fips];
//           const current = assignedInfo[state.id][fips] || {name: "", number: ""};

//           let person = prompt(`Enter name for ${countyName} County:`, current.name || "");
//           if (person === null) return;
//           person = person.trim();

//           let number = prompt(`Enter a number for ${countyName} County:`, current.number || "");
//           if (number === null) return;
//           number = number.trim();

//           if (person || number) {
//             assignedInfo[state.id][fips] = {name: person, number: number};
//           } else {
//             delete assignedInfo[state.id][fips];
//           }

//           saveAssignmentsToFirebase();
//           updateAssignedList(state);
//           updateSelected(mapContent, state);
//           updateCountyLabels(mapContent, state, path, stateFeatures);
//         });

//       updateAssignedList(state);
//       updateSelected(mapContent, state);
//       updateCountyLabels(mapContent, state, path, stateFeatures);
//     });
// }

// // ----- County Labels and Bubbles -----
// function updateCountyLabels(parentG, state, path, stateFeatures) {
//   parentG.selectAll("g.county-label-group").remove();

//   parentG.selectAll("g.county-label-group")
//     .data(stateFeatures)
//     .join("g")
//     .attr("class", "county-label-group")
//     .each(function(d) {
//       const group = d3.select(this);
//       const fips = d.properties.STATE + d.properties.COUNTY;
//       const countyName = state.countyNamesById[fips] || "";
//       const assign = assignedInfo[state.id][fips] || {name: "", number: ""};

//       const centroid = path.centroid(d);
//       const bounds = path.bounds(d);
//       const countyWidth = bounds[1][0] - bounds[0][0];
//       const { width: boxWidth, height: boxHeight } = getBoxSize(countyWidth);

//       let fontSize = 12;
//       let labelVal = countyName;
//       const label = group.append("text")
//         .attr("class", "county-label")
//         .attr("x", centroid[0])
//         .attr("y", centroid[1] - 6)
//         .attr("title", countyName)
//         .text(labelVal);

//       label.style("font-size", fontSize + "px");
//       while (label.node().getComputedTextLength() > countyWidth * 0.85 && fontSize > 7) {
//         fontSize -= 1;
//         label.style("font-size", fontSize + "px");
//       }
//       if (label.node().getComputedTextLength() > countyWidth * 0.85) {
//         labelVal = truncateLabel(countyName, 10);
//         label.text(labelVal);
//         label.append("title").text(countyName);
//       }

//       if (assign.number) {
//         const boxY = centroid[1] + fontSize/2 + 2;
//         group.append("rect")
//           .attr("class", "county-number-box")
//           .attr("x", centroid[0] - boxWidth/2)
//           .attr("y", boxY)
//           .attr("width", boxWidth)
//           .attr("height", boxHeight)
//           .attr("rx", 10)
//           .attr("ry", 10);

//         group.append("text")
//           .attr("class", "county-number-text")
//           .attr("x", centroid[0])
//           .attr("y", boxY + boxHeight/2 + 2)
//           .text(assign.number);
//       }
//     });
// }

// // ----- County Highlighting -----
// function updateSelected(parentG, state) {
//   parentG.selectAll("path.county")
//     .classed("has-info", d => {
//       const info = assignedInfo[state.id][d.properties.STATE + d.properties.COUNTY];
//       return info && (info.name || info.number);
//     });
// }

// // ----- Assigned List -----
// function updateAssignedList(state) {
//   assignedList.innerHTML = "";
//   const sorted = Object.entries(assignedInfo[state.id])
//     .sort((a, b) => state.countyNamesById[a[0]].localeCompare(state.countyNamesById[b[0]]));
//   if (sorted.length === 0) {
//     assignedList.innerHTML = "<li style='color:#888'>No names assigned yet.</li>";
//   } else {
//     for (const [fips, info] of sorted) {
//       const county = state.countyNamesById[fips];
//       const li = document.createElement("li");
//       li.textContent = `${county} County: ${info.name} (Number: ${info.number})`;
//       assignedList.appendChild(li);
//     }
//   }
// }

// // ----- Navigation -----
// prevBtn.onclick = () => {
//   currentStateIndex = (currentStateIndex + states.length - 1) % states.length;
//   showState(currentStateIndex);
// };
// nextBtn.onclick = () => {
//   currentStateIndex = (currentStateIndex + 1) % states.length;
//   showState(currentStateIndex);
// };

// // ----- Firebase Sync -----
// function saveAssignmentsToFirebase() {
//   dbRef.set(assignedInfo);
// }
// function loadAssignmentsFromFirebase() {
//   dbRef.on("value", snapshot => {
//     const data = snapshot.val();
//     if (data) {
//       assignedInfo = data;
//       showState(currentStateIndex); // redraw with latest loaded data
//     } else {
//       // If no data, initialize
//       states.forEach(state => {
//         if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//       });
//       showState(currentStateIndex);
//     }
//   });
// }

// // ----- Initial Load -----
// showState(currentStateIndex);
// loadAssignmentsFromFirebase();

// ----- Firebase Setup -----
// const firebaseConfig = {
//   apiKey: "AIzaSyD6mwudmKbqTlpktEuQJygovz8HuBDz03A",
//   authDomain: "leads-cb634.firebaseapp.com",
//   databaseURL: "https://leads-cb634-default-rtdb.firebaseio.com/",
//   projectId: "leads-cb634",
//   storageBucket: "leads-cb634.appspot.com",
//   messagingSenderId: "481988754005",
//   appId: "1:481988754005:web:617706890dfea43efc72dc",
//   measurementId: "G-K86T7XYQYD"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();
// const dbRef = db.ref("countyAssignments");

// // ----- PIN Code Logic -----
// const EDIT_PIN = "5689"; // Change to your secret PIN
// let pinAuthorized = false;

// function requestPin() {
//     if (pinAuthorized) return;
//     let tries = 0;
//     while (tries < 3) {
//         const entered = prompt("Enter PIN to edit county assignments:");
//         if (entered === EDIT_PIN) {
//             pinAuthorized = true;
//             alert("Access granted.");
//             return;
//         } else {
//             tries++;
//             alert("Incorrect PIN.");
//         }
//     }
//     alert("Access denied. You can view the map but cannot edit assignments.");
//     pinAuthorized = false;
// }

// requestPin();

// // ----- Map Data -----
// const states = [
//   {
//     id: "TN",
//     name: "Tennessee",
//     geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json",
//     stateFips: "47",
//     counties: [
//       {name:"Anderson",fips:"001"},{name:"Bedford",fips:"003"},{name:"Benton",fips:"005"},{name:"Bledsoe",fips:"007"},
//       {name:"Blount",fips:"009"},{name:"Bradley",fips:"011"},{name:"Campbell",fips:"013"},{name:"Cannon",fips:"015"},
//       {name:"Carroll",fips:"017"},{name:"Carter",fips:"019"},{name:"Cheatham",fips:"021"},{name:"Chester",fips:"023"},
//       {name:"Claiborne",fips:"025"},{name:"Clay",fips:"027"},{name:"Cocke",fips:"029"},{name:"Coffee",fips:"031"},
//       {name:"Crockett",fips:"033"},{name:"Cumberland",fips:"035"},{name:"Davidson",fips:"037"},{name:"Decatur",fips:"039"},
//       {name:"DeKalb",fips:"041"},{name:"Dickson",fips:"043"},{name:"Dyer",fips:"045"},{name:"Fayette",fips:"047"},
//       {name:"Fentress",fips:"049"},{name:"Franklin",fips:"051"},{name:"Gibson",fips:"053"},{name:"Giles",fips:"055"},
//       {name:"Grainger",fips:"057"},{name:"Greene",fips:"059"},{name:"Grundy",fips:"061"},{name:"Hamblen",fips:"063"},
//       {name:"Hamilton",fips:"065"},{name:"Hancock",fips:"067"},{name:"Hardeman",fips:"069"},{name:"Hardin",fips:"071"},
//       {name:"Hawkins",fips:"073"},{name:"Haywood",fips:"075"},{name:"Henderson",fips:"077"},{name:"Henry",fips:"079"},
//       {name:"Hickman",fips:"081"},{name:"Houston",fips:"083"},{name:"Humphreys",fips:"085"},{name:"Jackson",fips:"087"},
//       {name:"Jefferson",fips:"089"},{name:"Johnson",fips:"091"},{name:"Knox",fips:"093"},{name:"Lake",fips:"095"},
//       {name:"Lauderdale",fips:"097"},{name:"Lawrence",fips:"099"},{name:"Lewis",fips:"101"},{name:"Lincoln",fips:"103"},
//       {name:"Loudon",fips:"105"},{name:"McMinn",fips:"107"},{name:"McNairy",fips:"109"},{name:"Macon",fips:"111"},
//       {name:"Madison",fips:"113"},{name:"Marion",fips:"115"},{name:"Marshall",fips:"117"},{name:"Maury",fips:"119"},
//       {name:"Meigs",fips:"121"},{name:"Monroe",fips:"123"},{name:"Montgomery",fips:"125"},{name:"Moore",fips:"127"},
//       {name:"Morgan",fips:"129"},{name:"Obion",fips:"131"},{name:"Overton",fips:"133"},{name:"Perry",fips:"135"},
//       {name:"Pickett",fips:"137"},{name:"Polk",fips:"139"},{name:"Putnam",fips:"141"},{name:"Rhea",fips:"143"},
//       {name:"Roane",fips:"145"},{name:"Robertson",fips:"147"},{name:"Rutherford",fips:"149"},{name:"Scott",fips:"151"},
//       {name:"Sequatchie",fips:"153"},{name:"Sevier",fips:"155"},{name:"Shelby",fips:"157"},{name:"Smith",fips:"159"},
//       {name:"Stewart",fips:"161"},{name:"Sullivan",fips:"163"},{name:"Sumner",fips:"165"},{name:"Tipton",fips:"167"},
//       {name:"Trousdale",fips:"169"},{name:"Unicoi",fips:"171"},{name:"Union",fips:"173"},{name:"Van Buren",fips:"175"},
//       {name:"Warren",fips:"177"},{name:"Washington",fips:"179"},{name:"Wayne",fips:"181"},{name:"Weakley",fips:"183"},
//       {name:"White",fips:"185"},{name:"Williamson",fips:"187"},{name:"Wilson",fips:"189"}
//     ]
//   },
//   {
//     id: "KY",
//     name: "Kentucky",
//     geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json",
//     stateFips: "21",
//     counties: [
//       {name:"Adair",fips:"001"},{name:"Allen",fips:"003"},{name:"Anderson",fips:"005"},{name:"Ballard",fips:"007"},
//       {name:"Barren",fips:"009"},{name:"Bath",fips:"011"},{name:"Bell",fips:"013"},{name:"Boone",fips:"015"},
//       {name:"Bourbon",fips:"017"},{name:"Boyd",fips:"019"},{name:"Boyle",fips:"021"},{name:"Bracken",fips:"023"},
//       {name:"Breathitt",fips:"025"},{name:"Breckinridge",fips:"027"},{name:"Bullitt",fips:"029"},{name:"Butler",fips:"031"},
//       {name:"Caldwell",fips:"033"},{name:"Calloway",fips:"035"},{name:"Campbell",fips:"037"},{name:"Carlisle",fips:"039"},
//       {name:"Carroll",fips:"041"},{name:"Carter",fips:"043"},{name:"Casey",fips:"045"},{name:"Christian",fips:"047"},
//       {name:"Clark",fips:"049"},{name:"Clay",fips:"051"},{name:"Clinton",fips:"053"},{name:"Crittenden",fips:"055"},
//       {name:"Cumberland",fips:"057"},{name:"Daviess",fips:"059"},{name:"Edmonson",fips:"061"},{name:"Elliott",fips:"063"},
//       {name:"Estill",fips:"065"},{name:"Fayette",fips:"067"},{name:"Fleming",fips:"069"},{name:"Floyd",fips:"071"},
//       {name:"Franklin",fips:"073"},{name:"Fulton",fips:"075"},{name:"Gallatin",fips:"077"},{name:"Garrard",fips:"079"},
//       {name:"Grant",fips:"081"},{name:"Graves",fips:"083"},{name:"Grayson",fips:"085"},{name:"Green",fips:"087"},
//       {name:"Greenup",fips:"089"},{name:"Hancock",fips:"091"},{name:"Hardin",fips:"093"},{name:"Harlan",fips:"095"},
//       {name:"Harrison",fips:"097"},{name:"Hart",fips:"099"},{name:"Henderson",fips:"101"},{name:"Henry",fips:"103"},
//       {name:"Hickman",fips:"105"},{name:"Hopkins",fips:"107"},{name:"Jackson",fips:"109"},{name:"Jefferson",fips:"111"},
//       {name:"Jessamine",fips:"113"},{name:"Johnson",fips:"115"},{name:"Kenton",fips:"117"},{name:"Knott",fips:"119"},
//       {name:"Knox",fips:"121"},{name:"Larue",fips:"123"},{name:"Laurel",fips:"125"},{name:"Lawrence",fips:"127"},
//       {name:"Lee",fips:"129"},{name:"Leslie",fips:"131"},{name:"Letcher",fips:"133"},{name:"Lewis",fips:"135"},
//       {name:"Lincoln",fips:"137"},{name:"Livingston",fips:"139"},{name:"Logan",fips:"141"},{name:"Lyon",fips:"143"},
//       {name:"McCracken",fips:"145"},{name:"McCreary",fips:"147"},{name:"McLean",fips:"149"},{name:"Madison",fips:"151"},
//       {name:"Magoffin",fips:"153"},{name:"Marion",fips:"155"},{name:"Marshall",fips:"157"},{name:"Martin",fips:"159"},
//       {name:"Mason",fips:"161"},{name:"Meade",fips:"163"},{name:"Menifee",fips:"165"},{name:"Mercer",fips:"167"},
//       {name:"Metcalfe",fips:"169"},{name:"Monroe",fips:"171"},{name:"Montgomery",fips:"173"},{name:"Morgan",fips:"175"},
//       {name:"Muhlenberg",fips:"177"},{name:"Nelson",fips:"179"},{name:"Nicholas",fips:"181"},{name:"Ohio",fips:"183"},
//       {name:"Oldham",fips:"185"},{name:"Owen",fips:"187"},{name:"Owsley",fips:"189"},{name:"Pendleton",fips:"191"},
//       {name:"Perry",fips:"193"},{name:"Pike",fips:"195"},{name:"Powell",fips:"197"},{name:"Pulaski",fips:"199"},
//       {name:"Robertson",fips:"201"},{name:"Rockcastle",fips:"203"},{name:"Rowan",fips:"205"},{name:"Russell",fips:"207"},
//       {name:"Scott",fips:"209"},{name:"Shelby",fips:"211"},{name:"Simpson",fips:"213"},{name:"Spencer",fips:"215"},
//       {name:"Taylor",fips:"217"},{name:"Todd",fips:"219"},{name:"Trigg",fips:"221"},{name:"Trimble",fips:"223"},
//       {name:"Union",fips:"225"},{name:"Warren",fips:"227"},{name:"Washington",fips:"229"},{name:"Wayne",fips:"231"},
//       {name:"Webster",fips:"233"},{name:"Whitley",fips:"235"},{name:"Wolfe",fips:"237"},{name:"Woodford",fips:"239"}
//     ]
//   },
//   {
//     id: "MO",
//     name: "Missouri",
//     geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json",
//     stateFips: "29",
//     counties: [
//       {name:"Adair",fips:"001"},{name:"Andrew",fips:"003"},{name:"Atchison",fips:"005"},{name:"Audrain",fips:"007"},
//       {name:"Barry",fips:"009"},{name:"Barton",fips:"011"},{name:"Bates",fips:"013"},{name:"Benton",fips:"015"},
//       {name:"Bollinger",fips:"017"},{name:"Boone",fips:"019"},{name:"Buchanan",fips:"021"},{name:"Butler",fips:"023"},
//       {name:"Caldwell",fips:"025"},{name:"Callaway",fips:"027"},{name:"Camden",fips:"029"},{name:"Cape Girardeau",fips:"031"},
//       {name:"Carroll",fips:"033"},{name:"Carter",fips:"035"},{name:"Cass",fips:"037"},{name:"Cedar",fips:"039"},
//       {name:"Chariton",fips:"041"},{name:"Christian",fips:"043"},{name:"Clark",fips:"045"},{name:"Clay",fips:"047"},
//       {name:"Clinton",fips:"049"},{name:"Cole",fips:"051"},{name:"Cooper",fips:"053"},{name:"Crawford",fips:"055"},
//       {name:"Dade",fips:"057"},{name:"Dallas",fips:"059"},{name:"Daviess",fips:"061"},{name:"DeKalb",fips:"063"},
//       {name:"Dent",fips:"065"},{name:"Douglas",fips:"067"},{name:"Dunklin",fips:"069"},{name:"Franklin",fips:"071"},
//       {name:"Gasconade",fips:"073"},{name:"Gentry",fips:"075"},{name:"Greene",fips:"077"},{name:"Grundy",fips:"079"},
//       {name:"Harrison",fips:"081"},{name:"Henry",fips:"083"},{name:"Hickory",fips:"085"},{name:"Holt",fips:"087"},
//       {name:"Howard",fips:"089"},{name:"Howell",fips:"091"},{name:"Iron",fips:"093"},{name:"Jackson",fips:"095"},
//       {name:"Jasper",fips:"097"},{name:"Jefferson",fips:"099"},{name:"Johnson",fips:"101"},{name:"Knox",fips:"103"},
//       {name:"Laclede",fips:"105"},{name:"Lafayette",fips:"107"},{name:"Lawrence",fips:"109"},{name:"Lewis",fips:"111"},
//       {name:"Lincoln",fips:"113"},{name:"Linn",fips:"115"},{name:"Livingston",fips:"117"},{name:"McDonald",fips:"119"},
//       {name:"Macon",fips:"121"},{name:"Madison",fips:"123"},{name:"Maries",fips:"125"},{name:"Marion",fips:"127"},
//       {name:"Mercer",fips:"129"},{name:"Miller",fips:"131"},{name:"Mississippi",fips:"133"},{name:"Moniteau",fips:"135"},
//       {name:"Monroe",fips:"137"},{name:"Montgomery",fips:"139"},{name:"Morgan",fips:"141"},{name:"New Madrid",fips:"143"},
//       {name:"Newton",fips:"145"},{name:"Nodaway",fips:"147"},{name:"Oregon",fips:"149"},{name:"Osage",fips:"151"},
//       {name:"Ozark",fips:"153"},{name:"Pemiscot",fips:"155"},{name:"Perry",fips:"157"},{name:"Pettis",fips:"159"},
//       {name:"Phelps",fips:"161"},{name:"Pike",fips:"163"},{name:"Platte",fips:"165"},{name:"Polk",fips:"167"},
//       {name:"Pulaski",fips:"169"},{name:"Putnam",fips:"171"},{name:"Ralls",fips:"173"},{name:"Randolph",fips:"175"},
//       {name:"Ray",fips:"177"},{name:"Reynolds",fips:"179"},{name:"Ripley",fips:"181"},{name:"Saline",fips:"195"},
//       {name:"Schuyler",fips:"197"},{name:"Scotland",fips:"199"},{name:"Scott",fips:"201"},{name:"Shannon",fips:"203"},
//       {name:"Shelby",fips:"205"},{name:"St. Charles",fips:"183"},{name:"St. Clair",fips:"185"},{name:"St. Francois",fips:"187"},
//       {name:"St. Louis",fips:"189"},{name:"Ste. Genevieve",fips:"186"},{name:"Stoddard",fips:"207"},{name:"Stone",fips:"209"},
//       {name:"Sullivan",fips:"211"},{name:"Taney",fips:"213"},{name:"Texas",fips:"215"},{name:"Vernon",fips:"217"},
//       {name:"Warren",fips:"219"},{name:"Washington",fips:"221"},{name:"Wayne",fips:"223"},{name:"Webster",fips:"225"},
//       {name:"Worth",fips:"227"},{name:"Wright",fips:"229"}
//     ]
//   }
// ];

// // ----- State Tracking -----
// let currentStateIndex = 0;
// let assignedInfo = {};

// // Precompute county name lookups
// states.forEach(state => {
//   state.countyNamesById = {};
//   state.counties.forEach(c => {
//     state.countyNamesById[state.stateFips + c.fips] = c.name;
//   });
//   assignedInfo[state.id] = {};
// });

// // ----- DOM Elements -----
// const stateTitle = document.getElementById('state-title');
// const stateLabel = document.getElementById('state-label');
// const prevBtn = document.getElementById('prev-state');
// const nextBtn = document.getElementById('next-state');
// const mapDiv = document.getElementById('map');
// const assignedList = document.getElementById('assigned-list');

// // ----- Utility -----
// function truncateLabel(label, maxLen) {
//   if (label.length <= maxLen) return label;
//   return label.slice(0, maxLen - 1) + "…";
// }
// function getBoxSize(countyWidth) {
//   const minWidth = 30, maxWidth = 60;
//   const minHeight = 18, maxHeight = 28;
//   const width = Math.max(minWidth, Math.min(maxWidth, countyWidth * 0.7));
//   const height = Math.max(minHeight, Math.min(maxHeight, countyWidth * 0.35));
//   return { width, height };
// }

// // ----- Main Map Rendering -----
// function showState(idx) {
//   const state = states[idx];
//   stateTitle.textContent = `${state.name} County Name Map`;
//   stateLabel.textContent = state.name;

//   d3.select("#map svg").remove();

//   fetch(state.geoJsonUrl)
//     .then(response => response.json())
//     .then(usCounties => {
//       const stateFeatures = usCounties.features.filter(
//         f => f.properties.STATE === state.stateFips
//       );
//       const width = 1300, height = 520;
//       const projection = d3.geoMercator()
//         .fitSize([width, height], {type: "FeatureCollection", features: stateFeatures});
//       const path = d3.geoPath().projection(projection);

//       // Responsive SVG with viewBox
//       const svg = d3.select("#map").append("svg")
//         .attr("viewBox", `0 0 ${width} ${height}`)
//         .attr("preserveAspectRatio", "xMidYMid meet")
//         .style("width", "100%")
//         .style("height", "auto")
//         .style("touch-action", "none"); // for mobile zoom/pan

//       // Add zoom/pan support
//       const mapContent = svg.append("g").attr("class", "map-content");

//       const zoom = d3.zoom()
//         .scaleExtent([1, 8])
//         .on("zoom", (event) => {
//           mapContent.attr("transform", event.transform);
//         });
//       svg.call(zoom);

//       // Draw counties
//       mapContent.selectAll("path")
//         .data(stateFeatures)
//         .join("path")
//         .attr("class", "county")
//         .attr("d", path)
//         .attr("data-fips", d => d.properties.STATE + d.properties.COUNTY)
//         .on("click", function(event, d) {
//           event.stopPropagation();
//           // ----- PIN Check -----
//           if (!pinAuthorized) {
//             alert("You are not authorized to edit. Reload the page and enter the PIN.");
//             return;
//           }
//           // ----- End PIN Check -----
//           const fips = d.properties.STATE + d.properties.COUNTY;
//           const countyName = state.countyNamesById[fips];
//           const current = assignedInfo[state.id][fips] || {name: "", number: ""};

//           let person = prompt(`Enter name for ${countyName} County:`, current.name || "");
//           if (person === null) return;
//           person = person.trim();

//           let number = prompt(`Enter a number for ${countyName} County:`, current.number || "");
//           if (number === null) return;
//           number = number.trim();

//           if (person || number) {
//             assignedInfo[state.id][fips] = {name: person, number: number};
//           } else {
//             delete assignedInfo[state.id][fips];
//           }

//           saveAssignmentsToFirebase();
//           updateAssignedList(state);
//           updateSelected(mapContent, state);
//           updateCountyLabels(mapContent, state, path, stateFeatures);
//         });

//       updateAssignedList(state);
//       updateSelected(mapContent, state);
//       updateCountyLabels(mapContent, state, path, stateFeatures);
//     });
// }

// // ----- County Labels and Bubbles -----
// function updateCountyLabels(parentG, state, path, stateFeatures) {
//   parentG.selectAll("g.county-label-group").remove();

//   parentG.selectAll("g.county-label-group")
//     .data(stateFeatures)
//     .join("g")
//     .attr("class", "county-label-group")
//     .each(function(d) {
//       const group = d3.select(this);
//       const fips = d.properties.STATE + d.properties.COUNTY;
//       const countyName = state.countyNamesById[fips] || "";
//       const assign = assignedInfo[state.id][fips] || {name: "", number: ""};

//       const centroid = path.centroid(d);
//       const bounds = path.bounds(d);
//       const countyWidth = bounds[1][0] - bounds[0][0];
//       const { width: boxWidth, height: boxHeight } = getBoxSize(countyWidth);

//       let fontSize = 12;
//       let labelVal = countyName;
//       const label = group.append("text")
//         .attr("class", "county-label")
//         .attr("x", centroid[0])
//         .attr("y", centroid[1] - 6)
//         .attr("title", countyName)
//         .text(labelVal);

//       label.style("font-size", fontSize + "px");
//       while (label.node().getComputedTextLength() > countyWidth * 0.85 && fontSize > 7) {
//         fontSize -= 1;
//         label.style("font-size", fontSize + "px");
//       }
//       if (label.node().getComputedTextLength() > countyWidth * 0.85) {
//         labelVal = truncateLabel(countyName, 10);
//         label.text(labelVal);
//         label.append("title").text(countyName);
//       }

//       if (assign.number) {
//         const boxY = centroid[1] + fontSize/2 + 2;
//         group.append("rect")
//           .attr("class", "county-number-box")
//           .attr("x", centroid[0] - boxWidth/2)
//           .attr("y", boxY)
//           .attr("width", boxWidth)
//           .attr("height", boxHeight)
//           .attr("rx", 10)
//           .attr("ry", 10);

//         group.append("text")
//           .attr("class", "county-number-text")
//           .attr("x", centroid[0])
//           .attr("y", boxY + boxHeight/2 + 2)
//           .text(assign.number);
//       }
//     });
// }

// // ----- County Highlighting -----
// function updateSelected(parentG, state) {
//   parentG.selectAll("path.county")
//     .classed("has-info", d => {
//       const info = assignedInfo[state.id][d.properties.STATE + d.properties.COUNTY];
//       return info && (info.name || info.number);
//     });
// }

// // ----- Assigned List -----
// function updateAssignedList(state) {
//   assignedList.innerHTML = "";
//   const sorted = Object.entries(assignedInfo[state.id])
//     .sort((a, b) => state.countyNamesById[a[0]].localeCompare(state.countyNamesById[b[0]]));
//   if (sorted.length === 0) {
//     assignedList.innerHTML = "<li style='color:#888'>No names assigned yet.</li>";
//   } else {
//     for (const [fips, info] of sorted) {
//       const county = state.countyNamesById[fips];
//       const li = document.createElement("li");
//       li.textContent = `${county} County: ${info.name} (Number: ${info.number})`;
//       assignedList.appendChild(li);
//     }
//   }
// }

// // ----- Navigation -----
// prevBtn.onclick = () => {
//   currentStateIndex = (currentStateIndex + states.length - 1) % states.length;
//   showState(currentStateIndex);
// };
// nextBtn.onclick = () => {
//   currentStateIndex = (currentStateIndex + 1) % states.length;
//   showState(currentStateIndex);
// };

// // ----- Firebase Sync -----
// function saveAssignmentsToFirebase() {
//   dbRef.set(assignedInfo);
// }
// function loadAssignmentsFromFirebase() {
//   dbRef.on("value", snapshot => {
//     const data = snapshot.val();
//     if (data) {
//       assignedInfo = data;
//       showState(currentStateIndex); // redraw with latest loaded data
//     } else {
//       // If no data, initialize
//       states.forEach(state => {
//         if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//       });
//       showState(currentStateIndex);
//     }
//   });
// }

// // ----- Initial Load -----
// showState(currentStateIndex);
// loadAssignmentsFromFirebase();

// --- Firebase Initialization ---
// --- Firebase Initialization ---
// --- Firebase Initialization ---
// const firebaseConfig = {
//   apiKey: "AIzaSyD6mwudmKbqTlpktEuQJygovz8HuBDz03A",
//   authDomain: "leads-cb634.firebaseapp.com",
//   databaseURL: "https://leads-cb634-default-rtdb.firebaseio.com/",
//   projectId: "leads-cb634",
//   storageBucket: "leads-cb634.appspot.com",
//   messagingSenderId: "481988754005",
//   appId: "1:481988754005:web:617706890dfea43efc72dc",
//   measurementId: "G-K86T7XYQYD"
// };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();
// const dbRef = db.ref("countyAssignments");

// // ----- PIN Code Logic -----
// const EDIT_PIN = "5689";
// let pinAuthorized = false;
// function requestPin() {
//   if (pinAuthorized) return;
//   let tries = 0;
//   while (tries < 3) {
//     const entered = prompt("Enter PIN to edit county assignments:");
//     if (entered === EDIT_PIN) {
//       pinAuthorized = true;
//       alert("Access granted.");
//       return;
//     } else {
//       tries++;
//       alert("Incorrect PIN.");
//     }
//   }
//   alert("Access denied. You can view the map but cannot edit assignments.");
//   pinAuthorized = false;
// }
// requestPin();

// // ----- Map Data -----
// const states = [
//   { id: "TN", name: "Tennessee", geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json", stateFips: "47" },
//   { id: "KY", name: "Kentucky", geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json", stateFips: "21" },
//   { id: "MO", name: "Missouri", geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json", stateFips: "29" }
// ];

// let currentStateIndex = 0;
// let assignedInfo = {};
// let countyNamesById = {};
// // Robust initialization
// states.forEach(state => {
//   if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//   if (!countyNamesById[state.id]) countyNamesById[state.id] = {};
// });

// // ----- DOM Elements -----
// const stateTitle = document.getElementById('state-title');
// const stateLabel = document.getElementById('state-label');
// const prevBtn = document.getElementById('prev-state');
// const nextBtn = document.getElementById('next-state');
// const mapDiv = document.getElementById('map');
// const assignedList = document.getElementById('assigned-list');

// // ----- Utility Functions -----
// function truncateLabel(label, maxLen) {
//   if (label.length <= maxLen) return label;
//   return label.slice(0, maxLen - 1) + "…";
// }
// function getBoxSize(countyWidth) {
//   const minWidth = 30, maxWidth = 60;
//   const minHeight = 18, maxHeight = 28;
//   const width = Math.max(minWidth, Math.min(maxWidth, countyWidth * 0.7));
//   const height = Math.max(minHeight, Math.min(maxHeight, countyWidth * 0.35));
//   return { width, height };
// }

// // ----- Main Map Rendering -----
// function showState(idx) {
//   const state = states[idx];
//   stateTitle.textContent = `${state.name} County Name Map`;
//   stateLabel.textContent = state.name;
//   d3.select("#map svg").remove();

//   fetch(state.geoJsonUrl)
//     .then(response => response.json())
//     .then(usCounties => {
//       const stateFeatures = usCounties.features.filter(f => f.properties.STATE === state.stateFips);
//       // Build FIPS to name lookup
//       let fipsMap = {};
//       stateFeatures.forEach(f => {
//         const fips = f.properties.STATE + f.properties.COUNTY;
//         let name = (f.properties.NAME || f.properties.name || "");
//         fipsMap[fips] = name;
//       });
//       countyNamesById[state.id] = fipsMap;
//       if (!assignedInfo[state.id]) assignedInfo[state.id] = {};

//       // Calculate bounds/projection for this state
//       const featureCollection = {type: "FeatureCollection", features: stateFeatures};
//       const bounds = d3.geoPath().bounds(featureCollection);
//       const dx = bounds[1][0] - bounds[0][0];
//       const dy = bounds[1][1] - bounds[0][1];
//       const margin = 40;
//       const width = Math.max(600, dx + 2 * margin);
//       const height = Math.max(300, dy + 2 * margin);

//       const projection = d3.geoMercator()
//         .fitExtent([[margin, margin], [width - margin, height - margin]], featureCollection);
//       const path = d3.geoPath().projection(projection);

//       // Responsive SVG
//       const svg = d3.select("#map").append("svg")
//         .attr("viewBox", `0 0 ${width} ${height}`)
//         .attr("preserveAspectRatio", "xMidYMid meet")
//         .style("width", "100%")
//         .style("height", "auto")
//         .style("touch-action", "none");

//       // Zoom and pan
//       const mapContent = svg.append("g").attr("class", "map-content");
//       const zoom = d3.zoom()
//         .scaleExtent([1, 8])
//         .on("zoom", (event) => {
//           mapContent.attr("transform", event.transform);
//         });
//       svg.call(zoom);

//       // Draw counties
//       mapContent.selectAll("path")
//         .data(stateFeatures)
//         .join("path")
//         .attr("class", "county")
//         .attr("d", path)
//         .attr("data-fips", d => d.properties.STATE + d.properties.COUNTY)
//         .on("click", function(event, d) {
//           event.stopPropagation();
//           if (!pinAuthorized) {
//             alert("You are not authorized to edit. Reload the page and enter the PIN.");
//             return;
//           }
//           const fips = d.properties.STATE + d.properties.COUNTY;
//           const countyName = (countyNamesById[state.id] && countyNamesById[state.id][fips]) || fips;
//           const current = (assignedInfo[state.id] && assignedInfo[state.id][fips]) ? assignedInfo[state.id][fips] : {name: "", number: ""};

//           let person = prompt(`Enter name for ${countyName} County:`, current.name || "");
//           if (person === null) return;
//           person = person.trim();

//           let number = prompt(`Enter a number for ${countyName} County:`, current.number || "");
//           if (number === null) return;
//           number = number.trim();

//           if (person || number) {
//             assignedInfo[state.id][fips] = {name: person, number: number};
//           } else if (assignedInfo[state.id]) {
//             delete assignedInfo[state.id][fips];
//           }

//           saveAssignmentsToFirebase();
//           updateAssignedList(state);
//           updateSelected(mapContent, state);
//           updateCountyLabels(mapContent, state, path, stateFeatures);
//         });

//       updateAssignedList(state);
//       updateSelected(mapContent, state);
//       updateCountyLabels(mapContent, state, path, stateFeatures);
//     });
// }

// ----- County Labels and Bubbles -----
// function updateCountyLabels(parentG, state, path, stateFeatures) {
//   parentG.selectAll("g.county-label-group").remove();
//   parentG.selectAll("g.county-label-group")
//     .data(stateFeatures)
//     .join("g")
//     .attr("class", "county-label-group")
//     .each(function(d) {
//       const group = d3.select(this);
//       const fips = d.properties.STATE + d.properties.COUNTY;
//       const countyName = (countyNamesById[state.id] && countyNamesById[state.id][fips]) || fips;
//       const assign = (assignedInfo[state.id] && assignedInfo[state.id][fips]) || {name: "", number: ""};

//       const centroid = path.centroid(d);
//       const bounds = path.bounds(d);
//       const countyWidth = Math.max(bounds[1][0] - bounds[0][0], 40);
//       const { width: boxWidth, height: boxHeight } = getBoxSize(countyWidth);

//       // Draw label (county name)
//       let fontSize = 12;
//       let labelVal = countyName;
//       const label = group.append("text")
//         .attr("class", "county-label")
//         .attr("x", centroid[0])
//         .attr("y", centroid[1] - (assign.number ? 8 : 0))
//         .attr("title", countyName)
//         .text(labelVal);

//       label.style("font-size", fontSize + "px");
//       while (label.node().getComputedTextLength() > countyWidth * 0.85 && fontSize > 7) {
//         fontSize -= 1;
//         label.style("font-size", fontSize + "px");
//       }
//       if (label.node().getComputedTextLength() > countyWidth * 0.85) {
//         labelVal = truncateLabel(countyName, 10);
//         label.text(labelVal);
//         label.append("title").text(countyName);
//       }

//       // Draw bubble if number exists
//       if (assign.number) {
//         const boxY = centroid[1] + 6;
//         group.append("rect")
//           .attr("class", "county-number-box")
//           .attr("x", centroid[0] - boxWidth/2)
//           .attr("y", boxY)
//           .attr("width", boxWidth)
//           .attr("height", boxHeight)
//           .attr("rx", 10)
//           .attr("ry", 10);

//         group.append("text")
//           .attr("class", "county-number-text")
//           .attr("x", centroid[0])
//           .attr("y", boxY + boxHeight/2 + 4)
//           .text(assign.number);
//       }
//     });
// }
// function updateCountyLabels(parentG, state, path, stateFeatures) {
//   parentG.selectAll("g.county-label-group").remove();
//   parentG.selectAll("g.county-label-group")
//     .data(stateFeatures)
//     .join("g")
//     .attr("class", "county-label-group")
//     .each(function(d) {
//       const group = d3.select(this);
//       const fips = d.properties.STATE + d.properties.COUNTY;
//       const countyName = (countyNamesById[state.id] && countyNamesById[state.id][fips]) || fips;
//       const assign = (assignedInfo[state.id] && assignedInfo[state.id][fips]) || {name: "", number: ""};

//       const centroid = path.centroid(d);
//       const bounds = path.bounds(d);
//       const countyWidth = Math.max(bounds[1][0] - bounds[0][0], 40); // minimum width for legibility

//       // Dynamically shrink font to fit county
//       let fontSize = 12;
//       let labelVal = countyName;
//       // Temporary text to measure size
//       const tempText = group.append("text")
//         .attr("x", -9999)
//         .attr("y", -9999)
//         .text(labelVal)
//         .style("font-size", fontSize + "px")
//         .style("font-weight", "600");

//       while (tempText.node().getComputedTextLength() > countyWidth * 0.85 && fontSize > 7) {
//         fontSize -= 1;
//         tempText.style("font-size", fontSize + "px");
//       }
//       if (tempText.node().getComputedTextLength() > countyWidth * 0.85) {
//         labelVal = truncateLabel(countyName, 10);
//         tempText.text(labelVal);
//       }
//       tempText.remove();

//       // Draw label (county name)
//       group.append("text")
//         .attr("class", "county-label")
//         .attr("x", centroid[0])
//         .attr("y", centroid[1] - (assign.number ? 10 : 0))
//         .attr("text-anchor", "middle")
//         .attr("dominant-baseline", "middle")
//         .text(labelVal)
//         .style("font-size", fontSize + "px")
//         .style("font-weight", "600")
//         .style("fill", "#25303B")
//         .style("stroke", "#fff")
//         .style("stroke-width", "2px")
//         .style("paint-order", "stroke");

//       // Draw bubble if number exists
//       if (assign.number) {
//         const boxY = centroid[1] + 6;
//         const boxWidth = 36, boxHeight = 20;
//         group.append("rect")
//           .attr("class", "county-number-box")
//           .attr("x", centroid[0] - boxWidth/2)
//           .attr("y", boxY)
//           .attr("width", boxWidth)
//           .attr("height", boxHeight)
//           .attr("rx", 8)
//           .attr("ry", 8);

//         group.append("text")
//           .attr("class", "county-number-text")
//           .attr("x", centroid[0])
//           .attr("y", boxY + boxHeight/2 + 1)
//           .attr("text-anchor", "middle")
//           .attr("dominant-baseline", "middle")
//           .text(assign.number)
//           .style("font-size", "13px")
//           .style("font-weight", "700")
//           .style("fill", "#277")
//           .style("stroke", "#fff")
//           .style("stroke-width", "0.7px")
//           .style("paint-order", "stroke");
//       }
//     });
// }

// // ----- County Highlighting -----
// function updateSelected(parentG, state) {
//   // Ensure assignedInfo[state.id] exists
//   if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//   parentG.selectAll("path.county")
//     .classed("has-info", d => {
//       const info = assignedInfo[state.id][d.properties.STATE + d.properties.COUNTY];
//       return info && (info.name || info.number);
//     });
// }

// // ----- Assigned List -----
// function updateAssignedList(state) {
//   assignedList.innerHTML = "";
//   if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//   if (!countyNamesById[state.id]) countyNamesById[state.id] = {};
//   const fipsMap = countyNamesById[state.id];
//   const entries = Object.entries(assignedInfo[state.id] || {});
//   const sorted = entries.sort((a, b) => (fipsMap[a[0]] || "").localeCompare(fipsMap[b[0]] || ""));
//   if (sorted.length === 0) {
//     assignedList.innerHTML = "<li style='color:#888'>No names assigned yet.</li>";
//   } else {
//     for (const [fips, info] of sorted) {
//       const county = fipsMap[fips] || fips;
//       const li = document.createElement("li");
//       li.textContent = `${county} County: ${info.name} (Number: ${info.number})`;
//       assignedList.appendChild(li);
//     }
//   }
// }

// // ----- Navigation -----
// prevBtn.onclick = () => {
//   currentStateIndex = (currentStateIndex + states.length - 1) % states.length;
//   showState(currentStateIndex);
// };
// nextBtn.onclick = () => {
//   currentStateIndex = (currentStateIndex + 1) % states.length;
//   showState(currentStateIndex);
// };

// // ----- Firebase Sync -----
// function saveAssignmentsToFirebase() {
//   dbRef.set(assignedInfo);
// }
// function loadAssignmentsFromFirebase() {
//   dbRef.on("value", snapshot => {
//     const data = snapshot.val();
//     if (data) {
//       assignedInfo = data;
//       // Ensure all states are initialized
//       states.forEach(state => {
//         if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//       });
//       showState(currentStateIndex);
//     } else {
//       states.forEach(state => {
//         if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//       });
//       showState(currentStateIndex);
//     }
//   });
// }

// // ----- Initial Load -----
// showState(currentStateIndex);
// loadAssignmentsFromFirebase();




// --- Firebase Initialization ---
// const firebaseConfig = {
//   apiKey: "AIzaSyD6mwudmKbqTlpktEuQJygovz8HuBDz03A",
//   authDomain: "leads-cb634.firebaseapp.com",
//   databaseURL: "https://leads-cb634-default-rtdb.firebaseio.com/",
//   projectId: "leads-cb634",
//   storageBucket: "leads-cb634.appspot.com",
//   messagingSenderId: "481988754005",
//   appId: "1:481988754005:web:617706890dfea43efc72dc",
//   measurementId: "G-K86T7XYQYD"
// };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();
// const dbRef = db.ref("countyAssignments");

// // ----- PIN Code Logic -----
// const EDIT_PIN = "5689";
// let pinAuthorized = false;
// function requestPin() {
//   if (pinAuthorized) return;
//   let tries = 0;
//   while (tries < 3) {
//     const entered = prompt("Enter PIN to edit county assignments:");
//     if (entered === EDIT_PIN) {
//       pinAuthorized = true;
//       alert("Access granted.");
//       return;
//     } else {
//       tries++;
//       alert("Incorrect PIN.");
//     }
//   }
//   alert("Access denied. You can view the map but cannot edit assignments.");
//   pinAuthorized = false;
// }
// requestPin();

// // ----- Map Data -----
// const states = [
//   { id: "TN", name: "Tennessee", geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json", stateFips: "47" },
//   { id: "KY", name: "Kentucky", geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json", stateFips: "21" },
//   { id: "MO", name: "Missouri", geoJsonUrl: "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json", stateFips: "29" }
// ];

// let currentStateIndex = 0;
// let assignedInfo = {};
// let countyNamesById = {};
// // Robust initialization
// states.forEach(state => {
//   if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//   if (!countyNamesById[state.id]) countyNamesById[state.id] = {};
// });

// // ----- DOM Elements -----
// const stateTitle = document.getElementById('state-title');
// const stateLabel = document.getElementById('state-label');
// const prevBtn = document.getElementById('prev-state');
// const nextBtn = document.getElementById('next-state');
// const mapDiv = document.getElementById('map');
// const assignedList = document.getElementById('assigned-list');

// // ----- Utility Functions -----
// function truncateLabel(label, maxLen) {
//   if (label.length <= maxLen) return label;
//   return label.slice(0, maxLen - 1) + "…";
// }

// // ----- Main Map Rendering -----
// function showState(idx) {
//   const state = states[idx];
//   stateTitle.textContent = `${state.name} County Name Map`;
//   stateLabel.textContent = state.name;
//   d3.select("#map svg").remove();

//   fetch(state.geoJsonUrl)
//     .then(response => response.json())
//     .then(usCounties => {
//       const stateFeatures = usCounties.features.filter(f => f.properties.STATE === state.stateFips);
//       // Build FIPS to name lookup
//       let fipsMap = {};
//       stateFeatures.forEach(f => {
//         const fips = f.properties.STATE + f.properties.COUNTY;
//         let name = (f.properties.NAME || f.properties.name || "");
//         fipsMap[fips] = name;
//       });
//       countyNamesById[state.id] = fipsMap;
//       if (!assignedInfo[state.id]) assignedInfo[state.id] = {};

//       // Fixed map size for all states (shows whole state, not zoomed in)
//       const width = 1200, height = 500;
//       const featureCollection = {type: "FeatureCollection", features: stateFeatures};
//       const projection = d3.geoMercator()
//         .fitSize([width, height], featureCollection);
//       const path = d3.geoPath().projection(projection);

//       // Responsive SVG
//       const svg = d3.select("#map").append("svg")
//         .attr("viewBox", `0 0 ${width} ${height}`)
//         .attr("preserveAspectRatio", "xMidYMid meet")
//         .style("width", "100%")
//         .style("height", "auto")
//         .style("touch-action", "none");

//       // Zoom and pan
//       const mapContent = svg.append("g").attr("class", "map-content");
//       const zoom = d3.zoom()
//         .scaleExtent([1, 8])
//         .on("zoom", (event) => {
//           mapContent.attr("transform", event.transform);
//         });
//       svg.call(zoom);

//       // Draw counties
//       mapContent.selectAll("path")
//         .data(stateFeatures)
//         .join("path")
//         .attr("class", "county")
//         .attr("d", path)
//         .attr("data-fips", d => d.properties.STATE + d.properties.COUNTY)
//         .on("click", function(event, d) {
//           event.stopPropagation();
//           if (!pinAuthorized) {
//             alert("You are not authorized to edit. Reload the page and enter the PIN.");
//             return;
//           }
//           const fips = d.properties.STATE + d.properties.COUNTY;
//           const countyName = (countyNamesById[state.id] && countyNamesById[state.id][fips]) || fips;
//           const current = (assignedInfo[state.id] && assignedInfo[state.id][fips]) ? assignedInfo[state.id][fips] : {name: "", number: ""};

//           let person = prompt(`Enter name for ${countyName} County:`, current.name || "");
//           if (person === null) return;
//           person = person.trim();

//           let number = prompt(`Enter a number for ${countyName} County:`, current.number || "");
//           if (number === null) return;
//           number = number.trim();

//           if (person || number) {
//             assignedInfo[state.id][fips] = {name: person, number: number};
//           } else if (assignedInfo[state.id]) {
//             delete assignedInfo[state.id][fips];
//           }

//           saveAssignmentsToFirebase();
//           updateAssignedList(state);
//           updateSelected(mapContent, state);
//           updateCountyLabels(mapContent, state, path, stateFeatures);
//         });

//       updateAssignedList(state);
//       updateSelected(mapContent, state);
//       updateCountyLabels(mapContent, state, path, stateFeatures);
//     });
// }

// // ----- County Labels and Bubbles -----
// function updateCountyLabels(parentG, state, path, stateFeatures) {
//   parentG.selectAll("g.county-label-group").remove();
//   parentG.selectAll("g.county-label-group")
//     .data(stateFeatures)
//     .join("g")
//     .attr("class", "county-label-group")
//     .each(function(d) {
//       const group = d3.select(this);
//       const fips = d.properties.STATE + d.properties.COUNTY;
//       const countyName = (countyNamesById[state.id] && countyNamesById[state.id][fips]) || fips;
//       const assign = (assignedInfo[state.id] && assignedInfo[state.id][fips]) || {name: "", number: ""};
//       const centroid = path.centroid(d);

//       // Draw county name (static small readable font, always fits)
//       group.append("text")
//         .attr("class", "county-label")
//         .attr("x", centroid[0])
//         .attr("y", centroid[1])
//         .attr("text-anchor", "middle")
//         .attr("dominant-baseline", "central")
//         .text(countyName);

//       // Draw number bubble (if any) below name
//       if (assign.number) {
//         const boxWidth = 44, boxHeight = 34;
//         const boxY = centroid[1] + 18; // below the name

//         group.append("rect")
//           .attr("class", "county-number-box")
//           .attr("x", centroid[0] - boxWidth/2)
//           .attr("y", boxY - boxHeight/2)
//           .attr("width", boxWidth)
//           .attr("height", boxHeight)
//           .attr("rx", 13)
//           .attr("ry", 13);

//         group.append("text")
//           .attr("class", "county-number-text")
//           .attr("x", centroid[0])
//           .attr("y", boxY + 2)
//           .attr("text-anchor", "middle")
//           .attr("dominant-baseline", "central")
//           .text(assign.number);
//       }
//     });
// }

// // ----- County Highlighting -----
// function updateSelected(parentG, state) {
//   // Ensure assignedInfo[state.id] exists
//   if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//   parentG.selectAll("path.county")
//     .classed("has-info", d => {
//       const info = assignedInfo[state.id][d.properties.STATE + d.properties.COUNTY];
//       return info && (info.name || info.number);
//     });
// }

// // ----- Assigned List -----
// function updateAssignedList(state) {
//   assignedList.innerHTML = "";
//   if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//   if (!countyNamesById[state.id]) countyNamesById[state.id] = {};
//   const fipsMap = countyNamesById[state.id];
//   const entries = Object.entries(assignedInfo[state.id] || {});
//   const sorted = entries.sort((a, b) => (fipsMap[a[0]] || "").localeCompare(fipsMap[b[0]] || ""));
//   if (sorted.length === 0) {
//     assignedList.innerHTML = "<li style='color:#888'>No names assigned yet.</li>";
//   } else {
//     for (const [fips, info] of sorted) {
//       const county = fipsMap[fips] || fips;
//       const li = document.createElement("li");
//       li.textContent = `${county} County: ${info.name} (Number: ${info.number})`;
//       assignedList.appendChild(li);
//     }
//   }
// }

// // ----- Navigation -----
// prevBtn.onclick = () => {
//   currentStateIndex = (currentStateIndex + states.length - 1) % states.length;
//   showState(currentStateIndex);
// };
// nextBtn.onclick = () => {
//   currentStateIndex = (currentStateIndex + 1) % states.length;
//   showState(currentStateIndex);
// };

// // ----- Firebase Sync -----
// function saveAssignmentsToFirebase() {
//   dbRef.set(assignedInfo);
// }
// function loadAssignmentsFromFirebase() {
//   dbRef.on("value", snapshot => {
//     const data = snapshot.val();
//     if (data) {
//       assignedInfo = data;
//       // Ensure all states are initialized
//       states.forEach(state => {
//         if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//       });
//       showState(currentStateIndex);
//     } else {
//       states.forEach(state => {
//         if (!assignedInfo[state.id]) assignedInfo[state.id] = {};
//       });
//       showState(currentStateIndex);
//     }
//   });
// }

// // ----- Initial Load -----
// showState(currentStateIndex);
// loadAssignmentsFromFirebase();



// --- Firebase Initialization ---
const firebaseConfig = {
  apiKey: "AIzaSyD6mwudmKbqTlpktEuQJygovz8HuBDz03A",
  authDomain: "leads-cb634.firebaseapp.com",
  databaseURL: "https://leads-cb634-default-rtdb.firebaseio.com/",
  projectId: "leads-cb634",
  storageBucket: "leads-cb634.appspot.com",
  messagingSenderId: "481988754005",
  appId: "1:481988754005:web:617706890dfea43efc72dc",
  measurementId: "G-K86T7XYQYD"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const dbRef = db.ref("countyAssignments");

// ----- PIN Code Logic -----
const EDIT_PIN = "5689";
let pinAuthorized = false;
function requestPin() {
  if (pinAuthorized) return;
  let tries = 0;
  while (tries < 3) {
    const entered = prompt("Enter PIN to edit county assignments:");
    if (entered === EDIT_PIN) {
      pinAuthorized = true;
      alert("Access granted.");
      return;
    } else {
      tries++;
      alert("Incorrect PIN.");
    }
  }
  alert("Access denied. You can view the map but cannot edit assignments.");
  pinAuthorized = false;
}
requestPin();

// ----- Map Data -----
const states = [
  { id: "TN", name: "Tennessee", geoJsonUrl: "geojson-counties-fips.json", stateFips: "47" },
  { id: "KY", name: "Kentucky", geoJsonUrl: "geojson-counties-fips.json", stateFips: "21" },
  { id: "MO", name: "Missouri", geoJsonUrl: "geojson-counties-fips.json", stateFips: "29" },
  { id: "AR", name: "Arkansas", geoJsonUrl: "geojson-counties-fips.json", stateFips: "05" },
  { id: "KS", name: "Kansas", geoJsonUrl: "geojson-counties-fips.json", stateFips: "20" }
];

let currentStateIndex = 0;
let assignedInfo = {};
let countyNamesById = {};
// Robust initialization
states.forEach(state => {
  if (!assignedInfo[state.id] || typeof assignedInfo[state.id] !== "object") assignedInfo[state.id] = {};
  if (!countyNamesById[state.id] || typeof countyNamesById[state.id] !== "object") countyNamesById[state.id] = {};
});

// ----- DOM Elements -----
const stateTitle = document.getElementById('state-title');
const stateLabel = document.getElementById('state-label');
const prevBtn = document.getElementById('prev-state');
const nextBtn = document.getElementById('next-state');
const mapDiv = document.getElementById('map');
const assignedList = document.getElementById('assigned-list');

// ----- Utility Functions -----
function truncateLabel(label, maxLen) {
  if (label.length <= maxLen) return label;
  return label.slice(0, maxLen - 1) + "…";
}

// ----- Main Map Rendering -----
function showState(idx) {
  const state = states[idx];
  stateTitle.textContent = `${state.name} County Name Map`;
  stateLabel.textContent = state.name;
  d3.select("#map svg").remove();

  fetch(state.geoJsonUrl)
    .then(response => response.json())
    .then(usCounties => {
      const stateFeatures = usCounties.features.filter(f => f.properties.STATE === state.stateFips);
      // Build FIPS to name lookup
      let fipsMap = {};
      stateFeatures.forEach(f => {
        const fips = f.properties.STATE + f.properties.COUNTY;
        let name = (f.properties.NAME || f.properties.name || "");
        fipsMap[fips] = name;
      });
      countyNamesById[state.id] = fipsMap;
      if (!assignedInfo[state.id] || typeof assignedInfo[state.id] !== "object") assignedInfo[state.id] = {};
      if (!countyNamesById[state.id] || typeof countyNamesById[state.id] !== "object") countyNamesById[state.id] = {};

      // Fixed map size for all states (shows whole state, not zoomed in)
      const width = 1200, height = 500;
      const featureCollection = {type: "FeatureCollection", features: stateFeatures};
      const projection = d3.geoMercator()
        .fitSize([width, height], featureCollection);
      const path = d3.geoPath().projection(projection);

      // Responsive SVG
      const svg = d3.select("#map").append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .style("width", "100%")
        .style("height", "auto")
        .style("touch-action", "none");

      // Zoom and pan
      const mapContent = svg.append("g").attr("class", "map-content");
      const zoom = d3.zoom()
        .scaleExtent([1, 8])
        .on("zoom", (event) => {
          mapContent.attr("transform", event.transform);
        });
      svg.call(zoom);

      // Draw counties
      mapContent.selectAll("path")
        .data(stateFeatures)
        .join("path")
        .attr("class", "county")
        .attr("d", path)
        .attr("data-fips", d => d.properties.STATE + d.properties.COUNTY)
        .on("click", function(event, d) {
          event.stopPropagation();
          if (!pinAuthorized) {
            alert("You are not authorized to edit. Reload the page and enter the PIN.");
            return;
          }
          const fips = d.properties.STATE + d.properties.COUNTY;
          const countyName = (countyNamesById[state.id] && countyNamesById[state.id][fips]) || fips;
          const current = (assignedInfo[state.id] && assignedInfo[state.id][fips]) ? assignedInfo[state.id][fips] : {name: "", number: ""};

          let person = prompt(`Enter name for ${countyName} County:`, current.name || "");
          if (person === null) return;
          person = person.trim();

          let number = prompt(`Enter a number for ${countyName} County:`, current.number || "");
          if (number === null) return;
          number = number.trim();

          if (person || number) {
            assignedInfo[state.id][fips] = {name: person, number: number};
          } else if (assignedInfo[state.id]) {
            delete assignedInfo[state.id][fips];
          }

          saveAssignmentsToFirebase();
          updateAssignedList(state);
          updateSelected(mapContent, state);
          updateCountyLabels(mapContent, state, path, stateFeatures);
        });

      updateAssignedList(state);
      updateSelected(mapContent, state);
      updateCountyLabels(mapContent, state, path, stateFeatures);
    });
}

// ----- County Labels and Bubbles -----
function updateCountyLabels(parentG, state, path, stateFeatures) {
  parentG.selectAll("g.county-label-group").remove();
  parentG.selectAll("g.county-label-group")
    .data(stateFeatures)
    .join("g")
    .attr("class", "county-label-group")
    .each(function(d) {
      const group = d3.select(this);
      const fips = d.properties.STATE + d.properties.COUNTY;
      const countyName = (countyNamesById[state.id] && countyNamesById[state.id][fips]) || fips;
      const assign = (assignedInfo[state.id] && assignedInfo[state.id][fips]) || {name: "", number: ""};
      const centroid = path.centroid(d);

      // Draw county name (static small readable font, always fits)
      group.append("text")
        .attr("class", "county-label")
        .attr("x", centroid[0])
        .attr("y", centroid[1])
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .text(countyName);

      // Draw number bubble (if any) below name
      if (assign.number) {
        const boxWidth = 44, boxHeight = 34;
        const boxY = centroid[1] + 18; // below the name

        group.append("rect")
          .attr("class", "county-number-box")
          .attr("x", centroid[0] - boxWidth/2)
          .attr("y", boxY - boxHeight/2)
          .attr("width", boxWidth)
          .attr("height", boxHeight)
          .attr("rx", 13)
          .attr("ry", 13);

        group.append("text")
          .attr("class", "county-number-text")
          .attr("x", centroid[0])
          .attr("y", boxY + 2)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "central")
          .text(assign.number);
      }
    });
}

// ----- County Highlighting -----
function updateSelected(parentG, state) {
  if (!assignedInfo[state.id] || typeof assignedInfo[state.id] !== "object") assignedInfo[state.id] = {};
  parentG.selectAll("path.county")
    .classed("has-info", d => {
      const info = assignedInfo[state.id][d.properties.STATE + d.properties.COUNTY];
      return info && (info.name || info.number);
    });
}

// ----- Assigned List -----
function updateAssignedList(state) {
  assignedList.innerHTML = "";
  if (!assignedInfo[state.id] || typeof assignedInfo[state.id] !== "object") assignedInfo[state.id] = {};
  if (!countyNamesById[state.id] || typeof countyNamesById[state.id] !== "object") countyNamesById[state.id] = {};
  const fipsMap = countyNamesById[state.id];
  const entries = Object.entries(assignedInfo[state.id]);
  const sorted = entries.sort((a, b) => (fipsMap[a[0]] || "").localeCompare(fipsMap[b[0]] || ""));
  if (sorted.length === 0) {
    assignedList.innerHTML = "<li style='color:#888'>No names assigned yet.</li>";
  } else {
    for (const [fips, info] of sorted) {
      const county = fipsMap[fips] || fips;
      const li = document.createElement("li");
      li.textContent = `${county} County: ${info.name} (Number: ${info.number})`;
      assignedList.appendChild(li);
    }
  }
}

// ----- Navigation -----
prevBtn.onclick = () => {
  currentStateIndex = (currentStateIndex + states.length - 1) % states.length;
  showState(currentStateIndex);
};
nextBtn.onclick = () => {
  currentStateIndex = (currentStateIndex + 1) % states.length;
  showState(currentStateIndex);
};

// ----- Firebase Sync -----
function saveAssignmentsToFirebase() {
  dbRef.set(assignedInfo);
}
function loadAssignmentsFromFirebase() {
  dbRef.on("value", snapshot => {
    const data = snapshot.val();
    if (data) {
      assignedInfo = data;
      // Ensure all states are initialized
      states.forEach(state => {
        if (!assignedInfo[state.id] || typeof assignedInfo[state.id] !== "object") assignedInfo[state.id] = {};
      });
      showState(currentStateIndex);
    } else {
      states.forEach(state => {
        if (!assignedInfo[state.id] || typeof assignedInfo[state.id] !== "object") assignedInfo[state.id] = {};
      });
      showState(currentStateIndex);
    }
  });
}

// ----- Initial Load -----
showState(currentStateIndex);
loadAssignmentsFromFirebase();