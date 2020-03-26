/* cream #f9eedc */
/* white #fffbf5 */
/* green #026540 */


/* //////////////////////////////////////////////////////////////////////////////// */
/* General */
/* //////////////////////////////////////////////////////////////////////////////// */

* {
  margin: 0;
  box-sizing: border-box;
  font-family: arial, sans-serif;
  scroll-behavior: smooth;
  outline: px solid red;
  font-family: 'Cabin', sans-serif;
}

body {
  background: #026540;
  color: #f9eedc;
  font-family: 'Cabin', sans-serif;
}

header {
  /*width: 100vw;*/
  /*background: #026540;*/
  color: #f9eedc;
  position: fixed;
  z-index: 200;
  margin-top: 40px;
  /*border-bottom: 2px solid #f9eedc;*/
}

header h1 {
  font-size: 55px;
  display: inline-block;
  text-align: left;
  margin: 0px 0px 0px 40px;
  /* width: 9ch;*/
  font-family: inherit;
}


/* //////////////////////////////////////////////////////////////////////////////// */
/* Sharing */
/* //////////////////////////////////////////////////////////////////////////////// */

footer {
  position: fixed;
  bottom: 0;
  background: #fcb80e;
  color: #333333;
  z-index: 900;
  width: 100vw;
  text-align: center;
  padding: 10px;
}

footer a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 0 10px;
  font-family: inherit;
}

footer a:hover {
  text-decoration: underline;
  font-style: italic;
  color: 
}

/* //////////////////////////////////////////////////////////////////////////////// */
/* Hamburger */
/* //////////////////////////////////////////////////////////////////////////////// */

.hamburger {
  color: #f9eedc;
  display: inline-block;
  cursor: pointer;
  position: fixed;
  right: 0;
  top: 0;
  margin: 40px;
  height: 20px;
  width: 20px;
  z-index: 900;
  transition: all .2s ease;
}

.hamburger_line_top,
.hamburger_line_middle,
.hamburger_line_bottom {
  background-color: #f9eedc;
  transition: 0.4s;
  height: 3px;
  margin-top: 5px;
  width: 24px;
}

.change .hamburger_line_top {
  -webkit-transform: rotate(45deg) translate3d(5px, 4px, 0);
  transform: rotate(45deg) translate3d(5px, 4px, 0);
  -webkit-transform: center;
  transform-origin: center;
}

.change .hamburger_line_middle {
  opacity: 0;
}

.change .hamburger_line_bottom {
  -webkit-transform: rotate(-45deg) translate3d(7px, -6px, 0);
  transform: rotate(-45deg) translate3d(7px, -6px, 0);
  -webkit-transform: center;
  transform-origin: center;
}

/* //////////////////////////////////////////////////////////////////////////////// */
/* Menu */
/* //////////////////////////////////////////////////////////////////////////////// */

#menu {
    position: fixed;
    z-index: 300;
    height: 100vh;
    background: #026540;
    color: #f9eedc; 
    left: 100vw;
    width: 50vw;
    /* margin-top: 80px; */
    font-size: 1.5em;
    padding: 40px;
    box-sizing: border-box;
    border-left: 2px solid;
    transition: 1s;
}

@media all and (max-width: 900px) {
  #menu {
      width: 100vw;
      margin: auto;
      padding-top: 160px;
      border-left: unset;
      text-align: center;
      transition: 0.5s;
  }
}

.menu_link {
  padding: 6px 0;
}

.menu_link:hover {
  text-decoration: underline;
  cursor: pointer;
}

/* //////////////////////////////////////////////////////////////////////////////// */
/* Menu Links */
/* //////////////////////////////////////////////////////////////////////////////// */

.info {
    left: 100vw;
    background: inherit;
    color: #eee;
    height: 100vh;
    padding: 200px 0px 80px 40px;
    position: fixed;
    width: 50vw;
    z-index: 5;
    transition: 1s;
    overflow: scroll;
}

@media all and (max-width: 900px) {
.info {
      width: 100vw;
      transition: 0.5s;
  }
}

.info h3 {
  font-size: 1.5em;
  padding-bottom: 1em;
}

.info p,
.info_body {
  width: 80%;
}

#about p {
  padding-bottom: 1em;
}

/* //////////////////////////////////////////////////////////////////////////////// */
/* Frequently Asked Questions */
/* //////////////////////////////////////////////////////////////////////////////// */

#accordion {
  width: 80%;
  padding-top: 1em;
  border-top: 1px solid;
  margin-top: 1em;
}

.accordion {
  background-color: #f9eedc;
  color: #026540;
  cursor: pointer;
  padding: 0.5em 0;;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1em;
  transition: 0.4s;
}

.active,
.accordion:hover {
  background-color: #026540;
  color: #f9eedc;
}

.panel {
  padding: 0 18px;
  /*background-color: #f9eedc;*/
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  border-top: 2px solid;
}

/* //////////////////////////////////////////////////////////////////////////////// */
/* Main Content */
/* //////////////////////////////////////////////////////////////////////////////// */

.wrapper {
  display: flex;  
  flex-flow: row wrap;
}

.wrapper > * {
  flex: 1 100%;
  text-align: left;
}

#intro {
  order: 1;
  font-size: 1em;
  padding: 170px 10px 10px 10px;
  margin: 10px 0px 0px 30px;
  width: 50vw;
  color: #eee;
  font-family: 'IBM Plex Serif', serif;
}

#intro p {
  padding-bottom: 1em;
  width: 330px;
  font-family: inherit;
}

@media all and (max-width: 900px) {
  #intro {
    font-size: 1.2em;
  }
  #intro p {
    width: unset;
  }
}

@media all and (max-width: 600px) {
  #intro {
    font-size: 1em;
  }
  #intro p {
    width: unset;
  }
}
  
#view {
  order: 3;
  cursor: pointer;
  background: #f9eedc;
  color: #026540; 
  text-align: center;
  border-radius: 50px;
  width: 330px;
  padding: 10px;
}

#view a {
  text-decoration: none;
  color: inherit;
}

/* //////////////////////////////////////////////////////////////////////////////// */
/* Chatbot */
/* //////////////////////////////////////////////////////////////////////////////// */

#josef {
  display: none;
  order: 3;
  padding: 100px 10px 10px 10px;
  background: #026540;
  height: calc(100vh - 0px);
}

#josef iframe {
  height: ;
  padding: 0px 80px 80px 20px;
}

@media all and (min-width: 600px) {
  #intro, #view, #josef { 
    flex: 40%;
  }
}
@media all and (max-width: 600px) {
  #josef {
    height: calc(100vh - 40px);
  }
    #josef iframe {
    padding: 60px 20px 60px 20px;
  }
}
