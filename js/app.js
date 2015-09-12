var app = angular.module('olympics',[]);

app.filter('searchFor', function(){

    // ��� ������� ������ ���������� ����� �������. ������ ����������
    // ��������� ������ ������, ������� ����� ����������. � �������� �������
    // ��������� �������� ��������, �� �������� �� ����� ��������������� ��� 	// ������������������ ������ (searchFor:searchString)

    return function(arr, searchString){

        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // � ������� ������� forEach ������������ ��������� ����� ������� 		// ������ ������.
        angular.forEach(arr, function(score){

            if(score.medal.toLowerCase().indexOf(searchString) !== -1){
                result.push(score);
            }

        });

        return result;
    };

});
