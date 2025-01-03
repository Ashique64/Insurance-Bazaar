import React, { createContext, useContext, useState } from "react";

// Create the context
const SliderContext = createContext();

// Create a custom hook to use the context
export const useSliderContext = () => {
    return useContext(SliderContext);
};

// Create the SliderProvider component
export const SliderProvider = ({ children }) => {
    const [images, setImages] = useState([]);

    const updateImages = (newImages) => {
        setImages(newImages); // Update images state in context
    };

    return (
        <SliderContext.Provider value={{ images, updateImages }}>
            {children}
        </SliderContext.Provider>
    );
};
