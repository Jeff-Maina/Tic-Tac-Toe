var body = document.querySelector("body");

// player form appended to body
function detailsLogin(){
    body.innerHTML =`
    <section id="playerName">
    <h6 id= "error"></h6>
    <div id="p1input" class="details">
      <input type="text" id="name1" placeholder="X" required>
    </div>
    <div id="p2input" class="details">
      <input type="text" id="name2" placeholder="O" required>
    </div>
    <button type="submit" id ="btn">Continue</button>
  </section>
    `
    let button = document.getElementById("btn");
    button.addEventListener("click", ()=>{
        let input1 = document.getElementById("name1").value
        let input2 = document.getElementById("name2").value
       if(input1 !== ''&& input2 !== ''){
        appendGame(input1,input2)
       }
       else if(input1 === ''&& input2 === ''){
        document.getElementById("error").innerHTML = "*fill in all fields"
       }
    })
    
}
detailsLogin()

// append actual game
function appendGame(input1, input2){
body.innerHTML = ''
body.innerHTML = 
`
<section id = "everything">
<div id="presults">
<span id = "player1Span">
<h1 class="players" id="player1"><span id='p1'><h2>${input1}</h2></span></h1>
<h1 id = win1 >0</h1>
</span>
<br>
<span id = "player2Span">
<h1 class="players" id="player2"><span id='p2'><h2>${input2}</h2></span></h1>
<h1 id = win2 >0</h1>
</span>
</div>
<section id="main">
<div id="row1" class="row">
<div id="box1" onclick="appendValue(1)" class="box">
  <h1 id="ans1" class="ans">1</h1>
</div>
<div  id="box2" onclick="appendValue(2)" class="box">
  <h1 id="ans2" class="ans">2</h1>
</div>
<div id="box3" onclick="appendValue(3)" class="box">
  <h1 id="ans3" class="ans">3</h1>
</div>
</div>
<hr class="horizontal" id="h1" />
<hr class="vertical" id="v1" />
<hr class="vertical" id="v2" />
<div id="row2" class="row">
<div onclick="appendValue(4)"  id="box4" class="box">
  <h1 id="ans4" class="ans">4</h1>
</div>
<div onclick="appendValue(5)"  id="box5" class="box">
  <h1 id="ans5" class="ans">5</h1>
</div>
<div onclick="appendValue(6)"  id="box6" class="box">
  <h1 id="ans6" class="ans">6</h1>
</div>
</div>
<hr class="horizontal" id="h2" />
<div id="row3" class="row">
<div onclick="appendValue(7)"  id="box7" class="box">
  <h1 id="ans7" class="ans">7</h1>
</div>
<div onclick="appendValue(8)"  id="box8" class="box">
  <h1 id="ans8" class="ans">8</h1>
</div>
<div onclick="appendValue(9)"  id="box9" class="box">
  <h1 id="ans9" class="ans">9</h1>
</div>
</div>
</section>
</section>
`
confirmWin(box1, box2, box3, box4, box5, box6, box7, box8, box9,p1,p2,win1,win2)
}


// appends players choice on the clicked box
function appendValue(value) {
    let a1 = document.getElementById(`ans1`).textContent
    let a2 = document.getElementById(`ans2`).textContent
    let a3 = document.getElementById(`ans3`).textContent
    let a4 = document.getElementById(`ans4`).textContent
    let a5 = document.getElementById(`ans5`).textContent
    let a6 = document.getElementById(`ans6`).textContent
    let a7 = document.getElementById(`ans7`).textContent
    let a8 = document.getElementById(`ans8`).textContent
    let a9 = document.getElementById(`ans9`).textContent
    let answersArr = [a1,a2,a3,a4,a5,a6,a7,a8,a9]
    let X = answersArr.filter(item => item === "X")
    let O = answersArr.filter(item => item === "O")
    let box = document.getElementById(`box${value}`)
    box.setAttribute("onclick", "null")
    let answer = document.getElementById(`ans${value}`)
    if(X.length === 0 && O.length === 0){
     answer.innerHTML = ''
     answer.style.visibility = 'visible'
     box.style.backgroundColor = "#dc685a"
     answer.innerHTML = 'X'
    }
    else if(X.length > O.length){
    answer.innerHTML = ''
    answer.style.visibility = 'visible'
    box.style.backgroundColor = "#ecaf4f"
    answer.innerHTML = 'O'
    }
    else if(X.length === O.length){
        answer.innerHTML = ''
        answer.style.visibility = 'visible'
        box.style.backgroundColor = "#dc685a"
        answer.innerHTML = 'X'  
    }
   confirmWin()
}

