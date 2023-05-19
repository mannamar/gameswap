import { X, ArrowRight } from "@phosphor-icons/react";
import { deleteTradeItem, deleteWishItem, getTradeItems, getWishListItems } from "../Services/DataServices";
import './WishItem.css';
import { useNavigate } from "react-router-dom";

interface WishListItemProps {
    gameTitle: string;
    releaseYear: number;
    platform: string;
    imageUrl: string;
    id: number;
    setTradelist: any;
    wishId: number;
    allPlatforms : string;
    bannerUrl: string;
}

export default function TradeItem({ gameTitle, releaseYear, platform, imageUrl, id, setTradelist, wishId, allPlatforms, bannerUrl }: WishListItemProps) {

    async function handleDelete () {
        await deleteTradeItem(id);
        let tradeList = await getTradeItems(wishId);
        console.log(tradeList);
        setTradelist(tradeList);
    }

    return (
        <div className="itemBox">
            <div className="imgContainer">
                <img className="gameImg" alt="Game cover" src={imageUrl} />
                <div className="overlay">
                    <X className="imgX" size={36} color="#fff0f0" onClick={handleDelete}/>
                    {/* <span className="overlayText">See Details</span> */}
                </div>
            </div>
            <h5>{gameTitle}</h5>
            <span>Released: <span className="lightPurp">{releaseYear}</span></span>
            <br/>
            <span>Platform: <span className="lightPurp">{platform}</span></span>
        </div>
    )
}