const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  function replaceall(to_replace, whatreplace, replacewith) {
      let output = to_replace
      while (output.includes(whatreplace)) {
          output = output.replace(whatreplace, replacewith)
      }
      return output;
  }
  
  readline.question(`What do you want to search for? `, (w) => {
    //console.log(`Hi ${name}!`)
    readline.close()
    
    
    
    var word = replaceall(w.toLowerCase(), ' ','')
    //var word = w. toLowerCase()
    
    var liste = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    console.log('trying to find', word)
    var anschläge = 0
    var current_list = []
    
    var a = ''
    while (a.includes(word) === false){
        anschläge ++
        var rand = Math.floor(Math.random() * Math.floor(liste.length));
        if (rand > liste.length) continue
        current_list.push(liste[rand])
        if (current_list.length >= word.length + 5){
            current_list.shift()
        }
        a = replaceall(current_list.toString(), ',', '')
        //console.log(anschläge)
    }
    console.log(a)
    console.log(`Done! Took ${anschläge} keystrokes to find "${word}"`)
})