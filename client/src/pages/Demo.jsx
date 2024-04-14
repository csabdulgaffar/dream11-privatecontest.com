import { useState, useEffect } from "react";

function Demo() {
    const [platform, setPlatform] = useState();

    const handleChange = (e) => {
        setPlatform(e.target.value);

    };
    useEffect(() => {
        console.log(platform);
    }, [platform]);

    return (
        <div>
            <form action="">
                <select name="platform" id="" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="dream11">Dream11</option>
                    <option value="my11circle">My11Circle</option>
                </select>
            </form>
        </div>
    );
}

export default Demo;