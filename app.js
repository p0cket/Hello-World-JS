angular.module('flapperNews', ['ui.router'])
.config([
  'stateProvider',
  'urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts/html',
      controller: 'PostsCtrl'
    });

    $urlRouterProvider.otherwise('home');
}])

.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
functions($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];

}]);

.controller('MainCtrl', [
'$scope',
'posts',
function($scope,posts){
  $scope.test = 'Hello world!';
  // $scope.posts = [
  //   {title: 'post 1', upvotes: 5},
  //   {title: 'post 2', upvotes: 2},
  //   {title: 'post 3', upvotes: 15},
  //   {title: 'post 4', upvotes: 9},
  //   {title: 'post 5', upvotes: 4}
  //   ];



  $scope.posts = posts.posts;

  $scope.addPost = function(){
    // Check, if theres nothing in the text box - don't do anything
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
      comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
    });
    $scope.title = '';
    $scope.link = '';
    console.log("refresh");

  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

  .factory('posts', [function(){
    var o = {
      posts: []
    };
    return o;
  }])

}]);
