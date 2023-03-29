import React from 'react'
import InnerCard from './InnerCard'
import { Row } from 'antd';

function DisplayCardsBox({ bucket }) {
    return (
        <Row style={{backgroundColor: '#F7F1E5', borderRadius: 12}}>
            {bucket.cards.map((card) => {
                return <InnerCard
                    key={card.id}
                    name={card.name}
                    url={card.link}
                    bucketId={bucket.id}
                    cardId={card.id}
                />
            })}
        </Row>
    )
}


export default DisplayCardsBox