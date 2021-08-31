export class Graph {
    private _vertices = new Set();
    private _adjacentList = new Map();

    public get vertices() {
        return Array.from(this._vertices);
    }

    public get adjacentList() {
        const list:any = {};

        this._adjacentList.forEach((val: string, key: string) => {
            list[key] = Array.from(val)
        });

        return list;
    }

    addVertex(vertex: string|null = null) {
        if (vertex !== null && vertex !== undefined) {
            // adding to vertices Set()
            this._vertices.add(vertex);
            // adding value to adjacency list map also. Set() is used to make sure everything is unique
            this._adjacentList.set(vertex, new Set());
          }
    }


    addEdge(vertex1:string|null = null, vertex2:string|null = null, directed:boolean = true) {
        if (
          // check if vertex are not null and are different from each other
          vertex1 !== null &&
          vertex1 !== undefined &&
          vertex2 !== null &&
          vertex2 !== undefined &&
          vertex1 !== vertex2
        ) {
          // check if list does not have them already
          if (!this._adjacentList.has(vertex1)) {
            this.addVertex(vertex1);
          }
    
          if (!this._adjacentList.has(vertex2)) {
            this.addVertex(vertex2);
          }
    
          this._adjacentList.get(vertex1).add(vertex2);
    
          // if directed, create a line from vertex2 to vertex1
          if (directed) {
            this._adjacentList.get(vertex2).add(vertex1);
          }
        }
      }
      showRawVertices() {
        return this._vertices;
      }
    
      showRawAdjacencyList() {
        return this._adjacentList;
      }
    
      toString():string {
        let str = "";
    
        this._adjacentList.forEach((val, key) => {
          str += `inputReferences ${key} outputReferences -> ${Array.from(val).join(
            ", "
          )};\n`;
        });
    
        return str;
      }
}