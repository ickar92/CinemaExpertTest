function rudrSwitchTab(rudr_tab_id, rudr_tab_content) {
  var x = document.getElementsByClassName("tabcontent");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  document.getElementById(rudr_tab_content).style.display = 'block';


  var x = document.getElementsByClassName("tabmenu");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].className = 'tabmenu';
  }
  document.getElementById(rudr_tab_id).className = 'tabmenu active';
}