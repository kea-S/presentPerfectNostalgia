interface ImageBoxProps {
    image: string
}

function ImageBox({ image }: ImageBoxProps) {

    return (
        <div className="flex justify-center box-content w-72 sm:w-128 md:w-150 sm:h-60">
            <img src={image} className="items-center p-6"/>
        </div>
    )
}

export default ImageBox
