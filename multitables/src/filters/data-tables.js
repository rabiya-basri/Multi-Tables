import React from "react";
import Plot from 'react-plotly.js';

const DataTables = () => {


    const renderDataTable = () => {
        return (
            <Plot
                // data={[
                //     {
                //         x: [1, 2, 3],
                //         y: [2, 6, 3],
                //         type: 'scatter',
                //         mode: 'lines+markers',
                //         marker: { color: 'red' },
                //     },
                //     { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                // ]}
                // layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
                data={
                    [
                        {
                            type: 'table',
                            columnwidth: [150, 200, 200, 150],
                            columnorder: [1, 2, 3, 4, 5],//colums will decide based on months
                            header: {
                                values: [['Date', 'actual'], ['Date', 'predicted']],
                                align: "center",
                                line: { width: 1, color: 'rgb(50, 50, 50)' },
                                fill: { color: ['rgb(235, 100, 230)'] },
                                font: { family: "Arial", size: 11, color: "white" }
                            },
                            cells: {
                                values: [['a1', 'a2', 'a3'], ['p1', 'p2', 'p3'], ['c1', 'c2', 'c3'], ['d1', 'd2', 'd3'], ['d1', 'd2', 'd3']],
                                align: ["center", "center"],
                                line: { color: "black", width: 1 },
                                fill: { color: ['rgb(235, 193, 238)', 'rgba(228, 222, 249,0.65)'] },
                                font: { family: "Arial", size: 10, color: ["black"] }
                            },
                            xaxis: 'x',
                            yaxis: 'y',
                            domain: { x: [0, 0.4], y: [0, 1] },
                        },
                    ]
                    // [
                    //     {
                    //         x: [1, 2, 3],
                    //         y: [2, 6, 3],
                    //         type: 'scatter',
                    //         mode: 'lines+markers',
                    //         marker: { color: 'red' },
                    //     },
                    //     { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                    // ],
                    //layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
                }
            />
        )
    }
    return (
        <>
            {renderDataTable()}
        </>
    )
}
export default DataTables;

