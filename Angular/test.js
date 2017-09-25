angular.module('myApp',[]).controller('testCtrl', function($scope, $timeout) {
    $scope.xResources = {}
        $scope.xResources.resources = [
        {
            name: 'Ajay',
            status: 'Active'
        },
        {
            name: 'Vijay',
            status: 'Active'
        }
    ];

    $timeout(function() {
        $scope.xResources.resources = [
            {
                name: 'Vijay',
                status: 'Active'
            },
            {
                name: 'Ajay',
                status: 'Active'
            }
        ];
    }, 3000);
})
    .directive('testList', function() {
        return {
            restrict: 'E',
            scope: {
                xResources: '='
            },
            template: '<div class="row" ng-repeat="resource in resources"> <test-list-item resource="resource"></test-list-item> </div>',
            link: function (scope) {
                scope.$watch('xResources.resources', function(resourcesList) {
                    scope.resources = resourcesList;
                }, true);
            }
        }
    })

    .directive('testListItem', function($timeout) {
    return {
        restrict: 'E',
        scope: {
            resource: '='
        },
        template: '<div class=col-lg-4>{{resource.name}}</div><div class=col-lg-4>{{resource.status}}</div><div class=col-lg-4><button ng-click="changeStatus()">Change Status</button></div>',
        link: function (scope) {
            scope.changeStatus = function () {
                $timeout(function () {
                    scope.resource.status = 'Inactive';
                }, 4000)
            }


        }
    }
});
