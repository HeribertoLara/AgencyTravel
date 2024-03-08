import "./TitleSection.scss"

export function TitleSection({title, titleBit}) {


    return (
        <article className='title-section'>
            <h3 className="title-section__bit">
                {titleBit}
            </h3>
            <h2 className="title-section__big">
                {title}
            </h2>
        </article>
    )
}
