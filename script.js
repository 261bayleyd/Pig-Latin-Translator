function run(){
  let eoinput = document.getElementById("inputuser").value
  let vowels = ["a", "e", "i", "o", "u"]
  let eosplit = eoinput.split(/[\s,.!]+/)
  for (let i = 0; i < eosplit.length; i++) {
    if  (eosplit[i] != "") {
      console.log(eosplit[i])
      let firstletter = eosplit[i].slice(0,1)
      let rest = eosplit[i].slice(1,eosplit[i].length)
      firstletter = firstletter.toLowerCase()
      console.log(firstletter)
      let pgword
      if (vowels.includes(firstletter)){
        pgword = rest+firstletter+"hay"
      }
      else{
        pgword = rest+firstletter+"ay"
      }
      eosplit[i] = pgword
      console.log(pgword)
    }
  }
  document.getElementById("output").innerHTML=eosplit.join(" ")
}
