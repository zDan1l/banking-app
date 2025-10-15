'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({
    amount
}: {
    amount: number;
}) => {
    return (
        <CountUp 
            start={0}
            end={amount} 
            duration={2.5}
            decimals={2} 
            decimal="." 
            prefix="$" 
        />
    )
}

export default AnimatedCounter ;