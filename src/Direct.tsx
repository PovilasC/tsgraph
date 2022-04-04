import { Graph } from "./Graph";
import "./App.css";
import { useState, useEffect } from "react";

const graph = new Graph();

function addEdge(node1:string, node2: string) {
  graph.addEdge(node1, node2);
  console.log(graph.adjacentList);
}

function Direct() {
  const [edge1, setEdge1] = useState<string>("");
  const [edge2, setEdge2] = useState<string>("");
  const [node, setNode] = useState<string>("");
  const [searchNode, setSearchNode] = useState<string>("");

  graph.addVertex("1.A");
  graph.addVertex("1.B");
  graph.addVertex("1.C");
  graph.addVertex("1.D");
  graph.addVertex("1.E");
  graph.addVertex("1.F");
  graph.addVertex("1.G");
  graph.addVertex("1.H");

  // first part
  graph.addEdge("1.A", "1.B", true);
  graph.addEdge("1.A", "1.C", true);
  graph.addEdge("1.B", "1.D", true);
  graph.addEdge("1.B", "1.E", true);
  graph.addEdge("1.B", "1.F", true);

  // second part
  graph.addEdge("1.A", "1.C", true);
  graph.addEdge("1.C", "1.G", true);
  graph.addEdge("1.G", "1.J", true);
  graph.addEdge("1.G", "1.H", true);

  useEffect(() => {
    let size = Object.keys(graph.adjacentList).length;
    console.warn(`Direct nodes: ${size}`, graph.adjacentList);
    console.log(graph.toString());
  }, []);

  function showConnections(searchNode: string) {
    if (searchNode === "") throw "emtpy";

    let result;
    result = graph.showRawAdjacencyList().get(searchNode);
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
        <button onClick={() => graph.addVertex(node)}>Add</button>
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



export default Direct;
