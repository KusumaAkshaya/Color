var color = ['violet', 'indigo', 'blue' ,'green', 'yellow', 'orange', 'red']

function changeColor()
 {
    var num= Math.floor(Math.random()*(color.length))
    document.getElementById("target").style.backgroundColor = color[num];

}