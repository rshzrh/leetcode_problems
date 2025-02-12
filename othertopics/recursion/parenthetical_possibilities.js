/***
 * Write a function, parentheticalPossibilities, that takes in a string as an argument. 
 * The function should return an array containing all of the strings that could be generated by expanding all parentheses of the string into its possibilities.

For example, the possibilities for 'x(mn)yz' are 'xmyz', 'xnyz'.
 */

onst parentheticalPossibilities = (s) => {

    if(s === null || s.length == 0)
      return ['']
  
    const result = []
  
    const {remaining, chars} = partializeString(s)
    const suffixes = parentheticalPossibilities(remaining)
  
  
    for(let ch of chars){
      for(let suffix of suffixes){
        result.push(ch + suffix)      
      }
      
    }
    
    console.log(result)
    return result
    
    
  };
  
  function partializeString(s){
    if (s[0] === "(") {
      const endIdx = s.indexOf(")");
      const remaining = s.slice(endIdx + 1);
      const chars = s.slice(1, endIdx).split("");
      return { remaining, chars };
    } else {
      const remaining = s.slice(1);
      const chars = [s[0]];
      return { remaining, chars };
    }
  }
  
  module.exports = {
    parentheticalPossibilities,
  };
  
  // console.log(partializeString('x(mn)yz'))
  // console.log(partializeString('(mn)yz'))
  parentheticalPossibilities('x(mn)yz'); // -> 
  // [ 'xmyz', 'xnyz' ]
  
  // parentheticalPossibilities("(qr)ab(stu)c"); // ->
  // [ 'qabsc', 'qabtc', 'qabuc', 'rabsc', 'rabtc', 'rabuc' ]
  
  