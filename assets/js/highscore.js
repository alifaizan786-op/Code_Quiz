var highScoreList = JSON.parse(localStorage.getItem("scoresList"))
var clearscore = document.querySelector(".clearscore")
console.log(highScoreList)
var listEl = document.querySelector(".listEl")

clearscore.addEventListener("click", function(event){
    localStorage.clear();
    location.reload();
})

console.log(highScoreList);

for (var i = 0 ; i < highScoreList.length; i++){
    listEl.innerHTML += '<tr><td>' + highScoreList[i].playerName + '</td><td>' + highScoreList[i].timeTake + '</td><td>' + highScoreList[i].score + '</td></tr>'
}