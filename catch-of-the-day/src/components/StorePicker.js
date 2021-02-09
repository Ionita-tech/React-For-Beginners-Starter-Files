import React from "react";

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="StoreName"/>
                <button type="submit">Visit Store &#8594;</button>
            </form>
        )
    }
}

export default StorePicker;