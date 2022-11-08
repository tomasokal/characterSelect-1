import { Float, useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { MathUtils } from 'three'

export default function Twentyhedron()
{

    const [ icosahedronTexture ] = useMatcapTexture('385862_6D8B8D_647B80_1A2E2F', 256)

    const icosahedronRef = useRef()
    const [ clicked, setClicked ] = useState(false)

    useFrame((state, delta) => {
        icosahedronRef.current.rotation.y = MathUtils.lerp(icosahedronRef.current.rotation.y, clicked ? icosahedronRef.current.rotation.y += Math.PI / 1000 : icosahedronRef.current.rotation.y += Math.PI / 5000, 10)
    })

    return <>

        <Float
            speed={ 1 }
            floatIntensity={ 1 }
            floatingRange={ [ -0.5, 0.5 ] }
        >
            <mesh 
                ref={ icosahedronRef } 
                position={ [ 3, 2, 3 ] } 
                onClick={ (event) => {
                    setClicked(!clicked)
                    event.stopPropagation() 
                }}
            >
                <icosahedronGeometry args={ [ 1, 0 ] } />
                <meshMatcapMaterial matcap={ icosahedronTexture } />
            </mesh>
        </Float>

    </>
}