var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
  var result = input.map(function(){
      console.log(arguments);
  });
  
  
  
  
  //arr.map(function callback(currentValue[, index[, array]])
  // return currentValue
  //     function map (array, callback) {
      //         var newArray = [];
      //         array.forEach(function(value){
          //         newArray.push(newValue);
          //         return newArray;
          //         }
          //     });
          //       var array2 = [45, 34, 24];
          //   console.log(map(array2));
          // transformer: (item:A, index:Number, coll:A[]) => B
          
          // map(items:A[], transformer) => B[]
          function map(items, transformer){
              var output = [];
              for(var i = 0; i < items.length; i++){
                  output.push(transformer(items[i], i, items));
                }                         //value, index, whole array
                return output;
            }
            
            var names = ['Rex', 'Rob', 'Jenn'];
            var lengths = map(names, function(name)
            {
                return name.length;
            }
        );
        var test = function (value, index) {
            
            return Math.sqrt((value.x * value.x) + (value.y * value.y));
        };
        console.log(map(input, test));
        var result = map(input,test);
        console.log(result[0] === 5);
        console.log(result[1] === 13);
        console.log(result[2] === 17);
        /*The result should be an array of numbers corresponding to 
        the x-y pairs provided in the input array 
        (ie: calculate z given x and y).*/
        
        
        //a^2+y^2=z^2
  //3^2+4^2=5^2