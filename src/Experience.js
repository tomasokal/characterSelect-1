import { Center, OrbitControls } from '@react-three/drei'

import Stage from './Stage'

export default function Experience()
{

    return <>

        <Center>

            <OrbitControls
                makeDefault
                minAzimuthAngle={ 0 }
                maxAzimuthAngle={ 0 }
                minPolarAngle={ Math.PI / 4 }
                maxPolarAngle={ Math.PI / 2 }
                enableZoom={ true }
                enablePan={ false }
            />

            <Stage />   

        </Center>

    </>

}