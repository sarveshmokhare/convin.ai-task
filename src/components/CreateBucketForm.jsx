import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBucket } from '../features/Buckets'
import { Button, Input, Typography, Space } from 'antd'

function CreateBucketForm() {
  const dispatch = useDispatch()

  const bucketsList = useSelector((state) => state.buckets.value)

  const [bucketName, setBucketName] = useState('')

  const { Title } = Typography;

  function handleAddBucket() {

    dispatch(addBucket({
      id: bucketsList.length ? bucketsList[bucketsList.length - 1].id + 1 : 1,
      name: bucketName,
      cards: []
    }))

    setBucketName('')
  }

  return (
    <div style={{backgroundColor: '#F7F1E5', padding: '2px 10px 20px', borderRadius: 12}}>
      <Title level={3}>Create New Bucket</Title>
      <Space>
        <Input
          placeholder='Bucket Name'
          onChange={(e) => { setBucketName(e.target.value) }}
          value={bucketName}
        />
        <Button type="primary" onClick={handleAddBucket} >Submit</Button>
        <Button type="primary" danger onClick={() => setBucketName('')} >Cancel</Button>
      </Space>
    </div>
  )
}

export default CreateBucketForm