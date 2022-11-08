import { useRef } from 'react'
import { useMatcapTexture } from '@react-three/drei'
import gsap from 'gsap'

import Fourhedron from './Fourhedron'
import Eighthedron from './Eighthedron'
import Tenhedron from './Tenhedron'
import Twentyhedron from './Twentyhedron'

export default function Stage()
{

    const [ stageTexture ] = useMatcapTexture('090909_9C9C9C_555555_7C7C7C', 256)
    const groupRef = useRef()
    const rotatoe = () => {
        gsap.to(
            groupRef.current.rotation,
            {
                duration: 2,
                ease: 'elastic.out',
                y: '-=1.57079632679'

            }
        )
    }

    return <>

        <group 
            ref={ groupRef } 
            position={ [ -2, 2, 2 ] } 
            rotation-y={ [ Math.PI / 4 ] }
            onClick={ rotatoe }
        >

            <mesh>
                <cylinderGeometry args={ [ 6, 6, 0.25, 80 ] } />
                <meshMatcapMaterial matcap={ stageTexture } />
            </mesh> 

            <Twentyhedron />
            <Tenhedron />
            <Eighthedron />
            <Fourhedron />

        </group>

    </>
}