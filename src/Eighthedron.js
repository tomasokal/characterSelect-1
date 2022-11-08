import { Float, useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { MathUtils } from 'three'

export default function Eighthedron()
{

    const [ octahedronTexture ] = useMatcapTexture('3A2412_A78B5F_705434_836C47', 256)

    const octahedronRef = useRef()
    const [ clicked, setClicked ] = useState(false)

    useFrame((state, delta) => {
        octahedronRef.current.position.x = MathUtils.lerp(octahedronRef.current.position.x, !clicked ? -2 : 0, 0.1)
        octahedronRef.current.position.z = MathUtils.lerp(octahedronRef.current.position.z, !clicked ? -2 : 0, 0.1)
    })

    return <>

        <Float
            speed={ 1 }
            floatIntensity={ 1 }
            floatingRange={ [ -0.5, 0.5 ] }
        >
            <mesh 
                ref={ octahedronRef } 
                position={ [ -3, 2, -3 ] } 
                onClick={ (event) => {
                    setClicked(!clicked) 
                    event.stopPropagation()
                }}
            >
                <octahedronGeometry args={ [ 1, 0 ] } />
                <meshMatcapMaterial matcap={ octahedronTexture } />
            </mesh>
        </Float>

    </>
}