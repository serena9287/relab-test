function uniqueID() {
    var uniqueCode = Math.floor(Math.random() * Date.now())
    return uniqueCode;
    }

document.getElementById("copyLinkInput").value = uniqueID();

function copylink() {
    /* Get the text field */
    var copyText = document.getElementById("copyLinkInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }