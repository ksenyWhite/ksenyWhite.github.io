/**
 * Created by Kseny on 16.07.2015.
 */
app.directive( 'view', function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/view.html'
    };
});