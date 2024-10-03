
$(document).ready(() => {
  
  const $head = $('head');
  const $style = $('<style>');
  $head.append($style);

  $style.text('body { background: url(/img/falling-leaf.png) repeat;}')

  ////////////////
  ///// BODY /////
  ////////////////
  
  const $body = $('body');
  $body.html(''); // Clears the body

  $body.css('background-color', 'rgb(160, 250, 150)')

  //////////////////////////////
  ///// ALL-CONTENTS (DIV) /////
  //////////////////////////////

  // Create #all-contents div and append to $body
  const $allContentsDiv = $('<div>')
    .attr('id', 'all-contents')
    .attr('class', 'all-contents')
    .css('margin', 'auto')
    .css('width', '750px');
  $body.append($allContentsDiv);

  ///////////////
  ///// NAV /////
  ///////////////

  // Create <nav> and append to $allContentsDiv
  const $nav = $('<nav>');
  $allContentsDiv.append($nav);

  const $websiteHead = $('<h1>')
    .text('')
    .css('margin', 'auto')
    .css('width', '50%')
    .css('padding-top', '0px');
  $nav.append($websiteHead);

  ////////////////
  ///// MAIN /////
  ////////////////

  // Create <main> and append to $allContentsDiv
  const $main = $('<main>');
  $allContentsDiv.append($main);

  /////////////////////////
  ///// SIDEBAR (DIV) /////
  /////////////////////////

  // Create #sidebar div and append to $main
  const $sidebarDiv = $('<div>')
    .attr('id', 'sidebar')
    .attr('class', 'sidebar')
    .css('float', 'left')
    .css('width', '350px');
  $main.append($sidebarDiv);

  ///////////////////////////////////
  ///// SITE-LOGO (SIDEBAR DIV) /////
  ///////////////////////////////////

  // Create site logo div and append to $sidebarDiv
  const $siteLogoDiv = $('<div>')
    .attr('id', 'site-logo');
  $sidebarDiv.append($siteLogoDiv);

  // Create $siteLogo <img> tag with logo image and append to $siteLogoDiv
  const $siteLogo = $('<img>')
    .attr('src', '/img/kawaii-leaf-lovepik.png')
    .css('width', '310px');
    // .css('background-color', 'rgb(160, 250, 150)');
    $siteLogoDiv.append($siteLogo);
  
  /////////////////////////////////////////
  ///// TOP-INPUT-TWEET (SIDEBAR DIV) /////
  /////////////////////////////////////////

  // Create #top-input-tweet div and append to $sidebarDiv
  const $topInputTweetDiv = $('<div>')
    .attr('id', 'top-input-tweet')
    .css('padding-left', '50px');
  $sidebarDiv.append($topInputTweetDiv);

  // Create a header for inputting a tweet
  const $inputTweetHeader = $('<h2>')
    .text(`Drop a leaf...`)
    .css('font-size', '1.5em')
    .css('font-family', '"Lemon", serif');

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
    .attr('placeholder', 'Username')
    .attr('rows', '5')
    .attr('cols', '15')
    .css('padding', '5px')
    .css('font-family', '"Sofadi One", system-ui')
    .css('margin-bottom', '10px')
    .css('border-radius', '10px')
    .css('background-color', 'rgb(50, 200, 30)');
  $usernameInputDiv.append($usernameInput);
  $postTweetForm.append($usernameInputDiv);

  // Create and append a tweet-msg div for collection the message for the tweet
  const $tweetMsgDiv = $('<div>')
    .attr('id', 'get-tweet-msg');
  const $tweetMsgTextArea = $('<textarea>')
    .attr('id', 'tweet-msg')
    .attr('placeholder', 'Leaf note...')
    .attr('rows', '4')
    .attr('cols', '25')
    .css('padding', '5px')
    .css('border-radius', '10px')
    .css('background-color', 'rgb(50, 200, 30)')
    .css('margin-bottom', '5px')
    .css('font-family', '"Sofadi One", system-ui');
  $tweetMsgDiv.append($tweetMsgTextArea);
  $postTweetForm.append($tweetMsgDiv);

  // Create a button to post the tweet created
  const $tweetButton = $('<button>')
    .attr('type', 'button')
    .text(`Drop!`)
    .on('click', () => {
      let username = document.getElementById('username').value;
      let message = document.getElementById('tweet-msg').value;
      if (!streams.users[username]) { streams.users[username] = [] }
      window.visitor = username;
      writeTweet(message);
      document.getElementById('username').value = '';
      document.getElementById('tweet-msg').value = '';
    })
    .css('cursor', 'pointer')
    .css('cursor', 'hand')
    .css('border-radius', '10px')
    .css('background-color', 'rgb(50, 200, 30)');
  $postTweetForm.append($tweetButton);


  ////////////////////////////////////
  ///// TWEET-FEED-OPTIONS (DIV) /////
  ////////////////////////////////////

  // Create #tweet-feed-options div and append to $contentDiv
  const $tweetFeedOptionsDiv = $('<div>')
    .attr('id', 'tweet-feed-options')
    .css('padding-top', '20px')
    .css('padding-left', '50px');
  $sidebarDiv.append($tweetFeedOptionsDiv);

  let autoUpdateFeature = true;

  // Add button to pause and unpause Auto Update Feature
  const $autoUpdateButton = $('<button>')
  .text('Pause Feed')
  .on('click', () => {
    if ($autoUpdateButton.text() === 'Pause Feed') {
      autoUpdateFeature = false;
      $autoUpdateButton.text('Resume Feed');
    } else {
      $tweetFeedDiv.html('');
      autoUpdateFeature = true;
      setTimeout(autoUpdate, 50);
      $autoUpdateButton.text('Pause Feed');
    }
  })
  .css('cursor', 'pointer')
  .css('cursor', 'hand')
  .css('border-radius', '10px')
  .css('background-color', 'rgb(50, 200, 30)');

  // Append button to $tweetFeedOptionsDiv
  $tweetFeedOptionsDiv.append($autoUpdateButton);

  // Tweet Feed Options
  const tweetFeedOptions = {
    spaceBetween: '0px',
    updateTime: 400
  }


  /////////////////////////
  ///// CONTENT (DIV) /////
  /////////////////////////

  // Create #content div and append to $main
  const $contentDiv = $('<div>')
    .attr('id', 'content')
    .attr('class', 'content')
    .css('float', 'right')
    .css('width', '400px');
  $main.append($contentDiv);

  ///////////////////////////////////////
  ///// WEBSITE-TITLE (CONTENT DIV) /////
  ///////////////////////////////////////

  // Create website title div and append to $contentDiv
  const $websiteTitleDiv = $('<div>')
    .attr('id', 'website-title')
    .css('padding-top', '100px')
    .css('padding-bottom', '60px');
  $contentDiv.append($websiteTitleDiv);

  // Create website title header and append to $websiteTitleDiv
  const $websiteTitleHeader = $('<h1>')
    .text('Leafdrop')
    .css('font-size', '5em')
    .css('font-family', '"Lemon", serif');
  $websiteTitleDiv.append($websiteTitleHeader);

  

  ////////////////////////////////////
  ///// TWEET-FEED (CONTENT DIV) /////
  ////////////////////////////////////

  // Create #tweet-feed div and append to $contentDiv
  const $tweetFeedDiv = $('<div>')
    .attr('id', 'tweet-feed');
  $contentDiv.append($tweetFeedDiv);

  // Function to show all tweets stored in streams.home from a starting position in the array
  function createTweets(finish = streams.home.length, tweets = streams.home) {
    const $tweets = tweets.slice(0, finish).map((tweet) => {
      
      const $tweet = $('<div></div>')
        .attr('class', `${tweet.user}-tweet`)
        .css('border-style', 'outset')
        .css('border-width', '10px')
        .css('border-color', 'rgb(70, 200, 120)')
        .css('border-radius', '10px')
        .css('background-color', 'rgb(90, 180, 110)')
        .css('margin-bottom', '20px')
        .css('padding', '5px');
      // const text = `@${tweet.user}: ${tweet.message}`;
      
      const $pText = $(`<p>`)
        .css('padding-left', '10px')
        .css('font-family', '"Sofadi One", system-ui');
      
      const $userSpan = $('<span>').text(`@${tweet.user}:`)
        .css('font-weight', 'bold')
        .on('click', () => {
          autoUpdateFeature = false;
          $autoUpdateButton.text('(Paused) Return to Home Feed');
          setTimeout(() => {
            $tweetFeedDiv.html('');
            let userTweets = streams.users[tweet.user];
            createTweets(userTweets.length, userTweets);
          }, 300);
        })
        .css('cursor', 'pointer')
        .css('cursor', 'hand');

      $pText.append($userSpan);

      let tweetMsgSplit = tweet.message.split(' ');

      tweetMsgSplit.forEach((word) => {
        const $spaceSpan = $('<span>').text(' ');
        const $wordSpan = $('<span>').text(`${word}`);
        if (word[0] === '#') {
          $wordSpan.css('font-weight', 'bold')
          .on('click', () => {
            autoUpdateFeature = false;
            $autoUpdateButton.text('(Paused) Return to Home Feed');
            setTimeout(() => {
              $tweetFeedDiv.html('');
              let hashtagTweets = streams.hashtag[word.slice(1)];
              createTweets(hashtagTweets.length, hashtagTweets);
            }, 300);
          })
          .css('cursor', 'pointer')
          .css('cursor', 'hand');
        }
        $pText.append($spaceSpan, $wordSpan);

      });

      const $pTime = $('<p>')
        .css('padding-left', '10px')
        .text(moment(tweet.created_at).format('MMM Do YYYY') + ' --- ')
        .css('font-family', '"Nothing You Could Do", cursive');
      let current = tweet.created_at;
      let timeElapsed = moment(current).fromNow();
      
      const $timeSpan = $('<span>').text(`${timeElapsed}`)
        .on('mouseover', () => {
          timeElapsed = moment(current).from();
          $timeSpan.text(`${timeElapsed}`);
        });
      $pTime.append($timeSpan);

      $tweet.append($pText).append($pTime);

      
      
      return $tweet;
    });
    $tweetFeedDiv.prepend($tweets);
  }

  // At launch, show the current tweets stored in streams.home and update the feed as they are created.
  function autoUpdate() {
    createTweets(streams.home.length - $tweetFeedDiv.children().length);
    setTimeout(autoUpdate, (autoUpdateFeature ? tweetFeedOptions.updateTime : 10000000000));
  }

  autoUpdate();
  



});
