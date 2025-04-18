
// Starter function to initialize dashboard
function initDashboard() {
  const selector = d3.select("#selDataset");

  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const subjectIds = data.names;

    // Populate dropdown
    subjectIds.forEach((id) => {
      selector.append("option").text(id).property("value", id);
    });

    // Build initial plots and metadata with the first ID
    const firstId = subjectIds[0];
    updateCharts(firstId);
    updateMetadata(firstId);
  });
}

// Function to update charts
function updateCharts(sampleId) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const samples = data.samples;
    const result = samples.find(sample => sample.id === sampleId);

    const otu_ids = result.otu_ids.slice(0, 10).reverse();
    const sample_values = result.sample_values.slice(0, 10).reverse();
    const otu_labels = result.otu_labels.slice(0, 10).reverse();

    // Bar chart
    const barTrace = {
      x: sample_values,
      y: otu_ids.map(id => `OTU ${id}`),
      text: otu_labels,
      type: "bar",
      orientation: "h",
      marker: { color: "#5DADE2" }
    };

    Plotly.newPlot("bar", [barTrace], {
      title: "Top 10 OTUs Found",
      margin: { t: 30, l: 100 }
    });

    // Bubble chart
    const bubbleTrace = {
      x: result.otu_ids,
      y: result.sample_values,
      text: result.otu_labels,
      mode: "markers",
      marker: {
        size: result.sample_values,
        color: result.otu_ids,
        colorscale: "Earth"
      }
    };

    Plotly.newPlot("bubble", [bubbleTrace], {
      title: "OTU Samples per Individual",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Value" },
      margin: { t: 50 }
    });
  });
}

// Function to update metadata
function updateMetadata(sampleId) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const metadata = data.metadata;
    const result = metadata.find(meta => meta.id == sampleId);

    const panel = d3.select("#sample-metadata");
    panel.html("");

    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// Function tied to dropdown onchange
function optionChanged(newId) {
  updateCharts(newId);
  updateMetadata(newId);
}

// Initialize dashboard on load
initDashboard();
