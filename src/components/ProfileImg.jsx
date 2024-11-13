export default function ProfileImg({ size = 100, profileImage, imageAlt = "profile picture" }) {
    // Imposta l'immagine di default se profileImage non è fornito o è vuota
    const imageToShow = profileImage && profileImage.trim() !== "" ? profileImage : "./media/defaultprofile.png";

    return (
        <img className="rounded-full" width={size} height={size} src={imageToShow} alt={imageAlt} />
    );
}