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
    <h2>Sorting Algorithms</h2>
    <table>
        <thead>
            <tr>
                <th>Sorting Algorithms</th>
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
    `,
	`
    <h2>Sorting Algorithms</h2>
    <table>
        <thead>
            <tr>
                <th>Sorting Algorithms</th>
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
    `,
	`
    <h2>Sorting Algorithms</h2>
    <table>
        <thead>
            <tr>
                <th>Sorting Algorithms</th>
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
    `,
	`
    <h2>Sorting Algorithms</h2>
    <table>
        <thead>
            <tr>
                <th>Sorting Algorithms</th>
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
