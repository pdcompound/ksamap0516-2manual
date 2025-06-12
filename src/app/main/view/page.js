import ThreeView from '@/componants/threeView'
import AllArrowButtons from '@/componants/arrowButton'

export default function Home() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10
        }}>
            <ThreeView />

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 20,         // must be higher than ThreeView's canvas
                    pointerEvents: 'none', // let Three.js still receive pointer events
                }}
            >
                <AllArrowButtons />
            </div>

        </div>
    );
}
