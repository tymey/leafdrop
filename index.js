
$(document).ready(() => {
  const $body = $('body');
  $body.html(''); // Clears the body

function createTweets() {
  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>');
    const text = `@${tweet.user}: ${tweet.message}`;

    $tweet.text(text);

    return $tweet;
  });
  $body.append($tweets);
}

});
