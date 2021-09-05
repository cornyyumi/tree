function Branch(begin, end){
    this.begin = begin;
    this.end = end;
    this.grown = false;
    var f= 0;
    var h= 0;

    this.isRoot;
    this.isRight;

    this.show = function(){
        if (this.isRoot){
            stroke(255);
            line(this.begin.x, this.begin.y, this.end.x, this.end.y);
            if (f>this.end.y){
                f= f-1;
            }
        }
        else if (this.isRight) {
            stroke('blue');
            line(this.begin.x, this.begin.y, this.end.x, this.end.y);
            if (f>this.end.y){
                f= f-1;
                h=h+1;
            }

        } else if (!this.root && !this.isRight) {
            stroke('red');
            line(this.begin.x, this.begin.y, this.begin.x + h, this.begin.y + f);
            if (this.begin.x + h > this.end.x){
                h= h-1;
            }
            if (this.begin.y + f > this.end.y){
                f= f-1;
            }
            

    

        }

        

    }


    this.branchR = function(){
        var direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate(PI/4);
        direction.mult(0.67);
        var newEnd = p5.Vector.add(this.end, direction);
        var b = new Branch(this.end, newEnd);
        b.isRoot=false;
        b.isRight=true;
        return b;
    }


    this.branchL = function(){
        var direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate(-PI/4);
        direction.mult(0.67);
        var newEnd = p5.Vector.add(this.end, direction);
        var b = new Branch(this.end, newEnd);
        b.isRoot=false;
        b.isRight=false;
        return b;
    }
    
}