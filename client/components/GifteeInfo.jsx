import { Button } from 'react-bootstrap'
import moment from 'moment'
import DeleteButton from './DeleteModal'
import '../App.css'
export default function GifteeInfo({ currentGifteeInfo }) {
  const formattedDate = moment(currentGifteeInfo.birthday).format('MM/DD/YYYY')


  return (


    <section className="about-giftee about-likes-container">
      <div className='list-info-container'>
        <h2 >{currentGifteeInfo.name} About and Likes</h2>
        <ul style={{ textAlign: "left", listStyle: "none" }} >
          {/* <li>Name: {currentGifteeInfo.name}</li> */}
          <li>Birthday: {formattedDate}</li>
          <li>Relationship: {currentGifteeInfo.relationship}</li>
          <li>Favorites:</li>
          <ul style={{ listStyle: "none" }}>
            <li>Colors: {currentGifteeInfo.favorites.colors}</li>
            <li>Music: {currentGifteeInfo.favorites.music}</li>
            <li>Flowers: {currentGifteeInfo.favorites.flowers}</li>
            <li>Clothes: {currentGifteeInfo.favorites.clothes}</li>
            <li>Food/Snacks: {currentGifteeInfo.favoritesfoodSnacks}</li>
            <li>Candy: {currentGifteeInfo.favorites.candy}</li>
            <li>Coffee/Tea: {currentGifteeInfo.favorites.coffeetea}</li>
            <li>Stores: {currentGifteeInfo.favorites.stores}</li>
            <li>Beverages: {currentGifteeInfo.favorites.beverages}</li>
            <li>Movies: {currentGifteeInfo.favorites.movies}</li>
            <li>Shows: {currentGifteeInfo.favorites.shows}</li>
            <li>Scents: {currentGifteeInfo.favorites.scents}</li>
            <li>Accessories: {currentGifteeInfo.favorites.accessories}</li>
            <li>Dessert: {currentGifteeInfo.favorites.dessert}</li>
            <li>Sports: {currentGifteeInfo.favorites.sports}</li>
          </ul>
          <li>Sizes:</li>
          <ul style={{ listStyle: "none" }}>
            <li>Shirt/Top: {currentGifteeInfo.sizes.shirttop}</li>
            <li>Pants/Bottom: {currentGifteeInfo.sizes.pantsbottom}</li>
            <li>Dress: {currentGifteeInfo.sizes.dress}</li>
            <li>Shoe: {currentGifteeInfo.sizes.shoe}</li>
            <li>Ring: {currentGifteeInfo.sizes.ring}</li>
          </ul>

          <li>Hobbies: {currentGifteeInfo.hobbies}</li>
          <li>Collections: {currentGifteeInfo.collections}</li>
          <li>Don't Need: {currentGifteeInfo.dontneed}</li>
          <li>Extra Ideas: {currentGifteeInfo.blank}</li>
        </ul>
        <Button className="edit-giftee-btn" onClick={() => { window.location.href = `/giftee/${currentGifteeInfo._id}/edit` }}>Edit Giftee</Button>

        <li>Hobbies: {currentGifteeInfo.hobbies}</li>
        <li>Collections: {currentGifteeInfo.collections}</li>
        <li>Don't Need: {currentGifteeInfo.dontneed}</li>
        <li>Extra Ideas: {currentGifteeInfo.blank}</li>
      </ul>

//         <Button onClick={() => {window.location.href = `/giftee/${currentGifteeInfo._id}/edit`}}>Edit Giftee</Button>

        <DeleteButton gifteeId={currentGifteeInfo._id} />
      </div>
    </section>


  )
}