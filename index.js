// Code your solution here

function findMatching (array, string){
    // return drivers.filter((drivers) => drivers.toUpperCase() == name.toUpperCase())
return array.filter(function(drivers){
    return drivers.toUpperCase() == string.toUpperCase();
    })
};

function fuzzyMatch (array, string){
    return array.filter(function(drivers){
        return drivers.substring(0,string.length) == string.substring(0,string.length)
    })
};

function matchName (obj, string){
    return obj.filter(function(drivers){
        return drivers.name === string
    })
};

