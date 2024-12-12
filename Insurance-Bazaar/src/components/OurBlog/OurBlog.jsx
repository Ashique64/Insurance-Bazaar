import React from "react";
import "./OurBlog.scss";

const OurBlog = () => {
    const blogItems = [
        {
            img: "/images/blog/blog-1.jpg",
            title: "Strategy for Norway’s Peion to Fund Global.of the best town.",
            tag: "Business",
            para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum The man",
        },
        {
            img: "/images/blog/blog-2.jpg",
            title: "Long established fact that a reader than trust a insurance company.",
            tag: "insurance",
            para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum The man",
        },
    ];
    return (
        <div className="our-blog">
            <div className="container">
                <div className="row title_row">
                    <div className="col-md-12 title_col">
                        <div className="title_section">
                            <div className="title_content">
                                <h4 className="subtitle">our blog & article</h4>
                                <h3 className="title">
                                    We are very happy
                                    <span>
                                        <br />
                                        to share news
                                    </span>
                                </h3>
                            </div>
                            <div className="title_button">
                                <button>see more blogs</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row blog_content_row">
                    {blogItems.map((item, index) => (
                        <div key={index} className="col-xl-6 col-lg-6 col-md-12 blog_content">
                            <div className="blog_content_section">
                                <div className="blog_img">
                                    <a href="">
                                        <img src={item.img} alt="" />
                                    </a>
                                </div>
                                <div className="blog_tag">
                                    <a href="">{item.tag}</a>
                                </div>
                                <div className="blog_item_content">
                                    <h3 className="blog_item_content_title">
                                        <a href="">{item.title}</a>
                                    </h3>
                                    <p>
                                        {item.para}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBlog;
