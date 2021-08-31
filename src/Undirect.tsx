import { Graph } from "./Graph";
import "./App.css";
import { useState, useEffect } from "react";

const graph2 = new Graph();

function addEdge(node1:string, node2: string) {
  graph2.addEdge(node1, node2);
  console.log(graph2.adjacentList);
}

function Undirect() {
  const [edge1, setEdge1] = useState<string>("");
  const [edge2, setEdge2] = useState<string>("");
  const [node, setNode] = useState<string>("");
  const [searchNode, setSearchNode] = useState<string>("");

  // first part
  graph2.addVertex("2.A");
  graph2.addVertex("2.B");
  graph2.addVertex("2.C");
  graph2.addVertex("2.D");
  graph2.addVertex("2.E");
  graph2.addVertex("2.F");
  graph2.addVertex("2.G");

  // second part
  graph2.addEdge("2.A", "2.B", true);
  graph2.addEdge("2.A", "2.C", true);
  graph2.addEdge("2.B", "2.D", true);
  graph2.addEdge("2.B", "2.E", true);
  graph2.addEdge("2.E", "2.C", false);
  graph2.addEdge("2.C", "2.F", true);
  graph2.addEdge("2.C", "2.G", true);

  useEffect(() => {
    let size = Object.keys(graph2.adjacentList).length;
    console.warn(`Direct nodes: ${size}`, graph2.adjacentList);
    console.log(graph2.toString());
  }, []);

  function showConnections(searchNode: string) {
    if (searchNode === "") throw "emtpy";

    let result;
    result = graph2.showRawAdjacencyList().get(searchNode);
    let arr = Array.from(result);
    arr.shift();

    console.log(
      `Node ${searchNode} directly refers to: 
        ${JSON.stringify(arr.length)} other nodes`
    );
  }

  return (
    <div className="App">
      <p style={{ background: "orange" }}>
        Please use Developer Console for reading information
      </p>
      <h1>Direct graph</h1>
      <section className="addnode">
        <h2>ADD NODE</h2>
        <label>NODE</label>
        <input type="text" onChange={(e) => setNode(e.target.value)} />
        <button onClick={() => graph2.addVertex(node)}>Add</button>
      </section>
      <section className="addedge">
        <h2>ADD EDGE</h2>
        <label>NODE #1</label>
        <input
          placeholder="node"
          value={edge1}
          onChange={(e) => setEdge1(e.target.value)}
        />
        <label>NODE #2</label>
        <input
          placeholder="node"
          value={edge2}
          onChange={(e) => setEdge2(e.target.value)}
        />
        <button onClick={() => addEdge(edge1, edge2)}>Add Edge</button>
      </section>
      <section className="overview">
        <h2>OVERVIEW</h2>
        <label>Enter node</label>
        <input
          type="text"
          style={{ textTransform: "uppercase" }}
          onChange={(e) => setSearchNode(e.target.value.toUpperCase())}
        ></input>
        <button onClick={() => showConnections(searchNode)}>
          Show connections
        </button>
      </section>
      <section style={{ margin: "200px" }} />
    </div>
  );
}

export default Undirect;