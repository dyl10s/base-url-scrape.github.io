function plotData(id, items, parents) {
    data = [{
        type: "treemap",
        labels: items,
        parents: parents
    }];

    Plotly.newPlot(id, data);
}