
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

  // Create <button> to update tweets on click
  $updateButton = $('<button>')
    .text('Press Me')
    .on('click', () => {
      createTweets($tweetFeedDiv.children().length);
    })
    .css('cursor', 'pointer')
    .css('cursor', 'hand');
  // Append to $topInputTweetDiv
  $topInputTweetDiv.append($updateButton);

  // Create #tweet-feed div and append to $contentDiv
  const $tweetFeedDiv = $('<div>')
    .attr('id', 'tweet-feed');
  $contentDiv.append($tweetFeedDiv);

  // Tweet Feed Options
  const tweetFeedOptions = {
    spaceBetween: '20px',
    updateTime: 3000
  }

  // Function to show all tweets stored in streams.home from a starting position in the array
  function createTweets(start = 0, tweets = streams.home) {
    const $tweets = tweets.slice(start).map((tweet) => {
      const $tweet = $('<div></div>')
        .css('padding-bottom', tweetFeedOptions.spaceBetween);
      // const text = `@${tweet.user}: ${tweet.message}`;
      
      const $pText = $(`<p>: ${tweet.message}</p>`);
      const $userSpan = $('<span>').text(`@${tweet.user}`)
        .css('font-weight', 'bold')
        .on('click', () => {
          let userTweets = streams.users[tweet.user];
          $tweetFeedDiv.html('');
          createTweets(0, userTweets);
        });
      
      $pText.prepend($userSpan);
      const $pTime = $('<p>').text(moment().format('MMMM Do YYYY, h:mm:ss a') + ' --- ' + moment(tweet.created_At).fromNow());

      $tweet.append($pText).append($pTime);

      return $tweet;
    });
    $tweetFeedDiv.prepend($tweets);
  }

  // At launch, show the current tweets stored in streams.home and update the feed as they are created.
  function autoUpdate() {
    createTweets($tweetFeedDiv.children().length);
    setTimeout(autoUpdate, tweetFeedOptions.updateTime);
  }
  // autoUpdate();


});
