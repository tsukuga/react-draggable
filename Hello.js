import React, {useState} from 'react';
import {Rnd} from 'react-rnd'
import './style.css';

const Draggable = () =>{

  const [infos,setPostion] = useState(
    {
     width:100,height:200,
     x:100,y:200,
    }
  );

  return <Rnd
        className="box"
        size={{ width: infos.width, height: infos.height }}
        position={{ x: infos.x, y: infos.y }}
        onDragStop={(e,d)=>{
          setPostion({...d})
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setPostion({
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position
                    });
        }}
        resizeGrid={[1, 1]}
        dragGrid={[10, 10]}
         >
         Start editing to see some magic happen :)
        </Rnd>
}

export default Draggable