import React, { useEffect, useState } from 'react'

const AboutUs = () => {
    const [aboutUsData, setAboutUs] = useState({
        title: 'About Us!',
        content: ['Welcome! My name is Kiara and Im a senior @ NYU majoring in CS and minoring in Web Development and Applications!'],
        imageURL: './front-end/src/kiara.png',
    })

    useEffect(() => {
        fetch('/about-us')
            .then(res => res.json())
            .then(data => {
                setAboutUs(data)
            })
            .catch(error => console.error('Error fetching Abt Us data:', error))
    }, [])

    return (
        <div>
            <h1>{aboutUsData.title}</h1>
            {aboutUsData.content.map((paragraph, index) => (
                <p key={index}> {paragraph}</p>
            ))}
            <img src={aboutUsData.imageURL}
                alt="Abt Us"
                style={{ maxWidth: '100%' }}
            />

        </div>
    )
}

export default AboutUs 