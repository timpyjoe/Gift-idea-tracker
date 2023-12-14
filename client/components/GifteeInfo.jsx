import { Button } from 'react-bootstrap'

export default function GifteeInfo({ currentGifteeInfo }) {



  return (


    <section className="about-giftee about-likes-container">
      <h2 >About and Likes</h2>
      <ul style={{ textAlign: "left", listStyle: "none" }} >
        <li>Name: {currentGifteeInfo.name}</li>
        <li>Birthday: {currentGifteeInfo.birthday}</li>
        <li>Relationship: {currentGifteeInfo.relationship}</li>
        <li>Favorites:</li>
        <ul style={{ listStyle: "none" }}>
          <li>Colors: {currentGifteeInfo.favorites.colors}</li>
          {/* Music: {currentGifteeInfo.favorites.music} */}
          <li>Flowers: {currentGifteeInfo.favorites.flowers}</li>
          {/* Clothes: {currentGifteeInfo.favorites.clothes} */}
          {/* Food and Snacks: {currentGifteeInfo.favoritesfoodSnacks} */}
          <li>Candy: {currentGifteeInfo.favorites.candy}</li>
          {/* Coffee or Tea: {currentGifteeInfo.favorites.coffeetea} */}
          {/* Stores: {currentGifteeInfo.favorites.stores} */}
          {/* Beverages: {currentGifteeInfo.favorites.beverages} */}
          {/* Movies: {currentGifteeInfo.favorites.movies} */}
          {/* Shows: {currentGifteeInfo.favorites.shows} */}
          {/* Scents: {currentGifteeInfo.favorites.scents} */}
          {/* Accessories: {currentGifteeInfo.favorites.accessories} */}
          {/* Dessert: {currentGifteeInfo.favorites.dessert} */}
          <li>Sports: {currentGifteeInfo.favorites.sports}</li>
        </ul>
        <li>Sizes:</li>
        <ul style={{ listStyle: "none" }}>
          <li>Shirt or Top: {currentGifteeInfo.sizes.shirttop}</li>
          {/* Pants or Bottom: {currentGifteeInfo.sizes.pantsbottom} */}
          {/* Dress: {currentGifteeInfo.sizes.dress} */}
          <li>Shoe: {currentGifteeInfo.sizes.shoe}</li>
          {/* Ring: {currentGifteeInfo.sizes.ring} */}
        </ul>

        <li>Hobbies: {currentGifteeInfo.hobbies}</li>
        <li>Collections: {currentGifteeInfo.collections}</li>
        <li>Don't Need: {currentGifteeInfo.dontneed}</li>
        <li>Extra Ideas: {currentGifteeInfo.blank}</li>
      </ul>
        <Button onClick={() => {window.location.href = `/giftee/${currentGifteeInfo._id}/edit`}}>Edit Giftee</Button>
      </section>

  )
}