//checks for a valid winning pattern
function confirmWin(){
    let initialScore1 = win1.textContent
    let initialScore2 = win2.textContent
    let a1 = document.getElementById(`ans1`).textContent
    let a2 = document.getElementById(`ans2`).textContent
    let a3 = document.getElementById(`ans3`).textContent
    let a4 = document.getElementById(`ans4`).textContent
    let a5 = document.getElementById(`ans5`).textContent
    let a6 = document.getElementById(`ans6`).textContent
    let a7 = document.getElementById(`ans7`).textContent
    let a8 = document.getElementById(`ans8`).textContent
    let a9 = document.getElementById(`ans9`).textContent
    let answersArr = [a1,a2,a3,a4,a5,a6,a7,a8,a9]
    let X = answersArr.filter(item => item === "X")
    let O = answersArr.filter(item => item === "O")
    if(a1 === a2 && a2 === a3){
        box1.style.cssText="background-color: #4a89dc;"
        box2.style.cssText="background-color: #4a89dc;"
        box3.style.cssText="background-color: #4a89dc;"
        if(a1 === 'X')
        {
            let win = win1.textContent
            let newScore = parseInt(win)
            newScore += 1
            win1.innerHTML = newScore;
        }
        else if(a1 === 'O'){
            let win = win2.textContent
            let newScore = parseInt(win)
            newScore += 1
            win2.innerHTML = newScore;
        }
        console.log('win')
        removeOnclick()
        awardPoints(win1,win2,p1,p2)
        startAgain()
    }
    else if(a4 === a5 && a5 === a6){
        console.log('win2')
        box4.style.cssText = "background-color: #4a89dc;"
        box5.style.cssText = "background-color: #4a89dc;"
        box6.style.cssText = "background-color: #4a89dc;"
        if(a4 === 'X')
        {
            let win = win1.textContent
            let newScore = parseInt(win)
            newScore += 1
            win1.innerHTML = newScore;
        }
        else if(a4 === 'O'){
            let win = win2.textContent
            let newScore = parseInt(win)
            newScore += 1
            win2.innerHTML = newScore;
        }
        removeOnclick()
        awardPoints(win1,win2,p1,p2)
        startAgain()
    }
    else if(a7 === a8 && a8 === a9){
        console.log('win3')
        box7.style.cssText ="background-color:  #4a89dc "
        box8.style.cssText ="background-color:  #4a89dc "
        box9.style.cssText ="background-color:  #4a89dc "
        if(a7 === 'X')
        {
            let win = win1.textContent
            let newScore = parseInt(win)
            newScore += 1
            win1.innerHTML = newScore;
        }
        else if(a7 === 'O'){
            let win = win2.textContent
            let newScore = parseInt(win)
            newScore += 1
            win2.innerHTML = newScore;
        }
        removeOnclick()
        awardPoints(win1,win2,p1,p2)
        startAgain()
    }
    else if(a1 === a4 && a4 === a7){
        console.log('win4')
        box1.style.cssText ="background-color:  #4a89dc "
        box4.style.cssText ="background-color:  #4a89dc "
        box7.style.cssText ="background-color:  #4a89dc "
        if(a1 === 'X')
        {
            let win = win1.textContent
            let newScore = parseInt(win)
            newScore += 1
            win1.innerHTML = newScore;
        }
        else if(a1 === 'O'){
            let win = win2.textContent
            let newScore = parseInt(win)
            newScore += 1
            win2.innerHTML = newScore;
        }
        removeOnclick()
        awardPoints(win1,win2,p1,p2)
        startAgain()
        // y2k
    }
    else if(a2 === a5 && a5 === a8){
        console.log('win5')
        box2.style.cssText ="background-color:  #4a89dc "
        box5.style.cssText ="background-color:  #4a89dc "
        box8.style.cssText ="background-color:  #4a89dc "
        if(a2 === 'X')
        {
            let win = win1.textContent
            let newScore = parseInt(win)
            newScore += 1
            win1.innerHTML = newScore;
        }
        else if(a2 === 'O'){
            let win = win2.textContent
            let newScore = parseInt(win)
            newScore += 1
            win2.innerHTML = newScore;
        }
        removeOnclick()
        awardPoints(win1,win2,p1,p2)
        startAgain()
    }
    else if(a3 === a6 && a6 === a9){
        console.log('win6')
        box3.style.cssText ="background-color:  #4a89dc "
        box6.style.cssText ="background-color:  #4a89dc "
        box9.style.cssText ="background-color:  #4a89dc "
        if(a3 === 'X')
        {
            let win = win1.textContent
            let newScore = parseInt(win)
            newScore += 1
            win1.innerHTML = newScore;
        }
        else if(a3 === 'O'){
            let win = win2.textContent
            let newScore = parseInt(win)
            newScore += 1
            win2.innerHTML = newScore;
        }
        removeOnclick()
        awardPoints(win1,win2,p1,p2)
        startAgain()
    }
    else if(a1 === a5 && a5 === a9){
        console.log('win7')
        box1.style.cssText ="background-color:  #4a89dc "
        box5.style.cssText ="background-color:  #4a89dc "
        box9.style.cssText ="background-color:  #4a89dc "
        if(a1 === 'X')
        {
            let win = win1.textContent
            let newScore = parseInt(win)
            newScore += 1
            win1.innerHTML = newScore;
        }
        else if(a1 === 'O'){
            let win = win2.textContent
            let newScore = parseInt(win)
            newScore += 1
            win2.innerHTML = newScore;
        }
        removeOnclick()
        awardPoints(win1,win2,p1,p2)
        startAgain()
    }
    else if(a3 === a5 && a5 === a7){
        console.log('win8')
        box3.style.cssText ="background-color:  #4a89dc "
        box5.style.cssText ="background-color:  #4a89dc "
        box7.style.cssText ="background-color:  #4a89dc "
        if(a3 === 'X')
        {
            let win = win1.textContent
            let newScore = parseInt(win)
            newScore += 1
            win1.innerHTML = newScore;
        }
        else if(a3 === 'O'){
            let win = win2.textContent
            let newScore = parseInt(win)
            newScore += 1
            win2.innerHTML = newScore;
        }
        removeOnclick()
        awardPoints(win1,win2,p1,p2)
        startAgain()
    }
    let newScore1 = win1.textContent
    let newScore2 = win2.textContent
    if((parseInt(X.length,10) + parseInt(O.length,10)) === 9 && initialScore1 === newScore1 && initialScore2 === newScore2)
     {
        startAgain()
    }
}
function awardPoints(win1,win2,p1,p2){
    if(parseInt(win1.textContent, 10) > parseInt(win2.textContent, 10)){
        let player1 = p1.textContent;
        let player2 = p2.textContent;
        let score1= win1.textContent;
        let score2 = win2.textContent;
        win1.innerHTML = score1;
        win2.innerHTML = score2;
       }
       if(parseInt(win1.textContent, 10) < parseInt(win2.textContent, 10)){
        let player1 = p1.textContent;
        let player2 = p2.textContent;
        let score1= win1.textContent;
        let score2 = win2.textContent;
        win1.innerHTML = score2;
        win2.innerHTML = score1;
       }
}
function removeOnclick(){
    let valueArray =[1,2,3,4,5,6,7,,9]
    let box;
    for(let i = 1; i <= valueArray.length; i++){
        let box = document.getElementById(`box${i}`)
        box.setAttribute('onclick', 'null');
    }
}
function startAgain(){
    setTimeout(()=>{
        let valueArray = [1,2,3,4,5,6,7,8,9];
        for (var i = 0;i < valueArray.length;i++) {
            let answer = document.getElementById(`ans${valueArray[i]}`);
            answer.classList.toggle("ans2")
            answer.style.visibility = 'hidden';
            answer.innerHTML = `${(i+1)}`
        }
        let box;
        for(let i = 1; i <= valueArray.length; i++){
            let box = document.getElementById(`box${i}`)
            box.style.backgroundColor = '#78bec5'
            box.setAttribute('onclick', `appendValue(${i})`);
        }},1000)
}