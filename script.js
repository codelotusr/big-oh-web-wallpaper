var cheatsheets = [
	`
    <h2>Data Structures</h2>
    <table>
        <thead>
            <tr>
                <th>Data Structure</th>
                <th colspan="8">Time Complexity</th>
                <th>Space Complexity</th>
            </tr>
            <tr>
                <th></th>
                <th colspan="4">Average</th>
                <th colspan="4">Worst</th>
                <th>Worst</th>
            </tr>
            <tr>
                <th></th>
                <th>Indexing</th>
                <th>Search</th>
                <th>Insertion</th>
                <th>Deletion</th>
                <th>Indexing</th>
                <th>Search</th>
                <th>Insertion</th>
                <th>Deletion</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Array</td>
                <td class="excellent">Θ(1)</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="excellent">O(1)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Stack</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="excellent">Θ(1)</td>
                <td class="excellent">Θ(1)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="excellent">O(1)</td>
                <td class="excellent">O(1)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Queue</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="excellent">Θ(1)</td>
                <td class="excellent">Θ(1)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="excellent">O(1)</td>
                <td class="excellent">O(1)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Singly-Linked List</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Doubly-Linked List</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Skip List</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="bad">O(n log(n))</td>
            </tr>
            <tr>
                <td>Hash Table</td>
                <td>-</td>
                <td class="excellent">Θ(1)</td>
                <td class="excellent">Θ(1)</td>
                <td class="excellent">Θ(1)</td>
                <td>-</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Binary Search Tree</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Cartesian Tree</td>
                <td>-</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td>-</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>B-Tree</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>AVL Tree</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">O(log n)</td>  
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Red-Black Tree</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Splay Tree</td>
                <td>-</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td>-</td>
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="good">O(log n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>KD Tree</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="good">Θ(log n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
                <td class="fair">O(n)</td>
            </tr>
        </tbody>
    </table>
    `,
	`
    <h2>Searching Algorithms</h2>
    <table>
        <thead>
            <tr>
                <th>Algorithm</th>
                <th>Data Structure</th>
                <th colspan="2">Time Complexity</th>
                <th>Space Complexity</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Average</th>
                <th>Worst</th>
                <th>Worst</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Depth First Search (DFS)</td>
                <td>Graph of |V| vertices and |E| edges</td>
                <td class="good">Θ(|V| + |E|)</td>
                <td class="good">O(|V| + |E|)</td>
                <td class="good">O(|V|)</td>
            </tr>
            <tr>
                <td>Breadth First Search (BFS)</td>
                <td>Graph of |V| vertices and |E| edges</td>
                <td class="good">Θ(|V| + |E|)</td>
                <td class="good">O(|V| + |E|)</td>
                <td class="good">O(|V|)</td>
            </tr>
            <tr>
                <td>Binary Search</td>
                <td>Sorted array of n elements</td>
                <td class="good">Θ(log n)</td>
                <td class="good">O(log n)</td>
                <td class="excellent">O(1)</td>
            </tr>
            <tr>
                <td>Linear Search (Brute Force)</td>
                <td>Array of n elements</td>
                <td class="fair">Θ(n)</td>
                <td class="fair">O(n)</td>
                <td class="excellent">O(1)</td>
            </tr>
            <tr>
                <td class="wrap-text">Shortest path by Dijkstra,<br/>using a Min-heap as priority queue</td>
                <td>Graph of |V| vertices and |E| edges</td>
                <td class="good">Θ((|V| + |E|) log |V|)</td>
                <td class="good">O((|V| + |E|) log |V|)</td>
                <td class="good">O(|V|)</td>
            </tr>
            <tr>
                <td class="wrap-text">Shortest path by Dijkstra,<br/>using an unsorted array as priority queue</td>
                <td>Graph of |V| vertices and |E| edges</td>
                <td class="fair">Θ(|V|^2)</td>
                <td class="fair">O(|V|^2)</td>
                <td class="good">O(|V|)</td>
            </tr>
            <tr>
                <td>Shortest path by Bellman-Ford</td>
                <td>Graph of |V| vertices and |E| edges</td>
                <td class="fair">Θ(|V| |E|)</td>
                <td class="fair">O(|V| |E|)</td>
                <td class="good">O(|V|)</td>
            </tr>
        </tbody>
    </table>
    `,
	`
    <h2>Sorting Algorithms</h2>
    <table>
        <thead>
            <tr>
                <th>Algorithm</th>
                <th>Data Structure</th>
                <th colspan="3">Time Complexity</th>
                <th>Auxiliary Space Complexity</th>
            </tr>
                <th></th>
                <th></th>
                <th>Best</th>
                <th>Average</th>
                <th>Worst</th>
                <th>Worst</th>
            </tr>
            <tr>
                <td>Quicksort</td>
                <td>Array of n elements</td>
                <td class="bad">Ω(n log n)</td>
                <td class="bad">Θ(n log n)</td>
                <td class="horrible">O(n^2)</td>
                <td class="good">O(log n)</td>
            </tr>
            <tr>
                <td>Mergesort</td>
                <td>Array of n elements</td>
                <td class="bad">Ω(n log n)</td>
                <td class="bad">Θ(n log n)</td>
                <td class="bad">O(n log n)</td>
                <td class="fair">O(n)</td>
            </tr>
            <tr>
                <td>Heapsort</td>
                <td>Array of n elements</td>
                <td class="bad">Ω(n log n)</td>
                <td class="bad">Θ(n log n)</td>
                <td class="bad">O(n log n)</td>
                <td class="excellent">O(1)</td>
            </tr>
            <tr>
                <td>Bubble Sort</td>
                <td>Array of n elements</td>
                <td class="good">Ω(n)</td>
                <td class="horrible">Θ(n^2)</td>
                <td class="horrible">O(n^2)</td>
                <td class="excellent">O(1)</td>
            </tr>
            <tr>
                <td>Insertion Sort</td>
                <td>Array of n elements</td>
                <td class="good">Ω(n)</td>
                <td class="horrible">Θ(n^2)</td>
                <td class="horrible">O(n^2)</td>
                <td class="excellent">O(1)</td>
            </tr>
            <tr>
                <td>Selection Sort</td>
                <td>Array of n elements</td>
                <td class="horrible">Ω(n^2)</td>
                <td class="horrible">Θ(n^2)</td>
                <td class="horrible">O(n^2)</td>
                <td class="excellent">O(1)</td>
            </tr>
            <tr>
                <td>Bucket Sort</td>
                <td>Array of n elements</td>
                <td class="fair">Ω(n + k)</td>
                <td class="fair">Θ(n + k)</td>
                <td class="horrible">O(n^2)</td>
                <td class="fair">O(n + k)</td>
            </tr>
            <tr>
                <td>Radix Sort</td>
                <td>Array of n elements</td>
                <td class="fair">Ω(nk)</td>
                <td class="fair">Θ(nk)</td>
                <td class="fair">O(nk)</td>
                <td class="fair">O(n + k)</td>
            </tr>
        </thead>
    `,
];

var currentIndex = 0;

function nextImage() {
	currentIndex = (currentIndex + 1) % cheatsheets.length;
	document.getElementById("cheatsheet").innerHTML = cheatsheets[currentIndex];
}

function previousImage() {
	currentIndex = (currentIndex - 1 + cheatsheets.length) % cheatsheets.length;
	document.getElementById("cheatsheet").innerHTML = cheatsheets[currentIndex];
}

document.getElementById("cheatsheet").innerHTML = cheatsheets[currentIndex];

function updateClock() {
	var now = new Date();
	var hours = String(now.getHours()).padStart(2, "0");
	var minutes = String(now.getMinutes()).padStart(2, "0");
	var seconds = String(now.getSeconds()).padStart(2, "0");
	var day = String(now.getDate()).padStart(2, "0");
	var month = String(now.getMonth() + 1).padStart(2, "0");
	var year = now.getFullYear();
	var formattedTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
	document.getElementById("clock").innerText = formattedTime;
}

setInterval(updateClock, 1000);

updateClock();
