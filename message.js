const part1 = [
    "Bart",
    "Homer",
    "Lisa",
    "Maggy",
    "Marge",
    "Santas Little Helper",
    "Itchy",
    "Scratchy",
    
  ];
  
  const part2 = [
    "Grab the Beers",
    "The Car is in the Garage",
    "Squishies let you see through time",
    "Pigs do fly",
    "Sweet Enola Gay Son",
    "I sleep on a big pile of money"
  ];
  
  const part3 = [
    "By the big cooling tower",
    "down at the Quicky Mart",
    "Just passing through",
    "So its not my problem",
    "Sucka"
  ];
  
  select = (part) => part[Math.floor(Math.random() * part.length)]
  
  generate = () => `Hey ${select(part1)}. ${select(part2)} ${select(part3)}!`
  
  console.log(generate());Random Message
