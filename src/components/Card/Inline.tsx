type InlineCardProps = {
    title: string;
}

const InlineCard = ({title}: InlineCardProps) => {
    return (
        <div>{title}</div>
    )
}

export default InlineCard;