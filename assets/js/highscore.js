var highScoreList = JSON.parse(localStorage.getItem(".scoresList"))
var clearscore = document.querySelector(".clearscore")
console.log(highScoreList)
var listEl = document.querySelector(".listEl")

clearscore.addEventListener("click", function(event){
    localStorage.clear();
})

for (var i; i < highScoreList.length; i++){
    listEl.innerHTML += '<tr><td>' + highScoreList[i].playerName + '</td><td>' + highScoreList[i].timeTake + '</td><td>' + highScoreList.score + '</td></tr>'
}