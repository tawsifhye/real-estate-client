import React from 'react';
import './OurAgent.css'
const OurAgent = () => {
    const agents = [
        {
            "name": "Mike Bochs",
            "image": "https://i.ibb.co/HGYpX96/person4.jpg"
        },
        {
            "name": "Tony Stark",
            "image": "https://i.ibb.co/G5cTng1/person1.jpg"
        },
        {
            "name": "Jhon Doe",
            "image": "https://i.ibb.co/fxdVhpd/person2.jpg"
        },
        {
            "name": "Edward Snowden",
            "image": "https://i.ibb.co/9WfMPcf/person3.jpg"
        }

    ]
    return (
        <>
            <div className="container text-center py-5">
                <h1>Meet Our Agents</h1>
                <div className="mt-5">
                    <div className="row ">
                        {agents.map(agent => (
                            <div className="card agent-card mx-auto my-2" style={{ width: "16rem", padding: "0" }}>
                                <img src={agent.image} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white">{agent.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    );
};

export default OurAgent;