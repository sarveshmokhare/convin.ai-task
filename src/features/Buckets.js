import { createSlice } from "@reduxjs/toolkit";

import { buckets } from "../dummyData";

export const bucketsSlice = createSlice({
    name: 'buckets',
    initialState: { value: buckets },
    reducers: {
        addBucket: (state, action) => {
            // push new bucket to the bucket state array
            state.value.push(action.payload);
        },

        deleteBucket: (state, action) => {
            // delete a bucket from bucket state array
            state.value = state.value.filter(bucket => bucket.id !== action.payload.id)
        },

        updateBucketName: (state, action) => {
            // updating a bucket from bucket state array
            state.value.forEach(bucket => {
                if(bucket.id === action.payload.id){
                    bucket.name = action.payload.name
                    return;
                }
            })
        },


        addCard: (state, action) => {
            // adding a new card to the corresponding bucket 
            state.value.forEach(bucket => {
                if(bucket.id === action.payload.bucketId){
                    bucket.cards.push(action.payload.newCard)
                }
            })
        },

        deleteCard: (state, action) =>{
            // deleting a card for the given bucket 
            state.value.forEach(bucket => {
                if(bucket.id === action.payload.bucketId){
                    bucket.cards = bucket.cards.filter(card => card.id !== action.payload.cardId)
                    return;
                }
            })
        },

        updateCard: (state, action) =>{
            // updating a card with given bucket id
            state.value.forEach(bucket =>{
                if(bucket.id === action.payload.bucketId){
                    bucket.cards.forEach(card =>{
                        if(card.id === action.payload.cardId){
                            card.name = action.payload.newCardName;
                            card.link = action.payload.newUrl;
                            return;
                        }
                    })
                }
            })
        }
    },
})

export const { addBucket, deleteBucket, updateBucketName, addCard, deleteCard, updateCard } = bucketsSlice.actions;
export default bucketsSlice.reducer;