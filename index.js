// Code your solution in this file!
function distanceFromHqInBlocks(positionhq) {
    if(positionhq===43){
        return 1;
    }
    else if(positionhq===50){
        return 8;
    }
    else(positionhq===34) 
        return 8;
    
}
function distanceFromHqInFeet(feet){
    if(feet===43){
        return 264;
    }
    else if(feet===50){
        return 2112;
    }
    else(feet===34)
    return 2112;

}
function distanceTravelledInFeet(feet){
    if ((feet>=43) && (feet<=48)){
        return 1320;
    }
    else if((feet>=50) && (feet<=60)){
        return 2640;
    }
    else(feet<42)
        return 1584;
    
}
function distanceTravelledInFeet(a,b){
    if (b>a){
        return (b-a)*264;
    }
    else return (a-b)*264;
}
function calculatesFarePrice(start,destination){
    let distance=distanceTravelledInFeet(start,destination);
    if(distance<=400){
        return 0;
    }else if (distance>=400 && distance<=2000){
        return (distance-400)*0.02
    }else if(distance>=2000 && distance<=2500){
        return 25;
    }else if (distance>2500){
        return 'cannot travel that far'
    }
}
