import React from 'react';
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <div>
            <CountUp end={100} duration={100} />
        </div>
    );
};

export default Counter;


{/* <>
    <CountUp end={100} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>
  </>
 */}