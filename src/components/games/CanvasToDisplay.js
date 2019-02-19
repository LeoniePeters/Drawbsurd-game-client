import React, { PureComponent } from 'react'
import CanvasDraw from "react-canvas-draw"


export default class CanvasToDisplay extends PureComponent {

    render(){
        if (!this.props.canvasDisplay) { return 'Loading...' }

        const canvas = this.props.canvasDisplay
        console.log(canvas)


        return(
            <div>
        <CanvasDraw
          disabled
          hideGrid
          ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
          saveData={JSON.stringify(canvas)}
        />
        </div>

    //     <button
    //     onClick={() => {
    //       this.loadableCanvas.loadSaveData(
    //         localStorage.getItem("savedDrawing")
    //       );
    //     }}
    //   >
    //     Load what you saved previously into the following canvas. Either by
    //     calling `loadSaveData()` on the component's reference or passing it
    //     the `saveData` prop:
    //   </button>
    //   <CanvasDraw
    //     disabled
    //     hideGrid
    //     ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
    //     saveData={localStorage.getItem("savedDrawing")}
    //   />
         ) }
        }