
$(document).ready(() => {
  
  const $head = $('head');
  const $style = $('<style>');
  $head.append($style);

  $style.text('body { background: url(https://i.imgur.com/UmGFi0h.png) repeat;}')

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
    .css('width', '920px');
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
    .attr('src', 'https://i.imgur.com/wRKbNmq.png')
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
    .css('font-size', '2em')
    .css('font-family', '"Lemon", serif')
    .css('color', 'rgb(50, 155, 100)')
    .css('text-shadow', '0 0 10px #99DD00, 0 0 20px #AAFF00')
    .css('margin-bottom', '25px');

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
    .css('padding', '5px')
    .css('padding-left', '10px')
    .css('padding-right', '10px')
    .css('font-family', '"Sofadi One", system-ui')
    .css('margin-bottom', '10px')
    .css('border-radius', '10px')
    .css('border-style', 'inset')
    .css('border-width', '5px')
    .css('border-color', 'green')
    .css('background-color', 'rgba(50, 200, 30, 0.5)')
    .on('mouseenter', () => {
      $usernameInput.css('background-color', 'rgb(50, 200, 30)')
    })
    .on('mouseleave', () => {
      $usernameInput.css('background-color', 'rgba(50, 200, 30, 0.5)')
    });
  $usernameInputDiv.append($usernameInput);
  $postTweetForm.append($usernameInputDiv);

  // Create and append a tweet-msg div for collection the message for the tweet
  const $tweetMsgDiv = $('<div>')
    .attr('id', 'get-tweet-msg');
  const $tweetMsgTextArea = $('<textarea>')
    .attr('id', 'tweet-msg')
    .attr('placeholder', 'Leaf note...')
    .attr('rows', '4')
    .attr('cols', '23')
    .css('padding', '5px')
    .css('padding-left', '10px')
    .css('padding-right', '10px')
    .css('border-radius', '10px')
    .css('border-style', 'inset')
    .css('border-width', '5px')
    .css('border-color', 'green')
    .css('background-color', 'rgba(50, 200, 30, 0.5)')
    .css('margin-bottom', '5px')
    .css('font-family', '"Sofadi One", system-ui')
    .on('mouseenter', () => {
      $tweetMsgTextArea.css('background-color', 'rgb(50, 200, 30)')
    })
    .on('mouseleave', () => {
      $tweetMsgTextArea.css('background-color', 'rgba(50, 200, 30, 0.5)')
    });
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
    .on('mouseenter', () => {
      $tweetButton.css('background-color', 'rgb(30, 105, 100)')
      .css('color', 'rgb(150, 250, 100)')
    })
    .on('mouseleave', () => {
      $tweetButton.css('background-color', 'rgb(150, 250, 100)')
      .css('color', 'rgb(30, 105, 100)')
    })
    .css('cursor', 'pointer')
    .css('cursor', 'hand')
    .css('border-radius', '10px')
    .css('background-color', 'rgb(150, 250, 100)')
    .css('color', 'rgb(30, 105, 100)')
    .css('text-shadow', '0 0 10px #99DD00, 0 0 20px #AAFF00')
    .css('font-family', '"Lemon", serif')
    .css('font-size', '1.5em');
  $postTweetForm.append($tweetButton);


  ////////////////////////////////////
  ///// TWEET-FEED-OPTIONS (DIV) /////
  ////////////////////////////////////

  // Create #tweet-feed-options div and append to $contentDiv
  const $tweetFeedOptionsDiv = $('<div>')
    .attr('id', 'tweet-feed-options')
    .css('margin-top', '50px')
    .css('padding-left', '50px');
  $sidebarDiv.append($tweetFeedOptionsDiv);

  let autoUpdateFeature = true;

  // Add button to pause and unpause Auto Update Feature
  const $autoUpdateButton = $('<button>')
  .text('Pause Feed')
  .on('click', () => {
    if ($autoUpdateButton.text() === 'Pause Feed') {
      clearTimeout(autoUpdateTimeoutId);
      autoUpdateFeature = false;
      $autoUpdateButton.text('Resume Feed');
    } else {
      $subTweetFeedHeader.html('');
      $tweetFeedDiv.html('');
      autoUpdateFeature = true;
      autoUpdate();
      $autoUpdateButton.text('Pause Feed');
    }
  })
  .on('mouseenter', () => {
    $autoUpdateButton.css('background-color', 'rgb(30, 105, 100)')
    .css('color', 'rgb(150, 250, 100)')
  })
  .on('mouseleave', () => {
    $autoUpdateButton.css('background-color', 'rgb(150, 250, 100)')
    .css('color', 'rgb(30, 105, 100)')
  })
  .css('cursor', 'pointer')
  .css('cursor', 'hand')
  .css('border-radius', '10px')
  .css('background-color', 'rgb(150, 250, 100)')
  .css('color', 'rgb(30, 105, 100)')
  .css('text-shadow', '0 0 10px #99DD00, 0 0 20px #AAFF00')
  .css('font-family', '"Lemon", serif')
  .css('font-size', '0.93em');

  // Append button to $tweetFeedOptionsDiv
  $tweetFeedOptionsDiv.append($autoUpdateButton);

  // Create slider container div and append to $tweetFeedOptionsDiv
  const $sliderContainer = $('<div>')
    .attr('class', 'slider-container')
    .css('margin-top', '10px');
  $tweetFeedOptionsDiv.append($sliderContainer);

  // Create update speed slider input and append to $sliderContainer
  const $updateSpeedSlider = $('<input>')
    .attr('type', 'range')
    .attr('min', '0').attr('max', '10000')
    .attr('value', '9500')
    .attr('class', 'slider').attr('id', 'update-range')
    .css('accent-color', 'rgb(70, 150, 50)')
    .css('width', '220px')
    .on('mouseup', () => {
      clearTimeout(autoUpdateTimeoutId);
      let value = document.getElementById('update-range').value;
      let updateValue = 10000 - value
      tweetFeedOptions.updateTime = updateValue;
      $currentSpeed.text(`${(updateValue / 1000).toFixed(1)} seconds`);
      if (!($autoUpdateButton.text() === '(Paused) Return to Home Feed')) {
        autoUpdate();
      }
    });
  $sliderContainer.append($updateSpeedSlider);

  // Create slider description header and append to $sliderContainer
  const $sliderDescHeader = $('<h5>')
    .text('Feed Update Speed')
    .css('color', 'rgb(30, 105, 100)')
    .css('text-shadow', '0 0 10px #99DD00, 0 0 20px #AAFF00')
    .css('font-family', '"Lemon", serif');
  $sliderContainer.append($sliderDescHeader);

  // Create slow to fast description and append to $sliderContainer
  const $slowToFastDesc = $('<p>')
    .text('Slow <-------------> Fast')
    .css('color', 'rgb(30, 105, 100)')
    .css('text-shadow', '0 0 10px #99DD00, 0 0 20px #AAFF00')
    .css('font-family', '"Lemon", serif');
  $sliderContainer.append($slowToFastDesc);

  // Create speed description container and append to $slideContainer
  const $speedDesc = $('<p>')
    .text('Updates every ')
    .css('color', 'rgb(30, 105, 100)')
    .css('text-shadow', '0 0 10px #99DD00, 0 0 20px #AAFF00')
    .css('font-family', '"Lemon", serif')
    .css('font-size', '0.9em');

  const $currentSpeed = $('<span>')
    .text('0.5 seconds');

  $speedDesc.append($currentSpeed);
  $slowToFastDesc.append($speedDesc);


  // Tweet Feed Options
  const tweetFeedOptions = {
    spaceBetween: '0px',
    updateTime: 500
  }

  ///////////////////////////////////////
  ///// HASHTAG-TABLE (SIDEBAR DIV) /////
  ///////////////////////////////////////

  // Create hashtag table header and append to $sidebarDiv
  const $hashtagTableHeader = $('<h3>')
    .text('#hashtags')
    .css('font-size', '2em')
    .css('font-family', '"Lemon", serif')
    .css('color', 'rgb(50, 155, 100)')
    .css('text-shadow', '0 0 10px #99DD00, 0 0 20px #AAFF00')
    .css('margin-top', '50px')
    .css('padding-left', '55px');
  $sidebarDiv.append($hashtagTableHeader);

  // Create hashtag table button and append $sidebarDiv
  let topNumber = 5;
  
  const $hashtagButton = $('<button>')
    .attr('type', 'button')
    .css('margin-left', '50px')
    .text(`Show All #hashtags!`)
    .on('click', () => {
      if ($hashtagButton.text() === `Show All #hashtags!`) {
        $hashtagButton.text('Show Top 5 #hashtags!');
        topNumber = 1000000;
        hashtagTable();
      } else {
        $hashtagButton.text('Show All #hashtags!');
        topNumber = 5;
        hashtagTable();
      }
    })
    .on('mouseenter', () => {
      $hashtagButton.css('background-color', 'rgb(30, 105, 100)')
      .css('color', 'rgb(150, 250, 100)')
    })
    .on('mouseleave', () => {
      $hashtagButton.css('background-color', 'rgb(150, 250, 100)')
      .css('color', 'rgb(30, 105, 100)')
    })
    .css('cursor', 'pointer')
    .css('cursor', 'hand')
    .css('border-radius', '10px')
    .css('background-color', 'rgb(150, 250, 100)')
    .css('color', 'rgb(30, 105, 100)')
    .css('text-shadow', '0 0 10px #99DD00, 0 0 20px #AAFF00')
    .css('font-family', '"Lemon", serif');
  $sidebarDiv.append($hashtagButton);

  // Create #hashtag-table-container div and append to $sidebarDiv
  const $hashtagTableContainerDiv = $('<div>')
    .attr('id', 'hashtag-table-container')
    .css('margin-top', '10px')
    .css('padding-left', '50px');
  $sidebarDiv.append($hashtagTableContainerDiv);

  

  // Create dynamic Hashtag table and append to $hashtagTableContainerDiv
  // Hashtag table function
  function hashtagTable() {
    $hashtagTableContainerDiv.children().remove();
    const createRow = (hashtag) => {
      const $row = $('<tr>');
      const $hashtag = $('<td>').text(`#${hashtag.name}`)
        .css('font-weight', 'bold')
        .css('font-family', '"Sofadi One", system-ui')
        .css('padding', '5px')
        .css('padding-right', '10px')
        // .css('border', '1px solid black')
        .on('click', () => {
          autoUpdateFeature = false;
          $autoUpdateButton.text('(Paused) Return to Home');
          setTimeout(() => {
            clearTimeout(autoUpdateTimeoutId);
            $subTweetFeedHeader.html('');
            $tweetFeedDiv.html('');
            $subTweetFeedHeader.text(`#${hashtag.name} Leaves`);
            let hashtagTweets = streams.hashtag[`${hashtag.name}`];
            createTweets(0, hashtagTweets);
          }, 400);
        })
        .on('mouseenter', () => {
          $hashtag.css('text-decoration', 'underline');
        })
        .on('mouseleave', () => {
          $hashtag.css('text-decoration', '');
        })
        .css('cursor', 'pointer')
        .css('cursor', 'hand');
      const $number = $('<td>').text(`${hashtag.number}`)
        .css('font-family', '"Sofadi One", system-ui')
        .css('padding', '5px')
        .css('padding-left', '10px')
        .css('padding-right', '10px')
        // .css('border', '3px solid green')

      $row.append($hashtag, $number);

      return $row;
    };

    const $table = $('<table>')
      .css('margin', '0px')
      .css('width', '220px')
      .css('padding', '5px')
      .css('background-color', 'rgba(120, 200, 20, 0.5)')
      .css('border-spacing', '0')
      .css('border-collapse', 'separate')
      .css('border-radius', '10px')
      .css('border', '5px solid green');
      
      // Don't change these

    let hashtagTable = [];
    for (let key in streams.hashtag) {
      hashtagTable.push( { name: key, number: streams.hashtag[key].length } );
    }

    hashtagTable.sort((a, b) => b.number - a.number);

    const $rows = hashtagTable.slice(0, topNumber).map(createRow);

    $table.append($rows);

    $hashtagTableContainerDiv.append($table)
  }

  // Updates table on a set interval
  setInterval(hashtagTable, 500);

  /////////////////////////
  ///// CONTENT (DIV) /////
  /////////////////////////

  // Create #content div and append to $main
  const $contentDiv = $('<div>')
    .attr('id', 'content')
    .attr('class', 'content')
    .css('float', 'right')
    .css('width', '500px')
    .css('margin-right', '70px');
  $main.append($contentDiv);

  ///////////////////////////////////////
  ///// WEBSITE-TITLE (CONTENT DIV) /////
  ///////////////////////////////////////

  // Create website title div and append to $contentDiv
  const $websiteTitleDiv = $('<div>')
    .attr('id', 'website-title')
    .css('padding-top', '80px')
    .css('padding-bottom', '60px');
  $contentDiv.append($websiteTitleDiv);

  // Create website title header and append to $websiteTitleDiv
  const $websiteTitleHeader = $('<h1>')
    .text('Leafdrop')
    .css('font-size', '6em')
    .css('font-family', '"Lemon", serif')
    .css('color', 'rgb(50, 155, 100)')
    .css('text-shadow', '0 0 10px #99DD00, 0 0 20px #AAFF00');
  $websiteTitleDiv.append($websiteTitleHeader);

  ///////////////////////////////////////////////
  ///// SUB-TWEET-FEED (CONTENT DIV) /////
  ///////////////////////////////////////////////

  // Create #sub-tweet-feed div and append to $contentDiv
  const $subTweetFeedDiv = $('<div>')
    .attr('id', 'sub-tweet-feed')
    .css('text-align', 'center')
    .css('margin', 'auto')
    .css('padding', '10px')
    .css('font-family', '"Lemon", serif')
    .css('color', 'rgb(100, 175, 50)')
    .css('text-shadow', '0 0 5px #AAFF22, 0 0 20px #997722')
    .css('margin-bottom', '20px');
  $contentDiv.append($subTweetFeedDiv);

  // Create #sub-tweet-feed-header header and append to $subTweetFeedDiv
  const $subTweetFeedHeader = $('<h2>');
  $subTweetFeedDiv.append($subTweetFeedHeader);

  ////////////////////////////////////
  ///// TWEET-FEED (CONTENT DIV) /////
  ////////////////////////////////////

  // Create #tweet-feed div and append to $contentDiv
  const $tweetFeedDiv = $('<div>')
    .attr('id', 'tweet-feed');
  $contentDiv.append($tweetFeedDiv);

  // Leaf Color Array
  const leafColor = [
    {
      // Green
      border: 'rgb(70, 200, 120)',
      background: 'rgb(90, 180, 110)'
    },
    {
      // Mostly yellow, hint of red
      border: 'rgb(250, 150, 30)',
      background: 'rgb(230, 200, 40)'
    },
    {
      // Mostly orange, hint of yellow
      border: 'rgb(250, 200, 30)',
      background: 'rgb(230, 130, 0)'
    },
    {
      // Brownish green
      border: 'rgb(150, 200, 30)',
      background: 'rgb(150, 150, 0)'
    },
    {
      // Red
      border: 'rgb(200, 100, 30)',
      background: 'rgb(230, 80, 20)'
    },
    {
      // Purple-blueish
      border: 'rgb(180, 100, 160)',
      background: 'rgb(140, 130, 210)'
    },
    {
      // Green #2
      border: 'rgb(90, 180, 60)',
      background: 'rgb(110, 180, 60)'
    },
    {
      // Green #3
      border: 'rgb(80, 170, 80)',
      background: 'rgb(90, 140, 60)'
    },
    {
      // Green #4
      border: 'rgb(160, 240, 80)',
      background: 'rgb(140, 220, 80)'
    },
    {
      // Yellow #2
      border: 'rgb(180, 180, 40)',
      background: 'rgb(200, 220, 80)'
    },
    {
      // Yellow #3
      border: 'rgb(220, 200, 30)',
      background: 'rgb(250, 240, 60)'
    },
    {
      // Orange #2
      border: 'rgb(230, 220, 30)',
      background: 'rgb(250, 180, 30)'
    }
  ];
  
  // Function to show all tweets stored in streams.home from a starting position in the array
  function createTweets(start = streams.home.length, tweets = streams.home) {
    const $tweets = tweets.slice(start).map((tweet) => {
      
      let randInd = Math.floor(Math.random() * leafColor.length);
      // randInd = 4;

      const $tweet = $('<div></div>')
        .attr('class', `${tweet.user}-tweet`)
        .css('border-style', 'outset')
        .css('border-width', '10px')
        .css('border-color', leafColor[randInd].border)
        .css('border-radius', '10px')
        .css('background-color', leafColor[randInd].background)
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
          $autoUpdateButton.text('(Paused) Return to Home');
          setTimeout(() => {
            clearTimeout(autoUpdateTimeoutId);
            $subTweetFeedHeader.html('');
            $tweetFeedDiv.html('');
            $subTweetFeedHeader.text(`@${tweet.user} Branch`)
              .css('font-size', '1.5em');
            let userTweets = streams.users[tweet.user];
            createTweets(0, userTweets);
          }, 400);
        })
        .on('mouseenter', () => {
          $userSpan.css('text-decoration', 'underline');
        })
        .on('mouseleave', () => {
          $userSpan.css('text-decoration', '');
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
            $autoUpdateButton.text('(Paused) Return to Home');
            setTimeout(() => {
              clearTimeout(autoUpdateTimeoutId);
              $subTweetFeedHeader.html('');
              $tweetFeedDiv.html('');
              $subTweetFeedHeader.text(`${word} Leaves`);
              let hashtagTweets = streams.hashtag[word.slice(1)];
              createTweets(0, hashtagTweets);
            }, 400);
          })
          .on('mouseenter', () => {
            $wordSpan.css('text-decoration', 'underline');
          })
          .on('mouseleave', () => {
            $wordSpan.css('text-decoration', '');
          })
          .css('cursor', 'pointer')
          .css('cursor', 'hand');
        }
        $pText.append($spaceSpan, $wordSpan);

      });

      const $pTime = $('<p>')
        .css('padding-left', '10px')
        .text(moment(tweet.created_at).format('MMM Do YYYY, h:mm:ss a') + ' --- ')
        .css('font-family', '"Nothing You Could Do", cursive');
      let current = tweet.created_at;
      let timeElapsed = moment(current).fromNow();
      
      const $timeSpan = $('<span>').text(`${timeElapsed}`);
      $pTime.append($timeSpan);

      function timeElapsedUpdate() {
        timeElapsed = moment(current).fromNow();
        $timeSpan.text(`${timeElapsed}`);
      }

      setInterval(timeElapsedUpdate, 1000);

      $tweet.append($pText).append($pTime);

      return $tweet;
    })
    $tweets.forEach(tweet => {
      tweet.hide();
      tweet.slideDown(300).delay(300);
      $tweetFeedDiv.prepend(tweet);
    });

    // $tweetFeedDiv.prepend($tweets);
  }

  let autoUpdateTimeoutId;

  // At launch, show the current tweets stored in streams.home and update the feed as they are created.
  function autoUpdate() {
    createTweets($tweetFeedDiv.children().length);
    autoUpdateTimeoutId = setTimeout(autoUpdate, (autoUpdateFeature ? tweetFeedOptions.updateTime : 10000000000));
  }

  autoUpdate();

  // Working on a way to update time while page is running
  
  

});
