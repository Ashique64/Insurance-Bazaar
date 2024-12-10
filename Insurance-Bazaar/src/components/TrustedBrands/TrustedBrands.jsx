import React from "react";
import "./TrustedBrands.scss";

const TrustedBrands = () => {
    const brandImages = [
        { src: "/images/brand/brand-1.png", alt: "Brand 1" },
        { src: "/images/brand/brand-2.png", alt: "Brand 2" },
        { src: "/images/brand/brand-6.png", alt: "Brand 3" },
        { src: "/images/brand/brand-4.png", alt: "Brand 4" },
        { src: "/images/brand/brand-5.png", alt: "Brand 5" },
    ];

    return (
        <div className="trusted-brands">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 title">
                        <div className="trusted_title">
                            <h3>Trusted by some popular Brand</h3>
                        </div>
                    </div>
                </div>

                <div className="row brand-wrapper">
                    {brandImages.map((brand, index) => (
                        <div key={index} className="col-xl-2 col-lg-4 col-md-6 col-sm-6 brand_col">
                            <div className="brand">
                                <img src={brand.src} alt={brand.alt} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBrands;
