import React, { useEffect, useState } from "react";
import Aux from "../../HOC/Auxilary"
import "./Slider.css"
import InnerImageShow from "./InnerImageShow/InnerImageShow";
import TrackingImage from "./TrackingImage/TrackingImage";
import ButtonSlider from "./ButtonSlider/ButtonSlider";
const Slider=(props)=>{

    let [imgIndex,setimgIndex]=useState(0)
    const increaseTime=async ()=>{
        imgIndex++;
        imgIndex=imgIndex%5;
        console.log("its the number in IncreaseTIme ",imgIndex)
        setimgIndex(imgIndex)

    }

    // setInterval(increaseTime,10000)

    const leftClickHandler=()=>{
        // console.log("HELLO ALL IT'S A LEFT CLICK HANDLER")
        imgIndex--;
        if(imgIndex<0)
        imgIndex=imgIndex%5+5
        // console.log("slider index leftCLickHandler ",imgIndex)
        setimgIndex(imgIndex);
    }
    const rightClickHandler=()=>{
        // console.log("HELLO ALL IT'S A RIGHT CLICK HANDLER")
        imgIndex++;
        imgIndex=imgIndex%5;
        setimgIndex(imgIndex);
    }
    const autoScroll=true;
    let slideInterval;
    let intervalTime=5000;
    function auto() {
        slideInterval = setInterval(rightClickHandler, intervalTime);
      }
    useEffect(()=>{
        if(autoScroll)
        {
            auto();
        }
        return()=>clearInterval(slideInterval);
    },[imgIndex])
    return(
        <Aux>
         <div className="sliderFrame">
               <InnerImageShow index={imgIndex}/>
            <ButtonSlider position={"left"} direction={leftClickHandler}/> 
            <ButtonSlider position={"right"} direction={rightClickHandler}/> 
        <TrackingImage position={imgIndex}/>
        
         </div>
        </Aux>
    )

}
export default Slider;