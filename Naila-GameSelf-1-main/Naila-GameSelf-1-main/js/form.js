class Form{
  
  constructor(){
    this.titleImg = createImg("./images/image main shinchan.jpg","gameTitle") 
  }


  setElementsPosition() {
      this.titleImg.position(480, 10);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
  }

  display(){
    this.setElementsPosition()
    this.setElementsStyle()
  }
}
