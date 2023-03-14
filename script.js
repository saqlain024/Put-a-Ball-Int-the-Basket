let basket = $('#basket');
let balls = document.getElementById('balls');
let add_x=0;
let add_y=0;

let color = [
    // "red","green","black","pink"
    'red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson'
]

let i  = 0;
let count=1;

function AddBalls() {

    $("#basket").append(`<div id="balls" style="background-color: ${color[i]};">${count}</div>`);
    i++;
    if(i == color.length){
        i=0;
    }
    count++;



    // let corr  = balls.getBoundingClientRect();
    // console.log(corr);
    // let curr_x = corr.x + add_x;
    // console.log(curr_x);
    // let curr_y = corr.y + add_y ;
    // console.log(curr_y);
    
    
    // if((curr_x <= (basket.clientWidth-balls.clientWidth)) && (curr_y <= (basket.clientHeight-balls.clientH)))
    // {
       
    //     $('#balls').css("display","flex");
    //     $('#balls').css("width","curr_x + balls.clientWidth");
    //     $('#balls').css("height","curr_y + balls.clientHeight");
    //     // balls.style.display = 'flex';
    //     // console.log("inside if");

        
    // }
    // else if(curr_x >= (basket.clientWidth-balls.clientWidth)){
    //     add_y += clientWidth;
    // }
    // else if(curr_y >= (basket.clientHeight-balls.clientHeight)){
    //     add_y += clientHeight;
    // }
};


$('#add-ball').click(function () {
    console.log("ball clicked");
    AddBalls();
});