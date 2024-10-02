
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

  // Create a header for inputting a tweet
  const $inputTweetHeader = $('<h2>')
    .text(`What's on your mind?...`);

  // Create a form for posting a tweet
  const $postTweetForm = $('<form>')
    .attr('class', 'post-tweet');

  // Append the header and form to $topInputTweetDiv
  $topInputTweetDiv.append($inputTweetHeader, $postTweetForm);

  // Populate the $postTweetForm
  // Create and append a username div for collecting a username
  const $usernameInputDiv = $('<div>')
    .attr('id', 'get-username');
  const $usernameInput = $('<input>')
    .attr('type', 'text')
    .attr('id', 'username')
    .attr('placeholder', 'Username');
  $usernameInputDiv.append($usernameInput);
  $postTweetForm.append($usernameInputDiv);

  // Create and append a tweet-msg div for collection the message for the tweet
  const $tweetMsgDiv = $('<div>')
    .attr('id', 'get-tweet-msg');
  const $tweetMsgTextArea = $('<textarea>')
    .attr('id', 'tweet-msg')
    .attr('placeholder', 'Tweet here...');
  $tweetMsgDiv.append($tweetMsgTextArea);
  $postTweetForm.append($tweetMsgDiv);

  // Create a button to post the tweet created
  const $tweetButton = $('<button>')
    .attr('type', 'button')
    .text(`Tweet!`)
    .on('click', () => {
      let username = document.getElementById('username').value;
      let message = document.getElementById('tweet-msg').value;
      if (!streams.users[username]) { streams.users[username] = [] }
      window.visitor = username;
      writeTweet(message);
      username = '';
      message = '';
    });
  $postTweetForm.append($tweetButton);

  // Create <button> to update tweets on click
  // $updateButton = $('<button>')
  //   .text('Press Me')
  //   .on('click', () => {
  //     createTweets($tweetFeedDiv.children().length);
  //   })
  //   .css('cursor', 'pointer')
  //   .css('cursor', 'hand');
  // // Append to $topInputTweetDiv
  // $topInputTweetDiv.append($updateButton);

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
