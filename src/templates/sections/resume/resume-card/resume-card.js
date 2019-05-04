import React from "react"
import Card from "components/card/card";
import './resume-card.scss';

const ResumeCard = ({id, data}) => (
    <Card className={id}>
        <h2>{data.company}</h2>
        <h3>{data.position}</h3>
        <p>
            {data.summary}
        </p>
    </Card>
)

export default ResumeCard
