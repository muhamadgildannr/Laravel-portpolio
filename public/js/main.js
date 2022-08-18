function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || msg.value == ""){
        emptyerror();
      } else{
        sendmail(name.value, email.value, msg.value)
        success();
      }
    });
  }
  validate();

  function sendmail(name,email,msg){
    emailjs.send("service_gt0m5m5","template_s08ubj8",{
        to_name: email,
        from_name: name,
        message: msg,
        });
  }


  function emptyerror() {
    swal({
      title: "Oh No...",
      text: "Fields cannot be empty!",
      icon: "error",
    });
  }
  function success() {
    swal({
      title: "Email sent successfully",
      text: "We try to reply in 24 hours",
      icon: "success",
    });
  }