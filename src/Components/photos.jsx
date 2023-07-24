/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { photosSlice } from "../Redux/Storage"


export default function photos() {
    const PhotosData = useSelector((state) => {
        return state.photos
    })
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(res => {
                dispatch(photosSlice.actions.setPhotos(res))
            })
    },[])
    // const data2 = JSON.stringify(PhotosData, null, 2)
return (
    <div>
        <h1>Photos</h1>
        <div>
            {PhotosData.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.thumbnailUrl} alt={item.title} />
                    </div>
                )
            })}
        </div>

    </div>
)
}
