(function () {
    var app = angular.module('main', ['ngRoute']);
    app.controller('MainController', function ($scope, $http) {
        //$http.get("http://phinnhealth.sinaapp.com/server.php")
        //    .success(function (response) { $scope.materials = response; });
        this.tables = gem;
    });
     
    //app.config(function ($routeProvider, $locationProvider) {
    app.config(function($routeProvider) {
     	$routeProvider.when('/about', {
            templateUrl: 'about.html',
            controler: 'AboutController'
     	}).when('/home', {
     	    templateUrl: 'home.html',
     	    controler: 'HomeController'
     	}).otherwise({
     	    //redirectTo: '/'
     	    templateUrl: 'home.html',
     	    controler: 'HomeController'
        });
     });
     
    app.controller('AboutController', function ($scope, $http) {
        
    });

    app.controller('HomeController', function ($scope, $http) {
        $scope.change = function (name) {
            
        };
        
    });

    app.directive("addBookButton", ['Book',
        function (Book) {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    element.bind("click", function () {
                        Book.addBook({
                            title: "Star Wars",
                            author: "George Lucas"
                        });
                    });
                }
            }
    }]);

    $(document).ready(function () {
        var url = "http://m.baidu.com/";
        //$(".loadContent").html('<object data="http://www.baidu.com"/>');
        //$(".loadContent").html('<iframe src="http://m.baidu.com/"></iframe>')
        //$(".loadContent").load("http://phinnhealth.sinaapp.com/services/load.php?u='+url" + "'");
        //$.get('http://m.baidu.com', function (data) {
        //    $('.loadContent').html(data);
        //});
        alert("你是神经病吗?");
        alert("咩咩");
        alert("么么哒");
        alert("胖胖姑姑欢喜弄");
        alert("亲一口");
        alert("来，抱抱");
    });

    var gem = [{
        no: 1,
        name: '西瓜',
        people: 4,
        size: "middle",
        full: true,
        datetime: "19:30:15",
    }, {
        no: 2,
        name: '西瓜',
        people: 2,
        size: "small",
        full: false,
        datetime: ""
    }, {
        no: 3,
        name: '西瓜',
        people: 8,
        size: "big",
        full: false,
        datetime: ""
    }, {
        no: 4,
        name: '西瓜',
        people: 2,
        size: "small",
        full: false,
        datetime: ""
    }, {
        no: 5,
        name: '西瓜',
        people: 8,
        size: "big",
        full: false,
        datetime: ""
    }, {
        no: 6,
        name: '西瓜',
        people: 2,
        size: "small",
        full: false,
        datetime: ""
    }, {
        no: 7,
        name: '西瓜',
        people: 8,
        size: "big",
        full: false,
        datetime: ""
    }, {
        no: 8,
        name: '西瓜',
        people: 2,
        size: "small",
        full: false,
        datetime: ""
    }, {
        no: 9,
        name: '西瓜',
        people: 8,
        size: "big",
        full: false,
        datetime: ""
    }, {
        no: 10,
        name: '西瓜',
        people: 2,
        size: "small",
        full: false,
        datetime: ""
    }, {
        no: 11,
        name: '西瓜',
        people: 8,
        size: "big",
        full: false,
        datetime: ""
    }, {
        no: 12,
        name: '西瓜',
        people: 2,
        size: "small",
        full: false,
        datetime: ""
    }, {
        no: 13,
        name: '西瓜',
        people: 8,
        size: "big",
        full: false,
        datetime: ""
    }, {
        no: 14,
        name: '西瓜',
        people: 2,
        size: "small",
        full: false,
        datetime: ""
    }, {
        no: 15,
        name: '西瓜',
        people: 8,
        size: "big",
        full: false,
        datetime: ""
    }, {
        no: 16,
        name: '西瓜',
        people: 4,
        size: "middle",
        full: false,
        datetime: ""
    }]
})();
