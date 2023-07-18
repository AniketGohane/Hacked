setTimeout(() => {
    console.log("hacking wifi..........please wait....!")
  }, 3000)
  setTimeout(() => {
    console.log("Phone name is MI A3 , EMI : 874663872gvv36")
  }, 6000)
  
  setTimeout(() => {
    console.log("hacking wifi  completed !")
  
  }, 4000)
  
  
  setTimeout(() => { console.log("hacking all data from phone plese wait...... !") }, 6000)
  
  setTimeout(() => { console.log(" Instagram name:tanveer_z_2115 password[*********], facbook name:Sunny Z Chaprana , password[*********] all password decordaing pleasewait......") }, 10000)
  
  setTimeout(() => {
    console.log("phone data : total contact :782 , paytm passsword[*******] whatsapp total contact:567 total photo 218 sharing to computer please wait.......")
  }, 14000)
  
  setTimeout(() => {
    console.log("All passwords fecthing completed !")
  }, 23000)
  setTimeout(() => { console.log("searching wifi please wait.....!") }, 1000)
  
  
  
  // ======hacking type code ==========
  
  let x = 0;
  let hackertyper = document.getElementById("hackerman");
  let chars = "0110 54 # * 0101110  987 RSM 000 011010110 0101";
  let charsLenght = chars.length;
  window.onload = function() {
    the_i = setInterval(function() {
      let el = document.createElement('span');
      let rand = Math.floor(Math.random() * charsLenght);
      let charText = document.createTextNode(chars[rand]);
      if (x >= charsLenght) {
        x = 0;
      } else {
        hackertyper.appendChild(el).appendChild(charText);
      }
    }, 20);
  }
  
  
  let userinfo = document.getElementById("userinfo");
  let userText = document.createTextNode(userinfo);