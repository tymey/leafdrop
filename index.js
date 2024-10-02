
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
    updateTime: 4000
  }

  // Function to show all tweets stored in streams.home from a starting position in the array
  function createTweets(finish = streams.home.length, tweets = streams.home) {
    const $tweets = tweets.slice(0, finish).map((tweet) => {
      const $tweet = $('<div></div>')
        .attr('class', `${tweet.user}-tweet`)
        .css('padding-bottom', tweetFeedOptions.spaceBetween);
      // const text = `@${tweet.user}: ${tweet.message}`;
      
      const $pText = $(`<p>: ${tweet.message}</p>`);
      const $userSpan = $('<span>').text(`@${tweet.user}`)
        .css('font-weight', 'bold')
        .on('click', () => {
          
        });
      
      $pText.prepend($userSpan);

      const $pTime = $('<p>').text(moment(tweet.created_at).format('MMMM Do YYYY, h:mm:ss a') + ' --- ');
      const $timeSpan = $('<span>')
      
      $tweet.append($pText).append($pTime);

      return $tweet;
    });
    $tweetFeedDiv.prepend($tweets);
  }

  // At launch, show the current tweets stored in streams.home and update the feed as they are created.
  function autoUpdate() {
    createTweets(streams.home.length - $tweetFeedDiv.children().length);
    setTimeout(autoUpdate, tweetFeedOptions.updateTime);
  }
  autoUpdate();


});
