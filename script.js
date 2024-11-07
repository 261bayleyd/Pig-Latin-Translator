function run(){
  let eoword = document.getElementById("inputuser").value
  let vowels = ["a", "e", "i", "o", "u"]
  let firstletter = eoword.slice(0,1)
  let rest = eoword.slice(1,eoword.length)
  firstletter = firstletter.toLowerCase()
  let pgword
  if (vowels.includes(firstletter)){
    pgword = rest+firstletter+"hay"
  }
  else {
    pgword = rest+firstletter+"ay"
  }
  document.getElementById("output").innerHTML=pgword
}