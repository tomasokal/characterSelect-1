import { Float, useMatcapTexture } from '@react-three/drei'
import { useRef, useState } from 'react'
import { a, useSpring } from '@react-spring/three'

export default function Fourhedron()
{

    const [ tetrahedronTexture ] = useMatcapTexture('3B3B3B_C7C7C7_878787_A4A4A4', 256)

    const tetrahedronRef = useRef()
    const [active, setActive] = useState(false)

    const { scale } = useSpring({
        scale: active ? 1.5 : 1
    })
  
    return <>

        <Float
            speed={ 1 }
            floatIntensity={ 1 }
            floatingRange={ [ -0.5, 0.5 ] }
        >
            <a.mesh 
                ref={ tetrahedronRef } 
                position={ [ -3, 2, 3 ] } 
                scale={ scale } 
                onClick={ (event) => {
                    setActive(!active)
                    event.stopPropagation()
                }}
            >
                <tetrahedronGeometry args={ [ 1, 0 ] } />
                <meshMatcapMaterial matcap={ tetrahedronTexture } />
            </a.mesh>
        </Float>

    </>
}