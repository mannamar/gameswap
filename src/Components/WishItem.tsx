import { X, ArrowRight } from "@phosphor-icons/react";
import { deleteWishItem, getWishListItems } from "../Services/DataServices";
import './WishItem.css';
import { useNavigate } from "react-router-dom";

interface WishListItemProps {
    gameTitle: string;
    releaseYear: number;
    platform: string;
    imageUrl: string;
    id: number;
    setWishlist: any;
    userID: number;
    allPlatforms : string;
    bannerUrl: string;
}

export default function WishItem({ gameTitle, releaseYear, platform, imageUrl, id, setWishlist, userID, allPlatforms, bannerUrl }: WishListItemProps) {

    async function handleDelete () {
        await deleteWishItem(id);
        let wishlist = await getWishListItems(userID);
        setWishlist(wishlist);
    }

    const navigate = useNavigate();

    async function handleClick(event : any) {
        if (event.target === event.currentTarget) {
            navigate("/AddGame", {
                state: {
                    gameTitle: gameTitle,
                    releaseYear: releaseYear,
                    coverUrl: imageUrl,
                    platform: platform,
                    allPlatforms: allPlatforms,
                    wishId: id,
                    bannerUrl: bannerUrl
                }
            });
        }
    }

    return (
        <div className="itemBox">
            <div className="imgContainer">
                <img className="gameImg" alt="Game cover" src={imageUrl} />
                <div className="overlay" onClick={handleClick}>
                    <X className="imgX" size={36} color="#fff0f0" onClick={handleDelete}/>
                    <span className="overlayText" onClick={handleClick}>See Details</span>
                </div>
            </div>
            <h5>{gameTitle}</h5>
            <span>Released: <span className="lightPurp">{releaseYear}</span></span>
            <br/>
            <span>Platform: <span className="lightPurp">{platform}</span></span>
        </div>
    )
}