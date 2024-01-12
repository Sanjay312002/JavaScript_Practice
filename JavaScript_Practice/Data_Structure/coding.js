const game = {
    team1: 'Inter Miami',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Koushik',
        'Rishi',
        'Siva',
        'Jai',
        'Naveen',
        'Ashok',
        'Nijanth',
        'Boopesh',
        'Harsha',
        'Sanjay',
        'Messi',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Messi', 'Sanjay', 'Messi', 'Harsha'],
    date: 'Jul 31th, 2023',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  const[Players1,Players2]=game.players;
  console.log(Players1,Players2);
  //2
  const[GK,...fieldPlayers]=Players1;
  console.log(GK,fieldPlayers);
  //3
  const allPlayers=[...Players1,...Players2];
  console.log(allPlayers);
  //4
  const players1Final=[...Players1,'Suarez','Neymar','Ronoldo'];
  //5
  const{
    odds:{team1,x:draw,team2},
  }=game;
  console.log(team1,draw,team2);
  //6
  const printGoals= function(...players){
    console.log(`${players.length}goals were scored`);
  };
   printGoals(...game.scored);
   //7
   team1<team2 && console.log('Team 1 is more likely to win');
   team1>team2 && console.log('Team 2 is more likely to win');

