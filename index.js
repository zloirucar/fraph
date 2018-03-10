var fs = require ('fs')

var _ = require('lodash')
var text = fs.readFileSync ('zdf-win.txt', 'utf8')

var words = text.split (/\r?\n/)


var fourletterword = _.filter(words, word=>word.length === 4)



var  x = _.transform(fourletterword,function (acc, word){
    
   
    var sosed = acc.g[word] = []
    



    for (var i=0; i<word.length;++i){
    
        var w = word.substr(0,i) + '*' + word.substr(i+1)
   
        
        var classElements =  acc.helper[w]
        
        if (classElements){
            _.each(classElements, function (element){
                sosed.push(element)
                acc.g[element].push(word)
            })
        }

        if (classElements)
        classElements.push(word)
        else
        acc.helper[w] = [word]


    } 
}, 
{helper: {}, g :{} })


function walkGraph(g,startNode,enter,exit){
    var stepword = g[startNode]
    function gdebily(stepword){
        
    }

}



console.log(x.g)