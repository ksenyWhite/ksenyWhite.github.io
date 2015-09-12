var app = angular.module('olympics',[]);

app.filter('searchFor', function(){

    // Все фильтры должны вызываться через функцию. Первым параметром
    // выступает массив данных, которые нужно обработать. В качестве второго
    // параметра задается аргумент, по которому мы будем отфильтровывать всю 	// последовательность данных (searchFor:searchString)

    return function(arr, searchString){

        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // С помощью функции forEach производится обработка всего массива 		// данных циклом.
        angular.forEach(arr, function(score){

            if(score.medal.toLowerCase().indexOf(searchString) !== -1){
                result.push(score);
            }

        });

        return result;
    };

});
