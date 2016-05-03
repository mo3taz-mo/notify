var app = angular.module("myApp", [])

.controller('MainController', ['$scope', function ($scope) {
    $scope.header_title = 'A great new free psd theme to showcase your new application.';
    $scope.header_logo = 'imgs/logo.png';
    $scope.header_img = 'imgs/phone-hand.png';
    $scope.header_icons = [
        {
            icon: 'fa fa-apple fa-2x'
            },
        {
            icon: 'fa fa-android fa-2x'
            },
        {
            icon: 'fa fa-windows fa-2x'
            }
    ];
    $scope.services = [
        {
            icon: 'fa fa-cog fa-4x',
            title: 'Editable Theme',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.'
        },
        {
            icon: 'fa fa-star fa-4x',
            title: 'Editable Theme',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.'
        },
        {
            icon: 'fa fa-globe fa-4x',
            title: 'Editable Theme',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.'
        }
    ];
    $scope.subscribe_title = 'Get Notified Of Any Updates!';
    $scope.subscribe_description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla nisl congue congue. Maecenas nec condimentum libero, at elementum mauris. Phasellus eget nisi dapibus, ultricies nisl at, hendrerit risusuis ornare luctus id sollicitudin ante lobortis at.';
    $scope.subscribe_img = 'imgs/notified-mail.jpg';
    $scope.testimonial_desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.';
    $scope.say_title = 'Say Hi & Get in Touch';
    $scope.say_desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse. ';
    $scope.social_icons = [
        {
            icon: 'fa fa-twitter fa-2x'
        },
        {
            icon: 'fa fa-facebook fa-2x'
        },
        {
            icon: 'fa fa-pinterest fa-2x'
        },
        {
            icon: 'fa fa-google-plus fa-2x'
        },
        {
            icon: 'fa fa-linkedin fa-2x'
        },
        {
            icon: 'fa fa-youtube fa-2x'
        }
    ];
}])