function forum2(){





    var username=document.getElementById("name").value; 
    var comment=document.getElementById("comment").value;
    
    var link = "https://docs.google.com/forms/d/e/1FAIpQLSfxWS3UKOIQINuYXk46AAn2QUPmKTxhYDuvtIg7cj2Jd6e-3A/formResponse?&submit=Submit?usp=pp_url&entry.1539702516=${username}&entry.22898242=${comment}" 
     document.getElementById("submit").href=link
}
