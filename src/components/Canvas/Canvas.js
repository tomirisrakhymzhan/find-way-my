import React from "react";
import "./Canvas.css";

export default function Canvas(props){
    
    
    const canvasRef = React.useRef(null)
    // const draw = (ctx, frameCount) => {
        
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        
    //     ctx.beginPath()
    //     ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    //     ctx.fill()
    // }
      
      React.useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        // let frameCount = 0
        // let animationFrameId
        
        // //Our draw came here
        // const render = () => {
        //   frameCount++
        //   draw(context, frameCount)
        //   animationFrameId = window.requestAnimationFrame(render)
        // }
        // render()
        
        // return () => {
        //   window.cancelAnimationFrame(animationFrameId)
        // }
      })
    // React.useEffect(()=>{
    //     const canvas = canvasRef.current
    //     canvas.width = 200;
    //     canvas.height = 200;

    //     const context = canvas.getContext('2d')
    //     context.fillStyle = '#FFB6C1'
    //     context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    // }, [])
    return (<canvas ref={canvasRef} {...props}>

        </canvas>)

}
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258