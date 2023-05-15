import { X, ArrowRight } from "@phosphor-icons/react";
import { deleteWishItem, getWishListItems } from "../Services/DataServices";
import './WishItem.css';

interface WishListItemProps {
    gameTitle: string;
    releaseYear: number;
    platform: string;
    imageUrl: string;
    id: number;
    setWishlist: any;
}

export default function WishItem({ gameTitle, releaseYear, platform, imageUrl, id, setWishlist }: WishListItemProps) {

    async function handleDelete () {
        await deleteWishItem(id);
        let wishlist = await getWishListItems(1);
        setWishlist(wishlist);
    }

    return (
        <div className="itemBox">
            <div className="imgContainer">
                <img className="gameImg" alt="Game cover" src={imageUrl} />
                <div className="overlay">
                    <X className="imgX" size={36} color="#fff0f0" onClick={handleDelete}/>
                    <span className="overlayText"><ArrowRight className="imgArrow" size={36} color="#fff0f0" />See Details</span>
                </div>
            </div>
            <h5>{gameTitle}</h5>
            <p>Released: <span>{releaseYear}</span></p>
            <p>Platform: <span>{platform}</span></p>
        </div>
    )
}