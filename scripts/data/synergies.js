var CoC = CoC || {};
CoC.data = CoC.data || {};

//Synergies
CoC.data.synergies = new Backbone.Collection([

  { fromId:"blackbolt", fromStars: 2, toId: "cyclops", effectId:"block", effectAmount:10 },
  { fromId:"blackbolt", fromStars: 3, toId: "cyclops", effectId:"block", effectAmount:15 },
  { fromId:"blackbolt", fromStars: 3, toId: "spiderman", effectId:"armor", effectAmount:5 },
  { fromId:"blackbolt", fromStars: 3, toId: "ronan", effectId:"attack", effectAmount:4 },
  { fromId:"blackbolt", fromStars: 3, toId: "hulk", effectId:"critdamage", effectAmount:20 },
  { fromId:"blackbolt", fromStars: 4, toId: "cyclops", effectId:"block", effectAmount:20 },
  { fromId:"blackbolt", fromStars: 4, toId: "spiderman", effectId:"armor", effectAmount:6 },
  { fromId:"blackbolt", fromStars: 4, toId: "ronan", effectId:"attack", effectAmount:5 },
  { fromId:"blackbolt", fromStars: 4, toId: "hulk", effectId:"critdamage", effectAmount:25 },

  { fromId:"captainmarvel", fromStars: 3, toId: "captainamerica", effectId:"armor", effectAmount:5 },
  { fromId:"captainmarvel", fromStars: 3, toId: "gamora", effectId:"armor", effectAmount:5 },
  { fromId:"captainmarvel", fromStars: 3, toId: "ironman", effectId:"armor", effectAmount:5 },
  { fromId:"captainmarvel", fromStars: 4, toId: "captainamerica", effectId:"armor", effectAmount:6 },
  { fromId:"captainmarvel", fromStars: 4, toId: "gamora", effectId:"armor", effectAmount:6 },
  { fromId:"captainmarvel", fromStars: 4, toId: "ironman", effectId:"armor", effectAmount:6 },
  { fromId:"captainmarvel", fromStars: 4, toId: "wolverine", effectId:"powergain", effectAmount:5 },

  { fromId:"drax", fromStars:2, toId:"starlord", effectId:"perfectblock", effectAmount:3 },
  { fromId:"drax", fromStars:2, toId:"gamora", effectId:"critdamage", effectAmount:15 },
  { fromId:"drax", fromStars:3, toId:"starlord", effectId:"perfectblock", effectAmount:4 },
  { fromId:"drax", fromStars:3, toId:"gamora", effectId:"critdamage", effectAmount:20 },
  { fromId:"drax", fromStars:4, toId:"starlord", effectId:"perfectblock", effectAmount:5 },
  { fromId:"drax", fromStars:4, toId:"gamora", effectId:"critdamage", effectAmount:25 },

  { fromId:"gamora", fromStars:2, toId:"starlord", effectId:"armor", effectAmount:4 },
  { fromId:"gamora", fromStars:3, toId:"starlord", effectId:"armor", effectAmount:5 },
  { fromId:"gamora", fromStars:3, toId:"drax", effectId:"critdamage", effectAmount:20 },
  { fromId:"gamora", fromStars:4, toId:"starlord", effectId:"armor", effectAmount:6 },
  { fromId:"gamora", fromStars:4, toId:"drax", effectId:"critdamage", effectAmount:25 },

  { fromId:"msmarvel", fromStars:3, toId:"captainamerica", effectId:"armor", effectAmount:5 },
  { fromId:"msmarvel", fromStars:3, toId:"ironman", effectId:"perfectblock", effectAmount:4 },
  { fromId:"msmarvel", fromStars:3, toId:"thor", effectId:"perfectblock", effectAmount:4 },
  { fromId:"msmarvel", fromStars:3, toId:"hulk", effectId:"perfectblock", effectAmount:4 },
  { fromId:"msmarvel", fromStars:4, toId:"captainamerica", effectId:"armor", effectAmount:6 },
  { fromId:"msmarvel", fromStars:4, toId:"ironman", effectId:"perfectblock", effectAmount:5 },
  { fromId:"msmarvel", fromStars:4, toId:"thor", effectId:"perfectblock", effectAmount:5 },
  { fromId:"msmarvel", fromStars:4, toId:"hulk", effectId:"perfectblock", effectAmount:5 },

  { fromId:"ronan", fromStars:2, toId:"blackbolt", effectId:"critdamage", effectAmount:15 },
  { fromId:"ronan", fromStars:3, toId:"blackbolt", effectId:"critdamage", effectAmount:20 },
  { fromId:"ronan", fromStars:3, toId:"ironman", effectId:"critrate", effectAmount:6 },
  { fromId:"ronan", fromStars:3, toId:"gamora", effectId:"critdamage", effectAmount:20 },
  { fromId:"ronan", fromStars:4, toId:"blackbolt", effectId:"critdamage", effectAmount:25 },
  { fromId:"ronan", fromStars:4, toId:"ironman", effectId:"critrate", effectAmount:7 },
  { fromId:"ronan", fromStars:4, toId:"gamora", effectId:"critdamage", effectAmount:25 },

  { fromId:"spidermanblack", fromStars:3, toId:"storm", effectId:"armor", effectAmount:5 },
  { fromId:"spidermanblack", fromStars:3, toId:"electro", effectId:"critrate", effectAmount:6 },
  { fromId:"spidermanblack", fromStars:4, toId:"storm", effectId:"armor", effectAmount:6 },
  { fromId:"spidermanblack", fromStars:4, toId:"electro", effectId:"critrate", effectAmount:7 },

  { fromId:"superiorironman", fromStars:2, toId:"captainamerica", effectId:"critrate", effectAmount:5 },
  { fromId:"superiorironman", fromStars:2, toId:"daredevil", effectId:"critdamage", effectAmount:15 },
  { fromId:"superiorironman", fromStars:2, toId:"thor", effectId:"perfectblock", effectAmount:3 },
  { fromId:"superiorironman", fromStars:3, toId:"captainamerica", effectId:"critrate", effectAmount:6 },
  { fromId:"superiorironman", fromStars:3, toId:"daredevil", effectId:"critdamage", effectAmount:20 },
  { fromId:"superiorironman", fromStars:3, toId:"thor", effectId:"perfectblock", effectAmount:4 },
  { fromId:"superiorironman", fromStars:4, toId:"captainamerica", effectId:"critrate", effectAmount:7 },
  { fromId:"superiorironman", fromStars:4, toId:"daredevil", effectId:"critdamage", effectAmount:25 },
  { fromId:"superiorironman", fromStars:4, toId:"thor", effectId:"perfectblock", effectAmount:4 },

  { fromId:"thor", fromStars:2, toId:"drstrange", effectId:"armor", effectAmount:4 },
  { fromId:"thor", fromStars:2, toId:"ironman", effectId:"armor", effectAmount:4 },
  { fromId:"thor", fromStars:3, toId:"drstrange", effectId:"armor", effectAmount:5 },
  { fromId:"thor", fromStars:3, toId:"ironman", effectId:"armor", effectAmount:5 },
  { fromId:"thor", fromStars:3, toId:"juggernaut", effectId:"armor", effectAmount:6 },
  { fromId:"thor", fromStars:4, toId:"drstrange", effectId:"armor", effectAmount:6 },
  { fromId:"thor", fromStars:4, toId:"ironman", effectId:"armor", effectAmount:6 },
  { fromId:"thor", fromStars:4, toId:"juggernaut", effectId:"armor", effectAmount:7 },

  { fromId:"ironman", fromStars:2, toId:"thor", effectId:"perfectblock", effectAmount:3 },
  { fromId:"ironman", fromStars:3, toId:"captainamerica", effectId:"armor", effectAmount:5 },
  { fromId:"ironman", fromStars:3, toId:"thor", effectId:"perfectblock", effectAmount:4 },
  { fromId:"ironman", fromStars:4, toId:"captainamerica", effectId:"armor", effectAmount:6 },
  { fromId:"ironman", fromStars:4, toId:"thor", effectId:"perfectblock", effectAmount:5 },
  
  { fromId:"ironpatriot", fromStars:3, toId:"ironman", effectId:"armor", effectAmount:5 },
  { fromId:"ironpatriot", fromStars:3, toId:"spiderman", effectId:"critrate", effectAmount:6 },
  { fromId:"ironpatriot", fromStars:3, toId:"captainamerica", effectId:"critdamage", effectAmount:20 },
  { fromId:"ironpatriot", fromStars:4, toId:"ironman", effectId:"armor", effectAmount:6 },
  { fromId:"ironpatriot", fromStars:4, toId:"spiderman", effectId:"critrate", effectAmount:7 },
  { fromId:"ironpatriot", fromStars:4, toId:"captainamerica", effectId:"critdamage", effectAmount:25 },

  { fromId:"kang", fromStars:4, toId:"blackbolt", effectId:"armor", effectAmount:6 },
  { fromId:"kang", fromStars:4, toId:"thevision", effectId:"critrate", effectAmount:7 },
  { fromId:"kang", fromStars:4, toId:"thor", effectId:"critrate", effectAmount:7 },
  { fromId:"kang", fromStars:4, toId:"spidermanblack", effectId:"critrate", effectAmount:7 },

  { fromId:"hulkbuster", fromStars:2, toId:"hulk", effectId:"critdamage", effectAmount:15 },
  { fromId:"hulkbuster", fromStars:3, toId:"hulk", effectId:"critdamage", effectAmount:20 },
  { fromId:"hulkbuster", fromStars:3, toId:"ironman", effectId:"perfectblock", effectAmount:5 },
  { fromId:"hulkbuster", fromStars:3, toId:"superiorironman", effectId:"perfectblock", effectAmount:5 },
  { fromId:"hulkbuster", fromStars:4, toId:"hulk", effectId:"critdamage", effectAmount:25 },
  { fromId:"hulkbuster", fromStars:4, toId:"ironman", effectId:"perfectblock", effectAmount:6 },
  { fromId:"hulkbuster", fromStars:4, toId:"superiorironman", effectId:"perfectblock", effectAmount:6 },

  { fromId:"rocket", fromStars:3, toId:"starlord", effectId:"armor", effectAmount:5 },
  { fromId:"rocket", fromStars:3, toId:"ronan", effectId:"critrate", effectAmount:6 },
  { fromId:"rocket", fromStars:3, toId:"gamora", effectId:"perfectblock", effectAmount:4 },
  { fromId:"rocket", fromStars:3, toId:"drax", effectId:"perfectblock", effectAmount:4 },
  { fromId:"rocket", fromStars:4, toId:"starlord", effectId:"armor", effectAmount:6 },
  { fromId:"rocket", fromStars:4, toId:"ronan", effectId:"critrate", effectAmount:7 },
  { fromId:"rocket", fromStars:4, toId:"gamora", effectId:"perfectblock", effectAmount:5 },
  { fromId:"rocket", fromStars:4, toId:"drax", effectId:"perfectblock", effectAmount:5 },

  { fromId:"starlord", fromStars:2, toId:"rocket", effectId:"armor", effectAmount:4 },
  { fromId:"starlord", fromStars:2, toId:"drax", effectId:"perfectblock", effectAmount:3 },
  { fromId:"starlord", fromStars:3, toId:"rocket", effectId:"armor", effectAmount:5 },
  { fromId:"starlord", fromStars:3, toId:"drax", effectId:"perfectblock", effectAmount:4 },
  { fromId:"starlord", fromStars:3, toId:"gamora", effectId:"perfectblock", effectAmount:4 },
  { fromId:"starlord", fromStars:4, toId:"rocket", effectId:"armor", effectAmount:6 },
  { fromId:"starlord", fromStars:4, toId:"drax", effectId:"perfectblock", effectAmount:5 },
  { fromId:"starlord", fromStars:4, toId:"gamora", effectId:"perfectblock", effectAmount:5 },

  { fromId:"vision", fromStars:2, toId:"scarletwitch", effectId:"powergain", effectAmount:3 },
  { fromId:"vision", fromStars:2, toId:"ironman", effectId:"perfectblock", effectAmount:3 },
  { fromId:"vision", fromStars:3, toId:"scarletwitch", effectId:"powergain", effectAmount:4 },
  { fromId:"vision", fromStars:3, toId:"ironman", effectId:"perfectblock", effectAmount:4 },
  { fromId:"vision", fromStars:4, toId:"scarletwitch", effectId:"powergain", effectAmount:5 },
  { fromId:"vision", fromStars:4, toId:"ironman", effectId:"perfectblock", effectAmount:5 },

  { fromId:"thevision", fromStars:2, toId:"ironman", effectId:"health", effectAmount:4 },
  { fromId:"thevision", fromStars:2, toId:"scarletwitch", effectId:"perfectblock", effectAmount:3 },
  { fromId:"thevision", fromStars:3, toId:"ironman", effectId:"health", effectAmount:5 },
  { fromId:"thevision", fromStars:3, toId:"scarletwitch", effectId:"perfectblock", effectAmount:4 },
  { fromId:"thevision", fromStars:3, toId:"ultron", effectId:"attack", effectAmount:4 },
  { fromId:"thevision", fromStars:4, toId:"ironman", effectId:"health", effectAmount:6 },
  { fromId:"thevision", fromStars:4, toId:"scarletwitch", effectId:"perfectblock", effectAmount:5 },
  { fromId:"thevision", fromStars:4, toId:"ultron", effectId:"attack", effectAmount:5 },

  { fromId:"ultron", fromStars:2, toId:"ironman", effectId:"health", effectAmount:4 },
  { fromId:"ultron", fromStars:2, toId:"scarletwitch", effectId:"armor", effectAmount:4 },
  { fromId:"ultron", fromStars:3, toId:"ironman", effectId:"health", effectAmount:5 },
  { fromId:"ultron", fromStars:3, toId:"scarletwitch", effectId:"armor", effectAmount:5 },
  { fromId:"ultron", fromStars:4, toId:"ironman", effectId:"health", effectAmount:6 },
  { fromId:"ultron", fromStars:4, toId:"scarletwitch", effectId:"armor", effectAmount:6 },
  
  { fromId:"warmachine", fromStars:3, toId:"hulkbuster", effectId:"armor", effectAmount:5 },
  { fromId:"warmachine", fromStars:3, toId:"hawkeye", effectId:"block", effectAmount:15 },
  { fromId:"warmachine", fromStars:3, toId:"blackwidow", effectId:"perfectblock", effectAmount:4 },
  { fromId:"warmachine", fromStars:4, toId:"hulkbuster", effectId:"armor", effectAmount:6 },
  { fromId:"warmachine", fromStars:4, toId:"blackpanther", effectId:"critrate", effectAmount:7 },
  { fromId:"warmachine", fromStars:4, toId:"hawkeye", effectId:"block", effectAmount:20 },
  { fromId:"warmachine", fromStars:4, toId:"blackwidow", effectId:"perfectblock", effectAmount:5 },

  { fromId:"colossus", fromStars:2, toId:"juggernaut", effectId:"critrate", effectAmount:5 },
  { fromId:"colossus", fromStars:3, toId:"juggernaut", effectId:"critrate", effectAmount:6 },
  { fromId:"colossus", fromStars:3, toId:"wolverine", effectId:"armor", effectAmount:5 },
  { fromId:"colossus", fromStars:3, toId:"magik", effectId:"health", effectAmount:4 },
  { fromId:"colossus", fromStars:4, toId:"juggernaut", effectId:"critrate", effectAmount:7 },
  { fromId:"colossus", fromStars:4, toId:"wolverine", effectId:"armor", effectAmount:6 },
  { fromId:"colossus", fromStars:4, toId:"magik", effectId:"health", effectAmount:5 },

  { fromId:"cyclops", fromStars:2, toId:"wolverine", effectId:"critdamage", effectAmount:15 },
  { fromId:"cyclops", fromStars:3, toId:"wolverine", effectId:"critdamage", effectAmount:20 },
  { fromId:"cyclops", fromStars:3, toId:"magneto", effectId:"attack", effectAmount:4 },
  { fromId:"cyclops", fromStars:4, toId:"wolverine", effectId:"critdamage", effectAmount:25 },
  { fromId:"cyclops", fromStars:4, toId:"magneto", effectId:"attack", effectAmount:5 },

  { fromId:"deadpool", fromStars:2, toId:"punisher", effectId:"perfectblock", effectAmount:3 },
  { fromId:"deadpool", fromStars:3, toId:"rhino", effectId:"critrate", effectAmount:6 },
  { fromId:"deadpool", fromStars:3, toId:"wolverine", effectId:"health", effectAmount:4 },
  { fromId:"deadpool", fromStars:3, toId:"punisher", effectId:"perfectblock", effectAmount:4 },
  { fromId:"deadpool", fromStars:4, toId:"rhino", effectId:"critrate", effectAmount:7 },
  { fromId:"deadpool", fromStars:4, toId:"wolverine", effectId:"health", effectAmount:5 },
  { fromId:"deadpool", fromStars:4, toId:"punisher", effectId:"perfectblock", effectAmount:5 },

  { fromId:"magneto", fromStars:3, toId:"wolverine", effectId:"critrate", effectAmount:6 },
  { fromId:"magneto", fromStars:3, toId:"cyclops", effectId:"block", effectAmount:15 },
  { fromId:"magneto", fromStars:3, toId:"storm", effectId:"critdamage", effectAmount:20 },
  { fromId:"magneto", fromStars:4, toId:"wolverine", effectId:"critrate", effectAmount:7 },
  { fromId:"magneto", fromStars:4, toId:"cyclops", effectId:"block", effectAmount:20 },
  { fromId:"magneto", fromStars:4, toId:"storm", effectId:"critdamage", effectAmount:25 },

  { fromId:"magnetomarvelnow", fromStars:3, toId:"cyclops", effectId:"perfectblock", effectAmount:4 },
  { fromId:"magnetomarvelnow", fromStars:3, toId:"magik", effectId:"perfectblock", effectAmount:4 },
  { fromId:"magnetomarvelnow", fromStars:3, toId:"wolverine", effectId:"critdamage", effectAmount:20 },
  { fromId:"magnetomarvelnow", fromStars:4, toId:"cyclops", effectId:"perfectblock", effectAmount:5 },
  { fromId:"magnetomarvelnow", fromStars:4, toId:"magik", effectId:"perfectblock", effectAmount:5 },
  { fromId:"magnetomarvelnow", fromStars:4, toId:"wolverine", effectId:"critdamage", effectAmount:25 },

  { fromId:"storm", fromStars:2, toId:"blackpanther", effectId:"powergain", effectAmount:3 },
  { fromId:"storm", fromStars:3, toId:"magik", effectId:"armor", effectAmount:6 },
  { fromId:"storm", fromStars:3, toId:"cyclops", effectId:"perfectblock", effectAmount:4 },
  { fromId:"storm", fromStars:3, toId:"blackpanther", effectId:"powergain", effectAmount:4 },
  { fromId:"storm", fromStars:4, toId:"magik", effectId:"armor", effectAmount:7 },
  { fromId:"storm", fromStars:4, toId:"cyclops", effectId:"perfectblock", effectAmount:5 },
  { fromId:"storm", fromStars:4, toId:"blackpanther", effectId:"powergain", effectAmount:5 },
  { fromId:"storm", fromStars:4, toId:"magneto", effectId:"critrate", effectAmount:7 },

  { fromId:"wolverine", fromStars:2, toId:"cyclops", effectId:"critdamage", effectAmount:15 },
  { fromId:"wolverine", fromStars:3, toId:"cyclops", effectId:"critdamage", effectAmount:20 },
  { fromId:"wolverine", fromStars:3, toId:"captainamerica", effectId:"armor", effectAmount:5 },
  { fromId:"wolverine", fromStars:3, toId:"magneto", effectId:"critrate", effectAmount:6 },
  { fromId:"wolverine", fromStars:4, toId:"cyclops", effectId:"critdamage", effectAmount:25 },
  { fromId:"wolverine", fromStars:4, toId:"captainamerica", effectId:"armor", effectAmount:6 },
  { fromId:"wolverine", fromStars:4, toId:"magneto", effectId:"critrate", effectAmount:7 },

  { fromId:"blackpanther", fromStars:2, toId:"ironfist", effectId:"critdamage", effectAmount:15 },
  { fromId:"blackpanther", fromStars:3, toId:"ironfist", effectId:"critdamage", effectAmount:20 },
  { fromId:"blackpanther", fromStars:3, toId:"storm", effectId:"powergain", effectAmount:4 },
  { fromId:"blackpanther", fromStars:3, toId:"deadpool", effectId:"critrate", effectAmount:6 },
  { fromId:"blackpanther", fromStars:4, toId:"ironfist", effectId:"critdamage", effectAmount:25 },
  { fromId:"blackpanther", fromStars:4, toId:"storm", effectId:"powergain", effectAmount:5 },
  { fromId:"blackpanther", fromStars:4, toId:"deadpool", effectId:"critrate", effectAmount:7 },

  { fromId:"daredevil", fromStars:3, toId:"superiorironman", effectId:"critdamage", effectAmount:20 },
  { fromId:"daredevil", fromStars:3, toId:"blackwidow", effectId:"powergain", effectAmount:4 },
  { fromId:"daredevil", fromStars:4, toId:"superiorironman", effectId:"critdamage", effectAmount:25 },
  { fromId:"daredevil", fromStars:4, toId:"blackwidow", effectId:"powergain", effectAmount:5 },

  { fromId:"hawkeye", fromStars:2, toId:"scarletwitch", effectId:"powergain", effectAmount:3 },
  { fromId:"hawkeye", fromStars:3, toId:"scarletwitch", effectId:"powergain", effectAmount:4 },
  { fromId:"hawkeye", fromStars:3, toId:"ironman", effectId:"armor", effectAmount:5 },
  { fromId:"hawkeye", fromStars:4, toId:"scarletwitch", effectId:"powergain", effectAmount:5 },
  { fromId:"hawkeye", fromStars:4, toId:"ironman", effectId:"armor", effectAmount:6 },
  { fromId:"hawkeye", fromStars:4, toId:"hulk", effectId:"armor", effectAmount:6 },

  { fromId:"punisher", fromStars:2, toId:"spiderman", effectId:"critdamage", effectAmount:15 },
  { fromId:"punisher", fromStars:3, toId:"spiderman", effectId:"critdamage", effectAmount:20 },
  { fromId:"punisher", fromStars:3, toId:"rhino", effectId:"perfectblock", effectAmount:4 },
  { fromId:"punisher", fromStars:4, toId:"spiderman", effectId:"critdamage", effectAmount:25 },
  { fromId:"punisher", fromStars:4, toId:"rhino", effectId:"perfectblock", effectAmount:5 },

  { fromId:"wintersoldier", fromStars:2, toId:"wolverine", effectId:"armor", effectAmount:4 },
  { fromId:"wintersoldier", fromStars:2, toId:"captainamerica", effectId:"perfectblock", effectAmount:3 },
  { fromId:"wintersoldier", fromStars:3, toId:"wolverine", effectId:"armor", effectAmount:5 },
  { fromId:"wintersoldier", fromStars:3, toId:"captainamerica", effectId:"perfectblock", effectAmount:4 },
  { fromId:"wintersoldier", fromStars:4, toId:"wolverine", effectId:"armor", effectAmount:6 },
  { fromId:"wintersoldier", fromStars:4, toId:"captainamerica", effectId:"perfectblock", effectAmount:5 },

  { fromId:"blackwidow", fromStars:2, toId:"captainmarvel", effectId:"armor", effectAmount:4 },
  { fromId:"blackwidow", fromStars:2, toId:"wintersoldier", effectId:"powergain", effectAmount:3 },
  { fromId:"blackwidow", fromStars:3, toId:"hulk", effectId:"stun", effectAmount:20 },
  { fromId:"blackwidow", fromStars:3, toId:"captainmarvel", effectId:"armor", effectAmount:5 },
  { fromId:"blackwidow", fromStars:3, toId:"wintersoldier", effectId:"powergain", effectAmount:4 },
  { fromId:"blackwidow", fromStars:3, toId:"hawkeye", effectId:"powergain", effectAmount:4 },
  { fromId:"blackwidow", fromStars:4, toId:"hulk", effectId:"stun", effectAmount:25 },
  { fromId:"blackwidow", fromStars:4, toId:"captainmarvel", effectId:"armor", effectAmount:6 },
  { fromId:"blackwidow", fromStars:4, toId:"wintersoldier", effectId:"powergain", effectAmount:5 },
  { fromId:"blackwidow", fromStars:4, toId:"hawkeye", effectId:"powergain", effectAmount:5 },

  { fromId:"abomination", fromStars:2, toId:"rhino", effectId:"armor", effectAmount:4 },
  { fromId:"abomination", fromStars:3, toId:"rhino", effectId:"armor", effectAmount:5 },
  { fromId:"abomination", fromStars:3, toId:"hulk", effectId:"attack", effectAmount:4 },
  { fromId:"abomination", fromStars:4, toId:"rhino", effectId:"armor", effectAmount:6 },
  { fromId:"abomination", fromStars:4, toId:"hulk", effectId:"attack", effectAmount:5 },
  
  { fromId:"antman", fromStars:2, toId:"yellowjacket", effectId:"attack", effectAmount:4 },
  { fromId:"antman", fromStars:2, toId:"ironman", effectId:"perfectblock", effectAmount:3 },
  { fromId:"antman", fromStars:3, toId:"yellowjacket", effectId:"attack", effectAmount:5 },
  { fromId:"antman", fromStars:3, toId:"spiderman", effectId:"perfectblock", effectAmount:4 },
  { fromId:"antman", fromStars:3, toId:"ironman", effectId:"perfectblock", effectAmount:4 },
  { fromId:"antman", fromStars:4, toId:"hulk", effectId:"armor", effectAmount:6 },
  { fromId:"antman", fromStars:4, toId:"yellowjacket", effectId:"attack", effectAmount:6 },
  { fromId:"antman", fromStars:4, toId:"spiderman", effectId:"perfectblock", effectAmount:5 },
  { fromId:"antman", fromStars:4, toId:"ironman", effectId:"perfectblock", effectAmount:5 },

  { fromId:"captainamerica", fromStars:2, toId:"spiderman", effectId:"armor", effectAmount:4 },
  { fromId:"captainamerica", fromStars:2, toId:"superiorironman", effectId:"critrate", effectAmount:5 },
  { fromId:"captainamerica", fromStars:2, toId:"ironman", effectId:"armor", effectAmount:3 },
  { fromId:"captainamerica", fromStars:3, toId:"wintersoldier", effectId:"armor", effectAmount:5 },
  { fromId:"captainamerica", fromStars:3, toId:"spiderman", effectId:"armor", effectAmount:5 },
  { fromId:"captainamerica", fromStars:3, toId:"superiorironman", effectId:"critrate", effectAmount:6 },
  { fromId:"captainamerica", fromStars:3, toId:"ironman", effectId:"perfectblock", effectAmount:4 },
  { fromId:"captainamerica", fromStars:4, toId:"wintersoldier", effectId:"armor", effectAmount:6 },
  { fromId:"captainamerica", fromStars:4, toId:"spiderman", effectId:"armor", effectAmount:6 },
  { fromId:"captainamerica", fromStars:4, toId:"superiorironman", effectId:"critrate", effectAmount:7 },
  { fromId:"captainamerica", fromStars:4, toId:"ironman", effectId:"perfectblock", effectAmount:5 },
  
  { fromId:"captainamericawwii", fromStars:3, toId:"wintersoldier", effectId:"armor", effectAmount:5 },
  { fromId:"captainamericawwii", fromStars:3, toId:"wolverine", effectId:"armor", effectAmount:5 },
  { fromId:"captainamericawwii", fromStars:4, toId:"wintersoldier", effectId:"armor", effectAmount:6 },
  { fromId:"captainamericawwii", fromStars:4, toId:"wolverine", effectId:"armor", effectAmount:6 },
  
  { fromId:"electro", fromStars:3, toId:"spiderman", effectId:"attack", effectAmount:4 },
  { fromId:"electro", fromStars:3, toId:"rhino", effectId:"armor", effectAmount:5 },
  { fromId:"electro", fromStars:4, toId:"spiderman", effectId:"attack", effectAmount:5 },
  { fromId:"electro", fromStars:4, toId:"rhino", effectId:"armor", effectAmount:6 },

  { fromId:"hulk", fromStars:2, toId:"thor", effectId:"critdamage", effectAmount:15 },
  { fromId:"hulk", fromStars:3, toId:"thor", effectId:"armor", effectAmount:5 },
  { fromId:"hulk", fromStars:3, toId:"abomination", effectId:"critrate", effectAmount:6 },
  { fromId:"hulk", fromStars:3, toId:"hawkeye", effectId:"critdamage", effectAmount:20 },
  { fromId:"hulk", fromStars:4, toId:"thor", effectId:"armor", effectAmount:6 },
  { fromId:"hulk", fromStars:4, toId:"abomination", effectId:"critrate", effectAmount:7 },
  { fromId:"hulk", fromStars:4, toId:"hawkeye", effectId:"critdamage", effectAmount:25 },

  { fromId:"rhino", fromStars:2, toId:"spiderman", effectId:"critrate", effectAmount:5 },
  { fromId:"rhino", fromStars:2, toId:"abomination", effectId:"armor", effectAmount:4 },
  { fromId:"rhino", fromStars:3, toId:"spiderman", effectId:"critrate", effectAmount:6 },
  { fromId:"rhino", fromStars:3, toId:"abomination", effectId:"armor", effectAmount:5 },
  { fromId:"rhino", fromStars:3, toId:"electro", effectId:"perfectblock", effectAmount:4 },
  { fromId:"rhino", fromStars:4, toId:"spiderman", effectId:"critrate", effectAmount:7 },
  { fromId:"rhino", fromStars:4, toId:"abomination", effectId:"armor", effectAmount:6 },
  { fromId:"rhino", fromStars:4, toId:"electro", effectId:"perfectblock", effectAmount:5 },

  { fromId:"spiderman", fromStars:1, toId:"wolverine", effectId:"health", effectAmount:5 },
  { fromId:"spiderman", fromStars:1, toId:"hawkeye", effectId:"attack", effectAmount:5 },
  { fromId:"spiderman", fromStars:2, toId:"wolverine", effectId:"health", effectAmount:5 },
  { fromId:"spiderman", fromStars:2, toId:"hawkeye", effectId:"attack", effectAmount:5 },
  { fromId:"spiderman", fromStars:3, toId:"wolverine", effectId:"health", effectAmount:5 },
  { fromId:"spiderman", fromStars:3, toId:"hawkeye", effectId:"attack", effectAmount:5 },
  { fromId:"spiderman", fromStars:3, toId:"electro", effectId:"health", effectAmount:6 },
  { fromId:"spiderman", fromStars:3, toId:"captainamerica", effectId:"armor", effectAmount:5 },
  { fromId:"spiderman", fromStars:4, toId:"wolverine", effectId:"health", effectAmount:6 },
  { fromId:"spiderman", fromStars:4, toId:"hawkeye", effectId:"attack", effectAmount:6 },
  { fromId:"spiderman", fromStars:4, toId:"electro", effectId:"health", effectAmount:7 },
  { fromId:"spiderman", fromStars:4, toId:"captainamerica", effectId:"armor", effectAmount:6 },

  { fromId:"yellowjacket", fromStars:2, toId:"antman", effectId:"attack", effectAmount:4 },
  { fromId:"yellowjacket", fromStars:3, toId:"antman", effectId:"attack", effectAmount:5 },
  { fromId:"yellowjacket", fromStars:4, toId:"antman", effectId:"attack", effectAmount:6 },
  
  { fromId:"drstrange", fromStars:3, toId:"thor", effectId:"armor", effectAmount:5 },
  { fromId:"drstrange", fromStars:3, toId:"spiderman", effectId:"armor", effectAmount:5 },
  { fromId:"drstrange", fromStars:3, toId:"scarletwitch", effectId:"block", effectAmount:15 },
  { fromId:"drstrange", fromStars:3, toId:"blackbolt", effectId:"perfectblock", effectAmount:4 },
  { fromId:"drstrange", fromStars:4, toId:"thor", effectId:"armor", effectAmount:6 },
  { fromId:"drstrange", fromStars:4, toId:"spiderman", effectId:"armor", effectAmount:6 },
  { fromId:"drstrange", fromStars:4, toId:"scarletwitch", effectId:"block", effectAmount:20 },
  { fromId:"drstrange", fromStars:4, toId:"blackbolt", effectId:"perfectblock", effectAmount:5 },

  { fromId:"ironfist", fromStars:2, toId:"blackpanther", effectId:"armor", effectAmount:4 },
  { fromId:"ironfist", fromStars:3, toId:"blackpanther", effectId:"armor", effectAmount:5 },
  { fromId:"ironfist", fromStars:3, toId:"drstrange", effectId:"armor", effectAmount:5 },
  { fromId:"ironfist", fromStars:4, toId:"blackpanther", effectId:"armor", effectAmount:6 },
  { fromId:"ironfist", fromStars:4, toId:"drstrange", effectId:"armor", effectAmount:6 },
  { fromId:"ironfist", fromStars:4, toId:"wolverine", effectId:"armor", effectAmount:6 },

  { fromId:"juggernaut", fromStars:2, toId:"colossus", effectId:"critrate", effectAmount:5 },
  { fromId:"juggernaut", fromStars:3, toId:"drstrange", effectId:"attack", effectAmount:4 },
  { fromId:"juggernaut", fromStars:3, toId:"colossus", effectId:"critrate", effectAmount:6 },
  { fromId:"juggernaut", fromStars:3, toId:"hulk", effectId:"critrate", effectAmount:6 },
  { fromId:"juggernaut", fromStars:4, toId:"drstrange", effectId:"attack", effectAmount:5 },
  { fromId:"juggernaut", fromStars:4, toId:"colossus", effectId:"critrate", effectAmount:7 },
  { fromId:"juggernaut", fromStars:4, toId:"hulk", effectId:"critrate", effectAmount:7 },

  { fromId:"magik", fromStars:2, toId:"colossus", effectId:"health", effectAmount:4 },
  { fromId:"magik", fromStars:3, toId:"storm", effectId:"armor", effectAmount:5 },
  { fromId:"magik", fromStars:3, toId:"colossus", effectId:"health", effectAmount:5 },
  { fromId:"magik", fromStars:3, toId:"cyclops", effectId:"perfectblock", effectAmount:4 },
  { fromId:"magik", fromStars:4, toId:"storm", effectId:"armor", effectAmount:6 },
  { fromId:"magik", fromStars:4, toId:"colossus", effectId:"health", effectAmount:6 },
  { fromId:"magik", fromStars:4, toId:"cyclops", effectId:"perfectblock", effectAmount:5 },
  { fromId:"magik", fromStars:4, toId:"juggernaut", effectId:"critrate", effectAmount:7 },

  { fromId:"scarletwitch", fromStars:2, toId:"captainmarvel", effectId:"armor", effectAmount:4 },
  { fromId:"scarletwitch", fromStars:3, toId:"captainmarvel", effectId:"armor", effectAmount:5 },
  { fromId:"scarletwitch", fromStars:3, toId:"vision", effectId:"powergain", effectAmount:4 },
  { fromId:"scarletwitch", fromStars:4, toId:"captainmarvel", effectId:"armor", effectAmount:6 },
  { fromId:"scarletwitch", fromStars:4, toId:"vision", effectId:"powergain", effectAmount:5 },

  { fromId:"unstoppablecolossus", fromStars:2, toId:"magik", effectId:"health", effectAmount:4 },
  { fromId:"unstoppablecolossus", fromStars:2, toId:"juggernaut", effectId:"critdamage", effectAmount:15 },
  { fromId:"unstoppablecolossus", fromStars:3, toId:"wolverine", effectId:"armor", effectAmount:5 },
  { fromId:"unstoppablecolossus", fromStars:3, toId:"magik", effectId:"health", effectAmount:5 },
  { fromId:"unstoppablecolossus", fromStars:3, toId:"cyclops", effectId:"perfectblock", effectAmount:4 },
  { fromId:"unstoppablecolossus", fromStars:3, toId:"juggernaut", effectId:"critdamage", effectAmount:20 },
  { fromId:"unstoppablecolossus", fromStars:4, toId:"wolverine", effectId:"armor", effectAmount:6 },
  { fromId:"unstoppablecolossus", fromStars:4, toId:"magik", effectId:"health", effectAmount:6 },
  { fromId:"unstoppablecolossus", fromStars:4, toId:"cyclops", effectId:"perfectblock", effectAmount:5 },
  { fromId:"unstoppablecolossus", fromStars:4, toId:"juggernaut", effectId:"critdamage", effectAmount:25 }
  
], {
  model: CoC.model.Synergy
});