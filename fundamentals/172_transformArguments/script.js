function transformArguments(fcn, args, transformation) {

    let newArgs = [];
    for (let i = 0; i < args.length; i++) {
        newArgs.push(transformation(args[i]));
    }

    return fcn(newArgs);
}

const myFcn = function(arguments) {
    console.log(arguments);
}

const myTransform = function(elem) {
    return elem*2;
}


let arr0 = [0, 1, 4, 6, 7, 9];

transformArguments(myFcn, arr0, myTransform);