import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../features/Buckets'
import { Button, Input, Typography, Space } from 'antd'

function CreateCardFrom({ bucket }) {

  const dispatch = useDispatch()

  const [cardName, setCardName] = useState('')
  const [url, setUrl] = useState('')

  const { Title } = Typography;
  function handleAddCard() {
    dispatch(addCard({
      bucketId: bucket.id,
      newCard: {
        id: bucket.cards.length ? bucket.cards[bucket.cards.length - 1].id + 1 : 1,
        name: cardName,
        link: url
      }
    }))

    setCardName('');
    setUrl('');
  }

  function handleCancel() {
    setCardName('');
    setUrl('');
  }

  return (
    <div style={{backgroundColor: '#F7F1E5', padding: '2px 10px 20px', marginTop: 14, borderRadius: 12}}>
      <Title level={3}>{'Create New Card in ' + bucket.name + ' Bucket'}</Title>
      <Space>
        <Input placeholder='Card Name' value={cardName} onChange={(e) => { setCardName(e.target.value) }} />
        <Input placeholder='URL' value={url} onChange={(e) => { setUrl(e.target.value) }} />

        <Button type="primary" onClick={handleAddCard}>Submit</Button>
        <Button type="primary" onClick={handleCancel} danger>Cancel</Button>

      </Space>
    </div>
  )
}

export default CreateCardFrom