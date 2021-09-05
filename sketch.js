
var tree = [];
function setup(){
    createCanvas(400, 400);
    var a = createVector(width/2, height);
    var b = createVector(width/2, height-100);
    root = new Branch(a, b);

    tree[0]=root;
}


function mousePressed(){
    for (var i = tree.length - 1 ; i>=0 ; i--){
        tree.push(tree[i].branchR());
        tree.push(tree[i].branchL());

    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function draw(){
    background(51);

    for (var i = 0 ; i < tree.length ; i++){
        tree[i].show();
    }
}

