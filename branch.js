function Branch(begin, end){
    this.begin = begin;
    this.end = end;

    this.show = function(){
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branchR = function(){
        var direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate(PI/4);
        direction.mult(0.67);
        var newEnd = p5.Vector.add(this.end, direction);
        var b = new Branch(this.end, newEnd);
        return b;
    }


    this.branchL = function(){
        var direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate(-PI/4);
        direction.mult(0.67);
        var newEnd = p5.Vector.add(this.end, direction);
        var b = new Branch(this.end, newEnd);
        return b;
    }
}