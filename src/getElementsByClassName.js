// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
    var results = [];
    var node = document.body; //object containing body element
    var findElements = function(node) {
        // Check current node:
        var classes = node.classList; //array of strings of classes
        for (var j = 0; j < classes.length; j++) {
            if (classes[j] === className) {
                results.push(node);
            }
        }
        // Check children:
        if (node.hasChildNodes()) {
            var children = node.children; //array of objects containing children elements
            for (var i = 0; i < children.length; i++) {
                findElements(children[i]);
            }
        }
    };
    findElements(document.body);
    return results;
};
