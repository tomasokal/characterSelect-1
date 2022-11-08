import { Float, useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { MathUtils } from 'three'

export default function Tenhedron()
{

    const [ dodecahedronTexture ] = useMatcapTexture('38925D_142B23_1D4835_2A6449', 256)

    const dodecahedronRef = useRef()
    const [ clicked, setClicked ] = useState(false)

    useFrame((state, delta) => {
        dodecahedronRef.current.position.y = MathUtils.lerp(dodecahedronRef.current.position.y, clicked ? 4 : 2, 0.1)
    })

    return <>

        <Float
            speed={ 1 }
            floatIntensity={ 1 }
            floatingRange={ [ -0.5, 0.5 ] }
        >
            <mesh 
                ref={ dodecahedronRef } 
                position={ [ 3, 2, -3 ] }
                onClick={ (event) => {
                    setClicked(!clicked) 
                    event.stopPropagation()
                }}
            >
                <dodecahedronGeometry args={ [ 1, 0 ] } />
                <meshMatcapMaterial matcap={ dodecahedronTexture } />
            </mesh>
        </Float>

    </>
}