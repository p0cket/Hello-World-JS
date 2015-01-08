angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
];

  // $scope.addPost = function(){
  //   // Check, if theres nothing in the text box - don't do anything
  //   if(!$scope.title || $scope.title === '') { return; }
  //   $scope.posts.push({
  //     title: $scope.title,
  //     link: $scope.link,
  //     upvotes: 0
  //   });
  //   $scope.title = '';
  //   $scope.link = '';
  //   console.log("refresh");
  // };

  $scope.addPost = function(){
    //don't let them make an empty post
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
    });
    //we take the post text from $scope.title and $scope.link, which we then clear
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

}]);
