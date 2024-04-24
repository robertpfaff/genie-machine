const quotes = [
    'Do not fear competition.',
    'Exciting opportunities lie ahead.',
    'You love peace.',
    'You will always be surrounded by true friends.',
    'Your ideas have exceptional merit.',
    'You can accomplish anything you set your mind to',
    'You are kind and friendly.',
    'You are wise beyond your years.',
    'Your ability to multi-task will take you far.',
    'A routine task will lead to an enchanting adventure.',
    'Beware of enterprises that require new clothes.',
    'Be true to your work and your word.',
    'Goodness is the only investment that never fails.',
    'A journey of 100 steps begins with a single step',
    'Forget injuries - never forget kindness.',
    'Respect yourself and others will respect you.',
    'You cannot be comfortable without your own approval.',
    'Always do right.',
    'This will gratify some people and astonish the rest.',
    'You will receive money from an unexpected source.',
    'Plan for many pleasures ahead.',
    'Experience is the best teacher.',
    'Attitude is a little thing that makes a big difference.',
    'Experience is the best teacher.',
    'Expect the unexpected.',
    'Walk a mile and be healthy.',
    'Families that play together stay together.',
    'Eat chocolate and have a sweeter life.',
    'Once the decision is made the universe conspires to make it happen.',
    'Make yourself necessary to someone.',
    'To have a friend one must be a friend.',
    'Nothing great was ever achieved without enthusiasm.',
    'Dance like no one is watching.',
    'Live today as if it were your last.',
    'Reach for joy and all else will follow.',
    'Move in the direction of your dreams.',
    'Bloom where you are planted.',
    'Happy News is on its way.',
    'A shut mouth gathers no feet.',
    'She or he who throws dirt is losing ground.',
    'Help! I am being held captive in a fortune-cookie factory.',
    'Paradise is always where love dwells.',
    'The one you love is closer than you think.',
    'Love is like dandelions. It often grows in unlikely places.',
    'In dreams there are no impossibilities.',
    'Love is not something you find. Love finds you.',
    'Today is the right time to create the peacefulness you long for.',
    'A friend asks only for your time, not your money.',
    'A smile is a passport into the heart of others.',
    'Your high-minded principles spell success.',
    'Hard works pays off in the future. Laziness pays off now.',
    'Change can hurt, but it leads to something better.',
    'Enjoy the good luck a companion brings you.',
    'People are naturally attracted to you.',
    'A chance meeting opens doors to success and friendship.',
    'You learn from your mistakes. You will learn a lot today.',
    'If you have something good in your life do not let it go.',
    'Whatever you are goal is in life, embrace it visualize it, and for it will be yours!',
    'Your shoes will make you happy today.',
    'You cannot love life until you live the life you love.',
    'Be on the lookout. Coming events warn of danger.',
    'Land is always on the mind of a flying bird.',
    'The man or woman you desire feels the same way about you.',
    'Meeting adversity well is the source of your strength.',
    'A dream you have will come true.',
    'Our actions determine us.',
    'Never give up. You are not a failure.',
    'Your will become great if you believe in yourself.',
    'There is no greater pleasure than seeing your loved ones prosper',
    'You will marry your current lover.',
    'Beware of a tall, handsome man with ulterior motives.',
    'Learning to save money - it is the most important skill',
    'A very attractive person has a message for you.',
    'You already know the answers to questions lingering in your head.',
    'It is now and in this world that we must live.',
    'You must try or hate yourself for not trying.',
    'You can make your own happiness.',
    'Do not be afraid of happiness',
    'The greatest risk is not taking one.',
    'The love of your life is stepping into your planet this summer.',
    'Love can last a lifetime if you want it to.',
    'Adversity if the parent of character and virtue.',
    'Serious trouble will bypass you.',
    ' A short stranger will soon enter your life with blessings to share.',
    'Now is the time to try something new.',
    'Wealth awaits you very soon.',
    'If you feel you are right, stand firmly by your convictions.',
    'Keep your eye out for someone special.',
    'You are very talented in many ways.',
    'A stranger is a friend you have not spoken to yet.',
    'A new voyage will fill your life with untold memories.',
    'You will travel to many exotic places in your lifetime.',
    'Your ability for accomplishment will follow with success.',
    'Amazing how much good you can do if you do not care who gets the credit.'
    ]
  
  // let btn=document.querySelector('.btn');
  // btn.addEventListener('click', displayQuote);
  
  console.log(quotes.length)
  
  function displayQuote() {
      //create an index of a random number 
      //convert it into between 0 to length of quotes[]
      let index= Math.floor(Math.random() * quotes.length-1);
      console.log(index)
     
      //display the quote of that index
      let div = document.querySelector('#quote');
      let fortune=`<div class="card">
      <p>${quotes[index]}</p>
     </div>`;
      div.innerHTML=fortune;
      
  }