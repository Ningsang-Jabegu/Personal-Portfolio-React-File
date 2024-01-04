// import { useState } from "react"
import { testimonials_Data } from "../data/Testimonial_Data"
// import About_Body from "../About_Body"

export default function Testimonial_Process({openModel, setOpenModel, modelData, setModelData}) {
    const handleTestimonialClick = (testimonial_data) => {
        setOpenModel(true)
        setModelData({
            modelData,
            imgSrc: `${testimonial_data["imgSrc"]}`,
            imgAlt: `${testimonial_data["imgAlt"]}`,
            nameClient: `${testimonial_data["nameClient"]}`,
            briefText: `${testimonial_data["briefText"]}`
        })

    }
    const testimonial_lists = testimonials_Data.map((testimonial, index) => {
        return (
            <li class="testimonials-item" key={index}>
                <div class="content-card" data-testimonials-item onClick={() => { handleTestimonialClick(testimonial) }}>

                    <figure class="testimonials-avatar-box">
                        <img src={testimonial["imgSrc"]} alt={testimonial["imgAlt"]} width="60" height="80"
                            data-testimonials-avatar />
                    </figure>

                    <h4 class="h4 testimonials-item-title" data-testimonials-title>{testimonial["nameClient"]}</h4>

                    <div class="testimonials-text" data-testimonials-text>
                        <p dangerouslySetInnerHTML={{ __html: testimonial["briefText"] }} />
                    </div>

                    {/* <div class="testimonials-url" data-testimonials-url>
                    Url :
                    <a href={testimonial["url"]} target="_blank">
                        {testimonial["url"]}
                    </a>
                </div> */}

                </div>
            </li>
        )
    })
    return(testimonial_lists)
}