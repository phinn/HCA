(function () {
    var app = angular.module('Store', []);
    app.controller('StoreController', ['$window', '$scope', function($window, $scope) {
      this.products = gem;
    
      $scope.greet = function() {
        $window.console.log($scope);
      };
    }]);
     
    var gem = [{
        name: '西瓜',
        price: 2.95,
        description: '不甜不要钱哦',
        canPurchase: false,
    }, {
        name: '香蕉',
        price: 3.95,
        description: '香蕉个巴拉',
        canPurchase: true,
    }, {
        name: '桃子',
        price: 2.95,
        description: '吃个桃子，偷的浮生半日闲',
        canPurchase: true,
    }, {
        name: '苹果',
        price: 2.95,
        description: '青苹果，酸酸甜甜就是我',
        canPurchase: false,
    }]
    
    app.directive('treeList', function ($http) {
        return {
            restrict: 'AE',
            link: function (scope, elm, attr, ctrl) {
                $(elm).datagrid({
                    rownumbers: true,
                    animate: true,
                    collapsible: true,
                    fitColumns: true,
                    url: null,
                    idField: 'id',
                    singleSelect:true,
                    columns: [
                        [
                            {title: '名称', field: 'Name', width: 50},
                            {field: 'Effect', title: '功效', width: 100},
                            {field: 'Description', title: '描述', width: 180}
                        ]
                    ],
                    onLoadSuccess : function (row, data) {
                        var id = scope.getCookies;
                       $(elm).treegrid('expand',id);
                        //scope.removeCookies;
                    },
                    onExpand : function (row){
                        //scope.setCookies(row.id);
                    }
                });
                $http.get('server.php').success(function (data) {
                    $(elm).datagrid('loadData', {
                        total: data.length,
                        rows: data
                    });
                });
            }
        }
    });
})();