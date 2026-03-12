emotions = [
    ['🙂','🥰','😴','😤'],
    ['😭','😤','🤯','🤩'],
    ['😶‍🌫️','🙂','😶‍🌫️','😭'],
    ['🤯','😴','🤩','🥰'],
]
let display = document.getElementById('display');
let displayTable = document.getElementById('displayTable');
let html = '';
let firstCell = '';
let firstRow = -1;
let firstCol = -1;
let matches = 0;
let attempts = 0;
displayTable.innerHTML = html
function showGame(){
    display.style.visibility = 'visible'
    displayStats()
    for(i=0;i<emotions.length;i++){
        html+=`<tr>`
        for(j=0;j<emotions.length;j++){
            html+=`<td id='cell-${i}-${j}' onclick='checkCell(this,${i},${j})'>?</td>`
        }
        html+=`</tr>`
    }
    displayTable.innerHTML = html
    //reset counters/state
    firstCell=null;
    firstRow=-1;
    firstCol=-1;
    matches=0;
    attempts=0;
    displayStats();
    document.getElementById('message').innerHTML = ''
}
function checkCell(cell,row,col){
    if(cell.innerHTML!=="?"){
        return;
    }
    cell.innerHTML = emotions[row][col]


    if (firstRow === -1){
        firstCell = cell;
        firstRow = row;
        firstCol = col;
        document.getElementById('message').innerHTML = ""
        console.log(firstCell,firstRow,firstCol);
    }

    else {
        attempts ++
        if(emotions[firstRow][firstCol] === emotions[row][col]){
            document.getElementById("message").innerHTML="Match Found!"
            matches ++
        }
        else{
        firstCell.innerHTML= "?";
        cell.innerHTML = "?";
        document.getElementById("message").innerHTML="Try Again!"
    }
    firstCell=null;
    firstRow=-1;
    firstCol=-1
    displayStats()
    }
    
}

function displayStats(){
    document.getElementById('stats').innerHTML = 
    `Matches: ${matches} | Attempts: ${attempts}`
}