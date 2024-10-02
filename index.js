
$(document).ready(() => {
  const $body = $('body');
  $body.html(''); // Clears the body

  // Create #all-contents div and append to $body
  const $allContentsDiv = $('<div>')
    .attr('id', 'all-contents')
    .attr('class', 'all-contents');
  $body.append($allContentsDiv);

  // Create <nav> and append to $allContentsDiv
  const $nav = $('<nav>');
  $allContentsDiv.append($nav);

  // Create <main> and append to $allContentsDiv
  const $main = $('<main>');
  $allContentsDiv.append($main);

  // Create #sidebar div and append to $main
  const $sidebarDiv = $('<div>')
    .attr('id', 'sidebar')
    .attr('class', 'sidebar');
  $main.append($sidebarDiv);

  // Create #content div and append to $main
  const $contentDiv = $('<div>')
    .attr('id', 'content')
    .attr('class', 'content');
  $main.append($contentDiv);

  // Create #top-input-tweet div and append to $contentDiv
  const $topInputTweetDiv = $('<div>')
    .attr('id', 'top-input-tweet');
  $contentDiv.append($topInputTweetDiv);

  // Create #tweet-feed div and append to $contentDiv
  const $tweetFeedDiv = $('<div>')
    .attr('id', 'tweet-feed');
  $contentDiv.append($tweetFeedDiv);

function createTweets() {
  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>');
    const text = `@${tweet.user}: ${tweet.message}`;

    $tweet.text(text);

    return $tweet;
  });
  $tweetFeedDiv.append($tweets);
}

createTweets();

});
