/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
		var learnJS = 800;
		var learnBasics = 500;
		var  time = knowsProgramming ? learnJS : learnJS + learnBasics;
		var weeksSpent =  time / config[focus];
      return weeksSpent - Math.round(weeksSpent) <= 0 ? Math.round(weeksSpent) : Math.round(weeksSpent) + 1;
  };
  