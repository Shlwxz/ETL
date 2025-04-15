# 🧪 Belly Button Biodiversity Dashboard

This project is an interactive web-based dashboard built with D3.js and Plotly.js to visualize microbial data collected from human navels. The goal is to allow users to explore the bacterial species found in different individuals.

## 🔬 Project Features

- A **dropdown menu** to select individual participants
- A **bar chart** showing the top 10 OTUs (Operational Taxonomic Units) for each participant
- A **bubble chart** visualizing all OTUs with marker size and color
- A **demographic panel** showing participant metadata
- Dynamic updates of all charts and data when a new sample is selected

## 🚀 Technologies Used

- HTML/CSS
- JavaScript (ES6+)
- D3.js
- Plotly.js
- GitHub Pages (for deployment)

## 📊 Data Source

- Data is pulled from this hosted JSON file:  
  `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`

## 🔁 How It Works

1. The dashboard loads with a default participant’s data.
2. When the user selects a new ID from the dropdown:
   - The bar chart and bubble
