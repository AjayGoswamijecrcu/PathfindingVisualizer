 export function bfs(graph, startNode) {
    let queue = [startNode];
    let visited = {};
    visited[startNode] = true;
  
    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode);
  
      let neighbors = graph[currentNode];
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
//  